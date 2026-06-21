<?php

declare(strict_types=1);

$thankYouPath = '/contact-us/thank-you';
$errorPath = '/contact-us?status=error';

function load_env_file(string $path): array
{
    if (!is_file($path) || !is_readable($path)) {
        return [];
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (!is_array($lines)) {
        return [];
    }

    $values = [];

    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '' || str_starts_with($trimmed, '#')) {
            continue;
        }

        $separatorPosition = strpos($trimmed, '=');
        if ($separatorPosition === false) {
            continue;
        }

        $key = trim(substr($trimmed, 0, $separatorPosition));
        $value = trim(substr($trimmed, $separatorPosition + 1));

        if ($key === '') {
            continue;
        }

        $valueLength = strlen($value);
        if ($valueLength >= 2) {
            $startsWithQuote = $value[0] === '"' || $value[0] === "'";
            $endsWithQuote = $value[$valueLength - 1] === '"' || $value[$valueLength - 1] === "'";
            if ($startsWithQuote && $endsWithQuote) {
                $value = substr($value, 1, -1);
            }
        }

        $values[$key] = $value;
    }

    return $values;
}

function loaded_env(): array
{
    static $envCache = null;

    if (is_array($envCache)) {
        return $envCache;
    }

    $candidatePaths = [
        dirname(__DIR__) . DIRECTORY_SEPARATOR . '.env',
        dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . '.env',
    ];

    foreach ($candidatePaths as $path) {
        $values = load_env_file($path);
        if ($values !== []) {
            $envCache = $values;
            return $envCache;
        }
    }

    $envCache = [];
    return $envCache;
}

function contact_env(string $key): string
{
    $value = getenv($key);
    if (is_string($value) && $value !== '') {
        return trim($value);
    }

    if (isset($_ENV[$key]) && is_string($_ENV[$key]) && $_ENV[$key] !== '') {
        return trim($_ENV[$key]);
    }

    if (isset($_SERVER[$key]) && is_string($_SERVER[$key]) && $_SERVER[$key] !== '') {
        return trim($_SERVER[$key]);
    }

    $loadedEnv = loaded_env();
    if (isset($loadedEnv[$key]) && is_string($loadedEnv[$key]) && $loadedEnv[$key] !== '') {
        return trim($loadedEnv[$key]);
    }

    return '';
}

function redirect_to(string $path, int $statusCode = 303): void
{
    header('Location: ' . $path, true, $statusCode);
    exit;
}

function respond_json(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function request_wants_json(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $requestedWith = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';

    return str_contains($accept, 'application/json') || strtolower($requestedWith) === 'xmlhttprequest';
}

function request_data(): array
{
    if (!empty($_POST)) {
        return $_POST;
    }

    $rawBody = file_get_contents('php://input');
    if (!is_string($rawBody) || trim($rawBody) === '') {
        return [];
    }

    $decoded = json_decode($rawBody, true);
    return is_array($decoded) ? $decoded : [];
}

function string_field(array $data, string $key, int $limit = 4000): string
{
    $value = $data[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    $trimmed = trim(str_replace(["\r\n", "\r"], "\n", $value));
    return mb_substr($trimmed, 0, $limit);
}

function build_html_body(array $fields): string
{
    $rows = '';

    foreach ($fields as $label => $value) {
        $safeLabel = htmlspecialchars($label, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        $safeValue = $value === ''
            ? 'Not provided'
            : nl2br(htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

        $rows .= '<tr>'
            . '<td style="padding:10px 12px;border:1px solid #dbe7f3;font-weight:700;background:#f5fbff;width:220px;">' . $safeLabel . '</td>'
            . '<td style="padding:10px 12px;border:1px solid #dbe7f3;">' . $safeValue . '</td>'
            . '</tr>';
    }

    return '<div style="font-family:Arial,sans-serif;color:#16324f;">'
        . '<h2 style="margin:0 0 16px;">New ThemeStudios contact request</h2>'
        . '<p style="margin:0 0 18px;">A new enquiry was submitted from the ThemeStudios contact page.</p>'
        . '<table style="border-collapse:collapse;width:100%;max-width:720px;">' . $rows . '</table>'
        . '</div>';
}

function build_text_body(array $fields): string
{
    $lines = ['New ThemeStudios contact request', ''];

    foreach ($fields as $label => $value) {
        $lines[] = $label . ': ' . ($value === '' ? 'Not provided' : $value);
    }

    return implode("\n", $lines);
}

function mailjet_post(array $payload, string $apiKey, string $apiSecret): array
{
    $url = 'https://api.mailjet.com/v3.1/send';
    $body = json_encode($payload, JSON_UNESCAPED_SLASHES);

    if ($body === false) {
        return [false, 500, 'Unable to encode request payload.'];
    }

    $headers = [
        'Authorization: Basic ' . base64_encode($apiKey . ':' . $apiSecret),
        'Content-Type: application/json',
        'Accept: application/json',
    ];

    if (function_exists('curl_init')) {
        $handle = curl_init($url);

        curl_setopt_array($handle, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 20,
        ]);

        $responseBody = curl_exec($handle);
        $statusCode = (int) curl_getinfo($handle, CURLINFO_HTTP_CODE);
        $curlError = curl_error($handle);
        curl_close($handle);

        if ($responseBody === false) {
            return [false, 500, $curlError !== '' ? $curlError : 'Mail request failed.'];
        }

        return [$statusCode >= 200 && $statusCode < 300, $statusCode, (string) $responseBody];
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => implode("\r\n", $headers),
            'content' => $body,
            'ignore_errors' => true,
            'timeout' => 20,
        ],
    ]);

    $responseBody = @file_get_contents($url, false, $context);
    $statusCode = 0;

    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $matches) === 1) {
        $statusCode = (int) $matches[1];
    }

    return [$statusCode >= 200 && $statusCode < 300, $statusCode, is_string($responseBody) ? $responseBody : ''];
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    if (request_wants_json()) {
        respond_json(['ok' => false, 'message' => 'Method not allowed.'], 405);
    }

    redirect_to('/contact-us', 302);
}

$data = request_data();

if (string_field($data, 'company-name', 255) !== '') {
    if (request_wants_json()) {
        respond_json(['ok' => true, 'redirect' => $thankYouPath]);
    }

    redirect_to($thankYouPath);
}

$contactName = string_field($data, 'contactName', 120);
$businessName = string_field($data, 'businessName', 160);
$mobileNumber = string_field($data, 'mobileNumber', 40);
$email = string_field($data, 'email', 190);
$selectedPackage = string_field($data, 'selectedPackage', 120);
$projectMessage = string_field($data, 'projectMessage', 4000);
$requestSource = string_field($data, 'requestSource', 120);

if ($mobileNumber === '' || preg_match('/^[0-9+\-\s]{10,}$/', $mobileNumber) !== 1) {
    if (request_wants_json()) {
        respond_json(['ok' => false, 'message' => 'A valid mobile number is required.'], 422);
    }

    redirect_to($errorPath);
}

if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    if (request_wants_json()) {
        respond_json(['ok' => false, 'message' => 'The email address is not valid.'], 422);
    }

    redirect_to($errorPath);
}

$mailjetApiKey = contact_env('MAILJET_API_KEY');
$mailjetApiSecret = contact_env('MAILJET_API_SECRET');
$mailFromEmail = contact_env('MAILJET_FROM_EMAIL');
$mailFromName = contact_env('MAILJET_FROM_NAME');
$contactToEmail = contact_env('CONTACT_TO_EMAIL');
$contactToName = contact_env('CONTACT_TO_NAME');

if ($mailjetApiKey === '' || $mailjetApiSecret === '') {
    error_log('ThemeStudios contact form is missing Mailjet API credentials.');

    if (request_wants_json()) {
        respond_json(['ok' => false, 'message' => 'Mail service is not configured yet.'], 500);
    }

    redirect_to($errorPath);
}

if ($mailFromEmail === '') {
    $mailFromEmail = 'support@themestudios.in';
}

if ($mailFromName === '') {
    $mailFromName = 'ThemeStudios Website';
}

if ($contactToEmail === '') {
    $contactToEmail = 'support@themestudios.in';
}

if ($contactToName === '') {
    $contactToName = 'ThemeStudios Support';
}

$subject = $selectedPackage !== ''
    ? 'New ThemeStudios package enquiry: ' . $selectedPackage
    : 'New ThemeStudios contact request';

$fields = [
    'Contact name' => $contactName,
    'Business name' => $businessName,
    'Mobile number' => $mobileNumber,
    'Email address' => $email,
    'Selected package' => $selectedPackage,
    'Project message' => $projectMessage,
    'Request source' => $requestSource,
    'Submitted at (UTC)' => gmdate('Y-m-d H:i:s'),
];

$message = [
    'From' => [
        'Email' => $mailFromEmail,
        'Name' => $mailFromName,
    ],
    'To' => [[
        'Email' => $contactToEmail,
        'Name' => $contactToName,
    ]],
    'Subject' => $subject,
    'TextPart' => build_text_body($fields),
    'HTMLPart' => build_html_body($fields),
    'CustomID' => 'theme-studios-contact-form',
];

if ($email !== '') {
    $message['ReplyTo'] = [
        'Email' => $email,
        'Name' => $contactName !== '' ? $contactName : ($businessName !== '' ? $businessName : 'ThemeStudios website enquiry'),
    ];
}

[$isSent, $statusCode, $responseBody] = mailjet_post(['Messages' => [$message]], $mailjetApiKey, $mailjetApiSecret);

if (!$isSent) {
    error_log('ThemeStudios Mailjet send failed. Status: ' . $statusCode . ' Response: ' . $responseBody);

    if (request_wants_json()) {
        respond_json(['ok' => false, 'message' => 'Unable to send the contact request right now.'], 500);
    }

    redirect_to($errorPath);
}

if (request_wants_json()) {
    respond_json(['ok' => true, 'redirect' => $thankYouPath]);
}

redirect_to($thankYouPath);

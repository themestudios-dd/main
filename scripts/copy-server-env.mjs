import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const distDir = path.join(projectRoot, 'dist')
const distEnvPath = path.join(distDir, '.env')
const sourceEnvPaths = ['.env', '.env.local'].map((fileName) => path.join(projectRoot, fileName))

const requiredKeys = [
  'MAILJET_API_KEY',
  'MAILJET_API_SECRET',
  'MAILJET_FROM_EMAIL',
  'MAILJET_FROM_NAME',
  'CONTACT_TO_EMAIL',
  'CONTACT_TO_NAME',
]

function parseEnvFile(contents) {
  const values = new Map()

  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim()

    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()

    if (!key) {
      continue
    }

    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1)
    }

    values.set(key, value)
  }

  return values
}

async function loadFileEnv() {
  for (const envPath of sourceEnvPaths) {
    try {
      const contents = await readFile(envPath, 'utf8')
      return parseEnvFile(contents)
    } catch (error) {
      if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
        continue
      }

      const message = error instanceof Error ? error.message : String(error)
      throw new Error(`Unable to read ${path.basename(envPath)} for Mailjet packaging: ${message}`)
    }
  }

  return new Map()
}

function resolveEnvValue(key, fileValues) {
  const runtimeValue = process.env[key]
  if (typeof runtimeValue === 'string' && runtimeValue.trim().length > 0) {
    return runtimeValue.trim()
  }

  const fileValue = fileValues.get(key)
  if (typeof fileValue === 'string' && fileValue.trim().length > 0) {
    return fileValue.trim()
  }

  return ''
}

async function run() {
  const fileValues = await loadFileEnv()
  const resolvedEntries = requiredKeys.map((key) => [key, resolveEnvValue(key, fileValues)])
  const configuredEntries = resolvedEntries.filter(([, value]) => value.length > 0)

  if (configuredEntries.length === 0) {
    console.warn(
      'No Mailjet server config found in process.env, .env, or .env.local. Skipping dist/.env packaging.'
    )
    return
  }

  const missingKeys = resolvedEntries
    .filter(([, value]) => value.length === 0)
    .map(([key]) => key)

  if (missingKeys.length > 0) {
    throw new Error(
      `Incomplete Mailjet config for packaging. Missing: ${missingKeys.join(', ')}`
    )
  }

  const distEnvContents = [
    '# Generated during build for the PHP contact endpoint.',
    '# Keep this file server-side only. It is protected by .htaccess rules in Apache environments.',
    ...resolvedEntries.map(([key, value]) => `${key}=${value}`),
    '',
  ].join('\n')

  await mkdir(distDir, { recursive: true })
  await writeFile(distEnvPath, distEnvContents, 'utf8')

  console.log(`Copied Mailjet server config into ${path.relative(projectRoot, distEnvPath)}`)
}

run().catch((error) => {
  const message = error instanceof Error ? error.message : String(error)
  console.error(message)
  process.exitCode = 1
})

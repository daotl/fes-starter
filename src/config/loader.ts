// Modified from: https://blog.container-solutions.com/deploying-configurable-frontend-web-application-containers

/*
 * Get config value  with precedence:
 * - check `process.env`
 * - check current web page meta tags
 * @param {string} key Configuration key name
 */
function getConfigValue(key: string) {
  // get value from meta tag
  const value = getMetaValue(key)
  if (!value && process.env && process.env[`${key}`] !== undefined) {
    // get env var value
    return process.env[`${key}`]
  }
  return value
}

/**
 * Get value from HTML meta tag
 */
function getMetaValue(key: string) {
  let value = null
  const node = document.querySelector(`meta[name=${key}]`) as HTMLMetaElement
  if (node !== null) {
    value = node.content
  }
  return value
}

export default { getConfigValue, getMetaValue }

const EXTERNAL_URL_RE = /^http?s?:/i

export function joinPath(base: string, path: string) {
  return `${base}${path}`.replace(/\/+/g, '/')
}

export function withBase(path: string) {
  return EXTERNAL_URL_RE.test(path)
    ? path
    : joinPath(import.meta.env.BASE_URL, path)
}

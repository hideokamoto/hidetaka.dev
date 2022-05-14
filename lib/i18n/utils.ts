export const isJapanese = (locale?: string) => {
  if (!locale) return false
  return /^ja/.test(locale)
}

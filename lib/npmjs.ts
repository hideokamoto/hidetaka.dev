export const listMyNPMPackages = async () => {
  const { objects: packages } = await searchNPMPackages('text=author:hideokamoto')
  const { objects: wpkyotoPackages } = await searchNPMPackages('text=@wpkyoto')
  const { objects: talkyjsPackages } = await searchNPMPackages('text=@talkyjs')
  return [...packages, ...wpkyotoPackages, ...talkyjsPackages]
}
export type NPMPackageDetail = {
  name: string
  scope: string
  version: string
  description: string
  keywords: string[]
  date: string
  links: {
    npm: string
    homepage?: string
    repositoty?: string
    bugs?: string
  }
  author: {
    name?: string
    email?: string
    url?: string
    username?: string
  }
  publisher: {
    username: string
    email: string
  }
  maintainers: Array<{
    username: string
    email: string
  }>
}
export type NPMRegistrySearchResult = {
  package: NPMPackageDetail
  score: {
    final: number
    detail: {
      quantity: number
      popularity: number
      mainenance: number
    }
    searchScore: number
  }
}
export type NPMRegistrySearchResponse = {
  objects: NPMRegistrySearchResult[]
  time: string
  total: number
}

export const searchNPMPackages = async (query: string): Promise<NPMRegistrySearchResponse> => {
  try {
    const res = await fetch(`https://registry.npmjs.org/-/v1/search?${query}&size=50`)
    const result = await res.json()
    return result
  } catch (e) {
    console.log(e)
    throw e
  }
}

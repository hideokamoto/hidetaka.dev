export const listMyWordPressPlugins = async () => {
  const packages = await searchWordPressPlugins('request[author]=hideokamoto')
  return packages.plugins.filter((plugin) => {
    return plugin.author_profile === 'https://profiles.wordpress.org/hideokamoto/'
  })
}
export type WordPressPluginDetail = {
  name: string
  slug: string
  version: string
  author: string
  author_profile: string
  requires: string
  tested: string
  requires_php: string | false
  rating: number
  ratings: {
    '1': number
    '2': number
    '3': number
    '4': number
    '5': number
  }
  num_ratings: number
  support_threads: number
  support_threads_resolved: number
  active_installs: number
  downloaded: number
  last_updated: string
  added: string
  homepage: string
  short_description: string
  description: string
  download_link: string
  tags: {
    [key: string]: string
  }
  donate_link?: string
  icons: {
    '1x'?: string
    '2x'?: string
    default?: string
  }
}

export type WordPressPluginResponse = {
  info: {
    page: number
    pages: number
    results: number
  }
  plugins: WordPressPluginDetail[]
}

export const searchWordPressPlugins = async (query: string): Promise<WordPressPluginResponse> => {
  try {
    const res = await fetch(
      `https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&${query}`,
    )
    const result = await res.json()
    return result
  } catch (e) {
    console.log(e)
    throw e
  }
}

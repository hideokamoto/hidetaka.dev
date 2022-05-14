export type MicroCMSRecord = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt?: string
}
export type MicroCMSEventsRecord = MicroCMSRecord & {
  title: string
  url: string
  date: string
  place: string
  description?: string
  slide_url?: string
  blog_url?: string
  session_title?: string
}
export type MicroCMSImageObject = {
  url: string
  height: number
  width: number
}

export type MicroCMSProjectType =
  | 'books'
  | 'owned_oss'
  | 'oss_contribution'
  | 'community_activities'

export type MicroCMSProjectsRecord = MicroCMSRecord & {
  title: string
  url: string
  published_at?: string
  tags: string[]
  project_type: [MicroCMSProjectType]
  affiliate_link?: string
  image?: MicroCMSImageObject
  lang: ['Japanese' | 'English']
  is_solo: boolean
}

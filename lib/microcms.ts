import dayjs from 'dayjs'
import { createClient } from 'microcms-js-sdk'

export const microCMSClient = process.env.MICROCMS_API_KEY ? createClient({
  serviceDomain: 'hidetaka',
  apiKey: process.env.MICROCMS_API_KEY as string,
}) : undefined

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

export const listEndedEvents = async () => {
  const thisMonth = dayjs().format('YYYY-MM')
  if (!microCMSClient) return []
  const { contents: events } = await microCMSClient.get<{
    contents: MicroCMSEventsRecord[]
  }>({
    endpoint: 'events',
    queries: {
      orders: '-date',
      limit: 20,
      filters: `date[less_than]${thisMonth}`,
    },
  })
  return events
}

export const listUpcomingEvents = async () => {
  const thisMonth = dayjs().format('YYYY-MM')
  if (!microCMSClient) return []
  const { contents: events } = await microCMSClient.get<{
    contents: MicroCMSEventsRecord[]
  }>({
    endpoint: 'events',
    queries: {
      orders: '-date',
      filters: `date[greater_than]${thisMonth}`,
    },
  })
  return events
}

export const listBooks = async () => {
  if (!microCMSClient) return []
  const { contents: events } = await microCMSClient.get<{
    contents: MicroCMSProjectsRecord[]
  }>({
    endpoint: 'projects',
    queries: {
      orders: '-published_at',
      filters: `project_type[contains]books`,
    },
  })
  return events
}

export const listFeaturedBooks = async () => {
  if (!microCMSClient) return []
  return [
    await microCMSClient.get<MicroCMSProjectsRecord>({
      endpoint: 'projects',
      contentId: '48xxv5o8vt8j',
    }),
    await microCMSClient.get<MicroCMSProjectsRecord>({
      endpoint: 'projects',
      contentId: 'iutgcn7l3ad',
    }),
  ]
}

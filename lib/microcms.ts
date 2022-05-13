import dayjs from 'dayjs'
import { createClient } from 'microcms-js-sdk'

export const microCMSClient = createClient({
  serviceDomain: 'hidetaka',
  apiKey: process.env.MICROCMS_API_KEY as string,
})

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
  const { contents: events } = await microCMSClient.get<{
    contents: MicroCMSEventsRecord[]
  }>({
    endpoint: 'events',
    queries: {
      filters: `date[less_than]${thisMonth}`,
    },
  })
  return events
}

export const listUpcomingEvents = async () => {
  const thisMonth = dayjs().format('YYYY-MM')
  const { contents: events } = await microCMSClient.get<{
    contents: MicroCMSEventsRecord[]
  }>({
    endpoint: 'events',
    queries: {
      filters: `date[greater_than]${thisMonth}`,
    },
  })
  return events
}

export const listBooks = async () => {
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

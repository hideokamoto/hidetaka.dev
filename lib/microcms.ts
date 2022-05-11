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
}
export type MicroCMSEventsRecord = MicroCMSRecord & {
  title: string
  url: string
  date: string
  place: string
  description?: string
  slide_url?: string
  blog_url?: string
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

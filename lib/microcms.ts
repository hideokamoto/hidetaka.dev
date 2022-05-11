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

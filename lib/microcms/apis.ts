import dayjs from 'dayjs'
import { microCMSClient } from './clients'
import { MICROCMS_MOCK_BOOKs, MICROCMS_MOCK_EVENTs } from './mocks'
import { MicroCMSEventsRecord, MicroCMSProjectsRecord } from './types'

export const listEndedEvents = async () => {
  const thisMonth = dayjs().format('YYYY-MM')
  if (!microCMSClient) {
    if (process.env.MICROCMS_API_MODE === 'mock') {
      return MICROCMS_MOCK_EVENTs
    }
    return []
  }
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
  if (!microCMSClient) {
    if (process.env.MICROCMS_API_MODE === 'mock') {
      return MICROCMS_MOCK_EVENTs
    }
    return []
  }
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
  if (!microCMSClient) {
    if (process.env.MICROCMS_API_MODE === 'mock') {
      return MICROCMS_MOCK_BOOKs
    }
    return []
  }
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
  if (!microCMSClient) {
    if (process.env.MICROCMS_API_MODE === 'mock') {
      return MICROCMS_MOCK_BOOKs
    }
    return []
  }
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

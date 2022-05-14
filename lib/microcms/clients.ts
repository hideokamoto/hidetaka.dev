import { createClient } from 'microcms-js-sdk'

export const microCMSClient = process.env.MICROCMS_API_KEY
  ? createClient({
      serviceDomain: 'hidetaka',
      apiKey: process.env.MICROCMS_API_KEY as string,
    })
  : undefined

import dayjs from 'dayjs'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { EventHistories } from '../components/Events/EventHistory'
import { microCMSClient, MicroCMSEventsRecord } from '../lib/microcms'

const Events: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <>
      <EventHistories events={props.events} />
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  events: MicroCMSEventsRecord[]
}> = async () => {
  const thisMonth = dayjs().format('YYYY-MM')
  const { contents: events } = await microCMSClient.get<{
    contents: MicroCMSEventsRecord[]
  }>({
    endpoint: 'events',
    queries: {
      filters: `date[less_than]${thisMonth}`,
    },
  })
  return {
    props: {
      events,
    },
    revalidate: 1 * 60 * 60,
  }
}

export default Events

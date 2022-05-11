import dayjs from 'dayjs'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { EventHistories } from '../components/Events/EventHistory'
import { UpcomingEvents } from '../components/Events/UpcomingEvents'
import { listEndedEvents, listUpcomingEvents, MicroCMSEventsRecord } from '../lib/microcms'

const Events: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <>
      <UpcomingEvents events={props.upcomingEvents} />
      <EventHistories events={props.endedEvents} />
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  endedEvents: MicroCMSEventsRecord[]
  upcomingEvents: MicroCMSEventsRecord[]
}> = async () => {
  return {
    props: {
      endedEvents: await listEndedEvents(),
      upcomingEvents: await listUpcomingEvents(),
    },
    revalidate: 1 * 60 * 60,
  }
}

export default Events

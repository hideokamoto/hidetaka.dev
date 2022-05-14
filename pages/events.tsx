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
  const endedEvents = await listEndedEvents()
  const upcomingEvents = await listUpcomingEvents()
  return {
    props: {
      endedEvents: endedEvents.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }),
      upcomingEvents: upcomingEvents.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }),
    },
    revalidate: 1 * 60 * 60,
  }
}

export default Events

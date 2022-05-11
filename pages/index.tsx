import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { UpcomingEvents } from '../components/Events/UpcomingEvents'
import { Hero } from '../components/Hero/Hero'
import { Interest } from '../components/Profile/Interests'
import { Profile } from '../components/Profile/Profile'
import { listUpcomingEvents, MicroCMSEventsRecord } from '../lib/microcms'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <div className='mt-6 lg:mt-24'>
      <Hero />
      <div className='mt-10'>
        <Interest />
      </div>
      <div className='my-10'>
        <Profile />
      </div>
      <div className='my-10'>
        <UpcomingEvents events={props.events} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  events: MicroCMSEventsRecord[]
}> = async () => {
  return {
    props: {
      events: await listUpcomingEvents(),
    },
    revalidate: 1 * 60 * 60,
  }
}

export default Home

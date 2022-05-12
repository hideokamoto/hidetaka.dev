import { FC } from 'react'
import { MicroCMSEventsRecord } from '../../lib/microcms'
import { EventItems } from './EventItems'

export const EventHistories: FC<{
  events: MicroCMSEventsRecord[]
}> = ({ events }) => {
  return (
    <div className='bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Recent Events &amp; talks
          </h2>
        </div>
        <EventItems events={events} />
      </div>
    </div>
  )
}

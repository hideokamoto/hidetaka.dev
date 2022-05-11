import { FC } from 'react'
import { MicroCMSEventsRecord } from '../../lib/microcms'
import dayjs from 'dayjs'

export const EventItems: FC<{
  events: MicroCMSEventsRecord[]
}> = ({ events }) => {
  if (events && events.length > 0) {
    return (
      <div className='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
        {events.map((event) => (
          <div key={event.title}>
            <p className='text-sm text-gray-500'>
              <time dateTime={event.date}>{dayjs(event.date).format('YYYY/MM/DD HH:MM')} JST</time>
            </p>
            <a href={event.url} className='mt-2 block'>
              <p className='text-xl font-semibold text-gray-900'>{event.title}</p>
              <p className='mt-3 text-base text-gray-500'>{event.description}</p>
            </a>
            <div className='mt-3'>
              <a
                href={event.url}
                className='text-base font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Event page URL
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className='relative mt-6 pt-10'>
      <h2 className='text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
        No events available at this moment
      </h2>
      <p className='mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500'>
        If you want to invite any event, please feel free let me know :)
      </p>
    </div>
  )
}

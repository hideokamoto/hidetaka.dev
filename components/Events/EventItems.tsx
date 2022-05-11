import { FC } from 'react'
import { MicroCMSEventsRecord } from '../../lib/microcms'
import dayjs from 'dayjs'
import { classNames } from '../../lib/classNames'

const isOnlineEvent = (event: Pick<MicroCMSEventsRecord, 'place'>) => {
  if (!event.place) return false
  if (/オンライン/.test(event.place)) return true
  return /online/.test(event.place.toLocaleLowerCase())
}

export const EventItems: FC<{
  events: MicroCMSEventsRecord[]
}> = ({ events }) => {
  if (events && events.length > 0) {
    return (
      <div className='mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
        {events.map((event) => (
          <div key={event.title}>
            {event.place ? (
              <div>
                <span className='inline-block'>
                  <span
                    className={classNames(
                      isOnlineEvent(event)
                        ? 'border border-indigo-800 text-indigo-800'
                        : 'bg-indigo-100 text-indigo-800',
                      'inline-flex items-center px-3 py-0.5 rounded-2xl text-sm font-medium ',
                    )}
                  >
                    {event.place}
                  </span>
                </span>
              </div>
            ) : null}
            <a href={event.url} className='mt-2 block' target='_blank' rel='noopener noreferrer'>
              {event.session_title ? (
                <p className='text-sm font-semibold text-gray-600'>{event.title}</p>
              ) : null}
              <p className='text-2xl font-semibold text-gray-900'>
                {event.session_title || event.title}
              </p>
              <p className='mt-3 text-base text-gray-500'>{event.description}</p>
            </a>
            <p className='text-sm text-gray-500'>
              <time dateTime={event.date}>{dayjs(event.date).format('YYYY/MM/DD HH:MM')} JST</time>
            </p>
            <div className='mt-3'>
              <a
                href={event.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Event page
              </a>
              {event.slide_url ? (
                <a
                  href={event.slide_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-3 py-2 mr-2 border border-indigo-600 text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-600  bg-white-600 hover:bg-white-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  View Slide
                </a>
              ) : null}
              {event.blog_url ? (
                <a
                  href={event.blog_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  View more
                </a>
              ) : null}
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

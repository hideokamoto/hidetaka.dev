import dayjs from 'dayjs'
import { FC } from 'react'
import { classNames } from '../../lib/classNames'
import { MicroCMSProjectsRecord } from '../../lib/microcms'
import { BookThumbnail } from './ListThumbnail'

export const BookListItem: FC<{
  book: MicroCMSProjectsRecord
}> = ({ book }) => {
  return (
    <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'>
      <div className={'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-9'}>
        <a href={book.url} target='_blank' rel='noopener noreferrer'>
          <p className='inline-block mb-2'>
            {book.tags.map((tag) => {
              return (
                <span
                  key={`${book.url}-${tag}`}
                  className={classNames(
                    'bg-indigo-100 text-indigo-800',
                    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2',
                  )}
                >
                  {tag}
                </span>
              )
            })}
          </p>

          <h3 className='text-lg font-medium text-gray-900'>{book.title}</h3>
          <p className='mt-2 text-sm text-gray-500'>
            <time dateTime={book.published_at}>
              {dayjs(book.published_at).format('YYYY/MM/DD')}
            </time>
          </p>

          <div className='mt-6 flex items-center'>
            <div className='ml-0'>
              <p className='text-sm font-medium text-gray-900'>
                <span>{book.is_solo ? '単著' : '共著・寄稿'}</span>
              </p>

              <div className='flex space-x-1 text-sm text-gray-500'>
                <span>Written in {book.lang[0]}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className={'lg:col-start-1 flex-auto lg:row-start-1 lg:col-span-3'}>
        <div className='aspect-w-5 aspect-h-2 rounded-lg overflow-hidden'>
          <BookThumbnail book={book} />
        </div>
      </div>
    </div>
  )
}

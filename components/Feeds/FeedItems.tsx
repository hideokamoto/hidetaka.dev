import dayjs from 'dayjs'
import { FC } from 'react'
import { classNames } from '../../lib/classNames'

export type FeedDataSource = {
  href: string
  name: string
  color: string
}
export type FeedItem = {
  id?: string
  title: string
  href: string
  description: string
  datetime: string
  dataSource: FeedDataSource
  image?: string
}
export const FeedItem: FC<FeedItem> = ({ href, title, description, datetime, dataSource }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div>
        <a href={dataSource.href} className='inline-block'>
          <span
            className={classNames(
              dataSource.color,
              'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
            )}
          >
            {dataSource.name}
          </span>
        </a>
      </div>
      <a href={href} className='block mt-4'>
        <p className='text-xl font-semibold text-gray-900'>{title}</p>
        <p className='mt-3 text-base text-gray-500'>
          {description.replace(/<[^>]*>?/gm, '').replace(/&hellip;/, '...')}
        </p>
      </a>
      <div className='mt-6 flex items-center'>
        {/**
        <div className='flex-shrink-0'>
          <a href={author.href}>
            <span className='sr-only'>{author.name}</span>
            <img className='h-10 w-10 rounded-full' src={author.imageUrl} alt='' />
          </a>
        </div>
         */}
        <div className='ml-0'>
          {/**
          <p className='text-sm font-medium text-gray-900'>
            <a href={author.href}>{author.name}</a>
          </p>
         */}
          <div className='flex space-x-1 text-sm text-gray-500'>
            <time dateTime={datetime}>{dayjs(datetime).format('YYYY/MM/DD')}</time>
          </div>
        </div>
      </div>
    </div>
  )
}

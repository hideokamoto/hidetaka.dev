import { FC, PropsWithChildren } from 'react'
import { MicroCMSProjectsRecord } from '../../lib/microcms'
import { BookListItem } from './ListItem'

export const BookList: FC<
  PropsWithChildren<{
    books: MicroCMSProjectsRecord[]
    title?: string
  }>
> = ({ books, title = 'Book & Online courses', children }) => {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <p className='mt-4 text-gray-500'></p>
        </div>
        <div className='mt-16 space-y-16'>
          {books.map((book) => {
            return <BookListItem key={book.url} book={book} />
          })}
        </div>
        {children}
      </div>
    </div>
  )
}

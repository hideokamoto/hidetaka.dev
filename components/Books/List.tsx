import { FC, PropsWithChildren } from 'react'
import { MicroCMSProjectsRecord } from '../../lib/microcms'
import { ListPageLayout } from '../Layouts/ListPageLayout'
import { BookListItem } from './ListItem'

export const BookList: FC<
  PropsWithChildren<{
    books: MicroCMSProjectsRecord[]
    title?: string
  }>
> = ({ books, title = 'Book & Online courses', children }) => {
  return (
    <ListPageLayout title={title}>
      <div className='mt-16 space-y-16'>
        {books.map((book) => {
          return <BookListItem key={book.url} book={book} />
        })}
      </div>
      {children}
    </ListPageLayout>
  )
}

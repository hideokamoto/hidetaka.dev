import dayjs from 'dayjs'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { FC } from 'react'
import { classNames } from '../lib/classNames'
import { listBooks, MicroCMSProjectsRecord } from '../lib/microcms'

const Book: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ books }) => {
  return (
    <>
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Book &amp; Online courses
            </h2>
            <p className='mt-4 text-gray-500'></p>
          </div>
          <div className='mt-16 space-y-16'>
            {books.map((book) => {
              return <BookListItem key={book.url} book={book} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  books: MicroCMSProjectsRecord[]
}> = async () => {
  const books = await listBooks()
  return {
    props: {
      books,
    },
  }
}

export default Book

export const BookListItem: FC<{
  book: MicroCMSProjectsRecord
}> = ({ book }) => {
  const post = {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  }
  return (
    <div
      key={book.title}
      className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'
    >
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

const BookThumbnail: FC<{
  book: Pick<MicroCMSProjectsRecord, 'affiliate_link' | 'image'>
}> = ({ book: { affiliate_link: affiliateLink, image } }) => {
  if (affiliateLink) {
    return <div dangerouslySetInnerHTML={{ __html: affiliateLink }} />
  }
  if (image) {
    return <img src={image.url} width={image.width} height={image.height} alt='book thumbnail' />
  }
  return null
}

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { BookList } from '../../components/Books/List'
import { listBooks, MicroCMSProjectsRecord } from '../../lib/microcms'

const Book: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ books }) => {
  return <BookList books={books} />
}

export const getStaticProps: GetStaticProps<{
  books: MicroCMSProjectsRecord[]
}> = async () => {
  const books = await listBooks()
  return {
    props: {
      books,
    },
    revalidate: 1 * 60 * 60,
  }
}

export default Book

import { GetStaticProps, NextPage, GetStaticPropsResult } from 'next'
import Parser from 'rss-parser'
import { FeedContainer } from '../components/Feeds/FeedContainer'
import { FeedDataSource, FeedItem } from '../components/Feeds/FeedItems'

type Feed = {
  title: string
  link: string
  isoDate: string
  content: string
}
type QiitaAtomFeed = {
  items: Array<Feed>
  link: string
  feedUrl: string
  title: string
  lastBuildDate: string
}
type ZennFeed = {
  items: Array<Feed>
  title: string
  description: string
  generator: string
  link: string
  language: string
  lastBuildDate: string
}

const BlogPage: NextPage<StaticProps> = (props) => {
  return (
    <>
      <FeedContainer
        title='Recent publications'
        description='I posted several blog platform. So we can easy to summarize of my blog in this page.'
      >
        {props.posts.map((post) => (
          <FeedItem key={post.id || post.title} {...post} />
        ))}
      </FeedContainer>
    </>
  )
}

const loadFeedPosts = async <T extends any>(url: string): Promise<T> => {
  const parser = new Parser()
  try {
    const result = await parser.parseURL(url)
    return result as any as T
  } catch (e) {
    console.log('Importing feed error', e)
    throw e
  }
}

const loadQiitaPosts = async (): Promise<FeedItem[]> => {
  const dataSource: FeedDataSource = {
    href: 'https://qiita.com',
    name: 'Qiita',
    color: 'bg-indigo-300 text-indigo-600',
  }
  const personal = await loadFeedPosts<QiitaAtomFeed>('https://qiita.com/motchi0214/feed.atom')
  const stripe = await loadFeedPosts<QiitaAtomFeed>('https://qiita.com/hideokamoto/feed.atom')
  return [...personal.items, ...stripe.items].map((data): FeedItem => {
    return {
      title: data.title,
      description: data.content,
      datetime: data.isoDate,
      href: data.link,
      dataSource,
    }
  })
}
const loadZennPosts = async (): Promise<FeedItem[]> => {
  const dataSource: FeedDataSource = {
    href: 'https://zenn.dev',
    name: 'Zenn',
    color: 'bg-indigo-300 text-indigo-600',
  }
  const personal = await loadFeedPosts<ZennFeed>('https://zenn.dev/hideokamoto/feed')
  const stripe = await loadFeedPosts<ZennFeed>('https://zenn.dev/stripe/feed')
  return [...personal.items, ...stripe.items].map((data): FeedItem => {
    return {
      title: data.title,
      description: data.content,
      datetime: data.isoDate,
      href: data.link,
      dataSource,
    }
  })
}
const loadDevToPosts = async (): Promise<FeedItem[]> => {
  const dataSource: FeedDataSource = {
    href: 'https://dev.to',
    name: 'Dev.to',
    color: 'bg-green-100 text-gren-800',
  }
  const personal = await fetch('https://dev.to/api/articles?username=hideokamoto').then((data) =>
    data.json(),
  )
  const stripe = await fetch('https://dev.to/api/articles?username=hideokamoto_stripe').then(
    (data) => data.json(),
  )
  return [...personal, ...stripe].map((data): FeedItem => {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.social_image,
      datetime: data.published_at,
      href: data.url,
      dataSource: {
        ...dataSource,
        href: `https://dev.to/${data.user.username}`,
      },
    }
  })
}

type WPPost = {
  title: {
    rendered: string
  }
  date: string
  date_gmt: string
  excerpt: {
    rendered: string
  }
  link: string
  id: string
}
const loadWPPosts = async (): Promise<FeedItem[]> => {
  const dataSource: FeedDataSource = {
    href: 'https://wp-kyoto.net',
    name: 'WP Kyoto Blog',
    color: 'bg-indigo-100 text-indigo-800',
  }
  const wp = [
    ...(await fetch('https://api.wp-kyoto.net/wp-json/wp/v2/posts').then((data) => data.json())),
    ...(await fetch('https://api.wp-kyoto.net/wp-json/wp/v2/posts?filter[lang]=en').then((data) =>
      data.json(),
    )),
  ].map(
    (post: WPPost): FeedItem => ({
      title: post.title.rendered,
      description: post.excerpt.rendered,
      href: post.link.replace(/api./, ''),
      datetime: post.date,
      dataSource,
      id: post.id,
    }),
  )
  return wp
}

type StaticProps = {
  posts: FeedItem[]
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<StaticProps>
> => {
  const wp = await loadWPPosts()
  const devto = await loadDevToPosts()
  const zenn = await loadZennPosts()
  const qiita = await loadQiitaPosts()
  return {
    props: {
      posts: [...wp, ...devto, ...zenn, ...qiita].sort((a: FeedItem, b: FeedItem) => {
        const bDate = new Date(b.datetime)
        const aDate = new Date(a.datetime)
        return bDate.getTime() - aDate.getTime()
      }),
    },
    revalidate: 1 * 60 * 60,
  }
}

export default BlogPage

import { renderers } from '@markdoc/markdoc'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { BookList } from '../components/Books/List'
import { UpcomingEvents } from '../components/Events/UpcomingEvents'
import { Hero } from '../components/Hero/Hero'
import { ExternalLink } from '../components/markdoc/ExternalLink'
import { Interest } from '../components/Profile/Interests'
import { Profile } from '../components/Profile/Profile'
import { loadMarkdownFile } from '../lib/markdocs/loader'
import {
  listFeaturedBooks,
  listUpcomingEvents,
  MicroCMSEventsRecord,
  MicroCMSProjectsRecord,
} from '../lib/microcms'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  return (
    <div className='mt-6 lg:mt-24'>
      <Hero>
        {renderers.react(JSON.parse(props.profiles.hero), React, {
          components: {
            ExternalLink,
          },
        })}
      </Hero>
      <div className='mt-10'>
        <Interest />
      </div>
      <div className='my-10'>
        <Profile />
      </div>
      <div className='my-0'>
        <BookList books={props.featuredBooks} title='Featured books'>
          <div className='my-10'>
            <Link href='/projects/books' passHref>
              <button
                type='button'
                className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
              >
                See more books
              </button>
            </Link>
          </div>
        </BookList>
      </div>
      <div className='my-10'>
        <UpcomingEvents events={props.events} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  profiles: {
    hero: string
  }
  events: MicroCMSEventsRecord[]
  featuredBooks: MicroCMSProjectsRecord[]
}> = async () => {
  const heroArticle = loadMarkdownFile('contents/profiles/hero.md')
  const heroContent = (heroArticle as any).children
  heroContent[0].attributes = {
    ...heroContent[0].attributes,
    className: 'mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl',
  }
  const profiles = {
    hero: JSON.stringify(heroContent),
  }

  const featuredBooks = await listFeaturedBooks()

  return {
    props: {
      profiles,
      events: await listUpcomingEvents(),
      featuredBooks,
    },
    revalidate: 1 * 60 * 60,
  }
}

export default Home

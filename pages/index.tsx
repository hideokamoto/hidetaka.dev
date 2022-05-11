import type { NextPage } from 'next'
import { Hero } from '../components/Hero/Hero'
import { Interest } from '../components/Profile/Interests'
import { Profile } from '../components/Profile/Profile'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className='mt-10'>
        <Interest />
      </div>
      <div className='my-10'>
        <Profile />
      </div>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import { Hero } from '../components/Hero/Hero'
import { Profile } from '../components/Profile/Profile'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className='mt-10'>
        <Profile />
      </div>
    </>
  )
}

export default Home

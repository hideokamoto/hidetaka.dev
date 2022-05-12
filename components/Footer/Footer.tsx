import { FC } from 'react'
import { SocialIcons } from '../Profile/SocialIcons'

export const Footer: FC = () => {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto p-12 px-4 sm:px-6  lg:px-8'>
        <div className='md:flex md:items-center md:justify-between pb-4'>
          <div className='flex justify-center space-x-6 md:order-2'>
            <SocialIcons className='text-gray-400 hover:text-gray-500' />
          </div>
          <div className='mt-8 md:mt-0 md:order-1'>
            <p className='text-center text-base text-gray-400'>
              &copy; 2022 Hidetaka Okamoto, All rights reserved.
            </p>
          </div>
        </div>
        <div className=''>
          <p className='text-base text-gray-400 text-sm'>
            Disclaimer: 👋🏽 Hi there. I work as a Developer Advocate at Stripe.
            <br />
            Content on this site contains my own opinions, and does not necessarily reflect the
            views of my employer.
          </p>
        </div>
      </div>
    </footer>
  )
}

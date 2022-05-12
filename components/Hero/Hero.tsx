import { FC, PropsWithChildren } from 'react'

export const Hero: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
      <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
        <h1>
          <span className='block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base'></span>
          <span className='mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl xl:text-5xl'>
            <span className='block text-gray-900'>Hello!</span>
            <span className='block text-gray-900'>
              I&lsquo;m <span className='text-indigo-600'>Hidetaka Okamoto</span>
            </span>
          </span>
        </h1>
        {children}
      </div>
      <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
        <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
          <button
            type='button'
            className='relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='sr-only'>Watch our video to learn more</span>
            <img className='w-full' src='/images/profile.jpg' alt='Profile image' />
          </button>
        </div>
      </div>
    </div>
  )
}

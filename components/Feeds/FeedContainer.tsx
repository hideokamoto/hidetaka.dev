import { PropsWithChildren, FC, ReactNode } from 'react'

export const FeedContainer: FC<
  PropsWithChildren<{
    title?: string
    description: string
  }>
> = ({ title = 'Recent posts', description, children }) => {
  return (
    <div className='bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>{description}</p>
        </div>
        <div className='mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {children}
        </div>
      </div>
    </div>
  )
}

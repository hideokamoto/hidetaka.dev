import { FC, PropsWithChildren } from 'react'

export const ListPageLayout: FC<
  PropsWithChildren<{
    title?: string
    description?: string
  }>
> = ({ title, children, description }) => {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <p className='mt-4 text-gray-500'>{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

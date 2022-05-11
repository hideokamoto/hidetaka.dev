import { BookOpenIcon, CheckIcon } from '@heroicons/react/outline'
import { FC } from 'react'

const features = [
  {
    name: 'JavaScript/TypeScript',
    description: 'Developing Node.js or frontend application.',
  },
  { name: 'React/Stencil', description: 'Creating UI component.' },
  { name: 'Next.js/Gatsby', description: 'Making own website using these Jamstack frameworks.' },
  {
    name: 'AWS(Backend)',
    description: 'Using Serverless stack to deploy and run application backend.',
  },
  { name: 'AWS Amplify/Netlify', description: 'Deploy web application.' },
  {
    name: 'WordPress',
    description: 'Publishing anything by using this. And contributing the OSS projects.',
  },
  {
    name: 'Alexa/LINE',
    description: 'Making VUI or chat application to communicate with the customers.',
  },
  { name: 'Stripe', description: 'Earn Money using this API.' },
]

export const Interest: FC = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        <div>
          <h2 className='text-base font-semibold text-indigo-600 uppercase tracking-wide'>
            Interests
          </h2>
          <p className='mt-2 text-3xl font-extrabold text-gray-900'>Speak&amp;Writable topics</p>
          <p className='mt-4 text-lg text-gray-500'>
            I have an experience to use these tools/framework and services.
          </p>
        </div>
        <div className='mt-12 lg:mt-0 lg:col-span-2'>
          <dl className='space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <BookOpenIcon className='absolute h-6 w-6 text-green-500' aria-hidden='true' />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
                <dd className='mt-2 ml-9 text-base text-gray-500'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

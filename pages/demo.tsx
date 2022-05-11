export default function Example() {
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
        <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
          I&lsquo;m a JaveScript/TypeScript developer, helping to create a web application using
          Serverless stack or Jamstack.
          <br />I work at{' '}
          <a href='https://stripe.com' className='text-underline text-indigo-600'>
            Stripe
          </a>{' '}
          as a Developer Advocate.
        </p>
      </div>
      <div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
        <svg
          className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
          width={640}
          height={784}
          fill='none'
          viewBox='0 0 640 784'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='4f4f415c-a0e9-44c2-9601-6ded5a34a13e'
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect y={72} width={640} height={640} className='text-gray-50' fill='currentColor' />
          <rect
            x={118}
            width={404}
            height={784}
            fill='url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)'
          />
        </svg>
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

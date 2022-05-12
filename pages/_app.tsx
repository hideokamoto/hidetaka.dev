import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Footer } from '../components/Footer/Footer'
const navigation = [
  //{ name: 'Product', href: '#' },
  { name: 'Writing', href: '/blogs' },
  { name: 'Events', href: '/events' },
  { name: 'Stripe', href: 'https://stripe.com/' },
]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hidetaka Okamoto | Stripe Developer Advocate</title>
      </Head>

      <div className='relative bg-white overflow-hidden'>
        <div className='hidden lg:block lg:absolute lg:inset-0' aria-hidden='true'>
          <svg
            className='absolute top-0 left-1/2 transform translate-x-64 -translate-y-8'
            width={640}
            height={784}
            fill='none'
            viewBox='0 0 640 784'
          >
            <defs>
              <pattern
                id='9ebea6f4-a1f5-4d96-8c4e-4c2abf658047'
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
              fill='url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)'
            />
          </svg>
        </div>

        <div className='relative pt-6 pb-8 sm:pb-16 lg:pb-24'>
          <Popover>
            <nav
              className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
              aria-label='Global'
            >
              <div className='flex items-center flex-1'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                  <Link href='/' passHref>
                    <a>
                      <span className='sr-only'>Workflow</span>
                      <h1 className='text-xl font-extrabold  sm:text-2xl xl:text-4xl'>
                        Hidetaka.dev
                      </h1>
                    </a>
                  </Link>
                  <div className='-mr-2 flex items-center md:hidden'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='hidden md:block md:ml-10 md:space-x-10'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a className='font-medium text-gray-500 hover:text-gray-900'>{item.name}</a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
                <a
                  href='https://github.com/hideokamoto/hidetaka.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <svg
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    className='h-6 w-6'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </nav>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <Link href='/' passHref>
                      <a>
                        <h1 className='text-xl font-extrabold  sm:text-2xl xl:text-4xl'>
                          Hidetaka.dev
                        </h1>
                      </a>
                    </Link>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <span className='sr-only'>Close main menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className='mt-2 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-8'>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MyApp

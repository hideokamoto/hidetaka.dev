import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import { Navigation } from '../components/Layouts/Navigation'

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
          <Navigation />

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

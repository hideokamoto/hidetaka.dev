import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const LanguageSwitcher: FC = () => {
  const { locale: currentLocale, locales, pathname } = useRouter()
  if (!locales) return null
  return (
    <>
      {locales.map((locale) => {
        if (locale === currentLocale) {
          return (
            <span
              key={locale}
              className='whitespace-nowrap text-base font-medium text-indigo-500 underline hover:text-gray-900 mr-4'
            >
              {locale}
            </span>
          )
        }
        return (
          <Link href={pathname} passHref locale={locale} key={locale}>
            <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mr-4'>
              {locale}
            </a>
          </Link>
        )
      })}
    </>
  )
}

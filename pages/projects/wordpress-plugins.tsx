import dayjs from 'dayjs'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { FC, useMemo } from 'react'
import { ListPageLayout } from '../../components/Layouts/ListPageLayout'
import { classNames } from '../../lib/classNames'
import { listMyWordPressPlugins, WordPressPluginDetail } from '../../lib/wordpressorg'

const WordPressPluginIcon: FC<Pick<WordPressPluginDetail, 'icons'>> = ({ icons }) => {
  const iconUrl = useMemo(() => {
    if (!icons) return null
    if (icons['2x']) return icons['2x']
    if (icons['1x']) return icons['1x']
    if (icons.default) return icons.default
    return null
  }, [icons])
  if (!iconUrl) return null
  return (
    <img
      src={iconUrl}
      alt='plugin icon'
      width={128}
      height={128}
      className='w-full object-cover aspect-square'
    />
  )
}

export const WordPressPlugins: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  plugins,
}) => {
  return (
    <ListPageLayout title='WordPress plugins'>
      <div className='mt-12 pt-12'>
        {plugins.map((plugin) => (
          <div
            key={plugin.name}
            style={{ overflow: 'scroll' }}
            className='grid grid-cols-12 gap-x-8 mt-8'
          >
            <div className='invisible sm:visible sm:col-span-2'>
              <WordPressPluginIcon {...plugin} />
            </div>
            <div className='col-span-12 sm:col-span-10'>
              <div className='block'>
                <p className='text-xl font-semibold text-gray-900'>
                  <a
                    href={`https://wordpress.org/plugins/${plugin.slug}`}
                    className='block'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {plugin.name}
                  </a>
                </p>
              </div>
              <p className='mt-3 text-base text-gray-500'>{plugin.short_description}</p>
              <div className='mt-3 flex items-center'>
                <div className='ml-0'>
                  <div className='flex flex-col text-sm text-gray-500'>
                    <span className='block'>
                      Added:
                      <time className='ml-1' dateTime={plugin.added}>
                        {dayjs(plugin.added).format('YYYY/MM/DD')}
                      </time>
                    </span>
                    <span className='block'>
                      Last updated:
                      <time className='ml-1' dateTime={plugin.last_updated}>
                        {plugin.last_updated.split(' ')[0].replace(/-/g, '/')}
                      </time>
                    </span>
                    <span className='block'>Latest version in {plugin.version}</span>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                {Object.entries(plugin.tags).map(([key, keyword]) => {
                  return (
                    <span className='inline-block mr-2 mb-2' key={`${plugin.name}-${keyword}`}>
                      <span
                        className={classNames(
                          'bg-indigo-100 text-indigo-800',
                          'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
                        )}
                      >
                        {keyword}
                      </span>
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ListPageLayout>
  )
}

export const getStaticProps: GetStaticProps<{
  plugins: WordPressPluginDetail[]
}> = async () => {
  const plugins = await listMyWordPressPlugins()
  return {
    props: {
      plugins,
    },
  }
}

export default WordPressPlugins

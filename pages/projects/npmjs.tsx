import dayjs from 'dayjs'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { FC } from 'react'
import { ListPageLayout } from '../../components/Layouts/ListPageLayout'
import { classNames } from '../../lib/classNames'
import { listMyNPMPackages, NPMPackageDetail } from '../../lib/npmjs'

export const ListPackages: FC<{
  packages: NPMPackageDetail[]
}> = ({ packages }) => {
  return (
    <div className='mt-12 grid gap-16 pt-12 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 md:gap-y-12'>
      {packages.map((packageDetail) => {
        return (
          <div key={packageDetail.name} style={{ overflow: 'scroll' }}>
            <div className='block mt-4'>
              <p className='text-xl font-semibold text-gray-900'>
                <a
                  href={packageDetail.links.npm}
                  className='block mt-4'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {packageDetail.name}
                </a>
              </p>
            </div>
            <p className='mt-3 text-base text-gray-500'>{packageDetail.description}</p>
            <div className='mt-6 flex items-center'>
              <div className='ml-0'>
                {packageDetail.author ? (
                  <p className='text-sm font-medium text-gray-900'>
                    <a href={packageDetail.author.url} target='_blank' rel='noopener noreferrer'>
                      {packageDetail.author.name}
                    </a>
                  </p>
                ) : null}
                <div className='flex space-x-1 text-sm text-gray-500'>
                  <time className='block' dateTime={packageDetail.date}>
                    {dayjs(packageDetail.date).format('YYYY/MM/DD')}
                  </time>
                  <span className='block' aria-hidden='true'>
                    &middot;
                  </span>
                  <span className='block'>Latest version in {packageDetail.version}</span>
                </div>
              </div>
            </div>
            <div className='mt-6'>
              {packageDetail.keywords?.map((keyword) => {
                return (
                  <span className='inline-block mr-2 mb-2' key={`${packageDetail.name}-${keyword}`}>
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
        )
      })}
    </div>
  )
}
const NPMJSModules: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ packages }) => {
  return (
    <ListPageLayout title='Published NPM modules'>
      <ListPackages packages={packages} />
    </ListPageLayout>
  )
}

export const getStaticProps: GetStaticProps<{
  packages: NPMPackageDetail[]
}> = async () => {
  const objects = await listMyNPMPackages()
  return {
    props: {
      packages: objects
        .map((object) => object.package)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    },
    revalidate: 1 * 60 * 60,
  }
}

export default NPMJSModules

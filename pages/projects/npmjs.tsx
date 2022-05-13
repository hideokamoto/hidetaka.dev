import dayjs from 'dayjs'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { ListPageLayout } from '../../components/Layouts/ListPageLayout'
import { classNames } from '../../lib/classNames'
import { listMyNPMPackages, NPMPackageDetail } from '../../lib/npmjs'

const NPMJSModules: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ packages }) => {
  return (
    <ListPageLayout title='Published NPM modules'>
      <div className='mt-16 space-y-16'>
        {packages.map((npmPackage) => {
          return (
            <div
              key={npmPackage.name}
              className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center'
            >
              <div className={'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-9'}>
                <p className='inline-block mb-2'>
                  {npmPackage.keywords?.map((keywords) => {
                    return (
                      <span
                        key={`${npmPackage.name}-${keywords}`}
                        className={classNames(
                          'bg-indigo-100 text-indigo-800',
                          'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium mr-2',
                        )}
                      >
                        {keywords}
                      </span>
                    )
                  })}
                </p>

                <h3 className='text-lg font-medium text-gray-900'>{npmPackage.name}</h3>
                <p className='mt-2 text-sm text-gray-500'>
                  <time dateTime={npmPackage.date}>
                    {dayjs(npmPackage.date).format('YYYY/MM/DD')}
                  </time>
                </p>

                <div className='mt-6 flex items-center'>
                  <div className='ml-0'>
                    <p className='text-sm font-medium text-gray-900'>
                      <span>{npmPackage.description}</span>
                    </p>

                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <span>Latest version in {npmPackage.version}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ListPageLayout>
  )
}

export const getStaticProps: GetStaticProps<{
  packages: NPMPackageDetail[]
}> = async () => {
  const { objects } = await listMyNPMPackages()
  return {
    props: {
      packages: objects.map((object) => {
        return object.package
      }),
    },
    revalidate: 1 * 60 * 60,
  }
}

export default NPMJSModules

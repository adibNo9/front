import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import StudentLayout from '@components/layout/student/StudentLayout'
import Icon404 from '@components/icons/404-icon'
import Button from '@components/ui/button'

const ErrorInformation: React.FC = () => {
  return (
    <div className="md:flex-col items-center justify-center">
      <div className="text-center bg-white py-6 px-2 drop-shadow-sm">
        <h2 className="font-bold pb-4 text-lg">
          صفحه ای که دنبال آن بودید پیدا نشد!
        </h2>
        <Button
          className="mx-auto px-4 py-2 font-normal "
          variant="primary"
          href="/"
        >
          برو به صفحه اصلی{' '}
        </Button>
      </div>
      <span className="flex justify-center">
        <Icon404 />
      </span>
    </div>
  )
}

export default ErrorInformation

ErrorInformation.Layout = StudentLayout

export const getStaticProps: GetStaticProps = async({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'footer',
      ])),
    },
  }
}

import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'

const MainHeader = dynamic(() => import('@components/layout/student/header'), {
  ssr: false,
})

const Footer = dynamic(
  () => import('@components/layout/student/footer/footer'),
  { ssr: false },
)

const StudentLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="test">
      <MainHeader />
      {children}
      <Footer />
    </div>
  )
}

export default StudentLayout

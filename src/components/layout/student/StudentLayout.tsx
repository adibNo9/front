import React from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(
  () => import('@components/layout/student/header/header'),
  { ssr: false },
)

const Footer = dynamic(
  () => import('@components/layout/student/footer/footer'),
  { ssr: false },
)

const StudentLayout: React.FC = ({ children }) => {
  return (
   <div className="test">
     <Header />
     {children}
     <Footer/>
   </div>
  )
}

export default StudentLayout

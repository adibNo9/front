import StudentLayout from '@components/layout/student/StudentLayout'
import dynamic from 'next/dynamic'

const SectionContainer = dynamic(
  () => import('@containers/class/section-container'),
  { ssr: false },
)

export default function ClassPage() {
  return (
    <SectionContainer/>
  )
}
ClassPage.Layout = StudentLayout

import PageHeader from '@/lib/components/ui/PageHeader'
import CertList from './CertList'

export default async function CertificationsPage() {
  return (
    <>
      <PageHeader>Certifications</PageHeader>
      <br />
      <section className="gap-8 space-y-12 max-lg:flex max-lg:flex-col max-lg:items-center lg:block lg:columns-2">
        <CertList />
      </section>
    </>
  )
}

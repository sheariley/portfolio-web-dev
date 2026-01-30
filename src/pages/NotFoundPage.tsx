import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import PageHeader from '@/components/ui/PageHeader'
import { faExclamationTriangle, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NotFoundPage() {
  return (
    <>
      <main className="container-main container mx-auto h-full px-4 pb-16 md:px-6 lg:px-8">
        <div className="layout-content layout-full flex h-full flex-col justify-center">
          <PageHeader className="mt-12">Page Not Found</PageHeader>
          <br />
          <section className="flex flex-col items-center gap-8 space-y-4 p-4">
            <Card size="card-lg" className="bg-error min-h-20">
              <Card.Body>
                <div className="flex items-center gap-4">
                  <div>
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-3xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mt-0 mb-0">
                      The requested page could not be found. Please check the URL and try again.
                    </h3>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className="text-center">
              <Button to="/" themeColor="primary">
                <FontAwesomeIcon icon={faHome} /> Home
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

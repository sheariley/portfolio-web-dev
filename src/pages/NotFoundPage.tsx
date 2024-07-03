import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import {
  faExclamationTriangle,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NotFoundPage() {
  return (
    <>
      <PageHeader className="mt-12">Page or Resource Not Found</PageHeader>
      <br />
      <section className="flex flex-col items-center gap-8 space-y-4 p-4">
        <Card className="min-h-20 bg-error/60">
          <Card.Body>
            <div className="flex items-center gap-4">
              <div>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="text-3xl"
                />
              </div>
              <div className="flex-1">
                <h3 className="m-0">
                  The requested page or resource could not be found. Please
                  check the URL and try again.
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
    </>
  );
}

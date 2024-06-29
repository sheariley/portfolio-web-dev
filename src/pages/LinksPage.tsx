import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileText } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';

export default function LinksPage() {
  return (
    <>
      <PageHeader>Links</PageHeader>
      <br />
      <section className="flex flex-col items-stretch gap-8 space-y-12">
        <Card>
          <Card.Body>
            <Card.Title className="mb-0 flex justify-center">
              Links &amp; Downloads
            </Card.Title>
            <div className="mb-4 flex flex-col items-center">
              <ul className="my-0 list-none pl-0 *:flex *:w-[160px] *:pl-0 md:flex md:flex-row md:space-x-4 md:*:my-4 max_md:space-y-6">
                <li>
                  <Button
                    themeColor="primary"
                    href="/resume.pdf"
                    download
                    icon={faFileText}
                    size="sm"
                    className="w-full justify-start"
                  >
                    Resume
                  </Button>
                </li>
                <li>
                  <Button
                    themeColor="primary"
                    href="https://github.com/sheariley"
                    target="_blank"
                    icon={faGithub}
                    size="sm"
                    className="w-full justify-start"
                  >
                    GitHub profile
                  </Button>
                </li>
                <li>
                  <Button
                    themeColor="primary"
                    href="https://www.linkedin.com/in/shea-riley-8bb19336/"
                    target="_blank"
                    icon={faLinkedin}
                    size="sm"
                    className="w-full justify-start"
                  >
                    Linked-In profile
                  </Button>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

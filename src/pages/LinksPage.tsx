import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode, faFileText } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import ExternalLinkUrls from '@/utils/external-link-urls';

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
              <ul className="my-0 list-none pl-0 *:flex *:w-[180px] *:pl-0 md:flex md:flex-row md:space-x-4 md:*:my-4 max_md:space-y-6">
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
                    href={ExternalLinkUrls.LinkedIn}
                    target="_blank"
                    icon={faLinkedin}
                    size="sm"
                    className="w-full justify-start"
                  >
                    Linked-In profile
                  </Button>
                </li>
                <li>
                  <Button
                    themeColor="primary"
                    href={ExternalLinkUrls.GitHub}
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
                    href={ExternalLinkUrls.Source}
                    target="_blank"
                    icon={faCode}
                    size="sm"
                    className="w-full justify-start"
                  >
                    Site Source Code
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

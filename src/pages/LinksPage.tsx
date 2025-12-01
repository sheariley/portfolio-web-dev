import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faExternalLink,
  faFileText
} from '@fortawesome/free-solid-svg-icons';

import farmHubWebsitePreviewImg from '@/assets/website-screenshots/farm-hub-home-page-screenshot.jpg';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { ExternalLinkUrls } from '@/utils';

export default function LinksPage() {
  return (
    <>
      <section className="flex flex-col items-stretch gap-8 space-y-12">
        <Card>
          <Card.Body>
            <Card.Title className="mb-0 flex justify-start">
              Publicly Accessible Websites
            </Card.Title>
            <div className="flex flex-col items-start">
              <ul className="my-0 list-none space-y-6 pl-0 *:flex *:min-w-[180px] *:flex-col *:items-start *:pl-0">
                <li>
                  <figure className="my-0 flex flex-col items-start">
                    <a
                      className="mb-2 self-start"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={ExternalLinkUrls.FarmHub}
                    >
                      <img
                        className="my-0 rounded-lg"
                        width="240px"
                        height="180px"
                        src={farmHubWebsitePreviewImg}
                        alt="FarmHub website preview"
                      />
                    </a>
                    <Button
                      themeColor="primary"
                      href={ExternalLinkUrls.FarmHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={faExternalLink}
                      size="sm"
                      className="justify-start self-start"
                    >
                      FarmHub - Farmers Market Directory
                    </Button>
                    <figcaption className="self-start text-base text-base-content">
                      A directory website that lists farmers markets,
                      farm-stands, and farms by state and city. The website was
                      built using Next.js, NodeJS, Tailwind, daisyUI, Supabase,
                      and Leaflet. Data was acquired via Google Maps Places API.
                      The data was then filtered using automated AI workflows
                      built in n8n and invoked from NodeJS scripts. The data
                      filtering workflows integrated various open source LLMs
                      via a locally running instance of Ollama. Logging was an
                      important aspect of the data filtering process, as the AI
                      system prompts had to be tuned to reduce false
                      positives/negatives.
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title className="mb-0 flex justify-start">
              Links &amp; Downloads
            </Card.Title>
            <div className="mb-4 flex flex-col items-start">
              <ul className="my-0 list-none space-y-6 pl-0 *:flex *:min-w-[180px] *:pl-0">
                <li>
                  <Button
                    themeColor="primary"
                    href="/resume.pdf"
                    download
                    icon={faFileText}
                    size="sm"
                    className="justify-start"
                  >
                    Resume
                  </Button>
                </li>
                <li>
                  <Button
                    themeColor="primary"
                    href={ExternalLinkUrls.LinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={faLinkedin}
                    size="sm"
                    className="justify-start"
                  >
                    Linked-In profile
                  </Button>
                </li>
                <li>
                  <Button
                    themeColor="primary"
                    href={ExternalLinkUrls.GitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={faGithub}
                    size="sm"
                    className="justify-start"
                  >
                    GitHub profile
                  </Button>
                </li>
                <li>
                  <Button
                    themeColor="primary"
                    href={ExternalLinkUrls.Source}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={faCode}
                    size="sm"
                    className="justify-start"
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

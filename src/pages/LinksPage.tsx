import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode, faExternalLink, faFileText } from '@fortawesome/free-solid-svg-icons'

import farmHubWebsitePreviewImg from '@/assets/website-screenshots/farm-hub-home-page-screenshot.jpg'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { ExternalLinkUrls } from '@/utils'

export default function LinksPage() {
  return (
    <>
      <section className="flex flex-col items-stretch gap-8 space-y-12">
        <Card>
          <Card.Title className="mb-0 flex justify-start">Publicly Accessible Websites</Card.Title>
          <Card.Body>
            <div className="flex flex-col items-start">
              <ul className="my-0 list-none space-y-6 pl-0 *:flex *:min-w-45 *:flex-col *:items-start *:pl-0">
                <li>
                  <figure className="not-prose my-0 flex flex-col items-start space-y-6">
                    <div className="flex flex-col items-stretch space-y-4">
                      <a
                        className="mb-4"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={ExternalLinkUrls.FarmHub}
                      >
                        <img
                          className="not-prose my-0 aspect-auto max-w-72 rounded-lg drop-shadow-md drop-shadow-black"
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
                        className="justify-start"
                      >
                        FarmHub - Farmers Market Directory
                      </Button>
                    </div>
                    <figcaption className="text-base-content self-start text-base">
                      A directory website that lists farmers markets, farm-stands, and farms by
                      state and city. The website was built using Next.js, NodeJS, Tailwind,
                      daisyUI, Supabase, and Leaflet. Data was acquired via Google Maps Places API.
                      The data was then filtered using automated AI workflows built in n8n and
                      invoked from NodeJS scripts. The data filtering workflows integrated various
                      open source LLMs via a locally running instance of Ollama. Logging was an
                      important aspect of the data filtering process, as the AI system prompts had
                      to be tuned to reduce false positives/negatives.
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Title className="mb-0 flex justify-start">Links &amp; Downloads</Card.Title>
          <Card.Body className="@container">
            <ul className="my-0 flex list-none flex-col items-center pl-0 *:my-4 *:flex *:w-40 *:pl-0 @lg:flex @lg:flex-row @lg:space-x-4">
              <li>
                <Button
                  themeColor="primary"
                  href="/resume.pdf"
                  download
                  icon={faFileText}
                  size="sm"
                  className="w-full justify-start whitespace-nowrap"
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
                  className="w-full justify-start whitespace-nowrap"
                >
                  Linked-In
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
                  className="w-full justify-start whitespace-nowrap"
                >
                  GitHub
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
                  className="w-full justify-start whitespace-nowrap"
                >
                  Site Source Code
                </Button>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

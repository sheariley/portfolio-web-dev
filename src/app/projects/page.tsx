import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Button from '@/lib/components/ui/Button'
import Card from '@/lib/components/ui/Card'
import Icon from '@/lib/components/ui/Icon'
import PageHeader from '@/lib/components/ui/PageHeader'

export default async function ProjectsPage() {
  return (
    <>
      <PageHeader>Projects</PageHeader>
      <br />
      <section className="flex flex-col items-center gap-8 space-y-12">
        <Card className="w-full">
          <Card.Body className="not-prose flex flex-row flex-nowrap items-center gap-6 sm:flex-row">
            <a href="/projects/instrufax" className="hidden shrink-0 sm:inline-flex">
              <img
                src="/website-screenshots/instrufax/mobile-home-page-closeup.png"
                alt="InstruFax mobile home page"
                className="not-prose my-0 aspect-auto max-h-40 drop-shadow-md drop-shadow-black sm:max-h-80"
              />
            </a>
            <div className="flex flex-col gap-4">
              <h2 className="text-primary my-0 text-2xl font-bold">InstruFax</h2>
              <p className="text-base-content my-0 text-sm opacity-70">
                Consulting Engagement · June 2025 – August 2025
              </p>
              <p className="text-base-content my-0">
                A community-driven web application for tracking musical instruments by serial
                number; including ownership history, repair records, and music store profiles.
                Designed mobile-first with a comprehensive Figma design system and interactive
                prototype.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js 15',
                  'React 19',
                  'TypeScript',
                  'Supabase',
                  'TailwindCSS 4',
                  'Auth0',
                  'Figma'
                ].map(tech => (
                  <span key={tech} className="badge badge-primary badge-outline badge-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <Button
                  themeColor="primary"
                  href="/projects/instrufax"
                  icon={<Icon icon={faArrowRight} />}
                  size="sm"
                >
                  View Project
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

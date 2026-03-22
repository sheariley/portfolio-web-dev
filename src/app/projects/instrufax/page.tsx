import Card from '@/lib/components/ui/Card'
import PageHeader from '@/lib/components/ui/PageHeader'
import DesignShowcase from './DesignShowcase'
import { InstruFaxFigmaEmbed } from './instrufax-figma-embed'

const techStack = [
  'Next.js 15',
  'React 19',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'TailwindCSS 4',
  'daisyUI 5',
  'Auth0',
  'OAuth 2.0 / OIDC',
  'Arcjet',
  'Leaflet',
  'Playwright',
  'FontAwesome',
  'Figma'
]

export default async function InstruFaxPage() {
  return (
    <>
      <PageHeader>
        InstruFax
        <br />
        <div className="text-base font-normal">Musical Instrument History Tracker</div>
      </PageHeader>

      {/* ── Table of Contents ── */}
      <nav className="flex justify-center">
        <ul className="mb-16 flex flex-wrap justify-center gap-3 text-sm">
          {[
            { href: '#overview', label: 'Overview' },
            { href: '#discovery-planning', label: 'Discovery & Planning' },
            { href: '#design', label: 'UI/UX Design' },
            { href: '#prototype', label: 'Interactive Prototype' },
            { href: '#development', label: 'Development' }
          ].map(item => (
            <li key={item.href} className="list-none">
              <a href={item.href} className="btn btn-primary btn-sm no-underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex flex-col items-center gap-8 space-y-12">
        {/* ── Overview ── */}
        <Card id="overview" className="w-full scroll-mt-20">
          <Card.Title className="mb-0 flex justify-center">Project Overview</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm opacity-70">
                <span>Consulting Engagement</span>
                <span className="hidden sm:inline">·</span>
                <span>June 2025 – August 2025</span>
              </div>
              <p>
                InstruFax is a community-driven web application for tracking musical instruments by
                serial number; including ownership history, repair records, and music store
                profiles.
              </p>
              <p>
                The application embraces a <strong>mobile-first design philosophy</strong>. The
                primary user experience — instrument search, profiles, repair history, and community
                features — is designed for mobile devices. The web-specific layouts serve
                administrative and back-office management functions such as store registration
                approval and user management.
              </p>
              <h4>Tech Stack</h4>
              <div className="not-prose flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span key={tech} className="badge badge-primary badge-outline badge-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>

        {/* ── Discovery & Planning ── */}
        <Card id="discovery-planning" className="w-full scroll-mt-20">
          <Card.Title className="mb-0 flex justify-center">Discovery &amp; Planning</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <p>
                The project began with a compelling vision: a platform where musicians could look up
                instruments by serial number and explore their history. From this foundation,
                extensive brainstorming and ideation were undertaken to develop detailed user
                journeys, define comprehensive feature sets, and establish the scope of a minimum
                viable product.
              </p>
              <p>
                This discovery work transformed an initial concept into a fully realized project
                plan, establishing the groundwork needed before the design process could begin:
              </p>
              <ul>
                <li>
                  <strong>User journey development</strong> — Mapped out detailed flows for
                  instrument search, profile creation, repair history tracking, ownership transfer,
                  community messaging, store registration, and admin management
                </li>
                <li>
                  <strong>Feature definition &amp; MVP scoping</strong> — Identified and prioritized
                  the feature sets needed for an MVP, balancing user value with development
                  feasibility to define the true initial scope
                </li>
                <li>
                  <strong>Architectural decisions</strong> — Selected the technology stack,
                  established the repository pattern for data access, defined the role-based access
                  control model, and planned the database schema
                </li>
                <li>
                  <strong>Security planning</strong> — Designed the authentication and authorization
                  strategy using Auth0, defined four RBAC tiers (SuperAdmin, Admin, StoreOwner,
                  Basic), and identified bot protection needs
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        {/* ── UI/UX Design ── */}
        <Card id="design" className="w-full scroll-mt-20">
          <Card.Title className="mb-0 flex justify-center">UI/UX Design</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <p>
                A comprehensive design system and interactive prototype were created in Figma before
                any development began. The design establishes a dark, professional aesthetic with
                semantic color tokens, a structured typography scale, and over 20 reusable
                components; all following a mobile-first paradigm.
              </p>
            </div>
            <DesignShowcase />
          </Card.Body>
        </Card>

        {/* ── Interactive Figma Prototype ── */}
        <InstruFaxFigmaEmbed />

        {/* ── Development ── */}
        <Card id="development" className="w-full scroll-mt-20">
          <Card.Title className="mb-0 flex justify-center">Development</Card.Title>
          <Card.Body>
            <div className="prose max-w-none">
              <h4>Architecture</h4>
              <ul>
                <li>
                  <strong>Repository pattern</strong> — Abstracted data access layer using
                  TypeScript interfaces, decoupling components from the Supabase client for
                  maintainability and testability
                </li>
                <li>
                  <strong>Functional programming paradigm</strong> — Preferred functional patterns
                  over classical OOP, with reusable UI components organized under a structured
                  component directory
                </li>
                <li>
                  <strong>Mobile-first responsive design</strong> — TailwindCSS 4 and daisyUI 5 with
                  a custom dark theme, implementing a mobile-first paradigm throughout
                </li>
              </ul>

              <h4>Key Features</h4>
              <ul>
                <li>
                  Instrument search by serial number, type, and brand with filterable results and
                  virtualized scrolling for performance
                </li>
                <li>
                  Instrument profiles with detailed attributes, photo galleries, ownership history,
                  and repair records
                </li>
                <li>
                  Ownership transfer workflow with email verification and accept/decline mechanism
                </li>
                <li>
                  Community messaging system with inbox, notifications, and
                  instrument-contextualized conversations
                </li>
                <li>Store profile registration with multi-step admin approval workflow</li>
                <li>
                  User management admin dashboard with role promotion/demotion, account locking, and
                  bulk actions
                </li>
              </ul>

              <h4>Security</h4>
              <ul>
                <li>
                  <strong>Authentication</strong> — Auth0 with OAuth 2.0 and OpenID Connect,
                  supporting Google, Microsoft, Apple, and Facebook identity providers
                </li>
                <li>
                  <strong>Authorization</strong> — Four-tier RBAC (SuperAdmin, Admin, StoreOwner,
                  Basic) with row-level security policies in Supabase
                </li>
                <li>
                  <strong>Bot protection</strong> — Arcjet and Google ReCaptcha for form and API
                  endpoint protection
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

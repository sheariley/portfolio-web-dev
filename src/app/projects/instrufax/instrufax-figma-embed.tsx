import Card from '@/lib/components/ui/Card'

export function InstruFaxFigmaEmbed() {
  return (
    <Card id="prototype" className="w-full scroll-mt-20">
      <Card.Title className="mb-0 flex flex-col justify-center">Interactive Prototype</Card.Title>
      <Card.Body className="items-center divide-y-2 divide-neutral-300/40">
        <p className="not-prose text-base-content/80 max-w-2xl pb-2 text-center text-sm">
          Explore the mobile-first user experience through the interactive Figma prototype below.
          Full-screen viewing recommended.
        </p>
        <iframe
          width="400"
          height="650"
          src="https://embed.figma.com/proto/vpoycXPQX0wblrh9CvgnpL/instrufax-web?node-id=1-4&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&embed-host=share"
          allowFullScreen
        ></iframe>
      </Card.Body>
    </Card>
  )
}

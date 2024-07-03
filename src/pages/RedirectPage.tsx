import Card from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import { UIMatch, useMatches } from 'react-router';

export default function RedirectPage() {
  const matches = useMatches() as UIMatch<
    unknown,
    { to?: string } | undefined
  >[];

  const redirectUrl = matches.filter((match) => Boolean(match.handle?.to))[0]
    ?.handle?.to;

  if (redirectUrl) window.location.href = redirectUrl;

  return (
    <>
      <PageHeader className="mt-12">Redirecting...</PageHeader>
      <br />
      <section className="flex flex-col items-stretch gap-8 space-y-12 p-4">
        <Card>
          <Card.Body>
            {redirectUrl ? (
              <>
                <h3>You are being redirected to</h3>
                <div>
                  <a href={redirectUrl}>
                    <strong>{redirectUrl}</strong>
                  </a>
                </div>
              </>
            ) : (
              <h3>Invalid Redirect URL</h3>
            )}
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

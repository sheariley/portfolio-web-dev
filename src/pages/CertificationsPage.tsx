import reactTypeScriptCert from '@/assets/cert-images/udemy-react-and-typescript-the-practical-guide.jpg';
import reactNativeCert from '@/assets/cert-images/udemy-react-native-the-practical-guide-2024.jpg';
import reactCert from '@/assets/cert-images/udemy-react-the-complete-guide-2024.jpg';

import Card from '@/components/ui/Card';

export default function CertificationsPage() {
  return (
    <>
      <h1 className="text-center">Certifications</h1>
      <br />
      <section className="gap-8 space-y-12 lg:block lg:columns-2 max_lg:flex max_lg:flex-col max_lg:items-center">
        <Card>
          <Card.Body>
            <img
              src={reactCert}
              alt="Udemy Certificate: React - The Complete Guide 2024"
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              src={reactTypeScriptCert}
              alt="Udemy Certificate: React & TypeScript - The Practical Guide"
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              src={reactNativeCert}
              alt="Udemy Certificate: React Native - The Practical Guide [2024]"
            />
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

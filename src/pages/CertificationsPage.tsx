import { MouseEvent, useRef, useState } from 'react';

import reactTypeScriptCert from '@/assets/cert-images/udemy-react-and-typescript-the-practical-guide.jpg';
import reactNativeCert from '@/assets/cert-images/udemy-react-native-the-practical-guide-2024.jpg';
import reactCert from '@/assets/cert-images/udemy-react-the-complete-guide-2024.jpg';
import figmaEssentialsCert from '@/assets/cert-images/udemy-figma-ui-ux-design-essentials-2024.jpg';

import Card from '@/components/ui/Card';
import Modal, { ModalRef } from '@/components/ui/Modal';
import PageHeader from '@/components/ui/PageHeader';

export default function CertificationsPage() {
  const modalRef = useRef<ModalRef>(null);
  const [fullscreenImage, setFullScreenImage] = useState('');

  function handleCertClick(event: MouseEvent<HTMLImageElement>) {
    setFullScreenImage(event.currentTarget.src);
    modalRef.current?.open();
  }

  function handleClearFullScreenImage() {
    setFullScreenImage('');
    modalRef.current?.close();
  }

  return (
    <>
      <Modal
        ref={modalRef}
        containerClassNames="flex flex-col p-14 max_lg:p-4 items-center justify-center"
        className="flex max-h-none w-full max-w-none flex-col p-2"
      >
        <img
          className="m-auto cursor-pointer rounded-xl"
          src={fullscreenImage}
          alt="Fullscreen certificate image"
          onClick={handleClearFullScreenImage}
        />
      </Modal>
      <PageHeader>Certifications</PageHeader>
      <br />
      <section className="gap-8 space-y-12 lg:block lg:columns-2 max_lg:flex max_lg:flex-col max_lg:items-center">
        <Card>
          <Card.Body>
            <img
              className="m-0 cursor-pointer"
              src={reactCert}
              alt="Udemy Certificate: React - The Complete Guide 2024"
              onClick={handleCertClick}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              className="m-0 cursor-pointer"
              src={reactTypeScriptCert}
              alt="Udemy Certificate: React & TypeScript - The Practical Guide"
              onClick={handleCertClick}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              className="m-0 cursor-pointer"
              src={reactNativeCert}
              alt="Udemy Certificate: React Native - The Practical Guide [2024]"
              onClick={handleCertClick}
            />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              className="m-0 cursor-pointer"
              src={figmaEssentialsCert}
              alt="Udemy Certificate: Figma UI UX Design Essentials"
              onClick={handleCertClick}
            />
          </Card.Body>
        </Card>
      </section>
    </>
  );
}

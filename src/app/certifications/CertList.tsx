'use client'

import React, { type MouseEvent } from 'react'

import Card from '@/lib/components/ui/Card'
import Modal, { type ModalRef } from '@/lib/components/ui/Modal'

const CertImages = {
  figmaEssentialsCert: '/cert-images/udemy-figma-ui-ux-design-essentials-2024.jpg',
  reactTypeScriptCert: '/cert-images/udemy-react-and-typescript-the-practical-guide.jpg',
  reactNativeCert: '/cert-images/udemy-react-native-the-practical-guide-2024.jpg',
  reactCert: '/cert-images/udemy-react-the-complete-guide-2024.jpg'
}

export default function CertList() {
  const modalRef = React.useRef<ModalRef>(null)
  const [fullscreenImage, setFullScreenImage] = React.useState<string>()

  function handleCertClick(event: MouseEvent<HTMLImageElement>) {
    setFullScreenImage(event.currentTarget.src)
    modalRef.current?.open()
  }

  function handleClearFullScreenImage() {
    modalRef.current?.close()
    // prevents flicker
    setTimeout(() => setFullScreenImage(undefined), 250)
  }

  return (
    <>
      <Modal
        ref={modalRef}
        containerClassNames="flex flex-col p-14 max-lg:p-4 items-center justify-center"
        className="flex max-h-none w-full max-w-none flex-col p-2"
      >
        {fullscreenImage && (
          <img
            className="m-auto cursor-pointer rounded-xl"
            src={fullscreenImage}
            alt="Fullscreen certificate image"
            onClick={handleClearFullScreenImage}
          />
        )}
      </Modal>
      <Card>
        <Card.Body className="p-0 md:p-0 md:pb-0">
          <img
            className="not-prose m-0 cursor-pointer"
            src={CertImages.reactCert}
            alt="Udemy Certificate: React - The Complete Guide 2024"
            onClick={handleCertClick}
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="p-0 md:p-0 md:pb-0">
          <img
            className="not-prose m-0 cursor-pointer"
            src={CertImages.reactTypeScriptCert}
            alt="Udemy Certificate: React & TypeScript - The Practical Guide"
            onClick={handleCertClick}
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="p-0 md:p-0 md:pb-0">
          <img
            className="not-prose m-0 cursor-pointer"
            src={CertImages.reactNativeCert}
            alt="Udemy Certificate: React Native - The Practical Guide [2024]"
            onClick={handleCertClick}
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="p-0 md:p-0 md:pb-0">
          <img
            className="not-prose m-0 cursor-pointer"
            src={CertImages.figmaEssentialsCert}
            alt="Udemy Certificate: Figma UI UX Design Essentials"
            onClick={handleCertClick}
          />
        </Card.Body>
      </Card>
    </>
  )
}

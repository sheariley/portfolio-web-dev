'use client'

import React from 'react'

import Modal, { type ModalRef } from '@/lib/components/ui/Modal'

const IMG = '/website-screenshots/instrufax'

type ImageInfo = { src: string; alt: string; caption: string }

const designSystem: ImageInfo[] = [
  {
    src: `${IMG}/design-tokens-colors.png`,
    alt: 'Semantic color palette with primary, secondary, accent, base, and status color tokens',
    caption: 'Semantic color palette'
  },
  {
    src: `${IMG}/design-tokens-typography.png`,
    alt: 'Typography scale with heading and body text formats across multiple sizes',
    caption: 'Typography scale'
  }
]

const componentLibrary: ImageInfo[] = [
  {
    src: `${IMG}/component-mockups-navigation-and-icons.png`,
    alt: 'Navigation and icon component designs with dynamic state variants',
    caption: 'Navigation & icons'
  },
  {
    src: `${IMG}/component-mockups-list-items-and-fields.png`,
    alt: 'List item and form field component designs with state variants',
    caption: 'List items & fields'
  }
]

const mobileScreenCloseups: ImageInfo[] = [
  {
    src: `${IMG}/screen-mockups-mobile-screens-closeup-1.png`,
    alt: 'Mobile screens: home page with instrument search, search results listing, and search filter panel',
    caption: 'Home, search & filters'
  },
  {
    src: `${IMG}/screen-mockups-mobile-screens-closeup-2.png`,
    alt: 'Mobile screens: sign-in page, user profile with instrument inventory, and profile editor',
    caption: 'Authentication & user profiles'
  },
  {
    src: `${IMG}/screen-mockups-mobile-screens-closeup-3.png`,
    alt: 'Mobile screens: instrument detail page, repair entry detail, and repair photo gallery',
    caption: 'Instrument details & repairs'
  },
  {
    src: `${IMG}/screen-mockups-mobile-screens-closeup-4.png`,
    alt: 'Mobile screens: instrument profile editor and repair entry editor forms',
    caption: 'Instrument & repair editing'
  }
]

const mobileScreenCloseup5: ImageInfo = {
  src: `${IMG}/screen-mockups-mobile-screens-closeup-5.png`,
  alt: 'Mobile screen: music store profile page with photos, contact info, and instrument inventory',
  caption: 'Store profile'
}

const webAdminScreens: ImageInfo[] = [
  {
    src: `${IMG}/screen-mockups-web-screens-closeup-1.png`,
    alt: 'Web admin: store registration request management table with status indicators',
    caption: 'Store registration management'
  },
  {
    src: `${IMG}/screen-mockups-web-screens-closeup-2.png`,
    alt: 'Web admin: store registration approval detail view with approve and deny actions',
    caption: 'Registration approval'
  },
  {
    src: `${IMG}/screen-mockups-web-screens-closeup-3.png`,
    alt: 'Web admin: user management dashboard with role badges and bulk actions',
    caption: 'User management'
  }
]

const FullWidthImages: Record<string, ImageInfo> = {
  allMobile: {
    src: `${IMG}/screen-mockups-all-mobile.png`,
    alt: 'Overview of all InstruFax mobile screen designs',
    caption: 'Complete mobile screen overview'
  },
  allWeb: {
    src: `${IMG}/screen-mockups-all-web.png`,
    alt: 'Overview of all InstruFax web admin screen designs',
    caption: 'Complete web admin screen overview'
  }
}

function ImageGrid({
  images,
  gridCols,
  onImageClick
}: {
  images: ImageInfo[]
  gridCols: string
  onImageClick: (imgInfo: ImageInfo) => void
}) {
  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
      {images.map(img => (
        <figure key={img.src} className="m-0 flex min-w-0 flex-col">
          <figcaption className="text-base-content mb-3 text-center text-base font-medium">
            {img.caption}
          </figcaption>
          <img
            src={img.src}
            alt={img.alt}
            className="w-full cursor-pointer drop-shadow-md drop-shadow-black transition-opacity hover:opacity-80"
            onClick={() => onImageClick(img)}
          />
        </figure>
      ))}
    </div>
  )
}

function FullWidthImage({
  imageInfo,
  onImageClick
}: {
  imageInfo: ImageInfo
  onImageClick: (imgInfo: ImageInfo) => void
}) {
  return (
    <figure className="m-0 flex flex-col items-center">
      <figcaption className="text-base-content mb-3 text-center text-base font-medium">
        {imageInfo.caption}
      </figcaption>
      <img
        src={imageInfo.src}
        alt={imageInfo.alt}
        className="max-w-full cursor-pointer drop-shadow-md drop-shadow-black transition-opacity hover:opacity-80"
        onClick={() => onImageClick(imageInfo)}
      />
    </figure>
  )
}

export default function DesignShowcase() {
  const modalRef = React.useRef<ModalRef>(null)
  const [fullscreenImage, setFullScreenImage] = React.useState<ImageInfo>()

  function handleImageClick(imgInfo: ImageInfo) {
    setFullScreenImage(imgInfo)
    modalRef.current?.open()
  }

  function handleCloseModal() {
    modalRef.current?.close()
    setTimeout(() => setFullScreenImage(undefined), 250)
  }

  return (
    <>
      <Modal
        ref={modalRef}
        containerClassNames="flex flex-col p-14 max-lg:p-4 items-center justify-center"
        className="flex max-h-[90vh] w-full max-w-none flex-col p-2"
        title={fullscreenImage?.caption}
      >
        {fullscreenImage && (
          <img
            className="m-auto cursor-pointer"
            src={fullscreenImage.src}
            alt="Fullscreen design screenshot"
            onClick={handleCloseModal}
          />
        )}
      </Modal>

      {/* Design System */}
      <div className="prose mt-8 max-w-none">
        <h3>Design System</h3>
      </div>
      <ImageGrid images={designSystem} gridCols="md:grid-cols-2" onImageClick={handleImageClick} />

      {/* Component Library */}
      <div className="border-base-content/10 mt-8 border-t pt-6">
        <div className="prose max-w-none">
          <h3>Component Library</h3>
        </div>
      </div>
      <ImageGrid
        images={componentLibrary}
        gridCols="md:grid-cols-2"
        onImageClick={handleImageClick}
      />

      {/* Mobile Screens */}
      <div className="border-base-content/10 mt-8 border-t pt-6">
        <div className="prose max-w-none">
          <h3>Mobile Screen Designs</h3>
          <p>
            The primary user experience is designed for mobile. These screens cover instrument
            search, profiles, repair tracking, user accounts, community messaging, and store
            discovery.
          </p>
        </div>
      </div>
      <FullWidthImage imageInfo={FullWidthImages.allMobile} onImageClick={handleImageClick} />
      {mobileScreenCloseups.map(img => (
        <FullWidthImage key={img.src} imageInfo={img} onImageClick={handleImageClick} />
      ))}
      <FullWidthImage imageInfo={mobileScreenCloseup5} onImageClick={handleImageClick} />

      {/* Web Admin Screens */}
      <div className="border-base-content/10 mt-8 border-t pt-6">
        <div className="prose max-w-none">
          <h3>Web Admin Screens</h3>
          <p>
            The web layouts serve administrative functions: store registration management, user
            administration, and approval workflows.
          </p>
        </div>
      </div>
      <FullWidthImage
        imageInfo={FullWidthImages.allWeb}
        onImageClick={() => handleImageClick(FullWidthImages.allWeb)}
      />
      <ImageGrid
        images={webAdminScreens}
        gridCols="sm:grid-cols-2 lg:grid-cols-3"
        onImageClick={handleImageClick}
      />
    </>
  )
}

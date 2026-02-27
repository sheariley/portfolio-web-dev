'use client'

import { cn } from '@/lib/utils'
import React, {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactEventHandler
} from 'react'
import { createPortal } from 'react-dom'

export type ModalRef = {
  open(): void
  close(): void
}

type ModalProps = PropsWithChildren
  & ComponentPropsWithoutRef<'dialog'> & {
    containerId?: string
    onClose?: ReactEventHandler<HTMLDialogElement>
    containerClassNames?: string
  }

const Modal = React.forwardRef<ModalRef, ModalProps>(function Modal(
  { containerId = 'modal-container', onClose, children, className, containerClassNames, ...props },
  ref
) {
  const [mounted, setMounted] = React.useState(false)
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal()
    },
    close() {
      dialogRef.current?.close()
    }
  }))

  React.useEffect(() => {
    if (!mounted) setMounted(true)
  }, [mounted])

  return (
    mounted
    && createPortal(
      <dialog
        className={cn('modal', containerClassNames)}
        ref={dialogRef}
        onClose={onClose}
        {...props}
      >
        <div className={cn('modal-box relative', className)}>
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute top-2 right-2">✕</button>
          </form>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>,
      document.getElementById(containerId)!
    )
  )
})

export default Modal

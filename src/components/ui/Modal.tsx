import classnames from 'classnames';
import {
  type ComponentPropsWithoutRef,
  type PropsWithChildren,
  type ReactEventHandler,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react';
import { createPortal } from 'react-dom';

export type ModalRef = {
  open(): void;
  close(): void;
};

type ModalProps = PropsWithChildren
  & ComponentPropsWithoutRef<'dialog'> & {
    onClose?: ReactEventHandler<HTMLDialogElement>;
    containerClassNames?: string;
  };

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { onClose, children, className, containerClassNames, ...rest },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal();
    },
    close() {
      dialogRef.current?.close();
    }
  }));

  return createPortal(
    <dialog
      className={classnames('modal', containerClassNames)}
      ref={dialogRef}
      onClose={onClose}
      {...rest}
    >
      <div className={classnames('modal-box relative', className)}>
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal')!
  );
});

export default Modal;

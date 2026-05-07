import { type FC, Fragment, PropsWithChildren, useEffect } from 'react'
import { clsx } from 'clsx'
import { IoClose } from 'react-icons/io5'
import { Dialog, Transition } from '@headlessui/react'

type ModalSizes = 'xs' | 'sm' | 'md' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'

interface Props {
  show: boolean
  size?: ModalSizes
  onClose: () => void
}

const modalSizes: Record<ModalSizes, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
}

const ModalHeader: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
      <Dialog.Title
          as="div"
          className={clsx(['px-6 py-4 w-full border-b border-white/[0.06] text-white font-semibold text-base', className])}
      >
        {children}
      </Dialog.Title>
  )
}

const ModalBody: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
      <div className={clsx(['px-6 py-5 w-full text-neutral-300', className])}>
        {children}
      </div>
  )
}

const ModalFooter: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return (
      <div className={clsx(['px-6 py-4 w-full border-t border-white/[0.06] flex items-center justify-end gap-3', className])}>
        {children}
      </div>
  )
}

const ModalComponent: FC<PropsWithChildren<Props>> = (({ show, size = 'sm', onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [show])

  return (
      <Transition appear show={show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          {/* Backdrop */}
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"/>
          </Transition.Child>

          <div className="fixed inset-0 flex p-4 md:p-8">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                  className={clsx([
                    'relative w-full m-auto text-left flex flex-col',
                    'bg-card-dark rounded-2xl border border-white/[0.08]',
                    'shadow-2xl shadow-black/60',
                    'transform transition-all overflow-hidden',
                    modalSizes[size],
                  ])}
              >
                {/* Gold accent line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent shrink-0"/>

                {children}

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-1.5 rounded-lg text-neutral-500 hover:text-white hover:bg-white/[0.08] transition-colors duration-200"
                >
                  <IoClose className="text-lg"/>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
})

const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})

export default Modal

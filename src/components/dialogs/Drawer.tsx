import type { FC, PropsWithChildren } from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface Props {
  title: string
  show: boolean
  onClose: () => void
}


const Drawer: FC<PropsWithChildren<Props>> = ({ show = false, title, onClose, children }) => {
  return (
      <Transition show={show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"/>
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 left-0 flex max-w-full">
                <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-300"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-sm bg-neutral-900 shadow-xl flex flex-col h-full">
                    <div
                        className="p-4 flex justify-between items-center border-b border-primary-500">
                      <h2 className="text-lg font-medium text-white">{title}</h2>
                      <button
                          onClick={onClose}
                          className="text-gray-300 hover:text-gray-400 bg-primary-700 px-4 py-2 rounded-lg"
                      >
                        {/*<IoMdClose className="w-6 h-6"/>*/}
                        Aplicar
                      </button>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scroll p-4">{children}</div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default Drawer
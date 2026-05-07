import { type FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import NiceModal, { useModal, type NiceModalHocProps } from '@ebay/nice-modal-react'

interface Props extends NiceModalHocProps {

}


const ModelImagesModal: FC<Props> = NiceModal.create(({}) => {
  const modal = useModal()

  return (
      <Transition appear show={modal.visible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={modal.remove}>
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-md"/>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                    className="transform p-6 text-left align-middle flex flex-col items-center transition-all">
                  <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6 text-white"
                  >
                    Carla Gomez
                  </Dialog.Title>
                  <div className="mt-2 m-auto">
                    <img src="/images/models/image2.jpg" alt="model" className="h-auto md:h-[70vh] w-full md:w-auto"/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
})

export default ModelImagesModal
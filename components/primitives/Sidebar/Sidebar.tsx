import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

import { DIconButton } from '../Button';

interface Props {
  open: boolean;
  onClose?(): void;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const DSidebar: React.FC<Props> = (props) => {
  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => props.onClose?.()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-end text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full max-w-md h-screen transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-between items-center"
                >
                  {props.header}
                  <DIconButton onClick={() => props.onClose?.()}>
                    <XIcon className="w-4 h-4" />
                  </DIconButton>
                </Dialog.Title>
                <div className="mt-4">{props.children}</div>

                <div className="mt-4">{props.footer}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DSidebar;

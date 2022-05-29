import React, { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

interface Props {
  children: React.ReactNode;
  buttonText: React.ReactNode;
  placement?: Placement;
}

const DPopover: React.FC<Props> = (props) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: props.placement ?? 'bottom-start',
  });

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            ref={(ref: HTMLButtonElement) => setReferenceElement(ref)}
            className={`
          ${open ? '' : 'text-opacity-90'}
          group inline-flex items-center rounded-md bg-teal-500 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            {props.buttonText}
          </Popover.Button>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel
              ref={(ref: HTMLDivElement) => setPopperElement(ref)}
              style={styles.popper}
              {...attributes.popper}
              className="z-10 w-max"
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                {props.children}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default DPopover;

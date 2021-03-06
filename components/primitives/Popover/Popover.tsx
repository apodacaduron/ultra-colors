import React, { useState } from 'react';
import { usePopper } from 'react-popper';

import { Popover, Transition } from '@headlessui/react';
import { Placement } from '@popperjs/core';

import styles from '../../../styles/Primitives.module.scss';

interface Props {
  children: React.ReactNode;
  buttonText: React.ReactNode;
  placement?: Placement;
}

const DPopover: React.FC<Props> = React.forwardRef((props, _) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement>();
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: props.placement ?? 'bottom-start',
    }
  );

  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button
            ref={(ref: HTMLButtonElement) => setReferenceElement(ref)}
            className={`${styles['button']} ${styles['button--contained']}`}
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
              style={popperStyles.popper}
              {...attributes.popper}
              className="w-max bg-white"
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
});

export default DPopover;

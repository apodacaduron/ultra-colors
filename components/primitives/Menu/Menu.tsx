import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface MenuProps {
  children: React.ReactNode;
  options: Array<{ content: React.ReactNode; action(): void }>;
}

const DMenu: React.FC<MenuProps> = (props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {props.children}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          {props.options.map((option, index) => (
            <div className="px-1 py-1" key={index}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={option.action}
                  >
                    {option.content}
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DMenu;

import { Popover, Transition } from "@headlessui/react";
import React from "react";

interface Props {
  name: string;

  buttonClass?: string;
  panelClass?: string;

  children: React.ReactNode;
}

const PopOver = (props: Props) => {
  return (
    <Popover>
      <Popover.Button className={`p-4 rounded outline-none duration-300 ${props.buttonClass} hover:opacity-60 focus:ring focus:ring-whitesmoke`}>
        {props.name}
      </Popover.Button>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className={`absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl ${props.panelClass}`}>
          {props.children}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default PopOver;

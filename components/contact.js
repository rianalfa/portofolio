import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact({link="", item="", icon="", }) {
    return (
        <Popover className='relative'>
            <Popover.Button className='inline-flex justify-center items-center text-white focus:text-blue-200 text-2xl border-0 outline-0 p-2
                hover:scale-125 focus:scale-100 transition duration-300 delay-100'>
                <FontAwesomeIcon icon={icon} />
            </Popover.Button>

            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className={`absolute top-0 ${link=="Email" ? "-right-12" : "right-0" } lg:-right-4 flex bg-white rounded-lg shadow-md w-60 z-10`}>
                    <a className='text-base text-blue-800 text-center w-full p-2' href={link}>
                        {item}
                    </a>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

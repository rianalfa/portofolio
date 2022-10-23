import { Transition } from '@headlessui/react'
import React, { useState } from 'react'

export default function SidebarItem({text, secondText, page, active, setPage}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <button className={`inline-flex flex-col ${active==page ? "font-bold" : ""} outline-0 w-full`} onClick={() => setPage(page)}>
            <span className='flex px-2'
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                {text}
                <Transition show={(isHovering || active==page)} className='hidden sm:block'
                    enter="transition-all duration-200" enterFrom="-translate-x-5 opacity-0" enterTo="translate-x-0 opacity-100"
                    leave="transition-all duration-200" leaveFrom="translate-x-0 opacity-100" leaveTo="-translate-x-5 opacity-0"
                >
                    &nbsp;{secondText}
                </Transition>
            </span>
            <Transition show={active==page} className='flex space-x-1 md:space-x-2 w-full lg:w-3/4'
                enter="transition-all duration-500 delay-300"
                enterFrom="-translate-x-5 opacity-0"
                enterTo="translace-x-0 opacity-100"
                leave="transition-all duration-300"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-5 opacity-0"
            >
                <div className='grow bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full h-3'></div>
                <div className='bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full w-3 h-3'></div>
            </Transition>
        </button>
    )
}

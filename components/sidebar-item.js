import { Transition } from '@headlessui/react'
import React from 'react'

export default function SidebarItem({text, page, active, setPage}) {
    return (
        <button className={`inline-flex flex-col ${active==page ? "font-bold" : ""} w-full`} onClick={() => setPage(page)}>
            <span className='px-2'>{text}</span>
            <Transition show={active==page} className='flex space-x-2 w-3/4'
                enter="transition-all duration-500 delay-300"
                enterFrom="-translate-x-5 opacity-0"
                enterTo="translace-x-0 opacity-100"
                leave="transition-all duration-300"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-5 opacity-0"
            >
                <div className='grow bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full h-4'></div>
                <div className='bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full w-4 h-4'></div>
            </Transition>
        </button>
    )
}

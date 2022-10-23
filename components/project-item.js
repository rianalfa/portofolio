import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react'
import React, { useState } from 'react'

export default function ProjectItem({tabIndex, index, title, subtitle, website="", repository="", children}) {
    const [hoverGit, setHoverGit] = useState(false);
    return (
        <Transition className='flex flex-col space-y-8 w-full lg:w-3/4 mx-auto' appear show={tabIndex == index}
            enter="transition-all duration-300" enterFrom="translate-x-80 opacity-0" enterTo="translate-x-0 opacity-100"
        >
            <div className={`flex flex-col space-y-8 lg:space-y-16 relative bg-gradient-to-br text-white border rounded-3xl p-4 md:p-8 overflow-hidden
                ${tabIndex%2==0 ? "from-blue-600 to-cyan-400" : "from-gray-600 to-gray-400"}`}>
                <div className='flex flex-col space-y-4 z-10'>
                    <p className='text-lg font-semibold'>{title}</p>
                    <p className='w-full md:w-3/4'>{subtitle}</p>
                </div>
                <div className='flex justify-between z-10'>
                    {website!="" &&
                        <a href={website} className='bg-white text-gray-700 font-semibold rounded-full shadow cursor-pointer px-2 md:px-4 py-2 hover:bg-gray-100 transition-colors duration-150'>
                            See website
                        </a>
                    }
                    <a className='flex space-x-2 items-center bg-white text-gray-700 font-semibold rounded-full shadow cursor-pointer px-2 md:px-4 py-2'
                        href={repository} onMouseEnter={() => setHoverGit(true)} onMouseLeave={() => setHoverGit(false)}>
                        <Transition className='z-0' show={hoverGit}
                            enter="transition-all duration-200" enterFrom="translate-x-5 opacity-0" enterTo="translate-x-0 opacity-100"
                            leave="transition-all duration-200" leaveFrom="translate-x-0 opacity-100" leaveTo="translate-x-5 opacity-0"
                        >
                            See repository
                        </Transition>
                        <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                    </a>
                </div>

                <div className='absolute -bottom-3 -right-3 -rotate-[20deg]'>
                    <FontAwesomeIcon icon={faComputer} className={`text-7xl md:text-9xl ${tabIndex%2==0 ? "text-blue-600" : "text-gray-600"} z-0`} />
                    <FontAwesomeIcon icon={faMobileScreenButton} className='text-5xl md:text-7xl text-white -ml-4 z-0' />
                </div>
            </div>
            <div className='flex flex-col space-y-4 px-4m md:px-8'>
                {children}
            </div>
        </Transition>
    )
}

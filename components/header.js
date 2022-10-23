import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCaretLeft, faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from '@headlessui/react'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Contact from './contact'

export default function Header() {
    const [showContacts, setShowContacts] = useState(false);

    return (
        <div className='fixed bg-gray-700 shadow-md shadow-gray-300 w-full t-bold mb-4 z-50'>
            <Head>
                <title>LFA</title>
            </Head>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4 lg:justify-start lg:space-x-10'>
                    <div className='flex justify-start items-center flex-1'>
                        <Link href="/">
                            <a className='font-aremat text-3xl text-white font-bold cursor-pointer'>alfa</a>
                        </Link>
                    </div>
                    <div className='flex justify-end items-center space-x-8 text-xl text-white'>
                        <div className='relative text-lg'>
                            <p className='hidden lg:block'>
                                Reach me
                                <FontAwesomeIcon icon={faCaretRight} className='ml-2' />
                            </p>
                            <Transition show={!showContacts} className={`${showContacts ? "hidden" : "block"} lg:hidden`}
                                enter="transition-all duration-300 delay-200" enterFrom="translate-x-5 opacity-0" enterTo="translate-x-0 opacity-100"
                                leave="transition-all duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
                            >
                                <button className='outline-0 hover:scale-110 transition-all duration-200' onClick={() => setShowContacts(true)}>
                                    <FontAwesomeIcon icon={faCaretLeft} className='mr-2' />
                                    Reach me
                                </button>
                            </Transition>
                            <Transition show={showContacts} className={`${showContacts ? "block" : "hidden"} lg:hidden`}
                                enter="transition-all duration-300 delay-200" enterFrom="translate-x-5 opacity-0" enterTo="translate-x-0 opacity-100"
                                leave="transition-all duration-200" leaveFrom="translate-x-0 opacity-100" leaveTo="translate-x-5 opacity-0"
                            >
                                <div className='flex items-center space-x-4'>
                                    <Transition show={showContacts} className={`${showContacts ? "block" : "hidden"} lg:hidden`}
                                            enter="transition-all duration-300 delay-200" enterFrom="rotate-180" enterTo="rotate-0"
                                            leave="transition-all duration-200" leaveFrom="rotate-0" leaveTo="rotate-180"
                                    >
                                        <button className='outline-0 hover:scale-110 transition-all duration-200' onClick={() => setShowContacts(false)}>
                                            <FontAwesomeIcon icon={faCaretRight} />
                                        </button>
                                    </Transition>
                                    <Contact link='Email' item='rianalfa14@gmail.com' icon={faEnvelope} />
                                    <Contact link='https://github.com/rianalfa' item='@rianalfa' icon={faGithub} />
                                    <Contact link='https://instagram.com/fckinastronaut' item='@fckinastronaut' icon={faInstagram} />
                                </div>
                            </Transition>
                        </div>
                        <div className='hidden lg:flex items-center space-x-8'>
                            <Contact link='Email' item='rianalfa14@gmail.com' icon={faEnvelope} />
                            <Contact link='https://github.com/rianalfa' item='@rianalfa' icon={faGithub} />
                            <Contact link='https://instagram.com/fckinastronaut' item='@fckinastronaut' icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

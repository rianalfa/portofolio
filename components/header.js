import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCaretRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Contact from './contact'

export default function Header() {
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
                        <p className='text-lg'>
                            Reach me
                            <FontAwesomeIcon icon={faCaretRight} className='ml-2' />
                        </p>
                        <Contact link='Email' item='rianalfa14@gmail.com' icon={faEnvelope} />
                        <Contact link='https://github.com/rianalfa' item='@rianalfa' icon={faGithub} />
                        <Contact link='https://instagram.com/fckinastronaut' item='@fckinastronaut' icon={faInstagram} />
                    </div>
                </div>
            </div>
        </div>
    )
}

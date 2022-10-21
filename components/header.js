import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Contact from './contact'

export default function Header() {
    return (
        <div className='fixed bg-gray-700 shadow-md shadow-gray-300 w-full t-bold mb-4 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4 lg:justify-start lg:space-x-10'>
                    <div className='flex justify-start items-center flex-1'>
                        <p className='text-3xl text-white font-bold cursor-default'>ALFA</p>
                    </div>
                    <div className='flex justify-end items-center space-x-8 text-xl text-white'>
                        <Contact link='Email' item='rianalfa14@gmail.com' icon={faEnvelope} />
                        <Contact link='https://github.com/rianalfa' item='@rianalfa' icon={faGithub} />
                        <Contact link='https://instagram.com/fckinastronaut' item='@fckinastronaut' icon={faInstagram} />
                    </div>
                </div>
            </div>
        </div>
    )
}

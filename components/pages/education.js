import { Transition } from '@headlessui/react'
import React from 'react'
import InformalEducation from '../informal-education'

export default function Education({page}) {
    return (
        <Transition
            show={page=="education"}
            enter="transition-all duration-500 delay-300"
            enterFrom="scale-50 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition-all duration-300"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-150 opacity-0"
        >
            <div className='flex flex-col space-y-8'>
                <h1 className='text-2xl text-gray-800 font-bold'>Education History</h1>
                <div className='flex flex-col space-y-4'>
                    <p className='text-xl font-semibold'>Formal Education</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <img />
                        <div className='flex flex-col space-y-2'>
                            <p className='text-lg font-semibold'>Politeknik Statistika STIS</p>
                            <p>I graduated from Politeknik Statistika STIS in the Komputasi Statistik Major, with the degree of Sarjana Statistik Terapan on September 2022</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <p className='text-xl font-semibold'>Informal Education</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        <InformalEducation src="kotakode.png" title="Belajar Web Development bersama Kotakode x Progate" year="2021" />
                        <InformalEducation src="forkas.png" title='WINDOWS EKSTERNAL "Analisis Data dengan Phyton"' year="2019" />
                    </div>
                </div>
            </div>
        </Transition>
    )
}

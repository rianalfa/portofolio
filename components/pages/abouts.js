import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import Tools from '../tools'

export default function Abouts({page}) {
    return (
        <Transition
            show={page=="abouts"}
            className='absolute top-0 left-0 w-full'
            enter="transition-all duration-500 delay-300"
            enterFrom="scale-50 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition-all duration-300"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-150 opacity-0"
        >
            <div className='flex flex-col space-y-8 md:space-y-12 mb-16'>
                <div className='flex space-x-8'>
                    <div className='flex flex-col space-y-4 grow'>
                        <h1 className='text-2xl text-gray-800 font-bold'>About</h1>
                        <p className='text-xl'>
                            Hi, I&apos;m Rian Alfa. I&apos;m a very talented problem solver with so many experiences in vast range of disciplines, manager, leader, advisor, full-stack developer, music enthusiast, photographer and more.
                        </p>
                        <p className='mt-2'>
                            Though I&apos;ve just graduated from college in 2022, I have taken parts in so many projects around the topic of education platforms. I&apos;ve built a lot of web-based education platforms which mostly has an exam-like feature that they offer. I thrive on challenges and constantly setting goals for myself, so I have something to strive for. I always do my best in every opportunity I get. During my college year, I participated in several organizations and committees and contributed to the field of information technology, both as a coordinator and as a member. I created an internal organization website, a dashboard to visualize the documentary of the activities, an a forum for the participants to communicate.
                        </p>
                    </div>
                    <div className='flex items-center flex-shrink-0 w-1/4'>
                        <img src="/me.jpg" className='rounded-3xl' />
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h1 className='text-2xl text-gray-800 font-bold'>Tools</h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 lg:gap-8'>
                        <Tools src="/laravel.png" alt="Laravel" />
                        <Tools src="/react.png" alt="React" />
                        <Tools src="/react.png" alt="React Native" />
                        <Tools src="/nextjs.png" alt="NextJS" />
                        <Tools src="/tailwindcss.png" alt="TailwindCSS" />
                        <Tools src="/fontawesome.jpg" alt="FontAwesome" />
                        <Tools src="/github.png" alt="Github" />
                        <Tools src="/figma.png" alt="Figma" />
                        <Tools src="/asana.jpg" alt="Asana" />
                    </div>
                </div>
            </div>
        </Transition>
    )
}

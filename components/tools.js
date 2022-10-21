import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from '@headlessui/react';
import React, { useState } from 'react'

export default function Tools({src, alt}) {
	const [isHovering, setIsHovering] = useState(false);
	return (
		<button className='flex justify-center items-center relative bg-white rounded-full shadow-md w-32 md:w-36 h-32 md:h-36'
			onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
			<Transition show={!isHovering} className='grid place-items-center absolute w-32 md:w-36 h-32 md:h-36'
				enter="transition-all duration-200 delay-200" enterFrom="scale-0" enterTo="scale-100 animate-none"
				leave="transition-all duration-200" leaveFrom="scale-100" leaveTo="scale-0 animate-none">
				<img src={src} alt={alt} className='w-20 md:w-24 h-20 md:h-24' />
			</Transition>
			<Transition show={isHovering} className='grid place-items-center absolute w-32 md:w-36 h-32 md:h-36'
				enter="transition-all duration-200 delay-200" enterFrom="scale-0" enterTo="scale-100 animate-none"
				leave="transition-all duration-200" leaveFrom="scale-100" leaveTo="scale-0 animate-none">
				<p className='md:text-xl font-bold'>{alt}</p>
			</Transition>
		</button>
	)
}

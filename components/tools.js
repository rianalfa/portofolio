import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Tools({icon, color, title}) {
  return (
    <button className={`flex flex-col items-center relative font-bold text-center border-0
		${color=="red" ? "text-red-500 shadow-red-400" : ""}
		${color=="sky" ? "text-sky-500 shadow-sky-400" : ""}
		${color=="blue" ? "text-blue-500 shadow-blue-400" : ""}
		${color=="cyan" ? "text-cyan-500 shadow-cyan-400" : ""}
		${color=="green" ? "text-green-600 shadow-green-400" : ""}
		${color=="gray" ? "text-gray-700 shadow-gray-400" : ""}`}>
		<FontAwesomeIcon icon={icon} className='text-2xl md:text-3xl lg:text-5xl' />
        <p className='text-2xl lg:text-3xl'>{title}</p>
    </button>
  )
}

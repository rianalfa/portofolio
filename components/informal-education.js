import React from 'react'

export default function InformalEducation({src, title, year}) {
    return (
        <div className='flex flex-col space-y-4'>
            <div className='bg-white border rounded-xl p-2 md:p-4'>
                <img className='w-4/5 mx-auto object-cover' src={`/${src}`} />
            </div>
            <p className='text-lg font-semibold text-center'>
                {title} <br />
                <span className='text-base font-normal mt-2'>(Tahun {year})</span>
            </p>
        </div>
    )
}

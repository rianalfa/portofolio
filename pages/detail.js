import React, { useState } from 'react'
import Header from '../components/header';
import Abouts from '../components/pages/abouts';
import Educations from '../components/pages/educations';
import Projects from '../components/pages/projects';
import SidebarItem from '../components/sidebar-item';

export default function Detail() {
	const [page, setPage] = useState('abouts');
	const pages = {
		abouts: 'Abouts',
		educations: 'Educations',
		projects: 'Projects',
	};

    return (
        <div className='antialiased overflow-y-hidden'>
			<div className='h-screen max-h-screen bg-white overflow-y-auto'>
                {/* Header */}
				<Header />

                {/* Body */}
                <main className='flex flex-col content-center h-full pt-20'>
					<div className='grow text-gray-700 text-xs md:text-base w-full max-w-7xl mb-4 mx-auto px-4 lg:px-8 py-2 lg:py-4'>
						<div className={`flex flex-col-reverse lg:flex-row space-x-0 lg:space-x-4 space-y-4 space-y-reverse lg:space-y-0 w-full h-full`}>
                            {/* Main Content */}
                            <div className='flex flex-col rounded-2xl w-full px-4 sm:px-6 lg:px-8 py-4 md:py-16 z-40'>
								<div className='flex flex-col relative w-full'>
									<Educations page={page} />
									<Projects page={page} />
                                    <Abouts page={page} />
                                </div>
                            </div>

                            {/* Left Sidebar */}
                            <div className='flex flex-shrink-0 w-full lg:w-1/4 z-10'>
                                <div className='grid lg:flex grid-cols-3 lg:flex-col gap-2 lg:space-y-2 lg:border-l-2 w-full lg:pl-4 py-4 lg:py-8'>
                                    <SidebarItem text="About" secondText="Me" page="abouts" active={page} setPage={setPage} />
                                    <SidebarItem text="Education" secondText="History" page="educations" active={page} setPage={setPage} />
                                    <SidebarItem text="Projects" secondText="I Have Done" page="projects" active={page} setPage={setPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

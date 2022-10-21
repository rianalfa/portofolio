import 'font-awesome/css/font-awesome.min.css'
import { faArrowRightLong, faFontAwesome, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faFigma, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons'
import Tools from '../components/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/header'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='antialiased overflow-y-hidden'>
			<div className='relative h-screen max-h-screen bg-white overflow-y-auto'>
				{/* Header */}
				<Header />

				{/* Body */}
				<main className='flex flex-col content-center h-full pt-20'>
					<div className='grow text-gray-700 text-xs md:text-base w-full max-w-7xl mb-4 mx-auto px-4 lg:px-8 py-2 lg:py-4'>
						<div className={`flex flex-col-reverse lg:flex-row space-x-0 lg:space-x-4 space-y-4 space-y-reverse lg:space-y-0 w-full h-full`}>
							{/* Main Content */}
							<div className='flex flex-col rounded-2xl w-full p-8 md:p-16 z-40'>
								<div className='flex flex-col w-full'>
									<div className='flex flex-col'>
										<h1 className='text-5xl text-gray-800 font-black text-center'>Hi there</h1>
										<h1 className='text-5xl text-gray-800 text-center mt-4'>Welcome to project <span className='text-blue-500 font-black'>alfa</span></h1>
										<p className='text-xl text-gray-800 font-bold text-center w-3/4 mx-auto mt-8'>I'm a freelancer as a Full-Stack Web & Mobile App Developer based in Payakumbuh, Indonesia. I work remotely on projects for my clients.</p>
										<p className='text-xl font-semibold text-center mt-4'></p>
										<Link href="/detail">
											<a className='flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full w-3/4 mx-auto px-8 py-4 mt-16
												hover:bg-gradient-to-br transition-colors duration-300 delay-100 ease-in-out'>
												<p className='font-bold'>Get started</p>
												<FontAwesomeIcon icon={faArrowRightLong} className='text-xl align-middle' />
											</a>
										</Link>
										<div className='flex justify-between w-full lg:w-1/2 mx-auto mt-8 px-4 lg:px-8'>
											<div className='flex justify-start space-x-2 w-1/2 border-r-2 border-r-gray-700'>
												<p className='text-5xl font-bold'>03</p>
												<div className='grid content-center justify-items-start font-bold'>
													<p className='leading-5'>Project(s)</p>
													<p className='text-blue-600 leading-5'>Have Done</p>
												</div>
											</div>
											<div className='flex justify-end space-x-2 w-1/2 border-l-2 border-l-gray-700'>
												<p className='text-5xl font-bold'>02</p>
												<div className='grid content-center justify-items-start font-bold'>
													<p className='leading-5'>Project(s)</p>
													<p className='text-gray-500 leading-5'>On Going</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* <div className='flex flex-col bg-gray-100 w-full mt-16'>
						.<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-8'>
							<Tools icon={faLaravel} color="red" title="Laravel" />
							<Tools icon={faReact} color="cyan" title="React" />
							<Tools icon={faReact} color="blue" title="React Native" />
							<Tools icon={faPalette} color="sky" title="TailwindCSS" />
							<Tools icon={faFontAwesome} color="green" title="FontAwesome" />
							<Tools icon={faFigma} color="gray" title="Figma" />
						</div>
					</div> */}
				</main>
			</div>
		</div>
	)
}

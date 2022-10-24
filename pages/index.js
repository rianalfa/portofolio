import 'font-awesome/css/font-awesome.min.css'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
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
				<main className='flex flex-col content-center h-full pt-8 lg:pt-20'>
					<div className='grow text-gray-700 text-xs md:text-base w-full max-w-7xl mb-4 mx-auto px-4 lg:px-8 py-2 lg:py-4'>
						<div className={`flex flex-col-reverse lg:flex-row space-x-0 lg:space-x-4 space-y-4 space-y-reverse lg:space-y-0 w-full h-full`}>
							{/* Main Content */}
							<div className='flex flex-col rounded-2xl w-full p-0 md:p-16 z-40'>
								<div className='flex flex-col w-full'>
									<div className='flex flex-col cursor-default animate-scale-small animation-duration-1000'>
										<h1 className='text-4xl lg:text-5xl text-gray-800 font-black text-center'>Hi there</h1>
										<h1 className='text-4xl lg:text-5xl text-gray-800 text-center mt-4'>Welcome to project <span className='font-aremat bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-cyan-400 animate-gradient-x'>alfa</span></h1>
										<p className='text-lg lg:text-xl text-gray-800 font-bold text-center w-3/4 mx-auto mt-8'>I&apos;m a freelancer as a Full-Stack Web & Mobile App Developer based in Payakumbuh, Indonesia. I work remotely on projects for my clients.</p>
										<p className='text-xl font-semibold text-center mt-4'></p>
										<Link href="/detail">
											<a className='inline-flex justify-between items-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-full w-3/4 mx-auto px-8 py-4 mt-16
												hover:bg-gradient-to-br animate-gradient-x transition-colors duration-300 delay-100 ease-in-out'>
												<p className='font-bold'>Get started</p>
												<FontAwesomeIcon icon={faArrowRightLong} className='grow-0 text-xl align-middle animate-bounce-right' />
											</a>
										</Link>
										<div className='flex justify-between w-full lg:w-1/2 mx-auto mt-8 lg:mt-16 px-4 lg:px-8'>
											<div className='flex justify-start space-x-2 w-1/2 border-r-2 border-r-gray-700'>
												<p className='text-5xl font-bold'>05</p>
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
				</main>
			</div>
		</div>
	)
}

import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact'
import styles from '../styles/Home.module.css'
import 'font-awesome/css/font-awesome.min.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
	return (
		<div className='antialiased overflow-y-hidden'>
			<div className='fixed bg-blue-600 shadow-md shadow-blue-300 w-full t-bold mb-4 z-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center py-4 lg:justify-start lg:space-x-10'>
						<div className='flex justify-start items-center flex-1'>
							<p className='text-3xl text-white font-bold cursor-default'>ALFA</p>
						</div>
						<div className='flex justify-end items-center space-x-8 text-xl text-white'>
							<Contact title='Email' item='rianalfa14@gmail.com' icon={faEnvelope} />
							<Contact title='Phone Number' item='+62 831-8040-5022' icon={faPhone} />
							<Contact title='Instagram' item='@fckinastronaut' icon={faInstagram} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

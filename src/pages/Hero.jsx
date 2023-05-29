import React from 'react'
import Coral from '../assets/coral2.jpg'
import { VideoModal } from '../components'

const Home = () => {
    return (
        <div id='home' className=''>
            <div style={{
                backgroundImage: `url(${Coral})`,
            }} className='flex m-auto justify-center h-screen bg-cover bg-center opacity-80 shadow-2xl	  '>
                <div className='flex flex-col gap-4 justify-center items-center text-center p-4 mb-32'>
                    <h2 className='text-3xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] italic'>Welcome to the</h2>
                    <h1 className='text-6xl tracking-wider text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Feridhoo Coral Restoration Project</h1>
                    <h2 className='text-3xl text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] italic'>Maldives</h2>
                    <VideoModal />
                </div>
            </div>
        </div>
    )
}

export default Home


import React from 'react'
import './Darwin.css'


const Parchment = () => {
    return (
        <div id='parch'>
            <main className=''>
                <div id="parchment" className=''></div>
                <div id="contain">
                    <a className='text-2xl text-center md:text-2xl 2xl:text-3xl' href='restoration'>Look our Coral Restoration structures → </a>
                    <p className='text-3xl leading-8 2xl:text-5xl'>
                        Charles Darwin first noticed that corals rolling around under his ship quickly turned white and died, but by securing the loose coral to a piece of bamboo pounded in the sand they would survive.
                        For this he is credited with being the first coral restorationist. </p>
                </div>
            </main>

            <svg>
                <filter id="wavy2">
                    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                    <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
            </svg>
        </div>
    )
}

export default Parchment
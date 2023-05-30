import React from 'react'
import Maldive from '../../assets/maldive.jpg'
import Coral3 from '../../assets/coral3.jpg'
import Parchment from './Parchment'
import Wrapper from '../../hoc/Wrapper'

const Darwin = () => {
    return (
        <div className='relative'>
                <div>
                    <img src={Coral3} alt="Maldive" className='md:block object-cover h-[77vh] w-full' />
                </div>
            <div className='absolute top-12 md:top-0 md:left-[25%] md:w-[50%]'>
                <Parchment />
            </div>
        </div>
    )   
}

export default Darwin


import React from 'react'
import Maldive from '../../assets/maldive.jpg'
import Coral3 from '../../assets/coral3.jpg'
import Parchment from './Parchment'

const Darwin = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className="h-[77vh]">
                    <Parchment />
                </div>
                <div>
                    <img src={Maldive} alt="Maldive" className='hidden md:block object-cover h-[77vh] w-full' />
                </div>
            </div>
        </div>
    )   
}

export default Darwin


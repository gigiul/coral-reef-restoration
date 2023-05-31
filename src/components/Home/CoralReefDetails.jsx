import React from 'react'
import CardReef from './CardReef'
import { firstReefCard, secondReefCard } from '../../constants'

const CoralReefDetails = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <CardReef obj={firstReefCard} />
                <CardReef obj={secondReefCard} />
            </div>
        </div>
    )
}

export default CoralReefDetails
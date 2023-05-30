import React from 'react'

const Wrapper = ({ Component, id }) => {
    return (
        <div className='sm:px-16 px-6 sm:py-16 py-10 relative z-0 m-auto'>
            <span className='hash-span' id={id} >
                &nbsp;
            </span>
            <Component />
        </div>
    )
}

export default Wrapper
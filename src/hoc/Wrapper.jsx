import React from 'react'

const Wrapper = ({ Component, id }) => {
    return (
        <div>
            <span className='hash-span' id={id} >
                &nbsp;
            </span>
            <Component />
        </div>
    )
}

export default Wrapper
import React from 'react'

const Spinner = (props) => {
    return (
        <div className='d-flex bg-light rounded p-2 justify-content-center'>
        <div className={`spinner-${props.type} text-dark`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    )
}

export default Spinner
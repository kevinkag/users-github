import React from 'react'

const NotFound = (props) => {
    return (
        <div className='fs-5 p-1'>
            {
                props.type === 'search-more' ?
                    <>No hay resultados.
                        <br />
                        <div className='fs-6'>pusla <strong className='fs-6'>Enter</strong> para buscar usuario especifico.</div>
                    </>
                    : <>
                        No se ha encontraron datos.
                    </>
            }
        </div>
    )
}

export default NotFound
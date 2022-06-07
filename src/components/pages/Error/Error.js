import React from 'react'
import TitleText from '../../atoms/TitleText'

const Error = () => {
  return (
    <div>
        <div style={{backgroundColor:'#fff', marginTop: '1vh', padding: '1vh'}}>
           <TitleText>Error, no hay usuarios con este nombre</TitleText>
        </div>
    </div>
  )
}

export default Error
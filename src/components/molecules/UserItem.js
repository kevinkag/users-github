import React from 'react'

const UserItem = (props) => {
    
  return (
   <>
    <li className='mt-1 p-1 border-bottom shadow-sm' onClick={props.onClick}>
        <img src={props.img} className="avatar me-2" alt="..."/>
            {props.children}
    </li>
   </>
  )
}

export default UserItem
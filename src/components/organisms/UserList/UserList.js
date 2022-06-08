import React, { useEffect } from 'react'
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, usersList } from '../../../store/slices/UsersSlice';
import UserCard from '../../molecules/UserCard'
import { useStyles } from './userlistStyles';

const UserList = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const list = useSelector(usersList)
 
  
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  


  return (
    <List className={classes.root}>
    {
      list.map((item, key) => (
        <div key={key}>
          <UserCard item={item}/>
        </div>
      ))
    }
    </List>
  )
}

export default UserList
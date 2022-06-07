import React from 'react';
import {ListItem,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStyles } from './searchcarditemStyles';
import { useDispatch } from 'react-redux';
import { setDataByKey, setUserInLocate } from '../../../store/slices/UsersSlice';
import { fetchOtherUser } from '../../../utils/actions';

const SearchCardItem = ({item}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const classes = useStyles()

  const isLocate = async() => {
    if (location === `/`){
      navigate(`user/${item.login}`)
    }
    dispatch(setUserInLocate(item.login))
  }

  return (
    <div onClick={isLocate}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar
                className={classes.avatar}
                src={item.avatar_url}
              />
            </ListItemAvatar>
            <ListItemText id='a' primary={item.login} />
          </ListItem>
    </div>
  );
}

export default SearchCardItem

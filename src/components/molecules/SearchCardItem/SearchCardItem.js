import React from 'react';
import {ListItem,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './searchcarditemStyles';

const SearchCardItem = ({item, key}) => {
  const navigate = useNavigate()
  const classes = useStyles()
  return (
    <div onClick={() => navigate(`user/${item.login}`)}>
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

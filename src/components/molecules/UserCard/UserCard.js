import React from 'react';
import {Grid, Paper, ButtonBase} from '@material-ui/core';
import { useStyles } from './usercardStyles';
import TitleText from '../../atoms/TitleText/TitleText';
import { useNavigate,  } from 'react-router-dom'

const UserCard = ({item}) => {
 
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <div 
    style={{ cursor: 'pointer' }}
    className={classes.root} 
    onClick={() => {
      navigate(`user/${item.login}`);
    }}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.avatar_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <TitleText className='title'>
                    {item.login}
                </TitleText>
                <TitleText className='description'>
                    {item.type}
                </TitleText>
                
              </Grid>
            </Grid>        
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserCard
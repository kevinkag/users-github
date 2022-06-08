import React, { useEffect } from 'react';
import { Grid, Paper, Button, ButtonGroup, Typography, ButtonBase } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setDataByKey, userDetails } from '../../../store/slices/UsersSlice';
import { fetchDataByKey } from '../../../utils/actions';
import { useStyles } from './useritemStyle';
import Error from '../../pages/Error';

const UserItem = () => {
  const classes = useStyles();
  const { login } = useParams();
  const user = useSelector(userDetails)
  const dispatch = useDispatch()
  const handle = async() => {
    dispatch(setDataByKey(await fetchDataByKey(login)))
  }
  
  useEffect(() => {
    handle()
  }, [])
  
  


  return (
    user ?
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={user.avatar_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {user.login}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {user.name}
                </Typography>
                {user.location &&
                  <Typography variant="body2" gutterBottom>
                    location: {user.location}
                  </Typography>
                }
                {user.company &&
                  <Typography
                    variant="body2"
                    color='textSecondary'>
                    company: {user.company}
                  </Typography>

                }
              </Grid>
              {
                <Grid item>
                  <ButtonGroup variant="text" color="primary">
                    {user.public_repos > 0 && (<Button>repos: {user.public_repos}</Button>)}
                    {<Button onClick={() => window.open(user.html_url)}>profile</Button>}
                  </ButtonGroup>
                </Grid>
              }
            </Grid>
            <Grid item>
              <Typography variant="body1" color="textSecondary" align='right'>
                ID: {user.id}
              </Typography>
              <Typography variant="body2" color="textSecondary">followers: {user.followers}</Typography>
              <Typography variant="body2" color="textSecondary">following: {user.following}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    : 
     <Error/>
  );
}

export default UserItem

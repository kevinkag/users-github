import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(1)
    },
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: '100vw',
    },
    image: {
      width: 200,
      height: 200,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: 25
    },
}));
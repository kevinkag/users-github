import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      flex: 1,
      padding: theme.spacing(1.5),
    },
    iconButton: {
      
    },
    list: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
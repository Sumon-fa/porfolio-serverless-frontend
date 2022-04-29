import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
  },
  root: {
    display: 'flex',

    justifyContent: 'center',
    alignContent: 'center',
  },
  sectionDark: {
    padding: theme.spacing(10, 5, 0, 5),
  },
  responsiveImg: {
    width: '100%',
    height: 'auto',
  },

  hover: {
    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
}));

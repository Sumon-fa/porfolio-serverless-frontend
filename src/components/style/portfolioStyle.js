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
    padding: theme.spacing(10, 0, 8, 0),
  },
}));

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
    padding: theme.spacing(10, 5, 8, 5),
  },
  responsiveImg: {
    width: '100%',
    height: 'auto',
  },

  sectionTitle: {
    fontFamily: 'auto !important',
    fontWeight: '400 !important',

    marginBottom: '50px !important',
  },
}));

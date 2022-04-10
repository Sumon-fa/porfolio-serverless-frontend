import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainer: {
    marginLeft: 'auto',
  },

  tab: {
    fontFamily: 'Raleway',
    textTransform: 'none',
    color: '#fff',
  },
}));

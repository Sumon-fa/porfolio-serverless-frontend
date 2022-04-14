import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  photo: {
    backgroundImage: `linear-gradient(to bottom right,#04303140,#00606473),url('https://images.unsplash.com/photo-1649083048455-01f6827c24d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')`,
    height: 'auto',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  headerTitle: {
    fontSize: '4.5rem !important',
    fontWeight: '700 !important',
    fontFamily: 'Raleway !important',
    padding: theme.spacing(2, 0),
  },
  headerContent: {
    fontSize: '2.5rem !important',
    fontWeight: '600 !important',
  },
}));

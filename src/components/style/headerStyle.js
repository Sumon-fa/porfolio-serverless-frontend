import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  photo: {
    backgroundImage: `linear-gradient(to bottom right,#04303140,#00606473),url('https://images.unsplash.com/photo-1649083048455-01f6827c24d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')`,
    height: 'auto',
    minHeight: '90vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}));

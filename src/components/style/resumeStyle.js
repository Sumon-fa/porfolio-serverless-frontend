import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  cardSection: {
    margin: theme.spacing(10, 0, 0, 0),
  },
  sectionTitle: {
    fontFamily: 'auto !important',
    fontWeight: '400 !important',
    marginBottom: '50px !important',
  },
  photo: {
    backgroundImage: `linear-gradient(to bottom right,#04303140,#00606473),url("https://cdn-techno.konbini.com/fr/files/2021/04/fond-noir.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

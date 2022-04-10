import React, { Fragment } from 'react';
import girl from '../../assets/girl.png';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';

import { Container, CssBaseline, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  photo: {
    backgroundImage: `url('https://images.unsplash.com/photo-1649083048455-01f6827c24d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')`,
    height: '100vh',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  title: {},
  name: {
    fontSize: '7rem',
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.photo}
      sx={{
        //bgcolor: '#cfe8fc',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <CssBaseline />
      <div className={classes.toolbarMargin} />
      <Box sx={{ margin: 'auto', color: '#fff', fontWeight: '600' }}>
        <Typography variant="h2" className={classes.name}>
          I am Sumon Fakir
        </Typography>
        <Typography variant="h4" className={classes.title}>
          Web Developer
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;

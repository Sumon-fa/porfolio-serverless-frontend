import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import Navbar from '../ui/Navbar';
import { useStyles } from '../style/headerStyle';

import { CssBaseline, Typography } from '@mui/material';

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
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
    </Fragment>
  );
};

export default Header;

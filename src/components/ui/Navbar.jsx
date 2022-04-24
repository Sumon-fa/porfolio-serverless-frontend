import React from 'react';
import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useStyles } from '../style/navStyle';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  function handleChange(e, value) {
    setValue(value);
  }

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h2" component="h6">
            Portfolio
          </Typography>

          <Tabs
            value={value}
            className={classes.tabContainer}
            onChange={handleChange}
          >
            <Tab
              sx={{
                fontFamily: 'Raleway',
                textTransform: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
              }}
              label="Home"
            />
            <Tab
              sx={{
                fontFamily: 'Raleway',
                textTransform: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
              }}
              label="About"
              component={Link}
              to="/about"
            />
            <Tab
              sx={{
                fontFamily: 'Raleway',
                textTransform: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
              }}
              label="Resume"
            />
            <Tab
              sx={{
                fontFamily: 'Raleway',
                textTransform: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
              }}
              label="Portfolio"
            />
            <Tab
              sx={{
                fontFamily: 'Raleway',
                textTransform: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
              }}
              label="Contact"
              component={Link}
              to="/contact"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
export default Navbar;

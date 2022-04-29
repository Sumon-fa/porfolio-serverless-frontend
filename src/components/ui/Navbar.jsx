import React from 'react';
import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useStyles } from '../style/navStyle';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { navData } from '../componentData/navData';
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
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontSize: '2.5',
              marginLeft: '110px',
              fontWeight: 'lighter',
              fontFamily: 'Quicksand',
            }}
          >
            Sumon Fakir
          </Typography>

          <Tabs
            value={value}
            className={classes.tabContainer}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            {navData.map((nav, i) => (
              <Tab
                sx={{
                  fontFamily: 'Raleway ',
                  textTransform: 'none',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
                key={i}
                href={nav.id}
                label={nav.label}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
export default Navbar;

import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useStyles } from '../style/navStyle';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';

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

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h2" component="h6">
            Portfolio
          </Typography>

          <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label="Home" />
            <Tab className={classes.tab} label="About" />
            <Tab className={classes.tab} label="Resume" />
            <Tab className={classes.tab} label="Portfolio" />
            <Tab className={classes.tab} label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
export default Navbar;

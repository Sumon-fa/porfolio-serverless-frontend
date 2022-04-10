import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useStyles } from '../style/headerStyle';
import {
  AppBar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext } from '@mui/lab';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { MenuOpenRounded } from '@mui/icons-material';
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

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h4">Portfolio</Typography>

            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" Id="Home" />
              <Tab className={classes.tab} label="About" Id="About" />
              <Tab className={classes.tab} label="Resume" />
              <Tab className={classes.tab} label="Portfolio" Id="Portfolio" />
              <Tab className={classes.tab} label="Contact" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
export default Header;

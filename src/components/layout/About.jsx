import React, { Fragment, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import sumon from '../../assets/sumon.jpg';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LanguageIcon from '@mui/icons-material/Language';
import { useStyles } from '../style/aboutStyle';
import { getResumeData } from '../../store/actions/headerActions';
import { useDispatch, useSelector } from 'react-redux';

const About = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { resumeData } = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getResumeData());
  }, [dispatch]);

  return (
    <Card className={classes.cardSection}>
      <CardContent>
        <Typography
          variant="h2"
          component="h3"
          className={classes.sectionTitle}
        >
          About
        </Typography>
        <Typography variant="body1" className={classes.cardBody1}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs="4">
            <img style={{ width: '100%' }} alt="sumon" src={sumon} />
          </Grid>
          <Grid item xs="8">
            <Typography variant="subtitle2" className={classes.subTitle1}>
              Web Developer
            </Typography>
            <Typography variant="body2" className={classes.body2Height}>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
            <Grid container spacing={5}>
              {resumeData.map((data, i) => (
                <Fragment key={i}>
                  <Grid item xs="6">
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.bgcolor}>
                            <EmailIcon className={classes.icon} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.email} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.bgcolor}>
                            <PhoneIphoneIcon className={classes.icon} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.phone} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar className={classes.bgcolor}>
                            <GitHubIcon className={classes.icon} />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.github} />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs="6">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.bgcolor}>
                          <LinkedInIcon className={classes.icon} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={data.linkedin} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.bgcolor}>
                          <LocationCityIcon className={classes.icon} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={data.city} />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar className={classes.bgcolor}>
                          <LanguageIcon className={classes.icon} />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={data.website} />
                    </ListItem>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
            <Typography variant="body2" className={classes.body2Height}>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;

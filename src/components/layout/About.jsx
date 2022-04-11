import React from 'react';
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
import girl from '../../assets/girl.png';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LanguageIcon from '@mui/icons-material/Language';

const About = () => {
  return (
    <Card sx={{ margin: '6em' }}>
      <CardContent>
        <Typography variant="subtitle2">About</Typography>
        <Typography variant="body1">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs="4">
            <img style={{ width: '100%' }} alt="sumon" src={girl} />
          </Grid>
          <Grid item xs="8">
            <Typography variant="subtitle2">Web Developer</Typography>
            <Typography variant="body2">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs="6">
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Email" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <PhoneIphoneIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Phone" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <GitHubIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Git-hub" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs="6">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LinkedInIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Linkedin" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationCityIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="City" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LanguageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Website" />
                </ListItem>
              </Grid>
            </Grid>
            <Typography variant="body2">
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

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useStyles } from '../style/contactStyle';
import React from 'react';

const Contact = () => {
  const classes = useStyles();
  return (
    <Card
      sx={{
        maxWidth: '450px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 5px',
      }}
      className={classes.section}
    >
      <CardContent>
        <Typography gutterBottom variant="h5">
          Contact Me
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs="12" sm="6">
              <TextField
                label="First Name"
                placeholder="Enter the first name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs="12" sm="6">
              <TextField
                label="Last Name"
                placeholder="Enter the last name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs="12">
              <TextField
                type="email"
                label="Email"
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs="12">
              <TextField
                type="number"
                label="Phone"
                placeholder="Enter Phone"
                variant="outlined"
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs="12">
              <TextField
                label="Message"
                placeholder="Type Your message here"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs="12">
              <Button type="submit" variant="outlined" fullWidth>
                Submit{' '}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;

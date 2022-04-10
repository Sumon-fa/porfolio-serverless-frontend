import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useStyles } from '../style/portfolioStyle';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Box className={classes.sectionDark}>
      <Grid container Id="Portfolio" className={classes.root}>
        <Grid item xs="12" sm="8">
          <Typography variant="h3">Portfolio</Typography>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid container id="Portfolio" spacing={2}>
          {itemData.map((item) => (
            <Grid item xs="6" sm="2" lg="3">
              <Box className={classes.imageContainer}>
                <img alt={item.title} src={item.img} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
];

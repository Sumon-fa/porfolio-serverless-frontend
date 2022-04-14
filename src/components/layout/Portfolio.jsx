import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useStyles } from '../style/portfolioStyle';
import {
  Container,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

export default function Portfolio() {
  const classes = useStyles();
  return (
    <Box className={classes.sectionDark} id="Portfolio">
      <Typography
        variant="h2"
        component="h4"
        color="secondary"
        sx={{ textAlign: 'center' }}
        className={classes.sectionTitle}
      >
        Portfolio
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {itemData.map((item, i) => (
            <Grid item xs={6} sm={6} lg={4} key={i}>
              <a rel="noreferrer" target="_blank" href={item.url}>
                <ImageListItem
                  className={classes.responsiveImg}
                  target="_blank"
                >
                  <img
                    src={item.img}
                    srcSet={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Food-Order-App',
    rows: 2,
    cols: 2,
    featured: true,
    url: ' https://react-http-e353e.firebaseapp.com/',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Redux-Cart',
    url: 'https://demo-redux-cart.netlify.app/',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'BigShop',
    url: ' https://bigshopdummy.herokuapp.com/',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    rows: 2,
    cols: 2,
    featured: true,
  },
];

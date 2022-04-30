import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useStyles } from '../style/skillsStyle';
import htmlcssjs from '../../assets/htmlcssjs.png';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.svg';
import lambda from '../../assets/Lambda.png';
import mongodb from '../../assets/mongodb.png';

const Skills = () => {
  const classes = useStyles();

  return (
    <Box className={classes.cardSection} id="skills">
      <Typography
        variant="h2"
        component="h4"
        color="secondary"
        sx={{ textAlign: 'center' }}
        className={classes.sectionTitle}
      >
        Skills
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 6 }}
        sx={{ justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300, textAlign: 'center' }}>
            <CardContent>
              <Typography sx={{ marginBottom: '2rem' }}>HTML-CSS-JS</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image={htmlcssjs}
              style={{ objectFit: 'contain' }}
              alt="html"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300, textAlign: 'center' }}>
            <CardContent>
              <Typography sx={{ marginBottom: '2rem' }}>REACT-REDUX</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image={react}
              style={{ objectFit: 'contain' }}
              alt="react"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300, textAlign: 'center' }}>
            <CardContent>
              <Typography sx={{ marginBottom: '2rem' }}>
                AWS LAMDA-AWS CLOUD
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image={lambda}
              style={{ objectFit: 'contain' }}
              alt="aws"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300, textAlign: 'center' }}>
            <CardContent>
              <Typography sx={{ marginBottom: '2rem' }}>
                NodeJs{'  '}{' '}
              </Typography>
            </CardContent>
            <CardMedia
              sx={{
                display: 'inline-block',
                width: '194px',
                objectFit: 'contain',
              }}
              component="img"
              height="140"
              image={nodejs}
              alt="node"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card sx={{ minHeight: 300, textAlign: 'center' }}>
            <CardContent>
              <Typography sx={{ marginBottom: '2rem' }}>
                MONGODB-DYNAMODB
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image={mongodb}
              style={{ objectFit: 'contain' }}
              alt="mongodb"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;

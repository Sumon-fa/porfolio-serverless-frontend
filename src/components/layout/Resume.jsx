import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from '../style/resumeStyle';

const Resume = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cardSection} id="resume">
      <Typography
        variant="h2"
        component="h4"
        color="secondary"
        sx={{ textAlign: 'center' }}
        className={classes.sectionTitle}
      >
        Resume
      </Typography>

      <Container maxWidth="lg" sx={{ color: '#fff' }} className={classes.photo}>
        <Grid container>
          <Grid item lg="5" sm="12">
            <Timeline sx={{ height: '60vh', justifyContent: 'center' }}>
              <TimelineItem sx={{ height: '20vh' }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: '#fff',
                      border: '2px solid #1f5297',
                      height: '16px',
                      width: '16px',
                    }}
                  />
                  <TimelineConnector sx={{ background: '#1f5297' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
                  >
                    Education
                  </Typography>
                  <Typography
                    sx={{ fontFamily: 'Raleway' }}
                    variant="subtitle2"
                  >
                    Business College Helsinki
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    2018-2019
                  </Typography>
                  <Typography variant="body2">
                    Vocational Qualification In ICT
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ height: '20vh' }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: '#fff',
                      border: '2px solid #1f5297',
                      height: '16px',
                      width: '16px',
                    }}
                  />
                  <TimelineConnector sx={{ background: '#1f5297' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
                  >
                    Training
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    BearIt Oy
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    2022-Continue
                  </Typography>
                  <Typography variant="body2">
                    Coding and Finnish Language
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item lg="5" sm="12">
            <Timeline sx={{ height: '60vh', justifyContent: 'center' }}>
              <TimelineItem sx={{ height: '20vh' }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: '#fff',
                      border: '2px solid #1f5297',
                      height: '16px',
                      width: '16px',
                    }}
                  />
                  <TimelineConnector sx={{ background: '#1f5297' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
                  >
                    Education
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    Business College Helsinki
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    2018-2019
                  </Typography>
                  <Typography variant="body2">
                    Vocational Qualification In ICT
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem sx={{ height: '20vh' }}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: '#fff',
                      border: '2px solid #1f5297',
                      height: '16px',
                      width: '16px',
                    }}
                  />
                  <TimelineConnector sx={{ background: '#1f5297' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: '-webkit-body', marginBottom: '16px' }}
                  >
                    Training
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    BearIt Oy
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: 'Raleway' }}
                  >
                    2022-Continue
                  </Typography>
                  <Typography variant="body2">
                    Coding and Finnish Language
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;

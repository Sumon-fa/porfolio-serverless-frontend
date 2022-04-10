import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Grid, Typography } from '@mui/material';
import React, { Fragment } from 'react';

const Resume = () => {
  return (
    <Fragment>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Resume
      </Typography>
      <Grid container>
        <Grid item lg="5" sm="12">
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5">Education</Typography>
                <Typography variant="subtitle2">
                  Business College Helsinki
                </Typography>
                <Typography variant="subtitle2">2018-2019</Typography>
                <Typography variant="body2">
                  Vocational Qualification In ICT
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5">Training</Typography>
                <Typography variant="subtitle2">BearIt Oy</Typography>
                <Typography variant="subtitle2">2022-Continue</Typography>
                <Typography variant="body2">
                  Coding and Finnish Language
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item lg="5" sm="12">
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5">Education</Typography>
                <Typography variant="subtitle2">
                  Business College Helsinki
                </Typography>
                <Typography variant="subtitle2">2018-2019</Typography>
                <Typography variant="body2">
                  Vocational Qualification In ICT
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5">Training</Typography>
                <Typography variant="subtitle2">BearIt Oy</Typography>
                <Typography variant="subtitle2">2022-Continue</Typography>
                <Typography variant="body2">
                  Coding and Finnish Language
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Resume;

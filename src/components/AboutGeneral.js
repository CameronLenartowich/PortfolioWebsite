import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  bodyText: {
    textAlign: 'left'
  },
  profilePhotoContainer: {
    margin: 'auto'
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
    maxHeight: 'auto',
    maxWidth: '500px'
  }
}));

export default function AboutGeneral() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Grid container spacing={3}>
          <Grid item md={6}>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.bodyText}
          >
            Full Stack web developer currently working for Hilton Worlwide Holdings.
            Started working for Hilton in 2019 with the role of rebuilding large legacy web applications with modern technologies and clean code. 
            The websites register hotel information through forms that are used by employees only.
            This involves many web pages with lots of data that is processed.
            Building React.js websites and .Net Core C# REST API's.
            Introduced and taught various new technologies to the department including React.js, REST API's, and Git Version Control.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.bodyText}
          >
            Prior to Hilton, graduated from a highly rated coding school named Thinkful as a Software Engineer.
            Modern day technologies were learned here such as React.js, Google Firebase, Node.js with Express, and Object Relational Mapping. 
            Good programming practices such as test driven development, agile, version control, algorithms, and data structures were also learned during the time there.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.bodyText}
          >
            Other experience as a web developer includes freelancing building websites for small companies,
            taking programming courses on Udemy.com, and networking with other developers at technology meetups and presentations.
          </Typography>
          {/* <Typography
            variant="body1"
            gutterBottom
            className={classes.bodyText}
          >
            Technology interests other then web development include smart contract development, cyber security, devops, and system configuration.
            Outside of I.T., enjoy's music, cars, economics, sports and outdoors.
          </Typography> */}
          </Grid>
          <Grid item md={6} className={classes.profilePhotoContainer}>
              <img 
                src='./../images/IMG_1442_copy_2.jpeg'
                alt="Profile Picture"
                className={classes.profilePhoto}
              />
          </Grid>
          </Grid>
    </div>
  );
}
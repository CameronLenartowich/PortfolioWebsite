import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {work} from './workContents'
import '../styles/work.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2)
  },
  titleh1: {
    marginTop: theme.spacing(2),
    fontSize: '3.5em',
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center'
  },
  titleh2: {
    fontSize: '2.5em',
    textAlign: 'left'
  },
  titleh3: {
    fontSize: '1.5em',
    textAlign: 'left'
  },
  bodyText: {
    textAlign: 'left'
  },
  workLabel: {
    fontSize: '1.5em',
    textAlign: 'left'
  },
  link: {
    color: 'rgba(0, 0, 0, 0.5)',
    textDecoration: 'none'
  },
  websiteButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'left'
  },
  companyWebsiteButton: {
    marginBottom: theme.spacing(2)
  },
  hiltonSkillsContainer: {
    marginTop: theme.spacing(1)
  },
  workDescriptionContainer: {
    marginTop: theme.spacing(1)
  }
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
      {/* <Typography 
        variant="h1" 
        gutterBottom
        className={classes.titleh1}
      >
        Work
      </Typography> */}
      <Paper className={classes.paper}>
        <Typography
          variant="h2"
          gutterBottom
          className={classes.titleh2}
        >
          Hilton Worldwide Holdings
        </Typography>
        <div
          className={classes.buttonContainer}
        >
        <a
          href="https://www.hilton.com/en/corporate/"
          className={classes.link}
          target="_blank"
        >
        <Button 
          variant="contained"
          className={classes.companyWebsiteButton}
        >
          Company Website
        </Button>
        </a>
        </div>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.bodyText}
        >
          Currently works for Hilton Worldwide Holdings as a full stack web developer.
          The web application's worked on here are available to employees only and inaccessable by the public network.
          Technologies used to rebuild the web applications are:
        </Typography>
        <Grid 
          container 
          spacing={3}
          className={classes.hiltonSkillsContainer}
        >
        <Grid item sm={6} xs={12}>
        <Typography
          variant="h3"
          gutterBottom
          className={classes.titleh3}
        >
          Front End
        </Typography>
        <List component="nav" aria-label="secondary">
          <ListItem>
            <ListItemText primary="React.js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Redux" />
          </ListItem>
          <ListItem>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bootstrap" />
          </ListItem>
        </List>
        </Grid>
        <Grid item sm={6} xs={12}>
        <Typography
          variant="h3"
          gutterBottom
          className={classes.titleh3}
        >
          Back End
        </Typography>
        <List component="nav" aria-label="secondary">
          <ListItem>
            <ListItemText primary=".Net Core C#" />
          </ListItem>
          <ListItem>
            <ListItemText primary="REST API's" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Entity Framework Core" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Microsoft SQL Server" />
          </ListItem>
          <ListItem>
            <ListItemText primary="IIS" />
          </ListItem>
        </List>
        </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Typography
          variant="h2"
          gutterBottom
          className={classes.titleh2}
        >
          Thinkful
        </Typography>
        <div
          className={classes.buttonContainer}
        >
        <a
          href="https://www.thinkful.com/bootcamp/web-development/"
          className={classes.link}
          target="_blank"
        >
        <Button 
          variant="contained"
          className={classes.companyWebsiteButton}
        >
          Program Website
        </Button>
        </a>
        </div>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.bodyText}
      >
        Thinkful is a highly rated coding school in North America. 
        Graduated from Thinkful in 2019 as a software engineer. 
        The following projects were built during the time there:
      </Typography>
      <Grid container spacing={3}>
        {
          work.thinkful.map((value, index) => (
            <Grid item sm={6} xs={12} key={index}>
              <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.workLabel}
                  >
                    {value.name}
                  </Typography>
                <a 
                  href={value.link}
                  target="_blank"
                >
                  <img 
                    className="workImage" 
                    src={value.image} 
                    alt={value.name} 
                  />
                </a>
                <div
                  className={classes.workDescriptionContainer}
                >
                <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.bodyText}
                  >
                    Description: {value.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.bodyText}
                  >
                    Technologies: {value.tools}
                  </Typography>
                  <div 
                    className={classes.buttonContainer}
                  >
                  {  
                    value.name != 'Wikipedia' && value.name != 'Destination Tracker' &&
                  <a
                    href={value.link}
                    target="_blank"
                    className={classes.link}
                  >
                    <Button 
                      variant="contained"
                      className={classes.websiteButton}
                    >
                      Website
                    </Button>
                  </a>
                  }
                  <a
                    href={value.github}
                    target="_blank"
                    className={classes.link}
                  >
                    <Button 
                      variant="contained"
                      className={classes.websiteButton}
                    >
                      Github
                    </Button>
                  </a>
                  </div>
                </div> 
              </Paper>
            </Grid>
          ))
        }
      </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Typography
          variant="h2"
          gutterBottom
          className={classes.titleh2}
        >
          Brookfield Septic
        </Typography>
      <Typography
        variant="body1"
        gutterBottom
        className={classes.bodyText}
      >
        As a freelancer, helped Brookfield Septic with building their online presence.
        This involved building both their website and social media profile.
      </Typography>
      <Grid container spacing={3}>
        {
          work.brookfieldSeptic.map((value, index) => (
            <Grid item sm={6} xs={12} key={index}>
              <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.workLabel}
                  >
                    {value.name}
                  </Typography>
                <a 
                  href={value.link}
                  target="_blank"
                >
                  <img 
                    className="workImage" 
                    src={value.image} 
                    alt={value.name} 
                  />
                </a>
                <div
                  className={classes.workDescriptionContainer}
                >
                <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.bodyText}
                  >
                    Description: {value.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.bodyText}
                  >
                    Technologies: {value.tools}
                  </Typography>
                  <div
                    className={classes.buttonContainer}
                  >
                  <a
                    href={value.link}
                    target="_blank"
                    className={classes.link}
                  >
                    <Button 
                      variant="contained"
                      className={classes.websiteButton}
                    >
                      Website
                    </Button>
                  </a>
                  </div>
                  </div>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
      </Paper>
      </Container>
    </div>
  );
}

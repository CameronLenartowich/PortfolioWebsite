import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {work} from './workContents'
import '../styles/work.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

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
}));

export default function Work() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <h2>Hilton Worldwide Holdings</h2>
        <p>
          I currently work for Hilton Worldwide Holdings as a full-stack web developer.
          My role is to rebuild their legacy web applications with modern day technologies and clean code.
          The web applications are large in size of both data and amount of web pages.
          The web application's are available to employees only so the websites are innaccessed by the public network.
          Technologies that I use to build the web applications are:
        </p>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <h3>Front End</h3>
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
        <Grid item xs={6}>
        <h3>Back End</h3>
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
      <h2>Thinkful</h2>
      <p>
        Thinkful is one of the most prestigious coding school's in North America. I graduated from Thinkful in 2019. I built the following projects during my time there:
      </p>
      <Grid container spacing={3}>
        {
          work.thinkful.map((value, index) => (
            <Grid item xs={6} key={index}>
              <Paper className={classes.paper}>
                <a 
                  href={value.link}
                  target="_blank"
                >
                  <img 
                    className="workImage" 
                    src={value.image} 
                    lt={value.name} 
                  />
                </a>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
      </Paper>

      <Paper className={classes.paper}>
      <h2>Brookfield Septic</h2>
      <p>
        As a freelancer, I helped Brookfield Septic with building their online presence.
        This involved building both their website and social media profile.
      </p>
      <Grid container spacing={3}>
        {
          work.brookfieldSeptic.map((value, index) => (
            <Grid item xs={6} key={index}>
              <Paper className={classes.paper}>
                <a 
                  href={value.link}
                  target="_blank"
                >
                  <img 
                    className="workImage" 
                    src={value.image} 
                    lt={value.name} 
                  />
                </a>
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

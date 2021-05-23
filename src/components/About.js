import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AboutGeneral from './AboutGeneral'
import AboutSkills from './AboutSkills'
import AboutContact from './AboutContact'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
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
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)'
  },
  titleh2: {
    fontSize: '2.5em',
    textAlign: 'left'
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography 
          variant="h1" 
          gutterBottom
          className={classes.titleh1}
        >
          About
        </Typography>
        <Paper
          className={classes.paper}
        >
          <AboutGeneral />
        </Paper>
        <Paper
          className={classes.paper}
        >
          <Typography
            variant="h2"
            gutterBottom
            className={classes.titleh2}
          >
            Skills
          </Typography>
          <AboutSkills />  
        </Paper>

        <Paper
          className={classes.paper}
        >
          <Typography
            variant="h2"
            gutterBottom
            className={classes.titleh2}
          >
            Contact
          </Typography>
          <AboutContact/>
        </Paper>

      </Container>
    </div>
  );
}
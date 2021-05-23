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

const useStyles = makeStyles((theme) => ({
  
}));

export default function AboutGeneral() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Grid container spacing={3}>
          <Grid item xs={6}>
          <p>
            I'm a full-stack web developer and I currently work for Hilton Worlwide Holdings.
            I started working for Hilton in 2019 and I build large sized web applications for them.
            The applicaiton's register hotel information through forms that are used by employees only.
          </p>
          <p>
            Prior to Hilton, I graduated from one of the highest rated coding schools in America.
            The school is named Thinkful and my program specialized in full-stack web development.
          </p>
          <p>
            Other experience I have as a web developer includes freelancing building websites for small companies,
            taking programming courses on Udemy.com, and networking with other developers at meetups.
          </p>
          <p>
            Technology interests that I have other then web development include smart contract development,
            cyber security, devops, and system configuration.
          </p>
          </Grid>
          <Grid item xs={6}>
          <img 
            src='../images/profilePhoto.jpg'
          />
          </Grid>
          </Grid>
    </div>
  );
}
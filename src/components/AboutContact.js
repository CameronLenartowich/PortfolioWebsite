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
  contactLink: {
    color: 'rgba(0, 0, 0, 0.54)',
    textDecoration: 'none'
  }
}));

export default function AboutContact() {
  const classes = useStyles();
  /*
  const storage = props.firebase.storage()
  const storageRef = storage.ref()
  const resumeRef = storageRef.child('Spring2021Resume.pages')
  */

  /*
  const downloadResume = () => {
    resumeRef.getDownloadUrl()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  */

  return (
    <div className={classes.root}>
          <Grid container spacing={3}>

            <Grid item sm={6} xs={12}>
              <List component="nav" aria-label="secondary">
                <a
                  href="https://www.linkedin.com/in/cameron-lenartowich-developer/"
                  target="_blank"
                  className={classes.contactLink}
                >
                  <ListItem button>
                    <ListItemText primary="LinkedIn" />
                  </ListItem>
                </a>
                <a
                  href="https://github.com/CameronLenartowich"
                  target="_blank"
                  className={classes.contactLink}
                >
                  <ListItem button>
                    <ListItemText primary="Github" />
                  </ListItem>
                </a>
                <a
                  href="https://github.com/shaggers"
                  target="_blank"
                  className={classes.contactLink}
                >
                </a>
                <a
                  href="https://www.instagram.com/cameronlenartowich/"
                  target="_blank"
                  className={classes.contactLink}
                >
                  <ListItem button>
                    <ListItemText primary="Instagram" />
                  </ListItem>
                </a>
              </List>
            </Grid>

          </Grid>
          {/* <Button 
            variant="contained" 
            color="primary"
          >
            Download Resume
          </Button> */}
    </div>
  );
}
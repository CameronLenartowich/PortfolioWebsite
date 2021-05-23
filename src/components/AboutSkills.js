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

export default function AboutSkills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h2>Skills</h2>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <h3>Front End</h3>
              <List component="nav" aria-label="secondary">
                <ListItem>
                  <ListItemText primary="HTML" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="CSS" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bootstrap" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Material-UI" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="React.js" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Javascript" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Redux" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={6}>
              <h3>Backend End</h3>
              <List component="nav" aria-label="secondary">
                <ListItem>
                  <ListItemText primary=".Net Core C#" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Node.js" />
                </ListItem>                
                <ListItem>
                  <ListItemText primary="API's" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="REST" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="GraphQL" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="IIS" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Heroku" />
                </ListItem>
              </List>
            </Grid>
          

          
            <Grid item xs={6}>
              <h3>Database Tools</h3>
              <List component="nav" aria-label="secondary">
                <ListItem>
                  <ListItemText primary="SQL" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="NoSQL" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="ORM's" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Entity Framework" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sequelize" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Microsoft SQL Server" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="PostgreSQL" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Google Firebase" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={6}>
              <h3>Development Workflow</h3>
              <List component="nav" aria-label="secondary">
                <ListItem>
                  <ListItemText primary="Git Version Control" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bash Script Command Line" />
                </ListItem>                
                <ListItem>
                  <ListItemText primary="Test Driven Development" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Jest and Enzyme" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Jasmine" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Authentication and Authorization" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Algorithms" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Data Structures" />
                </ListItem>
              </List>
            </Grid>

          </Grid>
    </div>
  );
}
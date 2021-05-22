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

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Paper
          className={classes.paper}
        >
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
          <img 
            src='../images/profilePhoto.jpg'
          />

          <h2>Contact</h2>
          <List component="nav" aria-label="secondary">
            <ListItem>
              <ListItemText primary="214-601-3811" />
            </ListItem>
            <ListItem>
              <ListItemText primary="camtl66@gmail.com" />
            </ListItem>
          </List>

          <List component="nav" aria-label="secondary">
            <a
              href="https://www.linkedin.com/in/cameron-lenartowich-developer/"
              target="_blank"
            >
              <ListItem button>
                <ListItemText primary="LinkedIn" />
              </ListItem>
            </a>
            <a
              href="https://github.com/CameronLenartowich"
              target="_blank"
            >
              <ListItem button>
                <ListItemText primary="Github" />
              </ListItem>
            </a>
            <a
              href="https://www.instagram.com/cameronlenartowich/"
              target="_blank"
            >
              <ListItem button>
                <ListItemText primary="Instagram" />
              </ListItem>
            </a>
          </List>

          <Button variant="contained" color="primary">
            Download Resume
          </Button>

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
        </Paper>

      </Container>
    </div>
  );
}
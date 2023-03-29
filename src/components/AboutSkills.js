import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  titleh3: {
    fontSize: "1.5em",
    textAlign: "left",
  },
}));

export default function AboutSkills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <Typography variant="h3" gutterBottom className={classes.titleh3}>
            Front End
          </Typography>
          <List component="nav" aria-label="secondary">
            <ListItem>
              <ListItemText primary="React" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Svelte" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tailwind" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Material-UI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Typescript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Javascript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="CSS" />
            </ListItem>
            <ListItem>
              <ListItemText primary="HTML" />
            </ListItem>
          </List>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Typography variant="h3" gutterBottom className={classes.titleh3}>
            Backend End
          </Typography>
          <List component="nav" aria-label="secondary">
            <ListItem>
              <ListItemText primary="C#" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Node.js" />
            </ListItem>
            <ListItem>
              <ListItemText primary="REST" />
            </ListItem>
            <ListItem>
              <ListItemText primary="GraphQL" />
            </ListItem>
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
              <ListItemText primary="Microsoft SQL Server" />
            </ListItem>
            <ListItem>
              <ListItemText primary="PostgreSQL" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Google Firebase" />
            </ListItem>
            <ListItem>
              <ListItemText primary="MongoDB" />
            </ListItem>
          </List>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Typography variant="h3" gutterBottom className={classes.titleh3}>
            Development Workflow
          </Typography>
          <List component="nav" aria-label="secondary">
            <ListItem>
              <ListItemText primary="Git Version Control" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Unit and Integration Testing" />
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
            <ListItem>
              <ListItemText primary="Heroku" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vercel" />
            </ListItem>
            <ListItem>
              <ListItemText primary="AWS" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Google Cloud Platform" />
            </ListItem>
          </List>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Typography variant="h3" gutterBottom className={classes.titleh3}>
            Ethereum
          </Typography>
          <List component="nav" aria-label="secondary">
            <ListItem>
              <ListItemText primary="Solidity" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ethers" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hardhat" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Login XYZ" />
            </ListItem>
            <ListItem>
              <ListItemText primary="TheGraph" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

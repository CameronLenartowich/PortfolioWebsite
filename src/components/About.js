import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AboutGeneral from "./AboutGeneral";
import AboutSkills from "./AboutSkills";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(4),
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  titleh1: {
    marginTop: theme.spacing(2),
    fontSize: "3.5em",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6)",
  },
  titleh2: {
    fontSize: "2.5em",
    textAlign: "left",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        {/* <Typography 
          variant="h1" 
          gutterBottom
          className={classes.titleh1}
        >
          About
        </Typography> */}
        <Paper className={classes.paper}>
          <AboutGeneral />
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h2" gutterBottom className={classes.titleh2}>
            Skills
          </Typography>
          <AboutSkills />
        </Paper>
      </Container>
    </div>
  );
}

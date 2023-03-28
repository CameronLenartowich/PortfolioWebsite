import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  bodyText: {
    textAlign: "left",
  },
  profilePhotoContainer: {
    margin: "auto",
  },
  profilePhoto: {
    width: "60%",
    height: "auto",
    maxHeight: "auto",
    maxWidth: "400px",
    borderRadius: "10px",
    margin: "auto",
  },
  title: {
    margin: "0",
    marginTop: "10px",
    textAlign: "left",
  },
  subtitle: {
    margin: "0",
    textAlign: "left",
    marginBottom: "25px",
  },
}));

export default function AboutGeneral() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <h1 className={classes.title}>Cameron Lenartowich</h1>
          <h3 className={classes.subtitle}>Software developer</h3>
          <Typography variant="body1" gutterBottom className={classes.bodyText}>
            I am a software developer with a passion for learning and
            understanding new technologies. I have experience with a wide
            variety of technologies including web development, smart contract
            development, cyber security, and devops.
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
        <Grid item md={4} className={classes.profilePhotoContainer}>
          <img
            src="./../images/IMG_1442_copy_2.jpeg"
            alt="Profile Picture"
            className={classes.profilePhoto}
          />
        </Grid>
      </Grid>
    </div>
  );
}

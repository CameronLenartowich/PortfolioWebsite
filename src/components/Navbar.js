import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./../styles/navbar.css";
import { Link } from "react-router-dom";
import blue from "@material-ui/core/colors/blue";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  link: {
    color: "rgba(0, 0, 0, 0.6)",
    textDecoration: "none",
  },
  appBar: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.7)",
  },
  icons: {
    display: "flex",
    gap: "1rem",
    marginLeft: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.icons}>
            <a
              href="https://www.linkedin.com/in/cameron-lenartowich-developer/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/CameronLenartowich" target="_blank">
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/cameronlenartowich/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
          <div id="largeNavMenu">
            <Link to="/work" className={classes.link}>
              <Button color="inherit">Work</Button>
            </Link>
            <Link to="/" className={classes.link}>
              <Button color="inherit">About</Button>
            </Link>
          </div>
          {/* <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            id="smallNavMenu"
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

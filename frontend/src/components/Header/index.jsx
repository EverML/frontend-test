import React from "react";
import {  Link } from "react-router-dom";


import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(10),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function Header() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Events
        </Typography>
        <Button  color="inherit" component={Link} to="/">Home</Button>
        <Button  color="inherit" component={Link} to="about">About</Button>
        <Button  color="inherit" component={Link} to="/users">Users</Button>
      </Toolbar>
    </AppBar>
  </div>
  );
}

export default Header;

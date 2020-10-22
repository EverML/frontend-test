import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Event from "../Event";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Events({ events }) {

  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="flex-start">
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Events;

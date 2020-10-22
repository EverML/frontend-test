import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Event from "../Event";
import EventContext from "../EventContext";
import Loading from "../Loading";
import Error from "../Error";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Events() {

  const classes = useStyles();
  const {error,events,isLoaded} = useContext(EventContext);

  return error ? <Error/> : isLoaded ? (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="flex-start">
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : <Loading/>;
}

export default Events;

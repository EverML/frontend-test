import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import './index.css';

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    eventImage: PropTypes.string,
    description: PropTypes.string,
    dates: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
  }),
};

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginTop: 10,
    marginLeft:20,
  },
  media: {
    height: 150,
  },
  
});

function shortDesc(desc)
{
  return `${desc.slice(0,100)}...`;
}

function Event({ event }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={event.eventImage}
          title={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {event.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {shortDesc(event.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Event;

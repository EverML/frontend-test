import React from "react";
import {  Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {TwitterShareButton} from "react-share";

import { Twitter } from '@material-ui/icons/'


import './index.css';

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    eventImage: PropTypes.string,
    description: PropTypes.string,
    dates: PropTypes.arrayOf(PropTypes.shape),
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
  actions:{
    justifyContent:'space-around',
  },
  button:{
    display: 'inline-flex'
  },
  icon:{
    alignSelf:'center',
  },
  text:{
    alignSelf:'center'
  }
  
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
      <CardActions className={classes.actions}>

      <TwitterShareButton
          className={classes.button}
          hashtags={['ingenious']}
          via="Ingenious Events App!" 
          url={`https://events-ingenious.com/${event.id} `}
          title={`I'm going to: ${event.title} @ ${event.dates[0].event_date}`} >
             <Twitter/>
             <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
               Tweet This Event!
              </Typography>
      </TwitterShareButton>

        <Button size="small" color="primary" component={Link} to={`/event/${event.id}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Event;

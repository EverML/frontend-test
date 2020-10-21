import React from 'react';
import PropTypes from "prop-types";


Event.propTypes = {
  event: PropTypes.shape({
    id:PropTypes.string,
    title: PropTypes.string,
    eventImage: PropTypes.string,
    description: PropTypes.string,
    dates: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
  }),
};

function Event({ event }) {
  return  <li key={event.id}>
            <h2>{event.title}</h2>  
            <p>{event.description}</p>
          </li>
}

export default Event;
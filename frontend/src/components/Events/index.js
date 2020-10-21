import React from 'react';

import Event from '../Event';




function Events({events}) {
  return (
    <ol>
      {events.map((event) => (
       <Event event={event} key={event.id}/>
      ))}
    </ol>
  );
}

export default Events;
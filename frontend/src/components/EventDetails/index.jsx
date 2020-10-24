import React from 'react';
import {useParams} from 'react-router-dom';

import Loading from '../Loading';



function EventDetails() {
  const [event,setEvent] = React.useState({});
  const [isLoaded, setIsLoaded] = React.useState(false);
  const  { id } = useParams();

  const url =  `http://localhost:3333/events/${id}`;

  React.useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setEvent(result);
      },
      (error) => {
        console.log(error);
      }
    );
}, []);
  


return isLoaded ? <h1>{event.title}</h1> : <Loading/>;
}

export default EventDetails;
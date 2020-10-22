import React from 'react';


const EventContext = React.createContext({
    error: null,
    isLoaded: false,
    events: [],
    setEvents: () => {},
    setError: () => {},
    setIsLoaded: () => {}
});



export default EventContext;

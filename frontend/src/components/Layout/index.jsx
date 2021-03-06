import React from "react";
import {  Link } from "react-router-dom";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import styled from "@emotion/styled";


import Events from "../Events";
import HighLights from "../Highlights";
import EventContext from "../EventContext";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  height:calc(100vh - 65px);
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height:100%;
`;

const LayoutBase = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position:'fixed',
      display:'flex',
      flexDirection:'column',
      alignSelf:'flex-end',
      left: '80%',
      top: '88%',
      '& > *': {
        margin: theme.spacing(1),

      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    
  }),
);




function Layout() {
  const classes = useStyles();
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3333/events")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEvents([...result]);
          console.log(result);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

    return (
      <EventContext.Provider
        value={{
          error,
          isLoaded,
          events,
          setEvents,
          setError,
          setIsLoaded
        }}
      >
        <Container>
          <InnerContainer>
            <LayoutBase>
              <Events/>
              <HighLights />
            </LayoutBase>
          </InnerContainer>
          <div className={classes.root}>
          <Fab color="primary" aria-label="add" component={Link} to="/newEvent"  >
            <AddIcon />
          </Fab>
         
          </div>
        </Container>
       
      </EventContext.Provider>
    );
}

export default Layout;

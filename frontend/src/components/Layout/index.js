import React from "react";
import styled from "@emotion/styled";

import Error from "../Error";
import Loading from "../Loading";
import Events from "../Events";
import HighLights from "../Highlights";

const fakeWait = (value) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1120px;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

function Layout() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/events")
      .then(fakeWait)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEvents(result.events);
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Error error={error} />;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <Container>
        <InnerContainer>
          <TwoColumnLayout>
            <Events events={events} />
            <HighLights />
          </TwoColumnLayout>
        </InnerContainer>
      </Container>
    );
  }
}

export default Layout;

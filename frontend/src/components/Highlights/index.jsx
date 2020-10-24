import React from "react";
import styled from "@emotion/styled";

import Loading from "../Loading";

const EventContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  background-color:#FFF;
  width:100%;
`;

const EventImage = styled.img`
  height: 100px;
  margin-right: 30px;
`;

const Title = styled.p`
  font-size: 14px;
`;

const ShortDesc = styled.p`
  font-size: 10px;
`;

const Location = styled.p`
  display: flex;
  align-self: flex-end;
  font-size:small;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right:0.5rem;
`;

function Highlights() {
  const [highlights, setHighlights] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("http://localhost:3333/events/featured")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setHighlights([...result]);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  if (!isLoaded) return <Loading />;
  //return <Events events={highlights} />
  else
    return (
      <div>
        <header>Today's Highlights</header>
        <hr />
        {highlights.map((event) => (
          <EventContainer key={event.id}>
            <EventImage src={event.eventImage} alt={event.title} />
            <Content>
              <Title>{event.title}</Title>
              <ShortDesc>{event.description.slice(0,50)+'...'}</ShortDesc>
              <Location>{event.location}</Location>
            </Content>
          </EventContainer>
        ))}
      </div>
    );
}

export default Highlights;

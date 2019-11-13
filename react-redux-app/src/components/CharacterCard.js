import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  background-color: #2e557c;
  margin: 2% 2% 2% 2%;
  border: 2px solid #203b56;
  padding: 2%;
  box-shadow: -1px 1px 3px 4px #203b56;
  color: #d7cfcf;
  border-radius: 5px;
`;

const Name = styled.h1`
  font-size: 1.2rem;
  text-decoration: underline;
  text-transform: uppercase;
  color: #eca262;
  font-family: jedi-font;
`;
const Img = styled.img`
    max-width: 100%;
`;

const CharacterCard = props => {
  return (
    <Card>
      <Img src={props.img} />
      <Name>{props.name}</Name>
    </Card>
  );
};

export default CharacterCard;

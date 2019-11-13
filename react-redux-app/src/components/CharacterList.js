import React from "react";
import { connect } from "react-redux";
import { getAvatar } from "../actions/actions";
import styled from "styled-components"
import CharacterCard from "./CharacterCard"

const Container = styled.div`
  width: 90%;
  background-color: rgba(126, 120, 99, 0.2);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 2% 0 5%;
  -webkit-box-shadow: -1px 1px 5px 9px #6a180e;
  -moz-box-shadow: -1px 1px 5px 9px #6a180e;
  box-shadow: -1px 1px 5px 9px #6a180e;
  border-radius: 10px;
`;

const Button = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 2%;
    margin-top: 1%;
    background-color: #203b56;
    color: white;
`;


function CharacterList(props) {
  console.log("CharacterList", props);

  return (
      <>
      <Button onClick={() => props.getAvatar()}>Get characters </Button>
    <Container>
      
        {props.characters.map(character => (
         <CharacterCard name={character.name} img={character.photoUrl} character={character}/>
        ))}
    </Container>
    </>
  );
}

const mapDispatchToProps = {
  getAvatar
};

export default connect(
  state => state,
  mapDispatchToProps
)(CharacterList);

import React from "react";
import styled, { css } from 'styled-components';

const CharList = styled.div`
  background: #93B169;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 16px 305px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
  height: 280px;
  text-align: start;
  font-family: 'Patrick Hand', cursive;
`

const Image = styled.img`
  height: 80px;
  width: 80px;
  border: 1px solid black;
  border-radius: 5rem;
`

export default function CharacterCard(props) {
  // const { title, director, metascore, stars, id} = props.movie;


  return (
    <CharList className='char-list'>
      <Image src={props.image}></Image>
      <h1>Name : {props.name}</h1>
      <h3> Status : {props.status}</h3>
      <h3>Location: {props.location.name}</h3>
      <h3>Origin: {props.origin.name}</h3>
    </CharList>
  )
}

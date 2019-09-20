import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters ] = useState([]);
  

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    .then((res) => {
    setCharacters(res.data.results);
    })
    .catch(error => {
    console.error('Server Error', error);
    });
  }, []);


  return (
    <section className="character-list">
      {characters.map((char) => {
        return (
          <CharacterCard  key={char.id} name={char.name} image={char.image} location={char.location} status={char.status} origin={char.origin} />
        )
      })}
    </section>
  );
}

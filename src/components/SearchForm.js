import React, { useState , useEffect } from "react";
import styled, { css } from 'styled-components';
import CharacterList from "./CharacterList";

const SearchBar = styled.form`
display: flex;
`

const Input = styled.input`
height: 30px;
margin-top: 31px;
width: 155px;
text-align: center;
font-size: 20px;
color: white;
background: #6990B1;
border: 3px solid white;
outline: none;
border-radius: 5px;
`

export default function SearchForm(props) {

  const [searchChar, setSearchChar] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    e.preventDefault();
    const searchedTerm = e.target.value;
    console.log(e.target.value);
    setSearchChar(searchChar);
    setSearchResults(
    props.characters.filter(member => member.name.match(searchChar))
    );
  };
 
  return (
        <SearchBar handleChange={handleChange} searchTerm={searchChar} className='search-bar'>
          <i id='search-bar' class="fas fa-search"></i>
          <Input id='search-input' 
          id="name"
          type="text"
          name="textfield"
          value={props.searchTerm}
          onChange={handleChange}></Input>
        </SearchBar>
  );
}

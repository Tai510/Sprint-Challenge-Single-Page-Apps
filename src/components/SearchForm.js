import React, { useState } from "react";
import styled, { css } from 'styled-components';

const SearchBar = styled.div`
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

export default function SearchForm() {
 
  return (
        <SearchBar className='search-bar'>
          <i id='search-bar' class="fas fa-search"></i>
          <Input id='search-input' placeholder='search'></Input>
        </SearchBar>
  );
}

import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from './components/WelcomePage.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchForm from "./components/SearchForm.js";
import styled, { css } from 'styled-components';

const TopSection = styled.div`
display: flex;
`




export default function App() {

  const [name, setName] = useState("");

  const searchHandler = (e, search) => {
    e.preventDefault();
    setName(search.name);
  };

  return (
    <main>
    <Router>
      <TopSection>
        <SearchForm />
        <WelcomePage />
      </TopSection>
        <Route exact path="/" component={CharacterList} />
    </Router>
    </main>
  );
}

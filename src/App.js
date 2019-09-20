import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from './components/WelcomePage.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
    <Router>
      <WelcomePage />
      <Route exact path="/" component={CharacterList} />
    </Router>
    </main>
  );
}

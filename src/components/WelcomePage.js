import React from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const H1Header = styled.h1`
text-align: center;
font-family: 'Patrick Hand', cursive;
font-size: 30px;
margin-left: 208px;
color: white;
text-shadow: 1px 1px black;
`

const Header = styled.section`
  display: flex;
  font-family: 'Patrick Hand', cursive;
  justify-content: space-evenly;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <H1Header>Welcome to the ultimate fan site!</H1Header>
        <Link id='nav-link' to='/'>View List</Link>
      </Header>
    </section>
  );
}

//import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Div>
      <div>
        <Logo>DEVELOPER</Logo>
      </div>
      <div>
        <Menu>About</Menu>
        <Menu>Ability</Menu>
        <Menu>Portfolio</Menu>
        <Menu>Contact</Menu>
      </div>
    </Div>
  )

}

const Div = styled.div`
  background-color: green;
  height: 85px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Logo = styled.button`
  color: white;
  background-color: transparent;

  font-size: 25px;
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: 5px;
  
  border-style: none;
  outline: none;
  cursor: pointer;
`;

const Menu = styled.button`
  color: #c8dbc8;
  &:hover {
    color: white;
  }
  background-color: transparent;

  font-size: 15px;

  margin-left: 30px;
  border-style: none;
  outline: none;
  cursor: pointer;
`;

export default Header;

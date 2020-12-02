import React, { useState } from "react";
import styled from 'styled-components';

const menuID = ["home", "about", "ability", "portfolio", "contact"];

function Header() { 
  const [color, setColor] = useState("#c8dbc8");

  const move = (e) => {
    const index = e.target.value;

    var Location = document.getElementById(menuID[index]).offsetTop;
    var menuHeight = document.querySelector("#menu").offsetHeight;
    window.scrollTo({top:Location - menuHeight, behavior:"smooth"})

    setColor("white");
  }

  return (
    <Div id="menu">
      <div>
        <Logo value={0} onClick={ move } >DEVELOPER</Logo>
      </div>
      <div>
        <Menu value={1} color={color} onClick={ move }>About</Menu>
        <Menu value={2} onClick={ move }>Ability</Menu>
        <Menu value={3} onClick={ move }>Portfolio</Menu>
        <Menu value={4} onClick={ move }>Contact</Menu>
      </div>
    </Div>
  )
}

const Div = styled.div`
  background-color: green;
  height: 85px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1;
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

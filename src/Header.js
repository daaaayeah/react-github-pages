import React, { useState } from "react";
import styled from 'styled-components';

const menuID = ["home", "about", "ability", "portfolio", "contact"];

function Header() { 
  const [menu, setMenu] = useState(0);

  const move = (e) => {
    const index = e.target.value;

    setMenu(Number(index));

    var Location = document.getElementById(menuID[index]).offsetTop;
    var menuHeight = document.querySelector("#menu").offsetHeight;
    window.scrollTo({top:Location - menuHeight, behavior:"smooth"})
  }

  return (
    <Div id="menu">
      <div>
        <Logo value={0} onClick={ move }>DEVELOPER</Logo>
      </div>
      <div>
        <Menu value={1} selectMenu={ menu } onClick={ move }>About</Menu>
        <Menu value={2} selectMenu={ menu } onClick={ move }>Ability</Menu>
        <Menu value={3} selectMenu={ menu } onClick={ move }>Portfolio</Menu>
        <Menu value={4} selectMenu={ menu } onClick={ move }>Contact</Menu>
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
  color: ${({ value, selectMenu }) => (value === selectMenu ? "white" : "#c8dbc8")};  // 클릭 X -> 스크롤 위치로 색상 변경
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

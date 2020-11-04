import React, { Component } from 'react';
import styled from 'styled-components';

class NavigationBar extends Component {
  render() {
    return (
        <Navi>
            <Logo>PORTFOLIO</Logo>
            <Menu>
              <Button>Home</Button>
              <Button>About</Button>
              <Button>Ability</Button>
              <Button>Portfolio</Button>
              <Button>Contact</Button>
            </Menu>
        </Navi>
    )
  }
}

const Navi = styled.div`
  background-color: green;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.button`
  color: white;
  background-color: transparent;
  font-size: 25px;
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: 3px;
  padding: 30px 200px 30px;
  border-style: none;
  cursor: pointer;
  outline: none;
`;

const Menu = styled.div`
  padding-right: 200px;
`;

const Button = styled.button`
  color: #c8dbc8;
  background-color: transparent;
  font-size: 15px;
  font-family: Arial;
  padding: 37px 20px 37px 20px;
  border-style: none;
  cursor: pointer;
  outline: none;

  &:hover {
    color: white;
  }
`;

export default NavigationBar;

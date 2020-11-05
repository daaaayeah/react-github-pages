import React, { Component } from 'react';
import styled from 'styled-components';

class NavigationBar extends Component {
  render() {
    return (
      <Navi>
        <div>
          <Logo>yENGINEER</Logo>
        </div>
        <div>
          <Button>About</Button>
          <Button>Ability</Button>
          <Button>Portfolio</Button>
          <Button>Contact</Button>
        </div>
      </Navi>
    )
  }
}

const Navi = styled.div`
  background-color: green;
  height: 85px;
  position: fixed;
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
  letter-spacing: 3px;
  
  border-style: none;
  outline: none;
  cursor: pointer;
`;

const Button = styled.button`
  color: #c8dbc8;
  &:hover {
    color: white;
  }
  background-color: transparent;

  font-size: 15px;
  font-family: Arial;

  margin-left: 30px;
  border-style: none;
  outline: none;
  cursor: pointer;
`;

export default NavigationBar;

import React, { Component } from 'react';
import styled from 'styled-components';

class NavigationBar extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Navi>
        <div>
          <Logo>PORTFOLIO</Logo>
        </div>
        <div>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Ability</Button>
          <Button>Portfolio</Button>
          <Button>Contact</Button>
        </div>
      </Navi>
=======
        <Navi>
            <Logo logo>PORTFOLIO</Logo>
            <Menu>
              <Button home>Home</Button>
              <Button about>About</Button>
              <Button ability>Ability</Button>
              <Button portfolio>Portfolio</Button>
              <Button contact>Contact</Button>
            </Menu>
        </Navi>
>>>>>>> 12df821cf51593d57ed333b7fddca64940b51aa5
    )
  }
}

const Navi = styled.div`
  background-color: green;
<<<<<<< HEAD
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 12.5%;
  padding-right: 12.5%;
=======
  display: flex;
  justify-content: space-between;
>>>>>>> 12df821cf51593d57ed333b7fddca64940b51aa5
`;

const Logo = styled.button`
  color: white;
  background-color: transparent;
<<<<<<< HEAD

=======
>>>>>>> 12df821cf51593d57ed333b7fddca64940b51aa5
  font-size: 25px;
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: 3px;
<<<<<<< HEAD
  
  border-style: none;
  outline: none;
  cursor: pointer;
=======
  padding: 30px 200px 30px;
  border-style: none;
  cursor: pointer;
  outline: none;
`;

const Menu = styled.div`
  padding-right: 200px;
>>>>>>> 12df821cf51593d57ed333b7fddca64940b51aa5
`;

const Button = styled.button`
  color: #c8dbc8;
<<<<<<< HEAD
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
=======
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
>>>>>>> 12df821cf51593d57ed333b7fddca64940b51aa5
`;

export default NavigationBar;

import React, { Component } from 'react';
import styled from 'styled-components';

class Body extends Component {
    render() {
      return (
        <Div>
          <About>
            <Title>ABOUT ME</Title>
            <Subtitle>Who am I?</Subtitle>
          </About>
        </Div>
      )
    }
}

const Div = styled.div`
  background-color: green;
  height: 382px;
  position: fixed;
  top: 85;
  width: 100%;
`;

const About = styled.div`
  background-color: white;
  position: fixed;
  top: 85;
  width: 100%;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Title = styled.p`
  background-color: transparent;
  font-size: 25px;
  font-family: Roboto;
  font-weight: bold;
  text-align: center;
`;

const Subtitle = styled.p`
  background-color: transparent;
  font-size: 20px;
  font-family: Roboto;
  font-weight: bold;
`;

export default Body;

import React, { Component } from 'react';
import styled from 'styled-components';

class Body extends Component {
    render() {
      return (
        <Div>
          <Title>About Me</Title>
          <Subtitle>WHO AM I?</Subtitle>
        </Div>
      )
    }
}

const Div = styled.div`
  background-color: green;
  font-family: "Times";
  height: 85px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.p`
  text-align: center;
  background-color: transparent;
  font-family: "Times";
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const Subtitle = styled.p`
  
`;

export default Body;

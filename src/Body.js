import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";
import Ability from "./Ability";
import Portfolio from "./Portfolio";

class Body extends Component {
  render() {
    return (
      <Div>
        <About />
        <Ability />
        <Portfolio />
      </Div>
    );
  }
}

const Div = styled.div`
  background-color: green;
	width: 100%;
`;

export default Body;

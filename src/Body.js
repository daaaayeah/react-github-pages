import React, { Component } from "react";
import styled from "styled-components";
import About from "./About";

class Body extends Component {
  render() {
    return (
      <Div>
        <About />
      </Div>
    );
  }
}

const Div = styled.div`
	background-color: green;
	width: 100%;
`;

export default Body;

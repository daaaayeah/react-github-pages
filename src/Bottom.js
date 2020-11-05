import React, { Component } from 'react';
import styled from 'styled-components';

class Bottom extends Component {
    render() {
        return (
            <Contact>
                <div>
                    <P>CONTACT</P>
                </div>
            </Contact>
        )
    }
}

const Contact = styled.div`
  background-color: black;
  height: 300px;
  width: 100%;
  display: inline-block;
`;

const P = styled.p`
  color: white;
  background-color: transparent;
  font-size: 25px;
  font-family: Roboto;
`;

export default Bottom;

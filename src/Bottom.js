import React, { Component } from 'react';
import styled from 'styled-components';

class Bottom extends Component {
    render() {
        return (
            <Contact>
                <p>CONTACT</p>

            </Contact>
        )
    }
}

const Contact = styled.div`
  background-color: green;
  top: 100;
  //height: 85px;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

export default Bottom;

import React, { Component } from 'react';
import styled from 'styled-components';

class Bottom extends Component {
    render() {
        return (
            <div>
                <Contact>
                    <div>
                        <P>CONTACT</P>
                    </div>
                </Contact>
                <CopyRight>
                    COPYRIGHT INFORMATION GOES HERE © 2020. ALL RIGHTS RESERVED
                </CopyRight>
            </div>
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

const CopyRight = styled. p`
  color: #c8dbc8;
  background-color: green;
  font-size: 13px;
  font-family: Roboto;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Bottom;

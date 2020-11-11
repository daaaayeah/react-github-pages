import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <Div>
                <div>
                    <Contact>CONTACT</Contact>
                    <Comment>If you have any questions,</Comment>
                    <Comment>please leave your message here.</Comment>
                </div>
                <div>
                    <Input type="text" placeholder="NAME" />
                    <Input type="text" placeholder="E-MAIL" />
                </div>
                <div>
                    <Input type="text" placeholder="MESSAGE" />
                    <Input type="submit" value="SUBMIT" />
                </div>

                <CopyRight>
                    COPYRIGHT INFORMATION GOES HERE © 2020. ALL RIGHTS RESERVED
                </CopyRight>
            </Div>
        )
    }
}

const Div = styled.div`
  background-color: green;
  height: 255px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: inline-block;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Contact = styled.p`
  color: white;
  background-color: transparent;
  font-size: 23px;
  margin: 40px 0px 30px 0px;
`;

const Comment = styled.p`
  color: white;
  font-size: 15px;
  margin: 0;
`;

const Input = styled.input`
  color: green;
  &::placeholder {
      color: green;
  }
  background-color: white;
  font-size: 15px;
  padding: 10px 20px;
  margin: 10px;
  
  border-style: none;
  outline: none;
`;

const CopyRight = styled.p`
  color: #c8dbc8;
  background-color: transparent;
  font-size: 13px;

  position: fixed;
  bottom: 0;
  padding: 12px 0px 12px 0px;
`;

export default Footer;

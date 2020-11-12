import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <Div>
                <div>
                    <Contact>CONTACT</Contact>
                    <P>If you have any questions,</P>
                    <P>please leave your message here.</P>
                </div>
                <div style={{margin: '40px 0px', width: '250px'}}>
                    <Input type="text" placeholder="NAME" style={{width: '190px'}}/>
                    <Input type="text" placeholder="E-MAIL" style={{width: '190px'}}/>
                </div>
                <div style={{margin: '40px 0px'}}>
                    <Input type="text" placeholder="MESSAGE" style={{width: '420px', height: '75px'}}/>
                </div>
                <div>
                    <Button type="submit">SUBMIT</Button>
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
  display: flex;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Contact = styled.p`
  color: white;
  background-color: transparent;
  font-size: 23px;
  font-family: Arial;
  margin: 60px 0px 30px 0px;
`;

const P = styled.p`
  color: white;
  font-size: 15px;
  font-family: Arial;
  width: 280px;
  margin: 0;
`;

const Input = styled.input`
  color: green;
  &::placeholder {
      color: green;
  }
  background-color: white;
  font-size: 15px;
  position: relative;
  padding: 10px 20px;
  margin: 10px;
  
  border-style: none;
  outline: none;
`;

const Button = styled.button`
  color: green;
  background-color: white;
  font-size: 15px;
  height: 95px;
  padding: 10px 20px;
  margin: 50px 0px;
  
  display: flex;
  border-style: none;
  outline: none;
  cursor: pointer;
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

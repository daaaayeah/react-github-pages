import React, { Component } from 'react';
import styled from 'styled-components';
import programmingImage from './programming.jpg';

class Body extends Component {
    render() {
      return (
        <Div>
          <Section>
            <Title>____</Title>
            <Title>ABOUT ME</Title>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <img
                src={programmingImage}
                width='500'
                height='250'
                alt=''
              />
              <div>
                <Subtitle>Who am I?</Subtitle>
                <P>반갑습니다.</P>
                <P>세종대학교에서 컴퓨터공학을 전공하고 있는 이다예입니다.</P>
                <P>무엇이든 새로운 것에 흥미를 느낍니다.</P>
                <P>끊임없이 변화하는 프로그래밍의 세상 속에서 오랫동안 공부하며</P>
                <P>세상을 움직이는 사람이 되고 싶습니다.</P>
              </div>
            </div>
          </Section>
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

const Section = styled.div`
  background-color: white;
  position: fixed;
  top: 85;
  left: 0;
  right: 0;
  display: inline-block;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const Title = styled.p`
  color: green;
  background-color: transparent;
  font-size: 20px;
  font-family: Trebuchet;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: orange;
  background-color: transparent;
  font-size: 15px;
  font-family: Verdana;
`;

const P = styled.p`
  color: black;
  background-color: transparent;
  font-size: 13px;
  font-family: 고딕;
  margin: 3px;
`;

export default Body;

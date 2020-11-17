import React, { Component } from "react";
import styled from "styled-components";
import programmingImage from "./programming.jpg";
import myImage from "./I.jpg";

class Body extends Component {
    render() {
        return (
            <Div>
                <Title>____</Title>
                <Title>ABOUT ME</Title>
                <Content style={{ justifyContent: "space-between" }}>
                    <div>
                        <Subtitle style={{ margin: "130px 0px 30px 0px" }}>Who am I?</Subtitle>
                        <P>반갑습니다.</P>
                        <P><b>세종대학교</b>에서 <b>컴퓨터공학</b>을 전공하고 있는 <b>이다예</b>입니다.</P>
                        <P>무엇이든 새로운 것에 흥미를 느낍니다.</P>
                        <P>끊임없이 변화하는 프로그래밍의 세상 속에서 오랫동안 공부하며</P>
                        <P><b>세계를 움직이는 사람</b>이 되고 싶습니다.</P>
                    </div>
                    <img src={programmingImage} width="600px" height="300px" alt=""/>
                </Content>
                <Content>
                    <img src={myImage} width="600px" height="300px" alt="" />
                    <div style={{ marginLeft: "50px"}}>
                        <Subtitle style={{ margin: "30px 0px 40px 0px" }}>My History</Subtitle>
                        <P style={{ margin: "20px 0px" }}>
                            <big><big><big><b style={{ color: "green", fontFamily: "serif"}}>2020</b></big></big></big>
                            &nbsp;&nbsp;&nbsp;
                            한국대학생IT경영학회 22기 회원
                        </P>
                        <P style={{ margin: "20px 0px 10px 0px" }}>
                            <big><big><big><b style={{ color: "green", fontFamily: "serif"}}>2019</b></big></big></big>
                            &nbsp;&nbsp;&nbsp;
                            컴퓨터공학과 제 31대 학생회 '.com' 부학생회장
                        </P>
                        <P style={{ marginLeft: "85px" }}>
                            컴퓨터공학과 제 31대 학생회 '.com' 집부
                        </P>
                        <P style={{ margin: "20px 0px" }}>
                            <big><big><big><b style={{ color: "green", fontFamily: "serif"}}>2018</b></big></big></big>
                            &nbsp;&nbsp;&nbsp;
                            세종대학교 입학
                        </P>
                    </div>
                </Content>
            </Div>
        );
    }
}

const Div = styled.div`
	background-color: white;
	padding-left: 12.5%;
	padding-right: 12.5%;
	height: 100%;
`;

const Content = styled.div`
    display: flex;
    margin: 50px 0px 50px 0px;
`;

const Title = styled.p`
	color: green;
	font-size: 20px;
	font-family: Trebuchet;
	font-weight: bold;
`;

const Subtitle = styled.p`
	color: orange;
	font-size: 17px;
    font-family: Verdana;
`;

const P = styled.p`
	color: black;
	font-size: 15px;
    font-family: 고딕;
	margin: 3px;
`;

const Year = styled.p`
    color: green;
    
`;

export default Body;

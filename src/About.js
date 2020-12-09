import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from 'aos';
import "aos/dist/aos.css";
import programmingImage from "./images/programming.jpg";
import myImage from "./images/I.jpg";

function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <Div id="about">
            <Title>________</Title>
            <Title>ABOUT DAYE</Title>
            <Content style={{ justifyContent: "space-between" }}>
                <div data-aos="fade-right" data-aos-duration="1500">
                    <Subtitle style={{ margin: "130px 0px 30px 0px" }}>&lt;Who am I?&nbsp;/&gt;</Subtitle>
                    <P>반갑습니다.</P>
                    <P><b>세종대학교</b>에서 <b>컴퓨터공학</b>을 전공하고 있는 <b>이다예</b>입니다.</P>
                    <P>무엇이든 새로운 것에 흥미를 느낍니다.</P>
                    <P>끊임없이 변화하는 프로그래밍의 세상 속에서 오랫동안 공부하며</P>
                    <P><b>세계를 움직이는 사람</b>이 되고 싶습니다.</P>
                </div>
                <img data-aos="fade-left" data-aos-duration="1500" src={programmingImage} width="600px" height="300px" alt="" />
            </Content>
            <Content>
                <img data-aos="fade-right" data-aos-duration="2000" src={myImage} width="600px" height="300px" alt="" />
                <div data-aos="fade-left" data-aos-duration="2000" style={{ marginLeft: "50px" }}>
                    <Subtitle style={{ margin: "30px 0px 40px 0px" }}>&lt;My History&nbsp;/&gt;</Subtitle>
                    <P style={{ margin: "20px 0px" }}>
                        <big><big><big><b style={{ color: "green", fontFamily: "serif" }}>2020</b></big></big></big>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            한국대학생IT경영학회 22기 회원
                        </P>
                    <P style={{ margin: "20px 0px 10px 0px" }}>
                        <big><big><big><b style={{ color: "green", fontFamily: "serif" }}>2019</b></big></big></big>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            컴퓨터공학과 제 31대 학생회 '.com' 부학생회장
                        </P>
                    <P style={{ marginLeft: "85px" }}>
                        &nbsp;컴퓨터공학과 제 31대 학생회 '.com' 집부
                        </P>
                    <P style={{ margin: "20px 0px" }}>
                        <big><big><big><b style={{ color: "green", fontFamily: "serif" }}>2018</b></big></big></big>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            세종대학교 입학
                        </P>
                </div>
            </Content>
        </Div>
    )
}

const Div = styled.div`
	background-color: white;
    padding: 1px 12.5% 1px 12.5%;
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
    font-family: paybooc-Medium;
	margin: 5px;
`;

export default About;

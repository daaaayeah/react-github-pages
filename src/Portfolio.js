import React, { useState } from "react";
import styled from "styled-components";
import image_minifin from "./images/minifin.jpg";
import image_game from "./images/game.jpg";
import image_room from "./images/room.jpg";
import image_city from "./images/city.jpg";
import image_database from "./images/database.jpg";

const projectTitle = ["[2020] 안드로이드 어플리케이션 '미니핀'", "[2020] VR 리듬게임 '풋풋한 댄스'", "[2020] 방 내부 모델링",
     "[2020] 가상 도시 모델링", "[2020] 캠핑카 대여회사 데이터베이스"];
const projectInfo1 = ["✔ 한국대학생IT경영학회 학술제 대상", "✔ 세종대학교 컴퓨터공학과 학술제 대상", "✔ Computer Graphics 개인 프로젝트",
     "✔ Computer Graphics 개인 프로젝트", "✔ Database 팀 프로젝트"];
const projectInfo2 = ["✔ Android Studio - Java", "✔ Unity - C# Script", "✔ OpenGL", "✔ WebGL", "✔ mySQL, Eclipse"];
const projectImage = [image_minifin, image_game, image_room, image_city, image_database];
const projectLink = ["https://github.com/daaaayeah/MINI-FIN.git", "https://github.com/daaaayeah/FOOTFOOT-DANCE.git",
     "https://github.com/daaaayeah/Computer-Graphics", "https://github.com/daaaayeah/Computer-Graphics",
     "https://github.com/daaaayeah/Database/tree/main/Camping_Car_Company"];

function Portfolio() {
    const [number, setNumber] = useState(0);

    const onClick = (e) => {
        const index = e.target.value;
        setNumber(Number(index));
    }

    return (
        <Div id="portfolio">
            <Title>________</Title>
            <Title>PORTFOLIO</Title>
            <Area>
                <div>
                    <Subtitle>Projects</Subtitle>
                    <P1>{projectTitle[number]}</P1>
                    <P2>{projectInfo1[number]}</P2>
                    <P2>{projectInfo2[number]}</P2>
                </div>
                <a href={projectLink[number]} target="_blank" rel="noreferrer"><Image src={projectImage[number]} width="653px" height="368px" alt=""/></a>
            </Area>
            <div style={{ marginLeft:"20px" }}>
                <Button value={0} setNumber={number} onClick={onClick}>01</Button>
                <Button value={1} setNumber={number} onClick={onClick}>02</Button>
                <Button value={2} setNumber={number} onClick={onClick}>03</Button>
                <Button value={3} setNumber={number} onClick={onClick}>04</Button>
                <Button value={4} setNumber={number} onClick={onClick}>05</Button>
            </div>
            </Div>
    );
}

const Div = styled.div`
	background-color: white;
    padding: 1px 12.5% 5% 12.5%;
`;

const Title = styled.p`
	color: green;
	font-size: 20px;
	font-family: Trebuchet;
    font-weight: bold;
`;

const Area = styled.div`
    background-color: whitesmoke;
    height: 350px;
    weight: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`;

const Button = styled.button`
    color: ${({value, setNumber}) => (value === setNumber ? "white" : "orange")};
    background-color: ${({value, setNumber}) => (value === setNumber ? "orange" : "white")};
    &:hover {
        color: white;
        background-color: orange;
    }
    font-size: 20px;
    height: 30px;

    margin: 25px 30px 10px 15px;

    border-style: none;
    border-radius: 30%;
    outline: none;
    cursor: pointer;
`;

const Subtitle = styled.p`
	color: green;
	font-size: 25px;
    font-weight: bold;
    padding-top: 150px;
	margin-left: 50px;
    text-shadow: 2px 2px 1px lightgray;
`;

const P1 = styled.p`
	color: black;
	font-size: 16px;
    font-family: paybooc-Bold;
    margin: 0px 0px 10px 50px;
`;

const P2 = styled.p`
	color: black;
	font-size: 15px;
    font-family: paybooc-Medium;
    margin: 0px 0px 5px 50px;
`;

const Image = styled.img`
    margin-top: 55px;
    margin-right: 55px;
    box-shadow: 5px 5px 5px gainsboro;
`;

export default Portfolio;

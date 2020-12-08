import React, { useState } from "react";
import styled from "styled-components";
import image_minifin from "./images/minifin.jpg";
import image_game from "./images/game.jpg";
import image_room from "./images/room.jpg";
import image_city from "./images/city.jpg";
import image_database from "./images/database.jpg";

const projectList = [
    {
        title: "[2020-하] 안드로이드 어플리케이션 '미니핀'",
        info: ["✔ 한국대학생IT경영학회 학술제 대상", "✔ Android Studio - Java"],
        link: "https://github.com/daaaayeah/MINI-FIN.git",
        image: image_minifin
    },
    {
        title: "[2020-하] VR 리듬게임 '풋풋한 댄스'",
        info: ["✔ 세종대학교 컴퓨터공학과 학술제 대상", "✔ Unity - C# Script"],
        link: "https://github.com/daaaayeah/FOOTFOOT-DANCE.git",
        image: image_game
    },
    {
        title: "[2020-상] 방 내부 모델링",
        info: ["✔ Computer Graphics 개인 프로젝트", "✔ OpenGL"],
        link: "https://github.com/daaaayeah/Computer-Graphics",
        image: image_room
    },
    {
        title: "[2020-상] 가상 도시 모델링",
        info: ["✔ Computer Graphics 개인 프로젝트", "✔ WebGL"],
        link: "https://github.com/daaaayeah/Computer-Graphics",
        image: image_city
    },
    {
        title: "[2020-상] 캠핑카 대여회사 데이터베이스",
        info: ["✔ Database 팀 프로젝트", "✔ mySQL / Eclipse"],
        link: "https://github.com/daaaayeah/Database/tree/main/Camping_Car_Company",
        image: image_database
    },
];

function Portfolio() {
    const [number, setNumber] = useState(0);

    const onClick = (e) => {
        const index = e.target.value;
        setNumber(Number(index));
    }

    const project = projectList[number];

    return (
        <Div id="portfolio">
            <Title>________</Title>
            <Title>PORTFOLIO</Title>
            <Area>
                <div>
                    <Subtitle>Projects</Subtitle>
                    <P1>{project.title}</P1>
                    {project.info.map((v) => (
                        <P2>{v}</P2>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                    <Image src={project.image} width="653px" height="368px" alt=""/>
                </a>
            </Area>
            <div style={{ marginLeft:"20px" }}>
                {
                    [
                        {key: 0, value: "01"},
                        {key: 1, value: "02"},
                        {key: 2, value: "03"},
                        {key: 3, value: "04"},
                        {key: 4, value: "05"},
                    ].map((v) => (
                        <Button value={v.key} setNumber={number} onClick={onClick}>
                            {v.value}
                        </Button>
                    ))
                }
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

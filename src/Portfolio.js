import React, { useState } from "react";
import styled from "styled-components";
import image_UI from "./images/UI.jpg";
import image_database from "./images/database.jpg";
import image_room from "./images/room.jpg";
import image_city from "./images/city.jpg";
import image_game from "./images/game.jpg";
import image_minifin from "./images/minifin.jpg";

const projectTitle = ["[2018] 식단 추천 어플리케이션 'DIET' UI", "[2020] 캠핑카 대여회사 데이터베이스",
    "[2020] 방 내부 모델링", "[2020] 가상 도시 모델링", "[2020] VR 리듬게임 '풋풋한 댄스'", "[2020] 안드로이드 어플리케이션 '미니핀'"];
const projectImage = [image_UI, image_database, image_room, image_city, image_game, image_minifin];

function Portfolio() {
    const [title, setTitle] = useState(0);
    const [image, setImage] = useState(0);
    const [number, setNumber] = useState(0);

    const onClick = (e) => {
        const index = e.target.value;
        setTitle(index);
        setImage(index);
        setNumber(Number(index));
    }

    return (
        <Div id="portfolio">
            <Title>________</Title>
            <Title>PORTFOLIO</Title>
            <Area>
                <div>
                    <Subtitle>Projects</Subtitle>
                    <P>{projectTitle[title]}</P>
                </div>
                <Image src={projectImage[image]} width="653px" height="368px" alt=""/>
            </Area>
            <div style={{ marginLeft:"20px" }}>
                <Button value={0} setNumber={number} onClick={onClick}>01</Button>
                <Button value={1} setNumber={number} onClick={onClick}>02</Button>
                <Button value={2} setNumber={number} onClick={onClick}>03</Button>
                <Button value={3} setNumber={number} onClick={onClick}>04</Button>
                <Button value={4} setNumber={number} onClick={onClick}>05</Button>
                <Button value={5} setNumber={number} onClick={onClick}>06</Button>
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

    margin: 30px 20px 10px 10px;

    border-style: none;
    border-radius: 30%;
    outline: none;
    cursor: pointer;
`;

const Subtitle = styled.p`
	color: black;
	font-size: 25px;
    font-weight: bold;
    padding-top: 190px;
	margin-left: 70px;
`;

const P = styled.p`
	color: black;
	font-size: 15px;
    font-family: paybooc-Medium;
	margin-left: 70px;
`;

const Image = styled.img`
    margin-top: 30px;
    margin-right: 55px;
    box-shadow: 5px 5px 5px gainsboro;
`;

export default Portfolio;

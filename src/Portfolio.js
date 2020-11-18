import React, { useState } from "react";
import styled from "styled-components";

const projectTitle = ["식단 추천 어플리케이션 UI (2018)", "엘리베이터 회로 (2019)", "캠핑카 대여회사 데이터베이스 (2020)",
"방 내부 모델링 (2020)", "가상 도시 모델링 (2020)", "VR 리듬게임 (현재)", "큐시즘 프로젝트 (현재)"];

function Portfolio() {
    const [title, setTitle] = useState(0);

    const onClick = (e) => {
        const index = e.target.value;
        setTitle(index);
    }

    return (
        <Div>
            <Title>____</Title>
            <Title>PORTFOLIO</Title>
            <p>Projects</p>
            <Button value={0} onClick={onClick}>01</Button>
            <Button value={1} onClick={onClick}>02</Button>
            <Button value={2} onClick={onClick}>03</Button>
            <Button value={3} onClick={onClick}>04</Button>
            <Button value={4} onClick={onClick}>05</Button>
            <Button value={5} onClick={onClick}>06</Button>
            <Button value={6} onClick={onClick}>07</Button>
            <P>{projectTitle[title]}</P>
        </Div>
    );
}

const Div = styled.div`
	background-color: white;
    padding: 1px 12.5% 1px 12.5%;
    margin: 1%;
`;

const Title = styled.p`
	color: green;
	font-size: 20px;
	font-family: Trebuchet;
	font-weight: bold;
`;

const Button = styled.button`
    color: orange;
    &:hover {
        color: darkorange;
    }
    background-color: white;
    font-size: 20px;
    border-style: none;
    outline: none;
    cursor: pointer;
`;

const P = styled.p`
	color: black;
	font-size: 15px;
    font-family: 고딕;
	margin: 3px;
`;

export default Portfolio;

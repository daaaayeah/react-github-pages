import React, { Component } from "react";
import styled from "styled-components";

class Ability extends Component {
    render() {
        return (
            <Div>
                <Title>____</Title>
                <Title>ABILITY</Title>
                <Content>
                    <div>
                        <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
                            <Box style={{ backgroundColor: "orange" }}>
                                <Item>C</Item>
                                <Item>C#</Item>
                            </Box>
                            <Box style={{ backgroundColor: "orange" }}>
                                <Item>Python</Item>
                            </Box>
                            <Box style={{ backgroundColor: "#ffdead" }}>
                                <Item>Java</Item>
                            </Box>
                            <Box style={{ backgroundColor: "#ffdead" }}>
                                <Item>HTML</Item>
                                <Item>CSS</Item>
                                <Item>JavaScript</Item>
                                <Item>React</Item>
                            </Box>
                            <Box style={{ backgroundColor: "oldlace" }}>
                                <Item>OpenGL</Item>
                                <Item>WebGL</Item>
                            </Box>
                            <Box style={{ backgroundColor: "white" }}>
                                <Item>SQL</Item>
                            </Box>
                        </div>
                    </div>
                </Content>
                <Content>
                    {/* <Subtitle>&lt;사용 툴&nbsp;/&gt;</Subtitle> */}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Item>Visual Studio</Item>
                        </Box>
                        <Box>
                            <Item>Jupyter notebook</Item>
                        </Box>
                        <Box>
                            <Item>Eclipse</Item>
                        </Box>
                        <Box>
                            <Item>MySQL workbench</Item>
                        </Box>
                        <Box>
                            <Item>Android Studio</Item>
                        </Box>
                        <Box>
                            <Item>Unity</Item>
                        </Box>
                    </div>
                </Content>
            </Div>
        );
    }
}

const Div = styled.div`
	background-color: white;
    padding: 1px 12.5% 1px 12.5%;
    margin: 1%;
`;

const Content = styled.div`
    // display: flex;
    // justifyContent: "space-between";
    margin: 50px 0px 50px 0px;
`;

const Title = styled.p`
	color: green;
	font-size: 20px;
	font-family: Trebuchet;
	font-weight: bold;
`;

const Box = styled.div`
    height: 150px;
    width: 150px;
    font-size: 17px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
`;

const Item = styled.p`
    margin: 0;
`;

const P = styled.p`
	color: black;
	font-size: 15px;
    font-family: 고딕;
	margin: 3px;
`;

export default Ability;

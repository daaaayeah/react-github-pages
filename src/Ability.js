import styled from "styled-components";

function Ability() {
    return (
        <Div id="ability">
            <Title>________</Title>
            <Title>PROGRAMMING ABILITY</Title>
            <div style={{ margin: "75px 0px 75px 0px", display: "flex", justifyContent: "space-between" }}>
                <Box style={{ backgroundColor: "orange", borderRadius: "50%" }}>
                    <Item>C</Item>
                    <Item>C#</Item>
                </Box>
                <Box style={{ backgroundColor: "#ffdead", borderRadius: "50%" }}>
                    <Item>HTML</Item>
                    <Item>CSS</Item>
                    <Item>JavaScript</Item>
                    <Item>React</Item>
                </Box>
                <Box style={{ backgroundColor: "#ffdead", borderRadius: "50%" }}>
                    <Item>Java</Item>
                </Box>
                <Box style={{ backgroundColor: "oldlace", borderRadius: "50%" }}>
                    <Item>OpenGL</Item>
                    <Item>WebGL</Item>
                </Box>
                <Box style={{ backgroundColor: "orange", borderRadius: "50%" }}>
                    <Item>Python</Item>
                </Box>
                <Box style={{ backgroundColor: "white", borderRadius: "50%" }}>
                    <Item>SQL</Item>
                </Box>
            </div>
            <div style={{ margin: "50px 0px 50px 0px" }}>
                {/* <Subtitle>&lt;사용 툴&nbsp;/&gt;</Subtitle> */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Box style={{ backgroundColor: "oldlace" }} >
                        <Item>Android Studio</Item>
                    </Box>
                    <Box style={{ backgroundColor: "#ffdead" }} >
                        <Item>Eclipse</Item>
                    </Box>
                    <Box style={{ backgroundColor: "orange" }} >
                        <Item>Jupyter notebook</Item>
                    </Box>
                    <Box style={{ backgroundColor: "oldlace" }} >
                        <Item>MySQL workbench</Item>
                    </Box>
                    <Box style={{ backgroundColor: "white" }} >
                        <Item>Unity</Item>
                    </Box>
                    <Box style={{ backgroundColor: "orange" }} >
                        <Item>Visual Studio</Item>
                    </Box>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
	background-color: white;
    padding: 1px 12.5% 1px 12.5%;
`;

const Title = styled.p`
	color: green;
	font-size: 20px;
	font-family: Trebuchet;
	font-weight: bold;
`;

const Box = styled.div`
    font-size: 17px;
    text-align: center;
    
    height: 150px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 5px 5px 10px darkolivegreen;
`;

const Item = styled.p`
    font-size: 15px;
    font-family: Verdana;
    margin: 0;
`;

export default Ability;

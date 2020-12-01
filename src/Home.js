import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from 'aos';
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <Div id="home">
            <P data-aos="zoom-out" data-aos-duration="1000">Move the people,</P>
            <P data-aos="zoom-out" data-aos-duration="1000">Move the world</P>
        </Div>
    )
}

const Div = styled.div`
	background-color: green;
    padding: 150px 12.5% 1px 12.5%;
    height: 665px;
    margin-top: 85px;
`;

const P = styled.div`
    color: oldlace;
    font-family: serif;
    font-size: 100px;
    text-shadow: 7.5px 7.5px 3px darkgreen;
`;

export default Home;

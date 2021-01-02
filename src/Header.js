import React, { useEffect, useState } from "react";
import styled from "styled-components";

const menuID = ["home", "about", "ability", "portfolio", "contact"];
var menuLoca = [];

function Header() {
    const move = (e) => {
        const index = e.target.value;

        var Location = document.getElementById(menuID[index]).offsetTop;
        menuLoca[index] = Location;

        var menuHeight = document.querySelector("#menu").offsetHeight;
        window.scrollTo({ top: Location - menuHeight, behavior: "smooth" });
    };

    const useScroll = () => {
        const [state, setState] = useState({
            y: 0,
        });

        const onScroll = () => {
            setState({ y: window.scrollY });
        };

        useEffect(() => {
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []);

        return state;
    };

    const { y } = useScroll();

    return (
        <Div id="menu">
            <div>
                <Logo value={0} onClick={move}>
                    DEVELOPER
                </Logo>
            </div>
            <div>
                <Menu
                    value={1}
                    onClick={move}
                    style={{
                        color:
                            y >= menuLoca[1] && y < menuLoca[2]
                                ? "white"
                                : "#c8dbc8",
                    }}
                >
                    About
                </Menu>
                <Menu
                    value={2}
                    onClick={move}
                    style={{
                        color:
                            y >= menuLoca[2] && y < menuLoca[3]
                                ? "white"
                                : "#c8dbc8",
                    }}
                >
                    Ability
                </Menu>
                <Menu
                    value={3}
                    onClick={move}
                    style={{
                        color:
                            y >= menuLoca[3] && y < menuLoca[4]
                                ? "white"
                                : "#c8dbc8",
                    }}
                >
                    Portfolio
                </Menu>
                <Menu
                    value={4}
                    onClick={move}
                    style={{
                        color: y >= menuLoca[4] ? "white" : "#c8dbc8",
                    }}
                >
                    Contact
                </Menu>
            </div>
        </Div>
    );
}

const Div = styled.div`
    background-color: green;
    height: 85px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    align-items: center;
    padding-left: 12.5%;
    padding-right: 12.5%;
`;

const Logo = styled.button`
    color: white;
    background-color: transparent;

    font-size: 25px;
    font-family: Roboto;
    font-weight: bold;
    letter-spacing: 5px;

    border-style: none;
    outline: none;
    cursor: pointer;
`;

const Menu = styled.button`
    color: #c8dbc8;
    &:hover {
        color: white;
    }
    background-color: transparent;

    font-size: 15px;

    margin-left: 30px;
    border-style: none;
    outline: none;
    cursor: pointer;
`;

export default Header;

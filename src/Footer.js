import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
	render() {
		return (
			<Div>
				<div>
					<Contact>CONTACT</Contact>
					<P>If you have any questions,</P>
					<P>please leave your message here.</P>
					<CopyRight>
						COPYRIGHT INFORMATION GOES HERE © 2020. ALL RIGHTS RESERVED
					</CopyRight>
				</div>
				<div style={{ display: "flex" }}>
					<div style={{ margin: "40px 0px", width: "250px" }}>
						<Input type="text" placeholder="NAME" style={{ width: "190px" }} />
						<Input
							type="text"
							placeholder="E-MAIL"
							style={{ width: "190px" }}
						/>
					</div>
					<div style={{ margin: "40px 0px" }}>
						<Textarea
							type="text"
							placeholder="MESSAGE"
							style={{ width: "420px", height: "75px" }}
						/>
					</div>
					<Button type="submit">SUBMIT</Button>
				</div>
			</Div>
		);
	}
}

const Div = styled.div`
	background-color: green;
	height: 255px;
	display: flex;
	justify-content: space-between;
	padding-left: 12.5%;
	padding-right: 12.5%;
`;

const Contact = styled.p`
	color: white;
	background-color: transparent;
	font-size: 23px;
	font-family: Arial;
	margin: 60px 0px 30px 0px;
`;

const P = styled.p`
	color: white;
	font-size: 13px;
	font-family: Arial;
	margin: 0;
`;

const Input = styled.input`
	color: green;
	&::placeholder {
		color: green;
	}
	background-color: white;
	font-size: 15px;
	padding: 10px 20px;
	margin: 15px 15px 5px 15px;

	border-style: none;
	outline: none;
`;

const Textarea = styled.textarea`
	color: green;
	&::placeholder {
		color: green;
	}
	background-color: white;
	font-size: 15px;
	font-family: arial;
	padding: 10px 20px;
	margin: 15px 15px 5px 15px;

	border-style: none;
	outline: none;
`;

const Button = styled.button`
	color: green;
	background-color: #c8dbc8;
	font-size: 15px;
	font-weight: bold;
	height: 95px;
	padding: 10px 25px;
	margin: 55px 4px;

	border: none;
	outline: none;
	cursor: pointer;
`;

const CopyRight = styled.p`
	color: #c8dbc8;
	background-color: transparent;
	font-size: 13px;

	position: fixed;
	bottom: 0;
	padding: 12px 0px 12px 0px;
`;

export default Footer;

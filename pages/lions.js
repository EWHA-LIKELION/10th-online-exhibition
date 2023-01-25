// 10기 부원 활동 후기 페이지
import styled from "styled-components";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Ticket from "../components/Ticket";
import React, { useState } from "react";

const Makers = () => {
	// 0: 운영진, 1: 기획디자인, 2: 프론트엔드, 3: 백엔드
	const [team, setTeam] = useState(2);
	return (
		<>
			<Container>
				<TopBar>10기 부원 소개</TopBar>
				<Ticket arr={data[team].member} />
				<Footer />
			</Container>
		</>
	);
};

export default Makers;

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
`;

const data = [
	{
		name: "운영진",
		member: [
			{ name: "김혜빈", detail: "사회복지학과 19", text: "어쩌구저쩌구" },
			{ name: "김도연", detail: "컴퓨터공학전공 20", text: "어쩌구저쩌구" },
			{ name: "정다윤", detail: "컴퓨터공학전공 20", text: "어쩌구저쩌구" },
		],
	},
	{
		name: "기획∙디자인 팀",
		member: [
			{
				name: "곽은진",
				detail: "커뮤니케이션미디어학부 18",
				text: "어쩌구저쩌구",
			},
			{ name: "김다은", detail: "국어국문학과 21", text: "어쩌구저쩌구" },
			{ name: "박성연", detail: "생명과학과 18", text: "어쩌구저쩌구" },
			{ name: "신다윤", detail: "컴퓨터공학전공 18", text: "어쩌구저쩌구" },
		],
	},
	{
		name: "프론트엔드 팀",
		member: [
			{ name: "김민주", detail: "사이버보안전공 19", text: "어쩌구저쩌구" },
			{ name: "이서진", detail: "컴퓨터공학전공 21", text: "어쩌구저쩌구" },
			{ name: "이채원", detail: "뇌인지과학부 21", text: "어쩌구저쩌구" },
			{ name: "정연주", detail: "사이버보안전공 20", text: "어쩌구저쩌구" },
			{
				name: "허윤",
				detail: "커뮤니케이션미디어학부 21",
				text: "어쩌구저쩌구",
			},
		],
	},
	{
		name: "백엔드 팀",
		member: [
			{ name: "김민주", detail: "사이버보안전공 19", text: "어쩌구저쩌구" },
			{ name: "이서진", detail: "컴퓨터공학전공 21", text: "어쩌구저쩌구" },
			{ name: "이채원", detail: "뇌인지과학부 21", text: "어쩌구저쩌구" },
			{ name: "정연주", detail: "사이버보안전공 20", text: "어쩌구저쩌구" },
			{
				name: "허윤",
				detail: "커뮤니케이션미디어학부 21",
				text: "어쩌구저쩌구",
			},
		],
	},
];

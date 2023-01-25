import styled from "styled-components";
import Image from "next/image";
import React, { useState } from "react";

import ticketimg from "../assets/lions/ticket.svg";
import faceimg from "../assets/lions/testface.png";
import topimg from "../assets/lions/testtop.png";
import nameimg from "../assets/lions/namebackground.svg";
import back from "../assets/topbar/back.svg";

const Ticket = (arr) => {
	const [open, setOpen] = useState([false, 0]);
	console.log(arr);
	const member = arr.arr;
	return (
		<>
			{member &&
				member.map((mem) => {
					return (
						<Container key={mem.id}>
							<TicketDiv>
								<Image
									src={ticketimg.src}
									width={360}
									height={115}
									className="ticket"
									alt="ticket"
								/>
								<div className="left">
									<Image
										src={faceimg.src}
										width={100}
										height={100}
										className="face"
										alt="Memoji face"
									/>
									<div>
										<div className="name-container">
											<Image
												src={nameimg.src}
												width={76}
												height={32}
												className="name-img"
												alt="name background"
											/>
											<p className="name-text">{mem.name}</p>
										</div>
										<div className="detail-text">{mem.detail}</div>
									</div>
								</div>
								<div className="right" onClick={() => setOpen([!open, mem.id])}>
									<p className="green-text">활동 후기</p>
									<div className="circle">
										<Image
											src={back.src}
											width={5}
											height={10}
											className="down"
											alt="down"
										/>
									</div>
								</div>
							</TicketDiv>
							<TextDiv
								className={open.includes(mem.id) && open ? "open" : "close"}
							></TextDiv>
						</Container>
					);
				})}
		</>
	);
};

export default Ticket;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.close {
		margin-top: -150px;
		@keyframes sizeScale {
			0% {
				margin-top: 0px;
			}
			100% {
				margin-top: 150px;
			}
		}
		animation-name: sizeScale;
		animation-duration: 0.7s;
	}
	.open {
		display: block;
		margin-top: 0px;
		@keyframes sizeScale {
			0% {
				margin-top: -150px;
			}
			100% {
				margin-top: 0px;
			}
		}
		animation-name: sizeScale;
		animation-duration: 0.7s;
	}
`;

const TicketDiv = styled.div`
	width: 100%;
	height: 115px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	.ticket {
		position: relative;
	}
	.left,
	.right {
		position: absolute;
		z-index: 5;
	}
	.left {
		height: 100px;
		left: 35px;
		display: flex;
	}
	.right {
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		left: 317px;
	}
	.name-container {
		width: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 25px;
		left: 75px;
		.name-img {
			position: absolute;
		}
		.name-text {
			font-family: "Pretendard-Regular";
			font-size: 16px;
			font-weight: 500;
			text-align: center;
			color: #000;
			position: relative;
		}
	}
	.detail-text {
		font-family: "Pretendard-Regular";
		font-size: 12px;
		font-weight: 400;
		color: #000;
		display: flex;
		align-items: center;
		width: 140px;
		height: 30px;
		word-break: keep-all;
		margin: 58px 0 0 15px;
	}
	.green-text {
		font-family: "Pretendard-Regular";
		font-size: 10px;
		text-align: center;
		color: #0c6625;
	}
	.circle {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: #dddddd;
		display: flex;
		justify-content: center;
	}
	.down {
		transform: rotate(270deg);
		margin-top: 3px;
	}
`;

const TextDiv = styled.div`
	display: none;
	width: 315px;
	height: 150px;
	background-color: #f9fff8;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
	border-radius: 0 0 20px 20px;
	margin-bottom: 10px;
`;

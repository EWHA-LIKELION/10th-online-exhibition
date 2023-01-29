// 10기 부원 활동 후기 페이지
import styled from "styled-components";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Ticket from "../components/Ticket";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { data } from "./api/lionsdata";

const Makers = () => {
	// 0: 운영진, 1: 기획디자인, 2: 프론트엔드, 3: 백엔드
	const [team, setTeam] = useState(0);
	return (
		<>
			<Container>
				<TopBar>10기 부원 소개</TopBar>
				<Swiper
					slidesPerView={1}
					pagination={{
						clickable: true,
					}}
					effect={"cards"}
					grabCursor={true}
					modules={[Pagination, EffectCards]}
					className="mySwiper"
					onSlideChange={(swiperCore) => {
						const { activeIndex } = swiperCore;
						console.log({ activeIndex });
						setTeam(activeIndex);
					}}
				>
					{data.map((d, index) => {
						return (
							<SwiperSlide key={d + index}>
								<div className="inner">
									<Image src={d.img} width={268} height={222} />
									<div className="border" />
									<SwiperText>{d.name}</SwiperText>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<div className="padding" />
				<Ticket arr={data[team].member} />
			</Container>
			<Footer />
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
	padding-bottom: 60px;
	overflow: hidden;
	.padding {
		height: 20px;
	}
	.mySwiper {
		width: 70%;
		height: 300px;
		padding: 20px;
	}
	.swiper-3d,
	.swiper-wrapper,
	.swiper-slide {
		//transform-style: flat;
	}
	.swiper-slide {
		background-color: #fff;
		box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.25);
		width: 273px;
		height: 273px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
	}
	.inner {
		display: none;
	}
	.swiper-slide-visible {
		.inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			.border {
				width: 276px;
				height: 0px;
				border: 1px solid #e4e4e4;
			}
			img {
				width: 100%;
				height: auto;
			}
		}
	}
	.swiper-pagination-bullet-active {
		background-color: #8c8c8c;
	}
`;

const SwiperText = styled.div`
	font-family: "Pretendard-Regular";
	font-weight: 700;
	font-size: 18px;
	line-height: 40px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #000;
`;

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

const Lions = () => {
  // 0: 운영진, 1: 기획디자인, 2: 프론트엔드, 3: 백엔드
  const [team, setTeam] = useState(0);
  return (
    <Div>
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
      <div className="footer-container">
        <Footer isAbsolute={true} />
      </div>
    </Div>
  );
};

export default Lions;

const Div = styled.div`
  width: 100%;
  height: auto;
  z-index: 1000;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 440px) {
    width: 390px;
    height: auto;
  }
  .footer-container {
    position: relative;
    width: 100%;
    height: 130px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  .close {
    display: none;
  }
  .open {
    display: block;
    @keyframes out {
      0% {
        margin-top: -150px;
        opacity: 0;
      }
      35% {
        opacity: 0;
      }
      100% {
        margin-top: 0px;
        opacity: 1;
      }
    }
    animation-name: out;
    animation-duration: 0.8s;
  }
`;

const Inner = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketDiv = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;
  position: relative;
  z-index: 100;
  .ticket {
    position: absolute;
    width: 100%;
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.25));
  }
  .left,
  .right {
    position: relative;
  }
  .left {
    width: 82%;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (min-width: 406px) {
      width: 78%;
    }
    @media screen and (min-width: 423px) {
      width: 75%;
    }
    @media screen and (min-width: 440px) {
      width: 81%;
    }
  }
  .right {
    width: 15%;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .face-rect {
    width: auto;
    height: 100%;
    position: relative;
    margin: 0 0 5px 10px;
  }
  .face {
    max-width: 90%;
    height: auto;
  }
  .info-rect {
    width: 48%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
  }
  .name-container {
    width: 80px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
      margin-bottom: 2px;
    }
  }
  .detail-text {
    font-family: "Pretendard-Regular";
    font-size: 12px;
    font-weight: 400;
    color: #000;
    width: 140px;
    height: 30px;
    word-break: keep-all;
    margin: 15px 0 0 5px;
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
  position: relative;
  width: 78%;
  height: auto;
  background-color: #f9fff8;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 20px 20px;
  margin-bottom: 15px;
  .text-text {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    display: flex;
    align-items: center;
    width: 90%;
    word-break: break-all;
    margin: 10px 0 12px 15px;
  }
  @media screen and (min-width: 406px) {
    width: 75%;
  }
  @media screen and (min-width: 423px) {
    width: 72%;
  }
  @media screen and (min-width: 440px) {
    width: 80%;
  }
`;

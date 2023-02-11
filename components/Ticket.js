import styled from "styled-components";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import ticketimg from "../assets/lions/ticket.png";
import nameimg from "../assets/lions/namebackground.png";
import back from "../assets/topbar/back.svg";

const Ticket = (arr) => {
  const [open, setOpen] = useState([false, 0]);
  const member = arr.arr;
  useEffect(() => setOpen([false, 0]), [arr]);
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
                  height={110}
                  alt="ticket"
                  className="ticket"
                />

                <Inner>
                  <div className="left">
                    <div className="face-rect">
                      <Image
                        src={mem.img}
                        width={100}
                        height={100}
                        className="face"
                        alt="Memoji face"
                      />
                    </div>
                    <div className="info-rect">
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
                  <div
                    className="right"
                    onClick={() => setOpen([!open, mem.id])}
                  >
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
                </Inner>
              </TicketDiv>
              <TextDiv
                className={open.includes(mem.id) && open ? "open" : "close"}
              >
                <div className="text-text">{mem.text}</div>
              </TextDiv>
            </Container>
          );
        })}
    </>
  );
};

export default Ticket;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-bottom: 20px;
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
  margin: 3px 0 10px 0;
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
    width: 76%;
  }
`;

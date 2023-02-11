import { useState, useEffect } from "react";
// 졸프 상세 페이지
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

//components
import Footer from "../../../components/Footer";
//image
import backimg from "../../../assets/detail/backimg.svg";
import back from "../../../assets/topbar/back.svg";

import introduceimg from "../../../assets/detail/introduceimg.svg";
import rnrimg from "../../../assets/detail/rnrimg.svg";
import techstackimg from "../../../assets/detail/techstackimg.svg";
import btnicon from "../../../assets/detail/btnicon.svg";

import bluestar from "../../../assets/detail/bluestar.png";
import yellowstar from "../../../assets/detail/yellowstar.png";

import {
  Introducedata,
  RnRdata,
  Techdata,
  CardSliderData,
} from "../../../assets/project";

const Detail = (props) => {
  const [w, setW] = useState(0);

  useEffect(() => {
    setW((window.innerWidth - 30).toString() + "px");
  });

  const { id } = props;

  const Data = Introducedata[id - 1];
  const Task = RnRdata[id - 1].task;
  const Tech = Techdata[id - 1];
  const CardData = CardSliderData[id - 1];

  console.log(Tech);

  return (
    <Wrapper>
      <Container
        style={{
          backgroundImage: `url(${backimg.src})`,
          backgroundSize: "cover",
        }}
      >
        <TopBar>
          <Link href="/">
            <Image src={back.src} width={12} height={24} alt="back" />
          </Link>

          <div className="titleimg">
            <Image
              src={Introducedata[id - 1].titleimg}
              width={287}
              height={56}
              alt="titleimg"
            />

            <Image
              src={bluestar.src}
              width={36}
              height={40}
              alt="bluestar"
              className="bluestar"
            />

            <Image
              src={yellowstar.src}
              width={47}
              height={49}
              alt="yellowstar"
              className="yellowstar"
            />
          </div>
        </TopBar>

        <Thumbnail>
          <Image
            src={Data.thumbnail}
            width={390}
            height={243}
            className="thumbnail"
          />
        </Thumbnail>

        <div
          style={{
            display: "flex",
            "flex-direction": "column",
          }}
        >
          <object
            type="image/svg+xml"
            data={introduceimg.src}
            className="index"
          >
            <Image
              src={introduceimg.src}
              width={358}
              height={38}
              alt="introduceimg"
              className="index"
            />
          </object>

          <Introoduce>
            <p className="title">{Introducedata[id - 1].oneline}</p>
            <p className="des"> {Introducedata[id - 1].detail}</p>
          </Introoduce>

          <Slider width={w}>
            {CardData.map((i) => {
              return <Card src={i.src} key={i.src} />;
            })}
          </Slider>

          <object type="image/svg+xml" data={rnrimg.src} className="index">
            <Image
              src={rnrimg.src}
              width={358}
              height={38}
              alt="rnrimg"
              className="index"
            />
          </object>

          <RnR>
            <span className="part-name">기획 디자인</span>
            <TaskBox>
              {Task.map((d) => {
                if (d.part == 1) {
                  return (
                    <div style={{ marginLeft: "25px" }} key={d.name}>
                      <p className="mem-name">{d.name}</p>
                      <p className="task">{d.task}</p>
                    </div>
                  );
                }
              })}
            </TaskBox>
          </RnR>

          <RnR>
            <span className="part-name">프론트엔드</span>
            <TaskBox>
              {Task.map((d) => {
                if (d.part == 2) {
                  return (
                    <div style={{ marginLeft: "25px" }} key={d.name}>
                      <p className="mem-name">{d.name}</p>
                      <p className="task">{d.task}</p>
                    </div>
                  );
                }
              })}
            </TaskBox>
          </RnR>
          <RnR>
            <span className="part-name">백엔드</span>
            <TaskBox>
              {Task.map((d) => {
                if (d.part == 3) {
                  return (
                    <div style={{ marginLeft: "25px" }} key={d.name}>
                      <p className="mem-name">{d.name}</p>
                      <p className="task">{d.task}</p>
                    </div>
                  );
                }
              })}
            </TaskBox>
          </RnR>

          <object
            type="image/svg+xml"
            data={techstackimg.src}
            className="index"
          >
            <Image
              src={techstackimg.src}
              width={358}
              height={38}
              alt="techstackimg"
              className="index"
            />
          </object>

          <TechBox>
            <p className="part-name">기획 디자인</p>

            {Tech.tech1.map((tech) => {
              return (
                <Image
                  key={tech.alt}
                  src={tech.src.src}
                  width={50}
                  height={50}
                  className="techicon"
                  alt="techicon"
                />
              );
            })}
          </TechBox>
          <TechBox>
            <p className="part-name">프론트엔드</p>
            {Tech.tech2.map((tech) => {
              return (
                <Image
                  key={tech.alt}
                  src={tech.src.src}
                  width={50}
                  height={50}
                  className="techicon"
                  alt="techicon"
                />
              );
            })}
          </TechBox>
          <TechBox>
            <p className="part-name">백엔드</p>
            {Tech.tech3.map((tech) => {
              return (
                <Image
                  key={tech.alt}
                  src={tech.src.src}
                  width={50}
                  height={50}
                  className="techicon"
                  alt="techicon"
                />
              );
            })}
          </TechBox>
        </div>

        <Link href={Introducedata[id - 1].url}>
          <VisitBtn>
            <p>웹사이트 방문하기</p>
            <Image
              src={btnicon.src}
              width={20}
              height={20}
              className="btn"
              alt="btn"
            />
          </VisitBtn>
        </Link>

        <Footer />
      </Container>
    </Wrapper>
  );
};

// context는  getStaticPaths에서 넘겨준 값
export const getStaticProps = async (context) => {
  const { id } = context.params;
  return {
    props: {
      id,
    },
  };
};

// getStaticPaths를 사용해 path의 모든 id를 담은 배열을 리턴한다.
export const getStaticPaths = async () => {
  return {
    // 리턴
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};

const Slider = styled.div`
  width: ${(props) => props.width};
  height: 286px;

  margin: 30px 16px 0 16px;
  display: flex;

  overflow-x: scroll;

  padding-bottom: 12px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d0e3d5; /* 스크롤바의 색상 */
    border-radius: 100px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff; /*스크롤바 뒷 배경 색상*/
  }

  @media screen and (min-width: 440px) {
    width: 390px;
    height: 286px;
  }
`;

const Card = styled.img`
  margin-left: 8px;
  width: 140px;
  height: 268px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  @media screen and (min-width: 440px) {
    width: 390px;
    height: auto;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-bottom: 120px;
  position: relative;
  /* 
  &::-webkit-scrollbar {
    display: none;
  } */

  a {
    width: fit-content;
  }

  overflow-x: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  .background {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: -1000;
  }

  .index {
    margin: 0 auto;
    padding-top: 35px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 440px) {
    width: 390px;
    height: auto;
  }
`;

const TopBar = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 18px;

  background-color: transparent;
  display: flex;
  justify-content: center;

  a {
    position: absolute;
    top: 15px;
    left: 30px;
  }

  .titleimg {
    position: relative;
  }

  .bluestar {
    position: absolute;
    top: -20px;
    left: 25px;
  }

  .yellowstar {
    position: absolute;
    bottom: -15px;
    right: 15px;
  }
`;

const Thumbnail = styled.div`
  .thumbnail {
    width: 100%;
    height: 100%;
  }
`;

const Introoduce = styled.div`
  word-break: break-all;
  box-sizing: border-box;
  padding: 0 20px 0 20px;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  .title {
    font-family: "Yde street";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  }

  .des {
    width: 100%;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.442px;
  }

  @media screen and (min-width: 440px) {
    padding: 0 30px 0 30px;
  }
`;

const RnR = styled.div`
  width: 100%;
  padding-left: 22px;

  display: flex;
  position: relative;

  .part-name {
    width: 69px;
    white-space: nowrap;
    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  .mem-name {
    margin-bottom: 10px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  .task {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
    color: #5c5c5c;
  }

  @media screen and (min-width: 440px) {
    padding-left: 30px;
  }
`;

const TaskBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const TechBox = styled.div`
  width: 90%;
  margin: 5px auto 10px auto;

  .part-name {
    width: 69px;
    white-space: nowrap;
    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  .techicon {
    margin-top: 11px;
    margin-right: 14px;
  }

  @media screen and (min-width: 440px) {
    margin: 5px 10px 10px auto;
  }
`;

const VisitBtn = styled.div`
  z-index: 1000000;
  position: fixed;

  width: 80%;
  height: 50px;

  bottom: 25px;
  left: calc((20%) / 2);

  background: #75a483;
  border: 0;
  border-radius: 10px;

  font-family: Urbanist;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  .btn {
    margin-left: 5px;
    margin-bottom: 3px;
  }

  filter: drop-shadow(0px 0px 30px rgba(98, 98, 98, 0.24));

  @media screen and (min-width: 440px) {
    width: 390px;
    left: calc((100% - 390px) / 2);
  }
`;

export default Detail;

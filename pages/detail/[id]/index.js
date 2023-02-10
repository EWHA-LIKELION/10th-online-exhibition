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
import namingtitle1 from "../../../assets/detail/namingtitle1.svg";
import namingtitle2 from "../../../assets/detail/namingtitle2.svg";

import thumbnail2 from "../../../assets/2team/thumbnail.png";
import introduceimg from "../../../assets/detail/introduceimg.svg";
import rnrimg from "../../../assets/detail/rnrimg.svg";
import techstackimg from "../../../assets/detail/techstackimg.svg";
import btnicon from "../../../assets/detail/btnicon.svg";

// tech img
import figma from "../../../assets/detail/figma.svg";
import ai from "../../../assets/detail/ai.svg";
import react from "../../../assets/detail/react.svg";
import npm from "../../../assets/detail/npm.svg";
import github from "../../../assets/detail/github.svg";
import django from "../../../assets/detail/django.svg";
import aws from "../../../assets/detail/aws.svg";
import git from "../../../assets/detail/git.svg";

// ui 이미지
import team1 from "../../../assets/2team/imgs";

const Detail = (props) => {
  const [w, setW] = useState(0);

  useEffect(() => {
    setW((window.innerWidth - 30).toString() + "px");
    console.log(w);
  });

  const Imgs = [team1, team1];

  const { id } = props;
  const Data = Introducedata[id - 1];
  const Task = RnRdata[id - 1].task;
  const Tech = Techdata[id - 1];

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
          <Image
            src={Introducedata[id - 1].titleimg}
            width={300}
            height={100}
            className="titleimg"
            alt="titleimg"
          />
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
          <Image
            src={introduceimg.src}
            width={358}
            height={38}
            alt="introduceimg"
            className="index"
          />

          <Introoduce>
            <p className="title">{Introducedata[id - 1].oneline}</p>
            <p className="des"> {Introducedata[id - 1].detail}</p>
          </Introoduce>

          <Slider width={w}>
            {Imgs[id - 1].map((i) => {
              return <Card src={i.src} key={i.src} />;
            })}
          </Slider>

          <Image
            src={rnrimg.src}
            width={358}
            height={38}
            alt="rnrimg"
            className="index"
          />

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

          <Image
            src={techstackimg.src}
            width={358}
            height={38}
            alt="techstackimg"
            className="index"
          />

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
  height: 100px;
  margin-top: 30px;

  background-color: transparent;
  display: flex;
  a {
    padding: 38px 20px;
    position: absolute;
  }

  .titleimg {
    width: 100%;
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
`;

//moc data
const Introducedata = [
  {
    id: 1,
    name: "이름하여 이름하다",
    url: "https://www.instagram.com/likelion_ewha/",
    titleimg: namingtitle1,
    thumbnail: thumbnail2,
    oneline: "나만의 사전을 친구들과 함께 채워가요",
    detail: `목숨이 위하여, 눈에 봄바람이다. 인간의 대고, 불어 이상의 목숨이 이 있는가? 속잎나고, 기관과 설산에서 봄바람이다. 청춘의 것이 속에서 눈에 군영과 보이는 있으랴? 뭇 끓는 지혜는 사는가 싹이 풍부하게 않는 그들에게 하여도 것이다. 
    설레는 너의 내는 트고, 새 긴지라 아름다우냐? 우리 대중을 위하여서, 그들의 가진 같으며, 피부가 작고 것이다. 군영과 것은 우리의 이상의 불어 영락과 그리하였는가?`,
  },
  {
    id: 2,
    name: "응원이 부적해",
    url: "https://cheer-charm.swygbro.com/",
    titleimg: namingtitle2,
    thumbnail: thumbnail2,

    oneline: "응원으로 완성되는 나만의 커스텀 부적 만들기",
    detail:
      "내가 지은 이름과 내가 고른 디자인의 커스텀 부적을 생성하고 링크를 공유할 수 있어요. 응원이 모두 모이기 전까지는 부적과 응원 내용을 볼 수 없지만, 목표한 응원 개수를 달성하게 되면 완성된 부적 이미지를 저장할 수 있어요.  친구의 부적에 익명으로 닉네임과 내용을 남겨 응원할 수 있고, 내용은 부적을 생성한 사람만 열람할 수 있는 비공개 응원이에요. 마이페이지에서 언제든 내 부적들을 다시 보고 삭제해 보세요.",
  },
];

const RnRdata = [
  {
    id: 1,
    name: "응원이 부적해",
    task: [
      {
        part: 1,
        name: "곽은진",
        task: `맡은 일, 맡맡은 일,맡맡은 일맡맡은 일`,
      },
      {
        part: 1,
        name: "신다윤",
        task: `맡은 일, 맡, 맡은 일, 맡은 일, 맡은 일`,
      },
      {
        part: 2,
        name: "김민주",
        task: `맡은 일, 맡은 일맡은 일`,
      },
      {
        part: 2,
        name: "이채원",
        task: `맡은 일, 맡은 일 맡은 일, 맡은 일, 맡은 일`,
      },
      {
        part: 2,
        name: "허윤",
        task: `맡은 일, 맡일, 맡 맡은 일, 맡은 일`,
      },
      {
        part: 3,
        name: "신이수",
        task: `맡은 일, 맡은 일맡은 일, 맡은 일, 맡은 일`,
      },
      {
        part: 3,
        name: "임채영",
        task: `맡은 일, 맡은일, 맡은 일, 맡은 일`,
      },
      {
        part: 3,
        name: "김정은",
        task: `맡은, 맡은 일맡은 일, 맡은 일`,
      },
    ],
  },
  {
    id: 2,
    name: "이름하여 이름하다",
    task: [
      {
        part: 1,
        name: "박성연",
        task: "응원이 부적해 서비스 기획,  랜딩 페이지 / 마이 페이지 / 응원 작성 페이지 / 부적 이미지 디자인 ",
      },
      {
        part: 1,
        name: "김다은",
        task: "부적 링크, 결과 페이지 / 로그인,회원가입 페이지 디자인",
      },
      {
        part: 2,
        name: "정연주",
        task: "로그인/회원가입, 랜딩 페이지, 응원 전송 페이지, 부적 결과 페이지(부적)",
      },
      {
        part: 2,
        name: "이서진",
        task: "부적 생성 페이지, 마이페이지, 부적 공유 페이지, 부적 결과 페이지(응원)",
      },
      {
        part: 3,
        name: "조현영",
        task: "응원하기, 이미지 업로드, ERD 설계, API 명세서 작성, 배포",
      },
      {
        part: 3,
        name: "최유미",
        task: "로그인/로그아웃, 회원가입, ERD 설계, API 명세서 작성",
      },
      {
        part: 3,
        name: "이나경",
        task: "부적 생성하기, 부적함 보기, ERD 설계, API 명세서 작성",
      },
    ],
  },
];

const Techdata = [
  {
    id: 1,
    name: "이름하여 이름하다",
    tech: [{ src: figma, alt: "figma", part: 1 }],
  },
  {
    id: 2,
    name: "응원이 부적해",
    tech1: [
      { src: figma, alt: "figma" },
      { src: ai, alt: "ai" },
    ],

    tech2: [
      { src: react, alt: "react", part: 2 },
      { src: npm, alt: "npm", part: 2 },
      { src: github, alt: "github", part: 2 },
    ],
    tech3: [
      { src: django, alt: "django", part: 3 },
      { src: aws, alt: "aws", part: 3 },
      { src: git, alt: "git", part: 3 },
    ],
  },
];

export default Detail;

// 멋사 10기 소개 페이지
import Image from "next/image";
import styled from "styled-components";

// component
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

// 이미지
import aurora from "../assets/main/aurora3.svg";
import subtract from "../assets/likelion/subtract2.svg";
import whitearrow from "../assets/likelion/whitearrow.svg";
import group from "../assets/likelion/group.png";
import logo from "../assets/likelion/logo.svg";

import activity1 from "../assets/likelion/activity1.png";
import activity2 from "../assets/likelion/activity2.png";
import activity3 from "../assets/likelion/activity3.png";
import activity4 from "../assets/likelion/activity4.png";
import activity5 from "../assets/likelion/activity5.png";
import activity6 from "../assets/likelion/activity6.png";
import activity7 from "../assets/likelion/activity7.png";
import activity8 from "../assets/likelion/activity8.png";

const Likelion = () => {
  const urls = [
    "",
    "https://www.instagram.com/p/CghRjDSvQ1e/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/Cg1c7oGvDcT/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CgziA44vZoN/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/Cf3Wt_aPl-p/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CioVMIFPo2y/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CioVQUvvsyN/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/CiZDPFYvQg4/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/Cms9qoivTUx/?utm_source=ig_web_copy_link", //졸프 > 전시사이트 카뉴 링크로 수정
  ];
  // 인스타그램 링크 이동
  const onClicktoInsta = (id) => {
    window.open(urls[id]);
  };
  // 아기사자 리크루팅 노션 이동
  const onClicktoNotion = () => {
    const url =
      "https://www.notion.so/likelion-ewha-11/11-2ab91fabd297476faaa878a526f69cca";
    window.open(url);
  };
  return (
    <>
      <Container>
        <ImageWrapper
          style={{
            backgroundImage: `url(${group.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <TopBar></TopBar>
          <TilteBar>
            <div>이화여자대학교</div>
            <br />
            <div>멋쟁이사자처럼 10기</div>
          </TilteBar>
          <Image src={logo.src} width={50} height={50} className="logo" />
        </ImageWrapper>

        <Background>
          <TextWrapper>
            <MiniTitle>
              <div className="title">활동기간</div>
              <DottedLine width="70vw"></DottedLine>
            </MiniTitle>
            <div className="text">2022.03 - 2023.01</div>
          </TextWrapper>

          <TextWrapper>
            <MiniTitle>
              <div className="title">멋사 공식 인스타그램</div>
              <DottedLine width="55vw"></DottedLine>
            </MiniTitle>
            <div className="text">@likelion_ewha</div>
          </TextWrapper>
          <TextWrapper>
            <MiniTitle>
              <div className="title">멋쟁이사자처럼 소개</div>
              <DottedLine width="57vw"></DottedLine>
            </MiniTitle>
            <div className="text">
              HACK YOUR LIFE💻 멋쟁이사자처럼은 대학생을 대상으로 개발 교육과
              프로젝트 경험을 제공하는 전국 단위 웹 개발 동아리입니다! 2022년을
              기준으로 42개 대학이 소속되어 있습니다. 🦁이화여대 멋쟁이사자처럼
              10기는 3명의 운영진과 16명의 아기사자로 구성되어있으며,
              기획디자인, 백엔드, 프론트엔드로 트랙을 나누어 활동을
              진행했습니다. 코딩의 코자도 모르는 벗들 모두 환영합니다👋🏻
            </div>
          </TextWrapper>
          <TextWrapper>
            <MiniTitle>
              <div className="title">멋사 커리큘럼</div>
              <DottedLine width="65vw"></DottedLine>
            </MiniTitle>
            <div className="boldtext">트랙 공통</div>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src}></img>
              <TrackBox2>
                <TextBox>
                  <div className="title">HTML&CSS</div>
                  <div className="content">기초 코딩 교육</div>
                </TextBox>
                <TextBox>
                  <div className="title">Python</div>
                  <div className="content">기초 코딩 교육</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="right">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">Git 입문</div>
                  <div className="content">Github와 버전 관리</div>
                </TextBox>
                <TextBox>
                  <div className="title">해커톤 출전</div>
                  <div className="content">여기톤, 중앙 해커톤, 신촌톤 </div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <div className="boldtext">기획·디자인</div>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src}></img>
              <TrackBox2>
                <TextBox>
                  <div className="title">역기획서 #1</div>
                  <div className="content">역기획서, 고객 페르소나</div>
                </TextBox>
                <TextBox>
                  <div className="title">역기획서 #2</div>
                  <div className="content">서비스 기획서 프로젝트</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="right">
              <img className="subtract" src={subtract.src}></img>
              <TrackBox2>
                <TextBox>
                  <div className="title">PM과 문제 정의</div>
                  <div className="content">문제 정의와 비즈니스 모델</div>
                </TextBox>
                <TextBox>
                  <div className="title">기획자와 UX</div>
                  <div className="content">피그마, UX 디자인 교육</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">대동제 사이트 기획</div>
                  <div className="content">TF와의 협동 기획</div>
                </TextBox>
                <TextBox>
                  <div className="title">대동제 사이트 디자인</div>
                  <div className="content">대동제 사이트 UI 디자인</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <div className="boldtext">프론트엔드</div>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src}></img>
              <TrackBox2>
                <TextBox>
                  <div className="title">Javascript</div>
                  <div className="content">Javascript 필수 문법</div>
                </TextBox>
                <TextBox>
                  <div className="title">JS 토이프로젝트</div>
                  <div className="content">JS로 Todolist 만들기</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="right">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">React 기초 1</div>
                  <div className="content">React 입문</div>
                </TextBox>
                <TextBox>
                  <div className="title">React 기초 2</div>
                  <div className="content">React Hooks</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">React 기초 3</div>
                  <div className="content">Router, CSS in JS</div>
                </TextBox>
                <TextBox>
                  <div className="title">React 심화 1</div>
                  <div className="content">상태 관리 라이브러리</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="right">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">React 심화 2</div>
                  <div className="content">Http 프로토콜, axios</div>
                </TextBox>
                <TextBox>
                  <div className="title">대동제 프로젝트</div>
                  <div className="content">Re:wha 사이트 개발</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <div className="boldtext">백엔드</div>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src}></img>
              <TrackBox2>
                <TextBox>
                  <div className="title">Django 기초</div>
                  <div className="content">django MTV 패턴</div>
                </TextBox>
                <TextBox>
                  <div className="title">Django 블로그</div>
                  <div className="content">django CRUD</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="right">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">1:N & M:N</div>
                  <div className="content">댓글과 해시태그</div>
                </TextBox>
                <TextBox>
                  <div className="title">Static & Media</div>
                  <div className="content">django 정적 파일 관리</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">유저인증과 확장</div>
                  <div className="content">로그인 & 회원가입</div>
                </TextBox>
                <TextBox>
                  <div className="title">DRF #1</div>
                  <div className="content">Serialization</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="right">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">DRF #2</div>
                  <div className="content">블로그 API 서버</div>
                </TextBox>
                <TextBox>
                  <div className="title">DRF #3</div>
                  <div className="content">User Serializer</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <TrackBox start="left">
              <img className="subtract" src={subtract.src} />
              <TrackBox2>
                <TextBox>
                  <div className="title">Deploy</div>
                  <div className="content">DRF 배포</div>
                </TextBox>
                <TextBox>
                  <div className="title">대동제 프로젝트</div>
                  <div className="content">API 서버와 DB 구축</div>
                </TextBox>
              </TrackBox2>
            </TrackBox>
            <WarningText>*10기 기준이며 11기는 상이할 수 있습니다.</WarningText>
          </TextWrapper>
          <TextWrapper>
            <MiniTitle>
              <div className="title">10기 활동내역</div>
              <DottedLine width="65vw"></DottedLine>
            </MiniTitle>
            <InstaWrapper>
              <div className="flex_row">
                <InstaImage
                  onClick={() => onClicktoInsta(1)}
                  back={activity1.src}
                >
                  1학기 교육 활용 <p>2022.03 - 2022.07</p>
                </InstaImage>
                <InstaImage
                  onClick={() => onClicktoInsta(2)}
                  back={activity2.src}
                >
                  DRF 연합세션 <p>2022.07.26</p>
                </InstaImage>
              </div>
              <div className="flex_row">
                <InstaImage
                  back={activity3.src}
                  onClick={() => onClicktoInsta(3)}
                >
                  여기톤 <p>2022.07.29</p>
                </InstaImage>
                <InstaImage
                  back={activity4.src}
                  onClick={() => onClicktoInsta(4)}
                >
                  중앙 아이디어톤 본선 <p>2022.07.22</p>
                </InstaImage>
              </div>
              <div className="flex_row">
                <InstaImage
                  back={activity5.src}
                  onClick={() => onClicktoInsta(5)}
                >
                  중앙해커톤 금상 <p>2022.08.19</p>
                  <p>2022.06.01</p>
                </InstaImage>
                <InstaImage
                  back={activity6.src}
                  onClick={() => onClicktoInsta(6)}
                >
                  신촌 연합 해커톤 <p>2022.08.27</p>
                </InstaImage>
              </div>
              <div className="flex_row">
                <InstaImage
                  back={activity7.src}
                  onClick={() => onClicktoInsta(7)}
                >
                  2022 대동제 <p>2022.09.14 - 09.16</p>
                </InstaImage>
                <InstaImage
                  back={activity8.src}
                  onClick={() => onClicktoInsta(8)}
                >
                  졸업 프로젝트 <p>2022.12-2023.01</p>
                </InstaImage>
              </div>
            </InstaWrapper>
          </TextWrapper>
          <Recruiting onClick={onClicktoNotion}>
            <div className="text">멋쟁이 사자처럼 11기 아기사자 모집</div>
            <div className="button">
              <img src={whitearrow.src} />
            </div>
          </Recruiting>
        </Background>
        <Footer />
      </Container>
    </>
  );
};

export default Likelion;

const Container = styled.div`
  @media screen and (min-width: 440px) {
    width: 390px;
    height: auto;

    .title {
      white-space: nowrap;
    }
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  align-items: center;
  height: 256px;
  font-family: "Pretendard-Regular";

  position: relative;

  .logo {
    position: absolute;
    top: 13px;
    right: 10px;
  }
`;

const TilteBar = styled.div`
  position: absolute;
  padding-bottom: 15px;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
  display: flex;
  flex-direction: column;
  height: 80px;
  align-items: flex-start;
  justify-content: flex-end;

  font-family: "Ydestreet";
  font-size: 16px;

  padding-left: 20px;
`;

const Background = styled.div`
  position: relative;

  ::after {
    content: "";
    background-image: url(${aurora.src});
    background-size: cover;
    background-position-x: 50%;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    position: absolute;
    z-index: -10;
    opacity: 53%;
  }
`;

const TextWrapper = styled.div`
  /* border: solid 1px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 20px 4px 20px;
  margin-top: 24px;
  .text {
    font-family: "Pretendard-Regular";
    font-size: 13px;
    font-weight: 400;
    line-height: 23px;
    padding: 4px 0 4px 0;
  }

  .boldtext {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    font-weight: 600;
    padding: 16px 0 16px 0;
  }
`;

const MiniTitle = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  /* border: solid 1px; */
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
  justify-content: space-between;
  .title {
    width: max-content;
  }
`;

const DottedLine = styled.div`
  border: none;
  border-top: 2px dashed #d0e3d5;
  color: transparent;
  background-color: transparent;
  height: 1px;
  width: ${(props) => props.width};
`;

const TrackBox = styled.div`
  /* border: solid 1px; */
  display: flex;
  position: static;
  align-items: center;
  justify-content: ${(props) =>
    props.start === "left" ? "flex-start" : "flex-end"};
  height: 60px;
  margin: 4px 0 4px 0;

  .subtract {
    position: absolute;
    z-index: -1;
    filter: drop-shadow(1px 2px 3px #a0a0a0);
  }
`;

const TrackBox2 = styled.div`
  /* border: solid 1px; */

  display: flex;
  width: 305px;
  justify-content: space-around;
  transform: translate(-3px, 3px);
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Pretendard-Regular";
  align-items: center;
  justify-content: center;
  .title {
    font-size: 12px;
    font-weight: 600;
  }

  .content {
    font-size: 10px;
    font-weight: 400;
    color: #a0a0a0;
    line-height: 15px;
  }
`;

const WarningText = styled.div`
  font-size: 13px;
  font-weight: 400;
  font-family: "Pretendard-Regular";
  color: #9d9d9d;

  padding: 8px 0 32px 0;
`;

const InstaWrapper = styled.div`
  /* border: solid 1px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .flex_row {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
const InstaImage = styled.div`
  &:hover {
    cursor: pointer;
    transform: translateY(-7px);
    transition: all ease 1s 0s;
  }
  position: relative;

  background-image: url(${(props) => props.back});
  width: 119px;
  height: 119px;
  margin: 5px 10px 5px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  font-family: "Pretendard-Regular";
  p {
    font-size: 10px;
    position: absolute;
    bottom: 10px;
  }
`;

const Recruiting = styled.div`
  &:hover {
    cursor: pointer;
  }
  width: 260px;
  height: 41px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin: 0 auto;
  margin-bottom: 60px;

  .text {
    font-family: "Pretendard-Regular";
    font-weight: 400;
    font-size: 13px;
  }

  .button {
    width: 36px;
    height: 25px;

    background: #75a483;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// 메인 페이지
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
// 컴포넌트
import Navbar from "../components/Navbar";
import Player from "../components/Player";
// 이미지
import aurora from "../assets/main/aurora3.svg";
import shadow from "../assets/main/shadow.svg";
import paper from "../assets/main/paper.png";

import title from "../assets/main/title.svg";

import des1 from "../assets/main/des1.svg";
import des2 from "../assets/main/des2.svg";

export default function Home() {
  return (
    <Div>
      <Container>
        <Navbar />
        <Image src={title.src} width={270} height={84} className="title" />
        <Player />
        <Image src={des1.src} width={230} height={22} className="des1" />
        <Image src={des2.src} width={215} height={14} className="des2" />
      </Container>

      <div style={{ position: "relative", zIndex: "-1000" }}>
        <img src={aurora.src} className="test" />
        <img src={shadow.src} className="shadow" />
      </div>

      <Image
        src={paper.src}
        alt="paper"
        width={390}
        height={770}
        className="paper"
      />

      {/* <Image src={shadow.src} alt="shadow" fill className="shadow" /> */}
      {/* <Image
        src={aurora.src}
        alt="background"
        width={390}
        height={652}
        className="background"
      /> */}
    </Div>
  );
}

const Container = styled.div`
  .title {
    margin-top: 76px;
  }
  .des1 {
    margin-top: 46px;
  }

  .des2 {
    margin-top: 13px;
  }
  width: 100%;
  height: auto;
  position: absolute;
  border: 1px red solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  position: relative;
  width: auto;
  height: auto;

  margin: 0;
  padding: 0;

  .test {
    width: 100%;
  }

  .background {
    width: 100%;
  }

  .shadow {
    position: absolute;
    bottom: 0px;
    left: 0;
    //transform: translateY(0px);
    width: 100%;
  }

  .paper {
    width: 100%;
  }
`;

// const Test = styled.div`
//   position: relative;

//   width: 100%;
//   height: 695px;

//   background-image: url(${aurora.src});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

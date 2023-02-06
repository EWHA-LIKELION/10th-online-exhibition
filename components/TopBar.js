import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import back from "../assets/topbar/back.svg";

const TopBar = ({ children }) => {
  return (
    <TopBarDiv>
      <Link href="/">
        <Image src={back.src} width={12} height={24} alt="back" />
      </Link>
      <p className="title">{children}</p>
    </TopBarDiv>
  );
};

export default TopBar;

const TopBarDiv = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  a {
    padding: 20px;
    position: absolute;
  }
  .title {
    font-family: "Pretendard-Regular";
    font-weight: 700;
    font-size: 24px;
    line-height: 70px;
    width: 100%;
    text-align: center;
  }
`;

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

//이미지
import likelion from "../assets/icon/likelion.svg";
import linktree from "../assets/icon/linktree.svg";
import insta from "../assets/icon/insta.svg";
import github from "../assets/icon/github.svg";

const Footer = () => {
  return (
    <FooterDiv>
      <Container>
        <p className="about">More About Us</p>

        <Icons>
          <Link href="https://www.instagram.com/likelion_ewha/">
            <div className="likelion-box">
              <Image src={likelion.src} width={35} height={35} />
              <p className="likelion">LIKELION EWHA</p>
            </div>
          </Link>
          <div className="icon-box">
            <Link href="https://linktr.ee/likelion.ewha">
              <Image src={linktree.src} width={20} height={23} />
            </Link>
            <Link href="https://www.instagram.com/likelion_ewha/">
              <Image src={insta.src} width={23} height={23} />
            </Link>

            <Link href="https://github.com/EWHA-LIKELION">
              <Image src={github.src} width={23} height={23} />
            </Link>
          </div>
        </Icons>

        <p className="copyright">
          ⓒ 2023. Likelion Ewha 10th. All rights reserved.
        </p>
      </Container>
    </FooterDiv>
  );
};

export default Footer;

const Container = styled.div`
  margin: 18px auto 11px auto;

  width: 310px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  .likelion-box {
    display: flex;
    p {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }
  }

  .icon-box {
    width: 93px;
    display: flex;
    justify-content: space-between;
  }
`;
const FooterDiv = styled.div`
  z-index: 1000;

  a {
    color: black;
    text-decoration: none;
    text-decoration-line: none;
  }

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 130px;
  border-top: 1px solid #a5a5a5;

  p {
    font-family: "Pretendard";
    text-decoration: none;
    text-decoration-line: none;
  }

  .about {
    font-size: 12px;
    font-weight: 300;
    color: #a5a5a5;
  }

  .likelion {
    font-weight: 500;
    font-size: 12px;
  }

  .copyright {
    text-align: center;
    margin-top: 27px;
    font-weight: 400;
    font-size: 8px;
    color: #a5a5a5;
  }
`;

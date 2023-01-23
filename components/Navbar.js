import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
//이미지
//import navbar from "../assets/main/navbar3.png";
import navbar from "../assets/main/navbar2.svg";

const Navbar = () => {
  return (
    <NavDiv>
      <img src={navbar.src} />

      <div className="link">
        <Link href="/likelion">
          <div className="second"></div>
        </Link>
        <Link href="/lions">
          <div className="third"> </div>
        </Link>
        <Link href="/makers">
          <div className="fourth"> </div>
        </Link>
      </div>
    </NavDiv>
  );
};

export default Navbar;

// 이미지 실제 가로 : 320

const NavDiv = styled.div`
  position: relative;

  margin-top: 33px;
  width: 100%;
  height: 45px;

  .link {
    width: 95%;

    position: absolute;
    top: 0;
    left: 0;

    //border: 1px solid blue;

    display: flex;
    justify-content: space-around;
  }

  .second {
    //border: 1px solid red;

    left: 15px;
    width: 140px;
    height: 30px;
  }

  .third {
    //border: 1px solid red;
    left: 155px;
    width: 71px;
    height: 30px;
  }

  .fourth {
    //border: 1px solid red;
    left: 260px;
    width: 45px;
    height: 30px;
  }

  img {
    //transform: translateX(calc((100% - 390px) / 2 * (-1)));
    width: 95%;

    /* @media screen and (min-width: 390px) {
      transform: translateX(calc((100% - 390px) / 2 * (-1)));
    } */
  }
`;

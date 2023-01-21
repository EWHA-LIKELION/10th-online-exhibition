import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
//이미지
//import navbar from "../assets/main/navbar3.png";
import navbar from "../assets/main/navbar2.svg";

const Navbar = () => {
  return (
    <NavDiv>
      <Image src={navbar} fill />

      <Link href="/likelion">
        <div className="second"></div>
      </Link>
      <Link href="/lions">
        <div className="third"> </div>
      </Link>
      <Link href="/makers">
        <div className="fourth"> </div>
      </Link>
    </NavDiv>
  );
};

export default Navbar;

// 이미지 실제 가로 : 320

const NavDiv = styled.div`
  position: relative;

  margin-top: 33px;
  width: 100%;
  height: 36px;

  img {
    @media screen and (min-width: 320px) {
      transform: translateX(calc((100% - 320px) / 2 * (-1)));
    }
  }
  div {
    position: absolute;
    width: 10px;
    height: 36px;
  }
  /* .first {
    border: 1px solid red;
    left: 15px;
    width: 27px;
    height: 30px;
  } */

  .second {
    border: 1px solid red;
    left: 15px;
    width: 120px;
    height: 30px;
  }

  .third {
    border: 1px solid red;
    left: 155px;
    width: 71px;
    height: 30px;
  }

  .fourth {
    border: 1px solid red;
    left: 260px;
    width: 45px;
    height: 30px;
  }
`;

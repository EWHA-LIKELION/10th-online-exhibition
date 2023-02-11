import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
//이미지
import navbar from "../assets/main/navbar.svg";

const Navbar = () => {
  return (
    <NavDiv>
      <object type="image/svg+xml" data={navbar.src}>
        <img src={navbar.src} />
      </object>

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
  animation: slidein 0.8s ease-in;

  position: relative;

  margin-top: 33px;
  width: 100%;
  height: 45px;

  .link {
    width: 95%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
  }

  .second {
    left: 15px;
    width: 140px;
    height: 30px;
  }

  .third {
    left: 155px;
    width: 71px;
    height: 30px;
  }

  .fourth {
    left: 260px;
    width: 45px;
    height: 30px;
  }

  object {
    width: 95%;
  }
  img {
    width: 95%;
    //transform: translateX(calc((100% - 390px) / 2 * (-1)));
    /* @media screen and (min-width: 390px) {
      transform: translateX(calc((100% - 390px) / 2 * (-1)));
    } */
  }
`;

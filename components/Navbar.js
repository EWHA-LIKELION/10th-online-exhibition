import styled from "styled-components";
import Image from "next/image";

//이미지
//import navbar from "../assets/main/navbar3.png";
import navbar from "../assets/main/navbar2.svg";

const Navbar = () => {
  return (
    <NavDiv>
      <Image src={navbar} fill />
    </NavDiv>
  );
};

export default Navbar;

// 이미지 실제 가로 : 320

const NavDiv = styled.div`
  border: 1px solid blue;

  position: relative;

  margin-top: 33px;
  width: 100%;
  height: 46px;

  img {
    @media screen and (min-width: 320px) {
      transform: translateX(calc((100% - 320px) / 2 * (-1)));
    }
  }
`;

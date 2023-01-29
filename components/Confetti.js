import styled from "styled-components";
const Confetti = ({ id, bottom, left, ani, src }) => {
  return <Con src={src.src} bottom={bottom} left={left} ani={ani} />;
};

export default Confetti;

const Con = styled.img`
  //border: 1px solid blue;
  position: absolute;

  width: 7px;
  height: 7px;
  transform: translateY(-400px);

  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  animation: ${(props) => props.ani};

  //left: 100px;
  //bottom: -150px;
  //animation: fall 10s ease 0s infinite;
`;

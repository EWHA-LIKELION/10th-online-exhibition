import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

//이미지
import front from "../assets/letter/front.svg";
import back from "../assets/letter/back.svg";
import record from "../assets/letter/record.svg";

const Letter = ({ top, left, text, id }) => {
  const route = `/detail/${id}`;

  return (
    <Link href={route}>
      <LetterDiv top={top} left={left}>
        <Image src={back.src} width={137} height={141} className="back" />
        <Image src={front.src} width={138} height={81} className="front" />
        <Image
          src={record.src}
          width={126}
          height={126}
          className="record rotate"
        />

        <p>{text}</p>
      </LetterDiv>
    </Link>
  );
};

export default Letter;

const LetterDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: calc((100% - 138px) / 2);

  //left: ${(props) => props.left};

  width: 138px;
  height: 138px;
  // border: 1px solid blue;

  .back {
    position: absolute;
    bottom: 0;
  }

  .front {
    position: absolute;
    bottom: 0;
    z-index: 10000;
  }

  .record {
    position: absolute;
    bottom: 7px;
    left: 6px;
    z-index: 100;
  }

  p {
    width: 182px;
    font-family: "Pretendard-Regular";
    font-weight: 300;
    color: rgba(150, 150, 150, 1);

    position: absolute;
    bottom: -30px;
    left: calc((100% - 182px) / 2);

    text-align: center;
  }
`;

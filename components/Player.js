import styled from "styled-components";
import Image from "next/image";
//이미지
import player from "../assets/main/player.svg";
import pink from "../assets/main/pinkrecord.svg";
import blue from "../assets/main/bluerecord.svg";
import yellowstar from "../assets/main/yellowstar.svg";
import bluestar from "../assets/main/bluestar.svg";
import bluenote from "../assets/main/bluenote.svg";
import pinknote from "../assets/main/pinknote.svg";

const Player = () => {
  return (
    <Div>
      <Image src={player.src} width={148} height={112} className="player" />
      <Image src={pink.src} width={91} height={81} className="pink" />
      <Image src={blue.src} width={100} height={96} className="blue" />

      <Image
        src={yellowstar.src}
        width={47}
        height={49}
        className="yellowstar"
      />
      <Image src={bluestar.src} width={36} height={59} className="bluestar" />
      <Image src={bluenote.src} width={38} height={40} className="bluenote" />
      <Image src={pinknote.src} width={30} height={42} className="pinknote" />
    </Div>
  );
};

export default Player;

const Div = styled.div`
  width: 153px;
  height: 153px;

  margin-top: 30px;

  position: relative;
  .player {
    position: absolute;
    bottom: 0;
    left: 0;
    filter: drop-shadow(3px 11px 12px rgba(0, 0, 0, 0.4));
    //filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .pink {
    position: absolute;
    bottom: 50px;
    left: 20px;
    filter: drop-shadow(3px 11px 12px rgba(0, 0, 0, 0.1));
  }

  .blue {
    position: absolute;
    bottom: 70px;
    left: 22px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  }

  .yellowstar {
    position: absolute;
    bottom: 30px;
    left: -50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
  .bluestar {
    position: absolute;
    top: 5px;
    right: -20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
  .bluenote {
    position: absolute;
    bottom: 90px;
    left: -45px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }

  .pinknote {
    position: absolute;
    bottom: 30px;
    right: -40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
`;

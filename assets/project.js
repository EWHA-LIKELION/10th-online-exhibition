// tech img
import figma from "./detail/figma.svg";
import ai from "./detail/illustrator.svg";
import react from "./detail/react.svg";
import npm from "./detail/npm.svg";
import pythonany from "./detail/pythonany.svg";
import github from "./detail/github.svg";

import django from "./detail/django.svg";
import aws from "./detail/aws.svg";
import git from "./detail/git.svg";

import namingtitle1 from "./detail/namingtitle11.svg";
import namingtitle2 from "./detail/namingtitle22.svg";

import thumbnail1 from "./1team/thumbnail.png";
import thumbnail2 from "./2team/thumbnail.png";

import team1 from "./1team/imgs";
import team2 from "./2team/imgs";

export const Introducedata = [
  {
    id: 1,
    name: "이름하여 이름하다",
    url: "https://naming.swygbro.com/",
    titleimg: namingtitle1,
    thumbnail: thumbnail1,
    oneline: "다른 사람이 적어주는 나의 정의를 모아 사전을 만들어보세요!",
    detail:
      "이름하여 이름하다는 자신에 대한 정의를 주변인들로부터 모아 나만의 사전을 만들 수 있는 서비스입니다. 00하다에 사전 주인의 이름을 넣을 수 있고, 사전의 특성을 살려 자음별로 정의를 모아볼 수 있게 하였으며 처음 작성할 때엔 시작해야하는 자음을 랜덤으로 배정해 약간의 강제성이 섞인 재미를 더했습니다.",
  },
  {
    id: 2,
    name: "응원이 부적해",
    url: "https://cheer-charm.swygbro.com/",
    titleimg: namingtitle2,
    thumbnail: thumbnail2,

    oneline: "응원으로 완성되는 나만의 커스텀 부적 만들기",
    detail:
      "내가 지은 이름과 내가 고른 디자인의 커스텀 부적을 생성하고 링크를 공유할 수 있어요. 응원이 모두 모이기 전까지는 부적과 응원 내용을 볼 수 없지만, 목표한 응원 개수를 달성하게 되면 완성된 부적 이미지를 저장할 수 있어요.  친구의 부적에 익명으로 닉네임과 내용을 남겨 응원할 수 있고, 내용은 부적을 생성한 사람만 열람할 수 있는 비공개 응원이에요. 마이페이지에서 언제든 내 부적들을 다시 보고 삭제해 보세요.",
  },
];

export const RnRdata = [
  {
    id: 1,
    name: "응원이 부적해",
    task: [
      {
        part: 1,
        name: "곽은진",
        task: "방문자 와이어프레임, 정의 작성 가이드, 자음 랜덤 배정, 정의 작성 모달, 사전 표지 사전 실루엣 디자인, 전체 페이지 2차 디자인",
      },
      {
        part: 1,
        name: "신다윤",
        task: "회원가입 와이어프레임, 사전 커스텀, 검색 사전 표지 디자인, 전체 페이지 1차 디자인",
      },
      {
        part: 2,
        name: "김민주",
        task: "가입자 홈화면, 정의 구경하기, 사전 검색 사이드바",
      },
      {
        part: 2,
        name: "이채원",
        task: "로그인/회원가입, 사전 커스텀, 사전 공유, 유저인증, 페이지 라우팅, 방문자 정의 구경하기, 정의 추가 작성, 만든이들",
      },
      {
        part: 2,
        name: "허윤",
        task: "방문자 홈화면, 정의 작성 초기 화면, 정의 작성 안내, 방문자 이름 작성 모달",
      },
      {
        part: 3,
        name: "신이수",
        task: "회원가입, 로그인 개발",
      },
      {
        part: 3,
        name: "임채영",
        task: "사전 검색, 정의 써준 사람 조회, 방문자 이름 받기, 정의 좋아요, 삭제 기능",
      },
      {
        part: 3,
        name: "김정은",
        task: "사전 만들기, 사전 커스텀 값 조회, 자음별 정의 조회, 정의 작성 & 삭제",
      },
    ],
  },
  {
    id: 2,
    name: "이름하여 이름하다",
    task: [
      {
        part: 1,
        name: "박성연",
        task: "응원이 부적해 서비스 기획,  랜딩 페이지 / 마이 페이지 / 응원 작성 페이지 / 부적 이미지 디자인 ",
      },
      {
        part: 1,
        name: "김다은",
        task: "부적 링크, 결과 페이지 / 로그인,회원가입 페이지 디자인",
      },
      {
        part: 2,
        name: "정연주",
        task: "로그인/회원가입, 랜딩 페이지, 응원 전송 페이지, 부적 결과 페이지(부적)",
      },
      {
        part: 2,
        name: "이서진",
        task: "부적 생성 페이지, 마이페이지, 부적 공유 페이지, 부적 결과 페이지(응원)",
      },
      {
        part: 3,
        name: "조현영",
        task: "응원하기, 이미지 업로드, ERD 설계, API 명세서 작성, 배포",
      },
      {
        part: 3,
        name: "최유미",
        task: "로그인/로그아웃, 회원가입, ERD 설계, API 명세서 작성",
      },
      {
        part: 3,
        name: "이나경",
        task: "부적 생성하기, 부적함 보기, ERD 설계, API 명세서 작성",
      },
    ],
  },
];

export const Techdata = [
  {
    id: 1,
    name: "이름하여 이름하다",
    tech1: [
      { src: figma, alt: "figma" },
      { src: ai, alt: "ai" },
    ],
    tech2: [
      { src: react, alt: "react", part: 2 },
      { src: npm, alt: "npm", part: 2 },
      { src: github, alt: "github", part: 2 },
    ],
    tech3: [
      { src: django, alt: "django", part: 3 },
      { src: pythonany, alt: "pythonany", part: 3 },
      { src: git, alt: "git", part: 3 },
    ],
  },
  {
    id: 2,
    name: "응원이 부적해",
    tech1: [
      { src: figma, alt: "figma" },
      { src: ai, alt: "ai" },
    ],

    tech2: [
      { src: react, alt: "react", part: 2 },
      { src: npm, alt: "npm", part: 2 },
      { src: github, alt: "github", part: 2 },
    ],
    tech3: [
      { src: django, alt: "django", part: 3 },
      { src: aws, alt: "aws", part: 3 },
      { src: git, alt: "git", part: 3 },
    ],
  },
];

export const CardSliderData = [team1, team2];

// tech img
import figma from "./detail/figma.svg";
import ai from "./detail/illustrator.svg";
import react from "./detail/react.svg";
import npm from "./detail/npm.svg";

import github from "./detail/github.svg";

import django from "./detail/django.svg";
import aws from "./detail/aws.svg";
import git from "./detail/git.svg";

import namingtitle1 from "./detail/namingtitle11.svg";
import namingtitle2 from "./detail/namingtitle22.svg";

//import thumbnail1 from "./1team/thumbnail.png";
import thumbnail2 from "./2team/thumbnail.png";

//import team1 from "./1team/imgs";
import team2 from "./2team/imgs";

export const Introducedata = [
  {
    id: 1,
    name: "이름하여 이름하다",
    url: "https://www.instagram.com/likelion_ewha/",
    titleimg: namingtitle1,
    thumbnail: thumbnail2,
    oneline: "나만의 사전을 친구들과 함께 채워가요",
    detail: `목숨이 위하여, 눈에 봄바람이다. 인간의 대고, 불어 이상의 목숨이 이 있는가? 속잎나고, 기관과 설산에서 봄바람이다. 청춘의 것이 속에서 눈에 군영과 보이는 있으랴? 뭇 끓는 지혜는 사는가 싹이 풍부하게 않는 그들에게 하여도 것이다. 
      설레는 너의 내는 트고, 새 긴지라 아름다우냐? 우리 대중을 위하여서, 그들의 가진 같으며, 피부가 작고 것이다. 군영과 것은 우리의 이상의 불어 영락과 그리하였는가?`,
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
        task: `맡은 일, 맡맡은 일,맡맡은 일맡맡은 일`,
      },
      {
        part: 1,
        name: "신다윤",
        task: `맡은 일, 맡, 맡은 일, 맡은 일, 맡은 일`,
      },
      {
        part: 2,
        name: "김민주",
        task: `맡은 일, 맡은 일맡은 일`,
      },
      {
        part: 2,
        name: "이채원",
        task: `맡은 일, 맡은 일 맡은 일, 맡은 일, 맡은 일`,
      },
      {
        part: 2,
        name: "허윤",
        task: `맡은 일, 맡일, 맡 맡은 일, 맡은 일`,
      },
      {
        part: 3,
        name: "신이수",
        task: `맡은 일, 맡은 일맡은 일, 맡은 일, 맡은 일`,
      },
      {
        part: 3,
        name: "임채영",
        task: `맡은 일, 맡은일, 맡은 일, 맡은 일`,
      },
      {
        part: 3,
        name: "김정은",
        task: `맡은, 맡은 일맡은 일, 맡은 일`,
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
      { src: aws, alt: "aws", part: 3 },
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

export const CardSliderData = [team2, team2];

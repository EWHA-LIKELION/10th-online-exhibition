// 만든이들 페이지
import react from 'react';
import styled from 'styled-components';

// import Components
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

// import Images
import makers1 from '../assets/makers/makers1.svg';
import makers2 from '../assets/makers/makers2.svg';
import makers3 from '../assets/makers/makers3.svg';
import makers4 from '../assets/makers/makers4.svg';
import makers5 from '../assets/makers/makers5.svg';
import makers6 from '../assets/makers/makers6.svg';
import makers7 from '../assets/makers/makers7.svg';

const Members_design = [
  {
    id: 1,
    name: '곽은진',
    grade: '커뮤니케이션미디어학부 18',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
  {
    id: 2,
    name: '김다은',
    grade: '커뮤니케이션미디어학부 18',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
  {
    id: 3,
    name: '박성연',
    grade: '커뮤니케이션미디어학부 18',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
  {
    id: 4,
    name: '신다윤',
    grade: '커뮤니케이션미디어학부 18',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
];

const Members_front = [
  {
    id: 1,
    name: '정다윤',
    grade: '컴퓨터공학전공 20',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
  {
    id: 2,
    name: '이서진',
    grade: '컴퓨터공학전공 21',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
  {
    id: 3,
    name: '정연주',
    grade: '사이버보안전공 20',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
  {
    id: 4,
    name: '허윤',
    grade: '커뮤니케이션미디어학부 21',
    describtion: '기획 디자인 팀 리드\n2차 디자인 전반 수정 및 제작',
  },
];
const Makers = () => {
  return (
    <>
      <TopBar>만든이들</TopBar>
      <Container>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='circle4'></div>
        <img src={makers1.src} className='img1' />
        <img src={makers2.src} className='img2' />
        <img src={makers3.src} className='img3' />
        <img src={makers4.src} className='img4' />
        <img src={makers5.src} className='img5' />
        <img src={makers6.src} className='img6' />
        <img src={makers7.src} className='img7' />
        <Title>
          <div>LIKELION EWHA 10기</div>
          <div>졸업프로젝트 전시 사이트를 만든이들</div>
        </Title>
        <Line />
        <TeamBox>
          <div className='title'>&lt; 기획・디자인 팀 &gt;</div>
          {Members_design.map((data) => (
            <MemberBox key={data.id}>
              <div className='name'>{data.name}</div>
              <div className='content'>
                <div id='grade'>{data.grade}</div>
                <div id='describe'>{data.describtion}</div>
              </div>
            </MemberBox>
          ))}
        </TeamBox>
        <TeamBox>
          <div className='title'>&lt; 프론트엔드 개발 팀 &gt;</div>
          {Members_front.map((data) => (
            <MemberBox key={data.id}>
              <div className='name'>{data.name}</div>
              <div className='content'>
                <div id='grade'>{data.grade}</div>
                <div id='describe'>{data.describtion}</div>
              </div>
            </MemberBox>
          ))}
        </TeamBox>
        <Footer />
      </Container>
    </>
  );
};

export default Makers;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
  z-index: -2;
  overflow: hidden;

  .circle1 {
    position: absolute;
    width: 440px;
    height: 440px;
    left: 59px;
    top: 4px;

    background: radial-gradient(
      50% 50% at 50% 50%,
      #e0ebfe 0%,
      rgba(255, 255, 255, 0) 100%
    );

    z-index: -1;
    filter: blur(2px);
  }

  .circle2 {
    position: absolute;
    width: 351px;
    height: 351px;
    left: -65px;
    top: 247px;

    background: radial-gradient(
      50% 50% at 50% 50%,
      #efecf9 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: -1;
    filter: blur(2px);
  }

  .circle3 {
    position: absolute;
    width: 444px;
    height: 444px;
    left: 31px;
    top: 344px;

    background: radial-gradient(
      50% 50% at 50% 50%,
      #fef0f1 0%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(2px);
    z-index: -1;
  }

  .circle4 {
    position: absolute;
    width: 351px;
    height: 351px;
    left: -57px;
    top: 604px;

    background: radial-gradient(
      50% 50% at 50% 50%,
      #fcffed 0%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(2px);
    z-index: -1;
  }

  .img1 {
    position: absolute;
    left: -3.47%;
    right: 76.03%;
    top: 2.05%;
    bottom: 81.4%;
    z-index: -1;
  }

  .img2 {
    position: absolute;
    left: 75.38%;
    right: -5.64%;
    top: 11.93%;
    bottom: 69.71%;
    z-index: -1;
  }

  .img3 {
    position: absolute;
    left: -2.95%;
    right: 58.78%;
    top: 35.37%;
    bottom: 33.84%;
    z-index: -1;
  }
  .img4 {
    position: absolute;
    left: 85.77%;
    right: -15.34%;
    top: 40.56%;
    bottom: 46.67%;
    z-index: -1;
  }
  .img5 {
    position: absolute;
    left: 45.13%;
    right: 1.03%;
    top: 83.21%;
    bottom: 12.02%;
    z-index: -1;
  }
  .img6 {
    position: absolute;
    /* width: 80.17px;
    height: 279px; */
    left: 12%;
    top: 2%;
    z-index: -1;
  }
  .img7 {
    position: absolute;
    top: 12%;
    left: 57%;
    z-index: -1;
  }
`;

const Title = styled.div`
  margin-top: 170px;
  font-family: 'Pretendard-Regular';
  font-weight: 300;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  border: none;
  border-bottom: solid 0.5px #000000;
  width: 70%;
  margin: 16px 0 16px 0;
`;

const TeamBox = styled.div`
  font-family: 'Pretendard-Regular';

  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  .title {
    font-weight: 700;
    font-size: 14px;
    color: #5c5c5c;
    margin-bottom: 18px;
  }
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  width: 80%;

  justify-content: space-between;

  .name {
    font-weight: 700;
    font-size: 14px;
    color: #5c5c5c;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 70%;
    #grade {
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 12px;

      color: #4d4d4d;
    }

    #describe {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;

      color: #5c5c5c;
    }
  }
`;

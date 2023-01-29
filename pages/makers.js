// 만든이들 페이지
import react from 'react';
import styled from 'styled-components';

import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const Makers = () => {
  return (
    <>
      <TopBar>만든이들</TopBar>
      <Container>
        <Title>
          <div>LIKELION EWHA 10기</div>
          <div>졸업프로젝트 전시 사이트를 만든이들</div>
        </Title>
        <Line />
        <TeamBox>
          <div className='title'>&lt; 기획・디자인 팀 &gt;</div>
          <MemberBox>
            <div className='name'>곽은진</div>
            <div className='content'>
              <div id='grade'>커뮤니케이션미디어학부 18</div>
              <div id='describe'>
                기획 디자인 팀 리드 2차 디자인 전반 수정 및 제작
              </div>
            </div>
          </MemberBox>
          <MemberBox>
            <div className='name'>곽은진</div>
            <div className='content'>
              <div id='grade'>커뮤니케이션미디어학부 18</div>
              <div id='describe'>
                기획 디자인 팀 리드 2차 디자인 전반 수정 및 제작
              </div>
            </div>
          </MemberBox>
        </TeamBox>
        <TeamBox>
          <div className='title'>&lt; 프론트엔드 개발 팀 &gt;</div>
        </TeamBox>
      </Container>
      <Footer />
    </>
  );
};

export default Makers;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
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

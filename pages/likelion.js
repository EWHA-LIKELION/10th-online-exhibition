// 멋사 10기 소개 페이지
import react from 'react';
import styled from 'styled-components';

// component
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

// 이미지
import aurora from '../assets/main/aurora3.svg';
import arrowline from '../assets/likelion/arrowline.svg';
import subtract from '../assets/likelion/subtract.svg';
import whitearrow from '../assets/likelion/whitearrow.png';

const Likelion = () => {
  // 인스타그램 링크 이동
  const onClicktoInsta = (id) => {
    const url = 'https://instagram.com/likelion_ewha?igshid=YmMyMTA2M2Y=';
    window.open(url);
  };

  // 아기사자 리크루팅 노션 이동
  const onClicktoNotion = () => {
    const url = 'https://www.notion.com';
    window.open(url);
  };
  return (
    <>
      <TopBar></TopBar>
      <Container>
        <ImageWrapper>멋사 10기 단체 사진</ImageWrapper>
        <TilteBar>
          <div>이화여자대학교</div>
          <br />
          <div>멋쟁이사자처럼 10기</div>
        </TilteBar>
        <Background>
          <TextWrapper>
            <MiniTitle>
              <div className='title'>활동기간</div>
              <DottedLine width='70vw'></DottedLine>
            </MiniTitle>
            <div className='text'>2022.03 - 2023. 02</div>
          </TextWrapper>

          <TextWrapper>
            <MiniTitle>
              <div className='title'>멋사 공식 인스타그램</div>
              <DottedLine width='55vw'></DottedLine>
            </MiniTitle>
            <div className='text'>@likelion_ewha</div>
          </TextWrapper>
          <TextWrapper>
            <MiniTitle>
              <div className='title'>멋쟁이사자처럼 소개</div>
              <DottedLine width='57vw'></DottedLine>
            </MiniTitle>
            <div className='text'>
              피가 봄바람을 못하다 노래하며 뭇 석가는 구할 힘있다. 품고 무엇이
              소금이라 공자는 피부가 부패뿐이다. 갑 그들은 남는 현저하게 별과
              것이다. 갑 있는 미묘한 심장은 청춘의 그들은 주며, 희망의 쓸쓸하랴?
              가슴이 피어나는 구하지 타오르고 곧 피부가 인생을 피고, 부패뿐이다.
              그들의 찬미를 광야에서 그들은 없으면, 하는 청춘에서만 두기
              노년에게서 칼이다.{' '}
            </div>
          </TextWrapper>
          <TextWrapper>
            <MiniTitle>
              <div className='title'>멋사 커리큘럼</div>
              <DottedLine width='65vw'></DottedLine>
            </MiniTitle>
            <div className='boldtext'>트랙공통</div>
            <TrackBox start='left'>
              <img className='subtract' src={subtract.src} />
              <img className='arrow1' src={arrowline.src} />
              <img className='arrow2' src={arrowline.src} />
              <img className='arrow3' src={arrowline.src} />
              <TextBox left='15vw'>
                <div className='title'>HTML&CSS</div>
                <div className='content'>어쩌구저쩌구 내용</div>
              </TextBox>
              <TextBox left='55vw'>
                <div className='title'>HTML&CSS</div>
                <div className='content'>어쩌구저쩌구 내용</div>
              </TextBox>
            </TrackBox>
            <TrackBox start='right'>
              <img className='subtract' src={subtract.src} />
              <Arrows>
                <img className='arrow1' src={arrowline.src} />
                <img className='arrow2' src={arrowline.src} />
                <img className='arrow3' src={arrowline.src} />
              </Arrows>

              <TextBox left='22vw'>
                <div className='title'>HTML&CSS</div>
                <div className='content'>어쩌구저쩌구 내용</div>
              </TextBox>
              <TextBox left='62vw'>
                <div className='title'>HTML&CSS</div>
                <div className='content'>어쩌구저쩌구 내용</div>
              </TextBox>
            </TrackBox>
            <div className='boldtext'>기획·디자인</div>
            <div className='boldtext'>프론트엔드</div>
            <div className='boldtext'>백엔드</div>
            <WarningText>*10기 기준이며 11기는 상이할 수 있습니다.</WarningText>
          </TextWrapper>
          <TextWrapper>
            <MiniTitle>
              <div className='title'>10기 활동내역</div>
              <DottedLine width='65vw'></DottedLine>
            </MiniTitle>
            <InstaWrapper>
              <div className='flex_row'>
                <InstaImage onClick={onClicktoInsta}></InstaImage>
                <InstaImage onClick={onClicktoInsta}></InstaImage>
              </div>
              <div className='flex_row'>
                <InstaImage></InstaImage>
                <InstaImage></InstaImage>
              </div>
              <div className='flex_row'>
                <InstaImage></InstaImage>
                <InstaImage></InstaImage>
              </div>
              <div className='flex_row'>
                <InstaImage></InstaImage>
                <InstaImage></InstaImage>
              </div>
            </InstaWrapper>
          </TextWrapper>
          <Recruiting onClick={onClicktoNotion}>
            <div className='text'>멋쟁이 사자처럼 11기 아기사자 모집</div>
            <div className='button'>
              <img src={whitearrow.src} />
            </div>
          </Recruiting>
        </Background>
      </Container>
      <Footer />
    </>
  );
};

export default Likelion;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  font-family: 'Pretendard-Regular';
`;

const TilteBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  align-items: flex-start;
  justify-content: flex-end;

  font-family: 'Ydestreet';
  font-size: 16px;

  padding-left: 20px;
`;

const Background = styled.div`
  margin-top: 30px;
  position: relative;

  ::after {
    content: '';
    background-image: url(${aurora.src});
    background-size: cover;
    background-position-x: 50%;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    position: absolute;
    z-index: -1;
    opacity: 53%;
  }
`;

const TextWrapper = styled.div`
  /* border: solid 1px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 20px 4px 20px;
  margin-top: 24px;
  .text {
    font-family: 'Pretendard-Regular';
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    padding: 4px 0 4px 0;
  }

  .boldtext {
    font-family: 'Pretendard-Regular';
    font-size: 14px;
    font-weight: 600;
    padding: 16px 0 16px 0;
  }
`;

const MiniTitle = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  /* border: solid 1px; */
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
  justify-content: space-between;
  .title {
    width: max-content;
  }
`;

const DottedLine = styled.div`
  border: none;
  border-top: 2px dashed #d0e3d5;
  color: transparent;
  background-color: transparent;
  height: 1px;
  width: ${(props) => props.width};
`;

const TrackBox = styled.div`
  border: solid 1px;
  display: flex;
  position: static;
  align-items: center;
  justify-content: ${(props) =>
    props.start === 'left' ? 'flex-start' : 'flex-end'};
  height: 60px;
  margin: 4px 0 4px 0;

  .subtract {
    position: absolute;
    z-index: 0;
    filter: drop-shadow(1px 2px 3px #a0a0a0);
  }
`;

const Arrows = styled.div`
  .arrow1 {
    position: absolute;
    z-index: 1;
    margin-left: 32vw;
  }

  .arrow2 {
    position: absolute;
    z-index: 1;
    margin-left: 34vw;
  }

  .arrow3 {
    position: absolute;
    z-index: 1;
    margin-left: 280px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  font-family: 'Pretendard-Regular';

  .title {
    font-size: 12px;
    font-weight: 600;
  }

  .content {
    font-size: 10px;
    font-weight: 400;
    color: #a0a0a0;
    line-height: 15px;
  }
`;

const WarningText = styled.div`
  font-size: 13px;
  font-weight: 400;
  font-family: 'Pretendard-Regular';
  color: #9d9d9d;

  padding: 8px 0 32px 0;
`;

const InstaWrapper = styled.div`
  /* border: solid 1px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  .flex_row {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;
const InstaImage = styled.div`
  width: 119px;
  height: 119px;
  margin: 5px 10px 5px 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Recruiting = styled.div`
  width: 260px;
  height: 41px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin: 0 auto;
  margin-bottom: 60px;

  .text {
    font-family: 'Pretendard-Regular';
    font-weight: 400;
    font-size: 13px;
  }

  .button {
    width: 36px;
    height: 25px;

    background: #75a483;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

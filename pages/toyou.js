// 만든이들 페이지
import styled from "styled-components";
import { useState } from "react";
// import Components
import Image from "next/image";
// import Images
import secret from "../assets/main/secret.png";

const Toyou = ({ posts }) => {
  const [lett, setlet] = useState(posts.response);
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const Submit = () => {
    setPw(newPw);
    setNewPw("");
  };

  return (
    <>
      {pw === posts.pw.toString() ? (
        <Div>
          <Container>
            <Image src={secret.src} fill className="back" alt="back" />

            <p className="title">ToYou</p>
            <div>
              <p className="to">To. 혜빈</p>
              <p className="des">🦁가장 고생해준 우리 대장🦁</p>
            </div>

            {lett.map((post) => {
              return (
                <Letter key={post.id}>
                  <div className="name">from. {post.name}</div>{" "}
                  <div className="body">{post.body}</div>
                </Letter>
              );
            })}
          </Container>
        </Div>
      ) : (
        <PW>
          <div className="box">
            <p>10기 운영진 톡방이</p>
            <p>처음 생긴 날짜를 입력하세요.</p>
            <p>ex. 20001212 </p>
            <input
              type="number"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              placeholder="비번"
            />
            <div className="btn" onClick={Submit}>
              확인
            </div>
          </div>
        </PW>
      )}
    </>
  );
};

export default Toyou;

export async function getStaticProps() {
  const res = await fetch("https://likelion.pythonanywhere.com/toyou");
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
}

const PW = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "NanumSquareNeo-Variable";
  .box {
    padding-top: 20px;
    width: 70%;
    height: 190px;
    border-radius: 10px;
    border: 2px solid #004628;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
  }

  p {
    margin-top: 10px;
  }

  input {
    margin-top: 20px;
    width: 80%;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #f9f9f9;
  }
  .btn {
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #eaeaea;
    color: #004628;
    font-weight: 900;
    margin-top: 10px;
  }
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .back {
    position: relative;
    z-index: -10000;
    top: 0;
    left: 0;
  }
`;
const Letter = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid gray;
  width: 290px;
  height: auto;

  line-height: 170%;
`;
const Container = styled.div`
  font-family: "NanumSquareNeo-Variable";

  font-weight: 400;

  padding-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
  z-index: -2;
  overflow: hidden;

  .title {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 36px;
    font-weight: 900;
  }
  .to {
    font-weight: 900;
    text-align: center;
  }

  .des {
    margin-top: 10px;
  }
  .name {
    margin-bottom: 9px;
    font-weight: 900;
  }
`;

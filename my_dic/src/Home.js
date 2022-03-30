import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createDic, loadDicFB, updateDicFB } from "./redux/modules/dic";

function Home(props) {
  const history = useHistory();
  const dicWord = useSelector((state) => state.dic.list); // state는 스토어의 전체 데이터를 의미
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDicFB());
  }, []);
  // 마운트될 때만 실행시키기 위해서
  // 두번째 파라미터를 []로 주었다
  console.log(dicWord);

  return (
    <>
      <TotalBox>
        {dicWord.map((cur, idx) => {
          return (
            <DicBox
              check={cur.check}
              key={cur.id}
              style={{ backgroundColor: cur.check ? "slateblue" : "#ffffff" }}
            >
              <div>
                <Check
                  style={{ color: cur.check ? "#ffffff" : "slateblue" }}
                  onClick={() => {
                    dispatch(updateDicFB(cur.id, cur.check));
                  }}
                >
                  ✔
                </Check>
                <Update
                  style={{ color: cur.check ? "#ffffff" : "slateblue" }}
                  onClick={() => {
                    history.push(`/updateDic/${cur.id}`);
                  }}
                >
                  ♻
                </Update>
              </div>
              <p style={{ color: cur.check ? "#ffffff" : "slateblue" }}>
                {cur.word}
              </p>
              <p style={{ color: cur.check ? "#ffffff" : "black" }}>
                {cur.mean}
              </p>
              <p style={{ color: cur.check ? "black" : "blue" }}>
                {cur.example}
              </p>
              <p style={{ color: cur.check ? "#ffffff" : "black" }}>
                {cur.trans}
              </p>
            </DicBox>
          );
        })}
      </TotalBox>
      <Plus
        onClick={() => {
          history.push(`/addDic`);
        }}
      >
        +
      </Plus>
    </>
  );
}

const TotalBox = styled.div`
  // border: 1px solid blue;
  max-width: 1300px;
  height: fit-content;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const DicBox = styled.div`
  border: 2px solid slateblue;
  border-radius: 10px;
  font-size: 1.2em;
  width: 25vw;
  max-width: 400px;
  min-height: 350px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  box-sizing: border-box;
  box-shadow: 5px 5px 5px gray;
  p {
    // border: 1px solid black;
    width: 80%;
    font-weight: 700;
    margin-left: 10px;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;

const Update = styled.div`
  // border: 1px solid black;
  margin: 5px;
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
  }
`;

const Check = styled.div`
  margin: 5px;
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
  }
`;

const Plus = styled.button`
  border: none;
  border-radius: 100%;
  font-size: 3em;
  color: #ffffff;
  background-color: slateblue;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  &: hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
  transition: transform 300ms ease-in-out;
`;

export default Home;

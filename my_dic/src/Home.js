import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createDic, loadDicFB } from "./redux/modules/dic";
import { db } from "./firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Home() {
  const history = useHistory();
  const dicWord = useSelector((state) => state.dic.list); // state는 스토어의 전체 데이터를 의미
  console.log(dicWord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDicFB());
  }, []);

  return (
    <>
      <TotalBox>
        {dicWord.map((cur, idx) => {
          return (
            <DicBox key={cur.id}>
              <div>
                <Update
                  onClick={() => {
                    history.push(`/updateDic/${cur.id}`);
                  }}
                >
                  수정
                </Update>
              </div>
              <p>단어 : {cur.word}</p>
              <p>의미 : {cur.mean}</p>
              <p>
                예문 : <span>{cur.example}</span>
              </p>
              <p>해석 : {cur.trans}</p>
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
  border: 2px solid lightblue;
  border-radius: 10px;
  font-size: 1.2em;
  width: 25vw;
  max-width: 400px;
  min-height: 200px;
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  box-sizing: border-box;
  p {
    // border: 1px solid black;
    width: 80%;
    margin-left: 10px;
  }
  span {
    color: blue;
  }
  div {
    display: flex;
    justify-content: flex-end;
  }
`;

const Update = styled.div`
  // border: 1px solid black;
  margin: 5px;
  color: green;
  &:hover {
    cursor: pointer;
  }
`;

const Plus = styled.button`
  border: none;
  border-radius: 100%;
  font-size: 3em;
  color: #ffffff;
  background-color: skyblue;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  &: hover {
    cursor: pointer;
  }
`;

export default Home;

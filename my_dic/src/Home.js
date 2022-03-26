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
  const dicWord = useSelector((state) => state.dic.list);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(loadDicFB());
  }, []);

  return (
    <>
      <TotalBox>
        {dicWord.map((cur, idx) => {
          return (
            <DicBox key={idx}>
              <p>단어 : {dicWord[idx].word}</p>
              <p>의미 : {dicWord[idx].mean}</p>
              <p>
                예문 : <span>{dicWord[idx].example}</span>
              </p>
              <p>해석 : {dicWord[idx].trans}</p>
            </DicBox>
          );
        })}
      </TotalBox>
      <Plus
        onClick={() => {
          history.push(`/addDic`);
        }}
      >
        추가
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
    color: skyblue;
  }
`;

const Plus = styled.button`
  border-radius: 100%;
  background-color: #ffffff;
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

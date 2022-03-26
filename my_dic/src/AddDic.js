import React, { useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDic, addDicFB } from "./redux/modules/dic";

function AddDic() {
  const history = useHistory();
  const inputWord = useRef(null);
  const inputMean = useRef(null);
  const inputEx = useRef(null);
  const inputTrans = useRef(null);
  const dispatch = useDispatch();

  const addWord = () => {
    let data = {
      word: inputWord.current.value,
      mean: inputMean.current.value,
      example: inputEx.current.value,
      trans: inputTrans.current.value,
    };

    dispatch(addDicFB(data));
    history.goBack();
  };

  return (
    <AddBox>
      <h3>단어 추가하기</h3>
      <DescBox>
        <p>단어</p>
        <input ref={inputWord} />
      </DescBox>
      <DescBox>
        <p>의미</p>
        <input ref={inputMean} />
      </DescBox>
      <DescBox>
        <p>예문</p>
        <input ref={inputEx} />
      </DescBox>
      <DescBox>
        <p>해석</p>
        <input ref={inputTrans} />
      </DescBox>
      <SubmitBtn
        onClick={() => {
          addWord();
        }}
      >
        추가하기
      </SubmitBtn>
    </AddBox>
  );
}

const AddBox = styled.div`
  // border: 1px solid black;
  width: 35vw;
  height: 40vh;
  margin: 50px auto;
  h3 {
    color: slateblue;
    text-align: center;
  }
`;

const DescBox = styled.div`
  // border: 1px solid black;
  width: 100%;
  padding-left: 42.5px;
  input {
    width: 80%;
  }
`;

const SubmitBtn = styled.button`
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: lightblue;
  margin: 50px 97.5px;
`;

export default AddDic;

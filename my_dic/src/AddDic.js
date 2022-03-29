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

    if (inputWord.current.value === "") {
      alert("단어를 입력해주세요");
    } else {
      if (inputMean.current.value === "") {
        alert("의미를 입력해주세요");
      } else {
        if (inputEx.current.value === "") {
          alert("예문을 입력해주세요");
        } else {
          if (inputTrans.current.value === "") {
            alert("예문의 해석을 입력해주세요");
          } else {
            dispatch(addDicFB(data));
            history.push("/");
          }
        }
      }
    }
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
  background-color: slateblue;
  margin: 50px 97.5px;
  font-size: 1.5em;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

export default AddDic;

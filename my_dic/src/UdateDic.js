import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createDic, addDicFB, loadDicFB, updateDic, updateDicFB } from "./redux/modules/dic";

function UpdateDic() {
  const id = useParams().id;
  const history = useHistory();
  const inputWord = useRef(null);
  const inputMean = useRef(null);
  const inputEx = useRef(null);
  const inputTrans = useRef(null);
  const dicWord = useSelector((state) => state.dic.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDicFB());
  }, []);

  const updateWord = () => {
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
            // dispatch(updateDic(id, data));
            dispatch(updateDicFB(id, data));
            history.goBack();
          }
        }
      }
    }
  };

  return (
    <AddBox>
      <h3>단어 수정하기</h3>
      {dicWord.map((cur, idx) => {
        return cur.id === id ? (
          <div key={idx}>
            <DescBox>
              <p>단어</p>
              <input ref={inputWord} defaultValue={cur.word} />
            </DescBox>
            <DescBox>
              <p>의미</p>
              <input ref={inputMean} defaultValue={cur.mean} />
            </DescBox>
            <DescBox>
              <p>예문</p>
              <input ref={inputEx} defaultValue={cur.example} />
            </DescBox>
            <DescBox>
              <p>해석</p>
              <input ref={inputTrans} defaultValue={cur.trans} />
            </DescBox>
            <SubmitBtn
              onClick={() => {
                updateWord();
              }}
            >
              수정하기
            </SubmitBtn>
          </div>
        ) : null;
      })}
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

export default UpdateDic;

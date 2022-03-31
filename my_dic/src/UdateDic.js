import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadDicFB, updateDicFB } from "./redux/modules/dic";

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
            history.push("/");
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
              <Input ref={inputWord} defaultValue={cur.word} />
            </DescBox>
            <DescBox>
              <p>의미</p>
              <Input ref={inputMean} defaultValue={cur.mean} />
            </DescBox>
            <DescBox>
              <p>예문</p>
              <Input ref={inputEx} defaultValue={cur.example} />
            </DescBox>
            <DescBox>
              <p>해석</p>
              <Input ref={inputTrans} defaultValue={cur.trans} />
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
  p {
    // border: 1px solid black;
    margin: 15px 0 0 0;
  }
`;

const Input = styled.input`
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: 2px solid slateblue;
  width: 80%;
  height: 30px;
  outline: none;
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

export default UpdateDic;

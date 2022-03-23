import React, { useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";

const Detail = (props) => {
  const day = useParams().day_name;
  const [clicked, setClicked] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const changeColor = (e, idx) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      i <= idx ? (clickStates[i] = true) : (clickStates[i] = false);
    }

    setClicked(clickStates);
    // console.log(clicked);
  };

  const circle_count = [0, 1, 2, 3, 4];

  // const keyevent = window.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  //   if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) != -1) {
  //     let clickStates = [...clicked];
  //     for (let i = 0; i < 5; i++) {
  //       i <= parseInt(e.key) - 1
  //         ? (clickStates[i] = true)
  //         : (clickStates[i] = false);
  //     }
  //     setClicked(clickStates);
  //   }
  // });

  return (
    <div className="detail">
      <h2>
        <span>{day}요일</span> 평점 남기기
      </h2>
      <div className="detailCircleBox">
        {circle_count.map((cur, idx) => {
          return (
            <div
              className="Circle clicked[idx]"
              key={idx}
              style={{ backgroundColor: clicked[idx] ? "lightblue" : "#ddd" }}
              onClick={(e) => changeColor(e, idx)}
              // onKeyDown={keyevent}
            ></div>
          );
        })}
      </div>
      <div
        className="record"
        onClick={() => {
          props.history.push("/");
        }}
      >
        평점 남기기
      </div>
    </div>
  );
};

export default Detail;

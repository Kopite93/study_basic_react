import React, { useState } from "react";
import "./style.css";

const Detail = (props) => {
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
    console.log(clicked);
  };
  const day = props.history.location.pathname.split("/")[2];
  const circle_count = Array.from({ length: 5 }, (v, i) => i);

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

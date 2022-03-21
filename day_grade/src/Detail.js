import React from "react";
import "./style.css";

const Detail = (props) => {
  const day = props.history.location.pathname.split("/")[2];
  const circle_count = Array.from({ length: 5 }, (v, i) => i);
  return (
    <div className="detail">
      <h2>
        <span>{day}요일</span> 평점 남기기
      </h2>
      <div className="detailCircleBox">
        {circle_count.map((cur, idx) => {
          return <div className="Circle" key={idx}></div>;
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

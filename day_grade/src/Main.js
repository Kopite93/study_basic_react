import React from "react";
import Detail from "./Detail";
import { Route, useHistory } from "react-router-dom";

const Main = (props) => {
  const day = props.day;
  const circle_count = Array.from({ length: 5 }, (v, i) => i);
  const history = useHistory();
  return (
    <div className="Container">
      <h2>내 일주일은?</h2>
      {day.map((cur, i) => {
        return (
          <div className="dayName" key={i}>
            <h4>{cur}</h4>
            {circle_count.map((cur, idx) => {
              return <div className="Circle" key={idx}></div>;
            })}
            <div
              className="goDetail"
              onClick={() => {
                history.push(`/review/${cur}`);
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};


export default Main;

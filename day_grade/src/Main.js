import React from "react";
import Detail from "./Detail";
import { Route, useHistory } from "react-router-dom";

const Main = (props) => {
  console.log(props.history)
  const day = props.day;
  const circle_count = Array.from({ length: 5 }, (v, i) => i);
  const history = useHistory();

  const week_rates = day.map((day, idx) => {
    return {
      day: day,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1),
    };
  });

  console.log(week_rates);

  return (
    <div className="Container">
      <h2>내 일주일은?</h2>
      {week_rates.map((day, i) => {
        return (
          <div className="dayName" key={i}>
            <h4>{day.day}</h4>
            {circle_count.map((cur, idx) => {
              return (
                <div
                  className="Circle"
                  key={idx}
                  style={{
                    backgroundColor: day.rate > idx ? "skyblue" : "#ddd",
                  }}
                ></div>
              );
            })}
            <div
              className="goDetail"
              onClick={() => {
                history.push(`/review/${day.day}`);
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

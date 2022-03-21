import React from "react";
import { useHistory } from "react-router-dom";
const Dog = (props) => {
  const history = useHistory();
  console.log(props);
  return (
    <div
      onClick={() => {
        history.push("/cat");
      }}
    >
      강아지 화면 입니다!
    </div>
  );
};

export default Dog;

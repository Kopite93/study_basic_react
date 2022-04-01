import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, margin } = props;

  const styles = {
    width: width,
    margin: margin,
  };

  return <Btn {...styles}>{props.children}</Btn>;
};

// Btn.defaultProps = {
//   margin: false,
// };

const Btn = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: slateblue;
  width: ${(props) => props.width};
  height: 50px;
  margin: ${(props) => props.margin};
  font-size: 25px;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    border: 2px solid slateblue;
    background-color: #fff;
    color: slateblue;
  }
`;

export default Button;

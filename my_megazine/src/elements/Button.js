import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, margin, height, fontSize } = props;

  const styles = {
    width: width,
    margin: margin,
    height: height,
    fontSize: fontSize,
  };

  return (
    <Btn {...styles} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
};

Button.defaultProps = {
  height: "50px",
  margin: "50px auto",
  width: "120px",
  lineHeight: "50px",
};

const Btn = styled.div`
  // border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: slateblue;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  line-height: ${(props) => props.height};
  color: #ffffff;
  &:hover {
    cursor: pointer;
    border: 1px solid slateblue;
    background-color: #fff;
    color: slateblue;
  }
`;

export default Button;

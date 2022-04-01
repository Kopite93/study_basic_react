import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, bg, border, children } = props;

  const styles = {
    border: border,
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };

  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  );
};

Grid.defualtProps = {
  children: null,
  border: false,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

const GridBox = styled.div`
  border: ${(props) => (props.border ? `${props.border};` : "none;")}
  width: ${(props) => props.width};
  height: "100%"
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
${(props) =>
  props.is_flex
    ? `display:flex; align-items:center; justify-content: space-between`
    : ""}
`;

export default Grid;

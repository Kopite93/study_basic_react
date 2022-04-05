import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, margin } = props;

  const styles = {
    src: src,
    size: size,
    margin: margin,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "",
  size: 36,
  margin: false,
};

const AspectOutter = styled.div`
  width: 596px;
  min-width: 250px;
`;

const AspectInner = styled.div`
  // border: 1px solid black;
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0px -1px 5px gray;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const ImageCircle = styled.div`
  border: 0.5px solid slateblue;
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default Image;

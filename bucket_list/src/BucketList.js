import React from "react";
import styled from "styled-components";

const BucketList = ({ list_a }) => {
  console.log(list_a);
  const my_lists = list_a
  const my_wrap = React.useRef(null);
  console.log(my_wrap)

  return (
    <div ref={my_wrap}>
      {my_lists.map((list, index) => {
        console.log(list);
        return <Itemstyle key={index}>{list}</Itemstyle>;
      })}
    </div>
  );
};

const Itemstyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: lightblue;
`;

export default BucketList;

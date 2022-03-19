import React from "react";

const BucketList = ({ list_a }) => {
  console.log(list_a);
  const my_lists = list_a;

  return (
    <div>
      {my_lists.map((list, index) => {
        console.log(list);
        return <div className="list-item" key={index}>{list}</div>;
      })}
    </div>
  );
};

export default BucketList;

import React from "react";

const Dummy = ({ onData }) => {
  let dummyData = "hi there";
  onData(dummyData);
  return (
    <>
      <div>Created By Bansi</div>
    </>
  );
};

export default Dummy;

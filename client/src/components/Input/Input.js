import React from "react";

const InputBar = ({ name, onChange }) => {
  return (
    <input
      className="rounded shadow-lg m-3 justify-center border-green-500"
      name={name}
      onChange={onChange}
    ></input>
  );
};

export default InputBar;

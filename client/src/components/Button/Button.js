import React from "react";

const Button = ({ name, onClick, text, disabled }) => {
  return (
    <div className="container my-5">
      <button
        className="bg-green-500 hover:bg-green-600 hover:shadow-lg text-white px-2 py-2 m-auto font-bold rounded-md"
        name={name}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

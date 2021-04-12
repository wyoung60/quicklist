import React from "react";

const IngredientList = ({ value, name, onClick }) => {
  return (
    <div value={value}>
      <h3>{name}</h3>
      <h4 onClick={onClick}>X</h4>
    </div>
  );
};

export default IngredientList;

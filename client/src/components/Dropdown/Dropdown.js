import React from "react";

export const Dropdown = ({ value, defaultText, name, onChange, children }) => {
  return (
    <select className="round-md" name={name} onChange={onChange} value={value}>
      <option value="default" disabled hidden>
        Choose {defaultText}
      </option>
      {children}
    </select>
  );
};

export const DropdownOptions = ({ value }) => {
  return <option value={value}>{value}</option>;
};

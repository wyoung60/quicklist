import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as borderStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt as deleteButton } from "@fortawesome/free-solid-svg-icons";

export const BorderStar = ({ onClick, value }) => {
  return (
    <span onClick={onClick} value={value}>
      <FontAwesomeIcon
        className="icon star"
        style={{ pointerEvents: "none" }}
        icon={borderStar}
      />
    </span>
  );
};

export const SolidStar = ({ onClick, value }) => {
  return (
    <span onClick={onClick} value={value}>
      <FontAwesomeIcon
        className="icon star"
        style={{ pointerEvents: "none" }}
        icon={solidStar}
      />
    </span>
  );
};

export const DeleteButton = ({ onClick, value }) => {
  return (
    <span onClick={onClick} value={value}>
      <FontAwesomeIcon
        className="icon delete"
        style={{ pointerEvents: "none" }}
        icon={deleteButton}
      />
    </span>
  );
};

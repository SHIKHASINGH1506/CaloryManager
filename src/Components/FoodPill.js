import React from "react";

const FoodPill = ({ name, calories, measure, OnFoodPillClick }) => {
  return (
    <li className="foodPill" onClick={() => OnFoodPillClick(calories)}>
      <span>{name} </span>
      <span>{measure} </span>
      <br />
      <span>{calories} </span>
    </li>
  );
};

export default FoodPill;

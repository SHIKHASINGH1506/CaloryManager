import React from "react";
import FoodPill from "./FoodPill";

const FoodTable = ({ calorieData, onFoodPillClick }) => {
  return (
    <ul className="foodList">
      {calorieData.slice(0, 7).map(({ name, calories, measure }) => (
        <FoodPill
          key={name}
          name={name}
          calories={calories}
          measure={measure}
          OnFoodPillClick={onFoodPillClick}
        />
      ))}
    </ul>
  );
};

export default FoodTable;

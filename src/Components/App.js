import calorieData from "/data/food-data";
import FoodObj from "/data/food-obj";
import React, { useState } from "react";

import FoodTable from "../Components/FoodTable";

const App = () => {
  const [foodItem, setFoodItem] = useState({
    name: "",
    calories: "",
    measure: ""
  });
  const [calory, setCalory] = useState(0);
  const textInput = React.createRef();

  const SearchHandler = () => {
    // var userInput = event.target.value;
    var userInput = textInput.current.value.toLowerCase();
    var foodDesc = FoodObj[userInput];
    if (foodDesc === undefined) foodDesc = ":(";
    setFoodItem(foodDesc);
  };

  const foodPillClickHandler = (cal) => setCalory(cal + calory);

  return (
    <div className="App">
      <h1 className="header">Calory Manager</h1>
      <input
        type="text"
        placeholder="Search for a food here..."
        ref={textInput}
      />
      <button onClick={SearchHandler}>Search</button>
      <h3>Result here</h3>
      <div
        className="FoodItem"
        onClick={() => foodPillClickHandler(foodItem.calories)}
      >
        {Object.values(foodItem).map((item) => (
          <span>{item} </span>
        ))}
      </div>
      <hr />
      <FoodTable
        calorieData={calorieData}
        onFoodPillClick={foodPillClickHandler}
      />
      <h3>Total calory {calory} </h3>
    </div>
  );
};

export default App;

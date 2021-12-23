import calorieData from "/data/food-data";
import FoodObj from "/data/food-obj";
import React, { useState } from "react";

import FoodTable from "../Components/FoodTable";


const Input = ({userInputHandler}) => {
  return(
    <input
      type="text"
      placeholder="Search for a food here..."
      onChange={userInputHandler}
    />
  );
}

const App = () => {
  const [foodItem, setFoodItem] = useState({
    name: "",
    calories: "",
    measure: ""
  });
  const [calory, setCalory] = useState(0);
  const [userInputFood, setUserInputFood] = useState("");

  const SearchHandler = () => {
    let userInput = userInputFood;
    let foodDesc = calorieData.find( (food) => food.name.toLowerCase() === userInput.toLocaleLowerCase())
    if (foodDesc === undefined) foodDesc = ":(";
    setFoodItem(foodDesc);
  };

  const foodPillClickHandler = (cal) => setCalory(cal + calory);
  const userInputHandler = (e) => setUserInputFood(e.target.value);

  return (
    <div className="App">
      <h1 className="header">Calory Manager</h1>
      <Input userInputHandler={userInputHandler} />
      <button onClick={SearchHandler}>Search</button>
      <h3>Result here</h3>
      <div
        className="FoodItem"
        onClick={() => foodPillClickHandler(foodItem.calories)}>
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

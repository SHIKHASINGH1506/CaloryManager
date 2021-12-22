import "./styles.css";
import calorieData from "../data/food-data";
import FoodObj from "../data/food-obj";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function FoodPill({ name, calories, measure, OnFoodPillClick }) {
  return (
    <li className="foodPill" onClick={() => OnFoodPillClick(calories)}>
      <span>{name} </span>
      <span>{measure} </span>
      <br />
      <span>{calories} </span>
    </li>
  );
}

function FoodTable({ calorieData, onFoodPillClick }) {
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
}

export default function App() {
  const [foodItem, setFoodItem] = useState({
    name: "",
    calories: "",
    measure: ""
  });
  const [calory, setCalory] = useState(0);
  const textInput = React.createRef();

  function SearchHandler() {
    // var userInput = event.target.value;
    var userInput = textInput.current.value.toLowerCase();
    var foodDesc = FoodObj[userInput];
    if (foodDesc === undefined) foodDesc = ":(";
    setFoodItem(foodDesc);
  }

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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

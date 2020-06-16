import React, { useState, useEffect } from "react";
import { DynamicForm } from "./components/DynamicForm";
import "./App.css";

function App() {
  // const [state, setState] = useState({
  //   data: [
  //     { id: 1, name: "a", age: 29, qual: "B.com", rating: 3 },
  //     { id: 2, name: "b", age: 35, qual: "B.Sc", rating: 5 },
  //     { id: 3, name: "c", age: 42, qual: "B.E", rating: 3 },
  //   ],
  // });

  const [inputData, setInputData] = useState({});
  // checkbox needs to be handle alone
  const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(inputData));
  }

  useEffect(() => {
    console.log(inputData);
  }, [isChecked]);

  function handleInputChange(e) {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
  }

  function handleCheckboxChange(e) {
    setIsChecked((x) => !x);
    setInputData({ ...inputData, [e.target.id]: e.target.checked });
  }

  return (
    <DynamicForm
      model={[
        {
          key: "name",
          required: true,
        },
        {
          key: "age",
          type: "number",
          min: 0,
          max: 100,
        },
        { key: "truth", type: "checkbox" },
        { key: "wrong", type: "checkbox" },
      ]}
      onHandleSubmit={handleSubmit}
      onHandleInputChange={handleInputChange}
      onHandleCheckboxChange={handleCheckboxChange}
      message={inputData}
    />
  );
}

export default App;

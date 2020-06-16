import React, { useState } from "react";
import DynamicForm from "./components/DynamicForm";
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

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(inputData));
  }

  function handleInputChange(e) {
    setInputData({ ...inputData, [e.target.id]: e.target.value });
    console.log(e.target.value);
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
        {
          key: "truth",
          type: "checkbox",
        },
      ]}
      onHandleSubmit={handleSubmit}
      onHandleInputChange={handleInputChange}
      message={inputData}
    />
  );
}

export default App;

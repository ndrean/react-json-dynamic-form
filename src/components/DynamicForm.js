import React from "react";

// we destructure the props directly in the arguments of the Component
export default function DynamicForm({
  model,
  onHandleSubmit,
  onHandleInputChange,
  message,
}) {
  // const [inputData, setInputData] = useState({ data: "" });

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        {model.map(renderModel)}
        <div className="form-group">
          <input type="submit" value="submit" />
        </div>
      </form>
      <p>{JSON.stringify(message)}</p>
    </div>
  );

  function renderModel({ key, label = key, type = "text", ...props }) {
    return (
      <div key={key} className="form-group">
        <label className="form-label" htmlFor={key}>
          {label}
        </label>
        <input
          {...props}
          id={key}
          type={type}
          name={key}
          className="form-input"
          // value={name}
          onChange={onHandleInputChange}
        />
      </div>
    );
  }
}

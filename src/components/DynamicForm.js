import React from "react";

// we destructure the props directly in the arguments of the Component
function DynamicForm({
  model,
  onHandleSubmit,
  onHandleInputChange,
  onHandleCheckboxChange,
  message,
}) {
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        {model.map(renderModel)}
        <div className="form-group">
          <input type="submit" value="submit" />
          <p>{JSON.stringify(message)}</p>
        </div>
      </form>
    </div>
  );

  function renderModel({ key, label = key, type = "text", ...props }) {
    if (type !== "checkbox") {
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
    } else if (type === "checkbox") {
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
            onChange={onHandleCheckboxChange}
          />
        </div>
      );
    }
  }
}

export { DynamicForm };

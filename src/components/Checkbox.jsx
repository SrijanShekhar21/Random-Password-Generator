import React from "react";

function Checkbox(props) {
  return (
    <div className="checkBox">
      <input
        className="checkbox"
        onClick={props.onClick}
        type="checkbox"
        name={props.name}
        id={props.name}
      />
      <label htmlFor={props.name} id="checkLabel">
        Include {props.name}
      </label>
    </div>
  );
}

export default Checkbox;

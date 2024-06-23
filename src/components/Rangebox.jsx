import React from "react";

function Rangebox(props) {
  return (
    <div className="range">
      <input
        onChange={props.onChange}
        type="range"
        id="rangeParameter"
        min="6"
        max="24"
        value={props.length}
      />
      <label htmlFor="rangeParameter" className="rangeLabel">
        {props.length}
      </label>
    </div>
  );
}

export default Rangebox;

import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Rangebox from "./Rangebox";

function Parameter(props) {

  return (
    <div className="parameters">
      <Rangebox onChange={props.handleChange} length={props.passwordLength} />
      <Checkbox onClick={props.handleClick} name="Numbers" />
      <Checkbox onClick={props.handleClick} name="Special Characters" />
    </div>
  );
}

export default Parameter;

import React from "react";
import "./ClickBtn.css";

const ClickBtn = props => (
  <button className={`click-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default ClickBtn;
import React from "react";
import './App.css';

const SwitchButton = props => (
    <button onClick={props.click}>{props.active ? "stop" : "start"}</button>
)

export default SwitchButton
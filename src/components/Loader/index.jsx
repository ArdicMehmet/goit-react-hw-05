import React from "react";
import "./loader.module.css";
const Loader = ({ text }) => {
  return <div className="spinner">{text}</div>;
};

export default Loader;

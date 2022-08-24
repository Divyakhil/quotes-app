import React from 'react'
import "./index.css"

export default function index(props) {
  const { label, handleButtonClick } = props;
  return <button onClick={handleButtonClick}>{label}</button>;
}

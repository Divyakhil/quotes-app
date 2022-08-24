import React from "react";
import  "./index.css";
export default function index(props) {
  const { quote, author } = props;
  return (
    <div className="container">
      <span>{quote}</span>
      <p> - {author}</p>
    </div>
  );
}

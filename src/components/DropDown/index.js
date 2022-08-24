import React from "react";
import "./index.css";

const options = [
  {
    value: "",
    label: "",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "famous-quotes",
    label: "Famous Quotes",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "happiness",
    label: "Happiness",
  },
];

export default function index(props) {
  const { onOptionChange } = props;
  return (
    <select onChange={onOptionChange}>
      {options.map((item, i) => {
        return (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
}

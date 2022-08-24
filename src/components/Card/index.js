import React from "react";
import {FaBookmark} from "react-icons/fa"
import  "./index.css";
export default function index(props) {
  const { quote, onBookmarksClick } = props;
  return (
    <div className="container">
      <span>{quote.content}</span>
      <p> - {quote.author}</p>
      <div className="bookmarkButtonWrapper">
      <FaBookmark onClick={() => onBookmarksClick(quote)}/>
      </div>
    </div>
  );
}

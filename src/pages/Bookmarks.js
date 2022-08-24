import React, { useEffect, useState } from "react";
import { NavBar, Card } from "../components";
import  "./index.css";

export default function Bookmarks() {
  
const [quotes, setQuotes] = useState([])

  useEffect(() => {
    let availableQuotes = JSON.parse(localStorage.getItem("quotes") || "[]");
    setQuotes(availableQuotes)
  }, []);

  return (
    <div>
      <NavBar />
      <div className="mainContainer">
        {quotes?.map((item, i) => {
          return <Card key={i} quote={item} />;
        })}
      </div>
    </div>
  );
}

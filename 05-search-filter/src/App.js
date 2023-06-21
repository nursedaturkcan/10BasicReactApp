import React, { useState } from "react";
import "./App.css";
import Data from "./Data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <div className="container">
        <h1>Phoneix</h1>
        <div className="inputContainer">
          <input
            className="search"
            type="text"
            placeholder="Please enter a product"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="dataContainer">
          {Data.filter((val) => {
            if (!searchTerm) {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
            return (
              <div className="data" key={val.id}>
                <img src={val.image} alt="" />
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

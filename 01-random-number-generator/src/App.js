import React,{useState} from "react";
import "./style.css"

function App() {
const [minVal,setminVal]=useState(0);
const [maxVal,setmaxVal]=useState(10);
const [randomNum,setrandomNum]=useState(5);

const giveRandomNumber=()=>{
  setrandomNum(Math.floor(Math.random()*(maxVal-minVal+1)+minVal))
}




  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number : <span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={e=>setminVal(parseInt(e.target.value))} />
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={e=>setmaxVal(parseInt(e.target.value))} />
          </div>
        </div>
        <button onClick={giveRandomNumber} >Get Random Number</button>

      </div>
    </div>
  );
}

export default App;

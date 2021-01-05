import React, { useState } from "react";
import './App.css';


function App(props) {
  const [number, setNumber] = useState("");
  const [myArray, setArray] = useState([]);
  const [myListArray, setListArray] = useState([]);
  const [show, toggleShow] = React.useState(false);
  const [showNew, toggleShowNew] = React.useState(false);

  const handleSubmit = (evt) => {debugger
      evt.preventDefault();
      var today = new Date(),
      todayTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '--' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      setArray([...myArray, { number: number, time: todayTime }])
      let tempArray = [];
      for (var i = 1; i <= number; i++) {
        tempArray.push(i);
      }
      setListArray([...myListArray, tempArray]);
  }

  const changeHandler = (e)=>{debugger
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    // this.setState({ value });
    setNumber(value)

    // setNumber(e.target.value)
  }

  return (
    <div>

    <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="please type any number in between 1 to 10"
          onChange={changeHandler}
        />
    </form>

    <button onClick={() => toggleShow(!show)}>click to {show ? 'hide' : 'show all entered numbers and time'}</button>    
    {show && <ul>{myArray.length>0 ? myArray.map(e=> e.number=== ""? "" : <li key={e.number}><strong>input</strong>: {e.number} || <strong>time</strong>: {e.time}</li>): "no input, please enter input field"}</ul>}

    <button onClick={() => toggleShowNew(!showNew)}>click to {showNew ? 'hide' : 'show list from 1 to entered  number'}</button>    
    {showNew && <ul>{ myArray.length>0? myListArray[myListArray.length-1].map(e=> e===""?"": <li key={e}>{e}</li> ): "no"}</ul>}

    </div>
  );
}

export default App;

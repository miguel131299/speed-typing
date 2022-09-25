import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [timeRemaining, setTmeRemaining] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTmeRemaining((prevTime) => prevTime - 1);
      }
    }, 1000);
  }, [timeRemaining]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function countWords() {
    const wordsArray = input.trim().split(" ");
    const filteredArray = wordsArray.filter((word) => word !== "");

    console.log(filteredArray.length);
  }

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea value={input} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={countWords}>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;

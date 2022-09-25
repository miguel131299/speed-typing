import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 5) {
  const [input, setInput] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [gameRunning, setGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (gameRunning && timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      } else if (timeRemaining === 0) {
        endGame();
      }
    }, 1000);
  }, [timeRemaining, gameRunning]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function countWords() {
    const wordsArray = input.trim().split(" ");
    const filteredArray = wordsArray.filter((word) => word !== "");

    setWordCount(filteredArray.length);
  }

  function startGame() {
    setGameRunning(true);
    setTimeRemaining(startingTime);
    setInput("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setGameRunning(false);
    countWords();
  }

  return {
    inputRef,
    handleChange,
    input,
    gameRunning,
    timeRemaining,
    startGame,
    wordCount,
  };
}

export default useWordGame;

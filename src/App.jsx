import "./App.css";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    inputRef,
    handleChange,
    input,
    gameRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(10);

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea
        value={input}
        ref={inputRef}
        onChange={handleChange}
        disabled={!gameRunning}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={gameRunning}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;

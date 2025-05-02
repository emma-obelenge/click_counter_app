import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click Counter App</h1>
        <p>
          This is a simple click counter app built with React. Click the buttons
          below to increment or decrement the counter.
        </p>
        <div>
          <h2>Count: {count}</h2>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
        </div>
        {count === 10 && <p>You've reached the limit!</p>}
      </header>
    </div>
  );
}

export default App;

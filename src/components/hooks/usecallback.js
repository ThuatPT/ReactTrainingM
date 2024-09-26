import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button component re-rendered");
  return <button onClick={onClick}>Increment</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // Sử dụng useCallback để ghi nhớ hàm increment
  const increment = useCallback(() => {
    console.log("Increment function created");
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  const toggleOtherState = () => {
    setOtherState((prev) => !prev);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} />
      <br />
      <button onClick={toggleOtherState}>Toggle Other State</button>
      <p>Other State: {otherState.toString()}</p>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";
import "./App.css";

import { Counter } from "./Counter";
import { Hello } from "./Hello";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JavaScript";

export default function App() {
  const [count, setCount] = useState(INITIAL_COUNT);

  const [name, setName] = useState(INITIAL_NAME);

  const countIncriment = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const countDecrement = () => {
    return setCount((prevCount) => prevCount - 1);
  };

  const countReset = () => {
    return setCount(INITIAL_COUNT);
  };

  const handleChangeName = (e) => {
    return setName(e.target.value);
  };

  return (
    <>
      <Counter
        count={count}
        countIncriment={countIncriment}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={INITIAL_COUNT}
      />
      <Hello 
        name={name}
        handleChangeName={handleChangeName}
        initialName={INITIAL_NAME}
      />
    </>
  );
}
import React from "react";
import "./App.css";

const testFunction = (arg: string): string => {
  console.log(arg);
  return arg;
};

const test: string = "test";
const word: string = testFunction(test);
const array: string[] = ["ceci", "est", "un", `${word}`];

// const number: number = Math.random()*10
// testFunction(number)

function App() {
  return (
    <div className="App">
      {array.map((elem, index) => (
        <div key={index}>{elem}</div>
      ))}
    </div>
  );
}

export default App;

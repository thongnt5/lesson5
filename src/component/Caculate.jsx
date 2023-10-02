import React, { useState } from "react";
import Style from "./Style.css";
export default function Caculate() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    const res = eval(input);
    if (typeof res === "number") {
      setResult(res);
    } else {
      setResult("Error");
    }
    setInput("");
  };

  const clearDisplay = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">{input || result}</div>
      <button className="button" onClick={() => handleButtonClick("7")}>
        7
      </button>
      <button className="button" onClick={() => handleButtonClick("8")}>
        8
      </button>
      <button className="button" onClick={() => handleButtonClick("9")}>
        9
      </button>
      <button className="button" onClick={() => handleButtonClick("/")}>
        /
      </button>
      <button className="button" onClick={() => handleButtonClick("4")}>
        4
      </button>
      <button className="button" onClick={() => handleButtonClick("5")}>
        5
      </button>
      <button className="button" onClick={() => handleButtonClick("6")}>
        6
      </button>
      <button className="button" onClick={() => handleButtonClick("*")}>
        *
      </button>
      <button className="button" onClick={() => handleButtonClick("1")}>
        1
      </button>
      <button className="button" onClick={() => handleButtonClick("2")}>
        2
      </button>
      <button className="button" onClick={() => handleButtonClick("3")}>
        3
      </button>
      <button className="button" onClick={() => handleButtonClick("-")}>
        -
      </button>
      <button className="button" onClick={() => handleButtonClick("0")}>
        0
      </button>
      <button className="button equals" onClick={calculate}>
        =
      </button>
      <button className="button" onClick={clearDisplay}>
        C
      </button>
      <button
        className="button operator"
        onClick={() => handleButtonClick("+")}
      >
        +
      </button>
    </div>
  );
}

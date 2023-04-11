import { useState } from "react";
function Counter() {
  // let count = 0;
  let [value, setValue] = useState(1);
  let [count, setCount] = useState(0);
  const generate = () => {
    let maxVal = 0xffffff;
    let ranNumb = Math.random() * maxVal;
    ranNumb = Math.floor(ranNumb);
    return ranNumb;
  };

  const handleIncrement = () => {
    setCount(count + Number(value));
    document.body.style.backgroundColor = `#${generate().toString(16)}`;
  };
  const handleDecrement = () => {
    setCount(count - Number(value));
    document.body.style.backgroundColor = `#${generate().toString(16)}`;
  };
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1>{count}</h1>
      <div style={{ padding: "2px", margin: "2px" }}>
        <button
          style={{ padding: "2px", margin: "4px" }}
          onClick={handleIncrement}
        >
          INCREMENT
        </button>
        <button
          style={{ padding: "2px", margin: "4px" }}
          onClick={handleDecrement}
        >
          DECREMENT
        </button>
      </div>
      <p className="para">Enter value you want to increment or decrement</p>
      <input
        type="number"
        value={value}
        id="inputval"
        placeholder="Enter your value"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Counter;

//state of react -->used to handle user interactivity

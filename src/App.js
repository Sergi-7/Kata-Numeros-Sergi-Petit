import "./App.css";
import Container from "./Components/Container/Container.js";
import { useState } from "react";
import Button from "./Components/Container/Button";

function App() {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4]);

  const increaseNumbers = () => {
    if (numbers[numbers.length - 1] < 20) {
      return setNumbers(numbers.map((number) => number + 1));
    }
  };

  const decreaseNumbers = () => {
    if (numbers[0] > 0) {
      return setNumbers(numbers.map((number) => number - 1));
    }
  };

  return (
    <>
      <Button text={"<< back"} actionOnclick={decreaseNumbers}></Button>

      {numbers.map((number) => {
        return <Container text={number} className={"item"}></Container>;
      })}

      <Button text={"next >>"} actionOnclick={increaseNumbers}></Button>
    </>
  );
}

export default App;

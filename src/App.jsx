import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Ви ввели: ${value}`);
  };

  return (
    <>
      <h1>React HW38.1</h1>
      <Input placeholder="Введіть значення..." onChange={handleInputChange} />
      <div style={{ marginTop: "20px" }}>
        <Button text="Показати значення" onClick={handleButtonClick} />
      </div>
    </>
  );
}

export default App;

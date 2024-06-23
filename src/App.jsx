import { useState, useEffect } from "react";
import GeneratedPassword from "./components/GeneratedPassword.jsx";
import Parameter from "./components/Parameter.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("password");
  const [isNumber, setIsNumber] = useState();
  const [isSpecial, setIsSpecal] = useState();

  const [passwordLength, setPasswordLength] = useState(8);

  function handleClick(e) {
    const { checked, name } = e.target;
    if (name === "Numbers") {
      setIsNumber(checked);
    } else if (name === "Special Characters") {
      setIsSpecal(checked);
    }
    console.log(name, checked);
  }

  function handleChange(e) {
    setPasswordLength(e.target.value);
    console.log(e.target.value);
  }

  function passwordGenerator() {
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let characters = letters;
    if (isNumber) characters += numbers;
    if (isSpecial) characters += special;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return password;
  }

  useEffect(() => {
    const password = passwordGenerator();
    setGeneratedPassword(password);
  }, [passwordLength, isNumber, isSpecial]);

  return (
    <div className="screen">
      <Header />
      <GeneratedPassword password={generatedPassword} />
      <div className="params">
        <Parameter
          handleChange={handleChange}
          handleClick={handleClick}
          passwordLength={passwordLength}
        />
      </div>
    </div>
  );
}

export default App;

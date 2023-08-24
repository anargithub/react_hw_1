import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import './Form.css'


export default function Form({
  inputValue,
  onChange,
  placeholder,
  buttonValue,
  onClick
}) {

  return (
    <div className="link">
      <Input
        inputValue={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button value={buttonValue} onClick={onClick}  />
    </div>
  );
}

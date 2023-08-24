import { useState } from "react";
import Form from "../Form/Form";
import "./LinkShortener.css";

export default function LinkShortener() {
  const [isShow, setShow] = useState(false);
  const [link, setLink] = useState("");
  const [inputValue, setInputValue] = useState("");

  const result = (url) => {
    fetch(`https://clck.ru/--?url=${url}`)
      .then((res) => res.text())
      .then((res) => {
        setLink(res);
        setShow(true);
        console.log(res);
      });
  };
  const changeLink = () => {
    result(inputValue);
  };
  const onChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const saveLink = (text) => {
    navigator.clipboard.writeText(text);
  };


  return (
    <div className="LinkShortener">
      <div className="title">
        Помогите клиентам быстро найти вашу страницу в интернете. Благодаря
        короткой ссылке клиентам не придётся видеть длинные url-адреса,
        занимающие много места.
      </div>

      <Form
        setLink={setLink}
        setShow={setShow}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onChange={onChange}
        placeholder='введите ссылку'
        buttonValue='сократить'
        onClick={changeLink}
      />
      <div
        className="card"
        id={`${isShow && "show"}`}
        onClick={() => {
          saveLink(`${link}`);
        }}
      >
        {link}
      </div>
    </div>
  );
}

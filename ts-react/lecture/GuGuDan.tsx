import * as React from "react";
import * as ReactDom from "react-dom";
import { useState, useRef } from "react";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      if (input) {
        input.focus();
      }
    } else {
      setResult("땡");
      setValue("");
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <>
      <div>
        {first}곱하기 {second}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div>{result}</div>
      </form>
    </>
  );
};
export default GuGuDan;

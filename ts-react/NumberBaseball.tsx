import * as React from "react";
import { useRef, useState, useCallback } from "react";
import Try from "./Try";

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), i)[0];
    array.push(chosen);
  }
  return array;
};

interface TryInfo {
  try: string;
  result: string;
}

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState<TryInfo[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const obSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefalut();
    const input = inputEl.current;
    if (value === answer.join("")) {
      setTries((t) => {
        [
          ...t,
          {
            try: value,
            result: "홈런",
          },
        ];
      });
      setResult("홈런");
      alert("게임을 재시작합니다");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      if (input) {
        input.focus();
      }
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
    }
  }, []);
  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={obSubmitForm}>
        <input
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
          }, [])}
        />
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v} />
        ))}
      </ul>
    </>
  );
};

export default NumberBaseball;

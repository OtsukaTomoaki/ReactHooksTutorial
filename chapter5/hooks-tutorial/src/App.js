import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { TimerCounter } from "./Timer";

//Memo
//CountResultコンポーネント（子）を作成
//Counterコンポーネント（親）からtextとcountStateをpropsとして
//受け取っているCOuntResultコンポーネント（子）をReact.memo()でラップ
const CountResult = React.memo(({text, countState}) => {
  //Counterコンポーネント（親）のボタンがクリックされて
  //Counterコンポーネント（親）のもつcountStateが更新されたら
  //CountResultコンポーネント（子）が再レンダリングされる
  console.log(`${text}ボタンがクリックされました！`);//Memo化しない場合はA, Bどちらのボタンがクリックされても再描画されるので、コンソールに書き込まれる
  return (
    <p>
      {/* ボタン名とCounterコンポーネント（親）からpropsで受け取った現在のcountStateを表示 */}
      {text}: {countState}
    </p>
  );
});

//Counterコンポーネント（親）を作成
const CounterMemo = () => {
  //状態変数 countStateAとcountStateBの初期値は０
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  //Aボタンのstateセット用countIncrementA関数、現在のcountStateAを引数で受け取ることができる
  const countIncrementA = () => setCountStateA((prevCountStateA) => prevCountStateA + 1);

  //Bボタンのstateセット用
  const countIncrementB = () => setCountStateB((prevCountStateB) => prevCountStateB + 1);
  
  return (
    <>
      {/* 現在のcountStateA */}
      <CountResult text="Aボタン" countState={countStateA} />
      {/* 現在のcountStateA */}
      <CountResult text="Bボタン" countState={countStateB} />
      {/* Aボタン */}
      <button onClick={countIncrementA}>A ボタン</button>
      {/* Bボタン */}
      <button onClick={countIncrementB}>B ボタン</button>
    </>
  );
};

export default function App() {
  //useMemo
  return (
    <>
      <TimerCounter/>
      <CounterMemo />
    </>
  );
}
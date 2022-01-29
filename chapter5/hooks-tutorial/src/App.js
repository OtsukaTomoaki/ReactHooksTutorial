import React, { useState, useEffect } from "react";
import "./App.css";

import { Counter } from "./Counter";
import { Hello } from "./Hello";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JavaScript";

const Timer = () => {
  //constは状態変数/現在の値
  const [count, setCount] = useState(INITIAL_COUNT);
  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  const countIncrement = () => {
    //現在のcountを引数で受け取ることができる
    setCount((prevCount) => prevCount + 1);
    console.log('カウントアップ + 1');
  };

  const callbackFunction = () => {
    //副作用関数が実行されるとalertdで「副作用関数が実行されました！」と表示される
    console.log('副作用関数が実行されました！');
    const timer = setInterval(countIncrement, 1000);
    return () => {
      console.log('timerが削除されました。');
      clearInterval(timer);
    };
  };

  //第二引数にからの依存配列を渡しているので
  //初回レンダリング時にのみ副作用関数が実行される
  useEffect(callbackFunction, []);

  return (
    <div className="App">
      <p>現在のカウント数：{count}</p>
      <button onClick={countReset}>RESET</button>
    </div>
  );
};

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
  //useEffect
  const [count, setCount] = useState(INITIAL_COUNT);

  const [name, setName] = useState(INITIAL_NAME);

  const countIncriment = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const countDecrement = () => {
    return setCount((prevCount) => prevCount - 1);
  };

  const countReset = () => {
    return setCount(INITIAL_COUNT);
  };

  const handleChangeName = (e) => {
    return setName(e.target.value);
  };

  //useEffect
  const callbackFunction = () => {
    document.title = (`count, ${count}, name ${name}副作用関数が実行されました。　!`);
    return () => {
      console.log("クリーンアップ関数が実行されました。");
    };
  }
  useEffect(callbackFunction, [count, name]);
  const [display, toggleDisplay] = useState(false);
  const handleToggleDisplay = () => { toggleDisplay(!display); };

  //useMemo
  return (
    <>
      <Counter
        count={count}
        countIncriment={countIncriment}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={INITIAL_COUNT}
      />
      <Hello 
        name={name}
        handleChangeName={handleChangeName}
        initialName={INITIAL_NAME}
      />
      {/* ボタンをクリックするとhandleToggleDisplay関数が実行される */}
      <button onClick={handleToggleDisplay}>
        {display ? "タイマーを非表示" : "タイマーを表示"}
      </button>
      {display && <Timer />}

      <CounterMemo />
    </>
  );
}
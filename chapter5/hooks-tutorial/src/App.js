import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import { TimerCounter } from "./Timer";
import { SampleComponent } from "./SampleComponent";
import { TextProvider } from "./TextProvider";
import { First } from "./First";
import { CountProvider } from "./CountProvider";
import { Third2 } from "./Third";
import { ParentComponent } from "./ParentComponent";

//useCallback
//Buttonコンポーネント（子）を作成
//counterStateとbuttonValueをpropsとしてCounterコンポーネント（親）
//から受け取っているButtonコンポーネント（子）をReact.memo()でラップ
const Button = React.memo(({ counterState, buttonValue }) => {
  //ボタンがクリックされて、Counterコンポーネント（親）のcountIncrement関数が
  //更新されたらButtonコンポーネント（子）をReact.memo()でラップ
  console.log(`${buttonValue}がクリックされました！`);
  return <button onClick={counterState}>{buttonValue}</button>
});

//useMemo
//正方形の面積を求めるsquare関数を宣言
const square = (params) => {
  //[...Array(n).keys()]は、0からn-1までの整数が順番に並んだ配列を作る
  const testData = [...Array(1000).keys()];

  //パフォーマンスを観察したいので、わざと重い処理を記述
  testData.forEach(() => {
    console.log(`[計算： B + 1]がボタンクリックされ、square関数実行、
    ループ処理を${testData.length}回実行中...`)
  });
  return params * params;
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
  const countIncrementA = useCallback(() => setCountStateA((prevCountStateA) => prevCountStateA + 1), [countStateA]);

  //Bボタンのstateセット用
  const countIncrementB = useCallback(() => setCountStateB((prevCountStateB) => prevCountStateB + 1), [countStateB]);
  
  //正方形の面積をcountStateBを使って求めた計算結果
  //useMemo()でラップして、計算結果をメモ化している
  //第二引数である依存配列にcountStateBを渡しているので、
  //countStateAを更新してもcountStateBが更新されなければ
  //メモ化された計算結果を再利用するためsquare関数は実行されない
  const squareArea = useMemo(() => square(countStateB), [countStateB]);

  return (
    <>
      {/* 現在のcountStateA */}
      <CountResult text="Aボタン" countState={countStateA} />
      {/* 現在のcountStateA */}
      <CountResult text="Bボタン" countState={countStateB} />
      {/* Aボタン */}
      <Button counterState={countIncrementA} buttonValue="Aボタン" />
      {/* Bボタン */}
      <Button counterState={countIncrementB} buttonValue="Bボタン" />
      {/* Bボタンから正方形の面積を求める */}
      <p>【正方形の面積】</p>
      <p>計算結果B * 計算結果B = {squareArea}</p>
    </>
  );
};

export default function App() {
  //useMemo
  return (
    <>
      <TimerCounter/>
      <CounterMemo />
      <SampleComponent />
      <div>
        <TextProvider>
          <First />
        </TextProvider>
        <CountProvider>
          <Third2 />
        </CountProvider>
        <ParentComponent />
      </div>
    </>
  );
}
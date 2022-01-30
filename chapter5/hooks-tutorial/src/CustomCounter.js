import react from "react";
import { useCounter } from "./hooks";

const CounterText = (props) => <p>現在のカウント数：{props.count}</p>;

const INITIAL_COUNT = 0;

//Counterコンポーネントを作成
export const CustomCounter = () => {
    const { count, countAdd, countSub, countReset } = useCounter(INITIAL_COUNT);

    return (
        <div className="counterContainer">
            <CounterText count={count}/>
            <button onClick={countAdd}>ボタン +1</button>
            <button onClick={countSub}>ボタン -1</button>

            <button onClick={countReset}>リセット</button>
        </div>
    );
};
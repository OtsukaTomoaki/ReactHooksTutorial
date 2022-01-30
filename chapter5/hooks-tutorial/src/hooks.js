import react, { useState } from "react";


//useCounterフックを定義、カウンターの初期値を引数に渡す
export const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount);
    const countAdd = () => setCount((prevCount) => prevCount + 1);
    const countSub = () => setCount((prevCount) => prevCount - 1);

    const countReset = () => setCount(initialCount);

    return { count, countAdd, countSub, countReset };
};

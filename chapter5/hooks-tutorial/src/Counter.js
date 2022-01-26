export const Counter = ({
    count,
    countIncriment,
    countDecrement,
    countReset,
    initialCount
}) => {
    return (
        <>
            <p>
                {/*状態変数・／現在の値 count*/}
                現在のカウントする数：<b>{count}</b>
                <br/>
                count の初期値：<b>{initialCount}</b>
            </p>
            <button onClick={countIncriment}>increment</button>
            <button onClick={countDecrement}>decrement</button>
            <button onClick={countReset}>reset</button>
        </>
    );
};
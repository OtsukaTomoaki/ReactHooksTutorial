import react, { useContext } from "react";

import { TextContext } from "./TextProvider";
import { CountContext } from "./CountProvider";


//他のファイルでThirdコンポーネントを利用できるようにするため
//exportしておく
//Thirdコンポーネントは、Contextオブジェクトから値を取得できる
//Cosumerコンポーネント
export const Third = () => {
    //useContext()を利用して　、Contextオブジェクトから値を取得
    //useContext()はContextオブジェクトの値を取得できるReactフック
    const textData = useContext(TextContext);
    //textDataには useContext(TextContext)の値が入っている
    //textDataはProviderコンポーネントから取得したvalueの値
    //Thirdコンポーネント内で、Contextオブジェクトの値を取得できる
    console.log(textData);//これはProviderから渡されたテキストです

    return (
        <>
            <p>
                Thirdコンポーネント：<b>{textData}</b>
            </p>
        </>
    );
};

export const Third2 = () => {
    const [count, setCount] = useContext(CountContext);
    //親コンポーネントであるAppコンポーネント内にて、CountProviderコンポーネントでラップされていることから
    //Thirdコンポーネント内でContextオブジェクトの値を参照できる
    console.log(`現在のカウント: ${count}`);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <>
            <p>
                Thirdコンポーネント(count)：<b>{count}</b>
            </p>
            <button onClick={handleClick}>+1 ボタン</button>
        </>
    );
};
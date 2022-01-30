import React, { useState, createContext } from "react";

//他のファイルでCountContextを利用できるようにするため、exportしておく
//createContext()を利用して、ContextオブジェクトCountContextを作成
export const CountContext = createContext();

//useStateで定義したcount/setCount情報を保持する
//CountContext.Providerを作成
//CountCOntext.Providerでchildrenをラップしておくと
//CountProviderコンポーネントでラップしたコンポーネントツリー内で
//Contextオブジェクトを参照できるようにする
export const CountProvider = ({ children }) => {
    //countは状態変数/現在の値
    const [count, setCount] = useState(0);
    //value属性の値はCountProviderコンポーネントでラップしたコンポーネントのツリー内で参照できるようにする
    return (
        <CountContext.Provider value={[count, setCount]}>
            {children}
        </CountContext.Provider>
    );
};
import react, { useContext } from "react";

import { TextContext } from "./TextProvider";

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
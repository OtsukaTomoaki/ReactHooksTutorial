import React, { useState, useEffect, useRef }  from "react";
import "./App.css";

export const SampleComponent = () => {
    //input要素への参照オブジェクトinputRefObjectを作成
    //inputRefObject.currentの初期値はnull
    const inputRefObject = useRef(null);

    const [text, setText] = useState("");

    useEffect(() => {
        //第二引数なしのuseEffectを利用するとレンダリングのたびに副作用関数が実行される
        console.log("レンダリング！");
    });
    const handleClick = () => {
        ///inputRefObject.currentは<input type="text">を参照している
        //クリックでInputRedObject.currentで取得したinput要素に
        //focusさせる handleClick関数を宣言
        //inputRefObject.current.focus();

        //textの状態変数／現在の値を inputRefObject.current.value に更新する
        setText(inputRefObject.current.value);
    };

    //クリックでテキストをリセットするtextReset関数を宣言
    const textReset = () => {
        setText("");
        inputRefObject.current.value = "";
    };

    return (
        <>
            {/* ref属性でinputRefObjectとinput要素を関連付けする */}
            <input ref={inputRefObject} type="text" />
            {/* onClickでhandleClickを実行 */}
            <button onClick={handleClick}>set text</button>
            {/* onClickでtextResetを実行 */}
            <button onClick={textReset}>reset</button>
            {/* 状態変数／現在の値 textを表示している */}
            <p>text: {text}</p>
        </>
    );
};
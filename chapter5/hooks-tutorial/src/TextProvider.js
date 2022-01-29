import React, { createContext } from "react";

//createContext()を利用してContextオブジェクト TextContextを作成
//他のファイルでTextContextを参照できるようにするため　exportしておく
export const TextContext = createContext();

//TextProviderに渡したいtextを定義
const text = "これはProviderから渡されたテキストです。";

//定義したtextの情報を保持するTextContext.Provider　を作成
//TextContext.Providerでchildrenをラップしておくと、
//ラップしたこんぽーねんのツリー内で Contextオブジェクトを
//参照できるようになる childrenを propsで受け取っておく
export const TextProvider = ({ children }) => {
    //共有したい値をvalue属性の値として渡す
    //value属性の値はTextProviderコンポーネントでラップしたコンポーネントのツリー内で参照できるようになる
    return <TextContext.Provider value={text}>{children}</TextContext.Provider>
};


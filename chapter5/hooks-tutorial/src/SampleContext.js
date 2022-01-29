import React, { createContext, useContext } from "react";
import { SampleComponent } from "./SampleComponent";

//createContext()を利用して、ContextオブジェクトであるSampleContextObjectを作成
const SampleContextObject = createContext();

//Contextオブジェクトから値を取得できる
//Consumerコンポーネント ConsumerComponentを生成
const ConsumerComponent = () => {
    //useContext()を利用して、Contextオブジェクトから値を取得
    //useContext()はContextオブジェクトの値を取得できるフック
    //mesageTextはProviderコンポーネントから取得したvalueの値を受け取る
    const messageText = useContext(SampleComponent);

    console.log(messageText);// I Love React!!

    //Providerコンポーネントから取得した値を表示
    return <p>{messageText}</p>;//I Love React!!
};

const message = "I love React!!";

export default function App() {
    return (
        <SampleComponent.Provider value={message}>
            {/* ConsumerComponentコンポーネントは、Provider内なのでvalue属性の値を参照できる */}
            <ConsumerComponent />
        </SampleComponent.Provider>
    );
};
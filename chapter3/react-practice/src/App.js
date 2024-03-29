import { useState } from "react";
import "./App.css";

//テキストボックス
const InputText = () => {
  //入力中のテキストの状態と状態を更新する関数
  const [inputTextValue, setInputTextValue] = useState("");

  //入力中のボタンをclickした時のテキストの状態と状態を更新する関数
  const [text, setText] = useState("JavaScript");

  const handleChange = (e) => setInputTextValue(e.target.value);

  const handleClick = () => {
    //入力していた値を反映
    setText(inputTextValue);
    //入力中のテキストをリセット
    setInputTextValue("");
  };

  return (
    <div className="App">
      <h1>I Love {text}!!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      <input type="button" value="更新" onClick={handleClick} />
    </div>
  );
};

//セレクトボックス
const selectValues = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JavaScript" }
];

const SelectItems = selectValues.map((value) => {
  return (
    <option value={value.item} key={value.key}>
      {value.item}
    </option>
  );
});

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(selectValues[0].item);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="App">
      <p>
        現在選択されている値:
        <b>{selectedValue}</b>
      </p>

      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
};

//ラジオボタン
const radioValues = [
  { id: 1, item: "Python" },
  { id: 2, item: "GO" },
  { id: 3, item: "Java" }
];

const RadioButtonItems = ({ onChange, checked }) => {
  return radioValues.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="radio"
          value={value.item}
          onChange={onChange}
          checked={checked === value.item}
        />
        {value.item}
      </label>
    );
  });
};

const InputRadio = () => {
  const [checkedValue, setCheckedValue] = useState(radioValues[0].item);
  const handleChange = (e) => setCheckedValue(e.target.value);

  return (
    <div className="App">
      <p>
        現在選択されている値：<b>{checkedValue}</b>
      </p>
      <RadioButtonItems onChange={handleChange} checked={checkedValue} />
    </div>
  );
};

//チェックボックス
const checkValues = [
  { id: 1, item: "マウス" },
  { id: 2, item: "モニター" },
  { id: 3, item: "キーボード" }
];

const CheckButtonItems = ({ onChange, checked }) => {
  return checkValues.map((value) => {
    return (
      //key属性にvalue.idを指定する
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={onChange}
          //checkedValueにvalue.itemが含まれていればtrue
          checked={checked.includes(value.item)}
        />
        {value.item}
      </label>
    );
  });
};

const InputCheckBox = () => {
  const [checkedValues, setCheckedValue] = useState([]);
  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      //チェックした要素がcheckedValuesに含まれていれば、除外して新たなcheckedValuesを作成して更新
      setCheckedValue(
        checkedValues.filter((checkValue) => checkValue !== e.target.value)
      );
    } else {
      setCheckedValue([...checkedValues, e.target.value]);
    }
  };
  return (
    <div className="App">
      <p>
        {/* チェックボックス onChangeでcheckedValueっが更新され、画面上に表示される */}
        現在選択されている値：<b>{checkedValues.join(", ")}</b>
      </p>
      <CheckButtonItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
};

//チェックボックス(複数のcheckedの状態を管理)
const multiCheckValues = [
  { id: 1, item: "フロントエンド" },
  { id: 2, item: "バックエンド" },
  { id: 3, item: "ネイティブ" }
];

const MultiCheckButtonItems = ({ onChange, checked }) => {
  return multiCheckValues.map((value) => {
    return (
      //key属性にvalue.idを指定する
      <lebel key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={onChange}
          checked={checked[value.item]}
        />
        {value.item}
      </lebel>
    );
  });
};

const InputMultiCheckBox = () => {
  //現在選択されているチェックボックスの状態 checkedValuesと
  //checkedValuesの状態を更新する関数 setCheckedValues
  //const [状態変数, 状態を変更するための関数] = useState(状態の初期値)
  const [checkedValues, setCheckedValues] = useState(
    multiCheckValues.reduce((acc, cur) => {
      acc[cur.item] = false;
      return acc;
    }, {})
  );
  console.log(checkValues);
  const handelChange = (e) => {
    //チェックされたプロパティの状態が更新され、
    //checkedValuesの状態が更新される
    setCheckedValues({ ...checkedValues, [e.target.value]: e.target.checked });
  };

  const stateOfCheckedValues = Object.entries(checkedValues).reduce(
    (pre, [key, value]) => {
      //取り出したプロパティのvalueがtrueの場合、keyを
      //pushして新しい配列 stateOfCheckedValuesを作成
      console.log(pre, key, value);

      value && pre.push(key);
      return pre;
    },
    []
  );
  return (
    <div className="App">
      <p>
        {/* チェックボックスは onChangeでcheckedValuesが更新される
        ことで、stateOfCheckedValuesも更新され、画面上に表示される */}
        現在選択されている値：
        <b>{stateOfCheckedValues.join(", ")}</b>
      </p>
      <MultiCheckButtonItems onChange={handelChange} checked={checkValues} />
    </div>
  );
};

export default function App() {
  return (
    <>
      <InputText />
      <InputSelectBox />
      <InputRadio />
      <InputCheckBox />
      <InputMultiCheckBox />
    </>
  );
}

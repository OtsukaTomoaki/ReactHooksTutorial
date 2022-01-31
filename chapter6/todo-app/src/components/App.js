import React, { useRef } from "react";
import { useTodo } from "../hooks/useTodo";

const TodoTitle = ({ title, as }) => {
  //asがh1ならばタイトルはh2タグ
  if (as === "h1") return <h1>{title}</h1>;

  if (as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>;
};

const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.content}
      <button>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button>削除</button>
    </li>
  );
};

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <TodoItem key={todo.id} todo={todo}/>
        );
      })}
    </ul>
  );
};

const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      {/* useRef()で作成したrefオブジェクトであるinputElをref属性に指定してDOMを参照する */}
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
    </>
  );
};

function App() {
  const { 
    todoList,
    addTodoListItem 
  } = useTodo();

  //useRefでrefオブジェクトを作成（Todo入力フォームで利用）
  const inputEl = useRef(null);

  //Todo入力フォームで入力された文字列を新しいTodoに登録するためのhandleAddTodoListItem関数を宣言
  const handleAddTodoListItem = () => {
    //何も入力されていない場合にクリックされても何も起きない
    if (inputEl.current.value === "") return;

    //テキストエリアに入力されたテキストを新規Todoとして追加。追加したら、テキストエリアをからの文字列にする
    //「+ Todoを追加」ボタンをクリックで実行
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

  //console.logでコンソールに取得したTODOリストの情報を表示してみる
  console.log(todoList);

  const todoInCompletedList = todoList.filter((todo) => !todo.done);
  console.log("未完了リスト", todoInCompletedList);//未完了リスト
  const todoCompletedList = todoList.filter((todo) => todo.done);
  console.log("完了リスト", todoCompletedList);//完了リスト

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1"/>
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem}/>
      <TodoTitle title="未完了TODOリスト" as="h2"/>
      <TodoList todoList={todoInCompletedList} />

      <TodoTitle title="完了TODOリスト" as="h2"/>
      <TodoList todoList={todoCompletedList} />
    </>
  );
}

export default App;

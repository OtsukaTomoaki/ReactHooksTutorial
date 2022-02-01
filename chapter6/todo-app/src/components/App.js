import React, { useRef } from "react";
//ChakraUIのContainerコンポーネントを利用できるようにする
import { Container } from "@chakra-ui/react";

//ChakraUI IconsのAddIconを利用できるようにする
import { AddIcon } from "@chakra-ui/icons";

import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";

function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem
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
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth={"3xl"}>
      <TodoTitle title="TODO進捗管理" as="h1"
        //モバイル表示でfont-sizeは2xl = 1.5rem = 24px、最初のBreakpoint "md" = "46em" (=768px)を境界として
        //PC表示でfont-sizeは3xl = 1.875rem = 30px
        fontSize={{ base: "2xl", md: "3xl" }} />
      <TodoAdd
        placeholder="Add TODO"
        leftIcon={<AddIcon />}
        buttonText="TODOを追加"
        inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList 
        title="未完了TODOリスト" 
        as="h2" 
        todoList={todoInCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus} 
        deleteTodoListItem={deleteTodoListItem}
        fontSize={{ base: "xl", md: "2xl" }} />
      <TodoList
        title="完了TODOリスト"
        as="h2" 
        todoList={todoCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus} 
        deleteTodoListItem={deleteTodoListItem}
        fontSize={{ base: "xl", md: "2xl" }} />
    </Container>
  );
}

export default App;

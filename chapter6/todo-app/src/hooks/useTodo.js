import { useState, useEffect } from "react";

import { ulid } from "ulid";

//src/apis/todo.js内で宣言してexportしておいた関数を
//importすることにより、useTodo.js内で利用できるようにする
import * as todoData from "../apis/todos";

export const useTodo = () => {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        //useEffect()を利用することにより、コンポーネントのマウント後、またはアンマウント後に処理を実行する
        //モックサーバーからTODOデータを取得する getAllTodoData()を実行
        todoData.getAllTodoData().then((response) => {
            //モックサーバーからTodoデータを取得後、取得したTodoデータを反転させておくことでTodoを追加した順に上から表示させることができる
            //todoListの状態（state）を更新
            setTodoList(response);
        });
    }, []);

    //todoのdoneを反転させて更新するtoggleTodoListItemStatus関数を宣言
    const toggleTodoItemStatus = (id, done) => {
        //find()は配列から条件に合う値を見つけて、最初にtrueになった要素の値を返し、要素を見つけた時点で処理を停止する
        //doneの状態を反転させたいtodoListItemのidを見つけ、条件に一致するtodoItemを返す
        const todoItem = todoList.find((item) => item.id === id);

        //現在のtodoListの中から条件に一致した要素であるtodoItemのdoneを反転させる
        const newTodoItem = { ...todoItem, done: !done };

        //updateTodoData()を利用して指定されたidのTodoを更新したら、続いてtodoListの状態も更新する
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            const newTodoList = todoList.map((item) => {
                return item.id !== updatedTodo.id ? item : updatedTodo;
            });
            setTodoList(newTodoList);
        });
    };
    //新規Todoを追加する　addTodoListItem関数を宣言
    const addTodoListItem = (todoContent) => {
        const newTodoItem = {
            content: todoContent,
            id: ulid(),
            done: false//デフォルトでfalse
        };
        return todoData.addTodoData(newTodoItem).then((addedTodo) => {
            setTodoList([addedTodo, ...todoList]);
        });
    };

    //Todoを削除する
    const deleteTodoListItem = (id) => {
        todoData.deleteTodoData(id).then((deletedId) => {
            const newTodoList = todoList.filter((todo) => todo.id !== deletedId);
            setTodoList(newTodoList);
        })
    };

    return { 
        todoList, 
        toggleTodoItemStatus, 
        addTodoListItem, 
        deleteTodoListItem 
    };
};

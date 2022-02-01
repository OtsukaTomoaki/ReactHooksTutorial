import React from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ title, as, todoList, toggleTodoListItemStatus, deleteTodoListItem }) => {
    return (
        <>
            <TodoTitle title={title} as={as} />
            <ul>
                {todoList.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
                    );
                })}
            </ul>
        </>
    );
};
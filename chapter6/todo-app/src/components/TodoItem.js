import React from "react";

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);

    const handleDeleteTodoListItemStatus = () => deleteTodoListItem(todo.id);
    return (
        <li>
            {todo.content}
            <button onClick={handleToggleTodoListItemStatus}>
                {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button onClick={handleDeleteTodoListItemStatus}>削除</button>
        </li>
    );
};
import React from "react";

import { List } from "@chakra-ui/react";

import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ title, as, fontSize, todoList, toggleTodoListItemStatus, deleteTodoListItem }) => {
    
    if (0 < todoList.length) {
        return (
            <>
                <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
                <List w="full">
                    {todoList.map((todo) => {
                        return (
                            <TodoItem key={todo.id} todo={todo} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
                        );
                    })}
                </List>
            </>
        );
    } else {
        return (<></>);
    }
};
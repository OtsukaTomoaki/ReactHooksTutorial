import React from "react";
import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
    const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);

    const handleDeleteTodoListItemStatus = () => deleteTodoListItem(todo.id);
    const setColorScheme = todo.done ? "pink" : "blue";

    const label = todo.done ? "未完了リストへ" : "完了リストへ"
    return (
        <ListItem
            borderWidth="1px"
            p="4"
            mt="4"
            bg="white"
            borderRadius="md"
            borderColor="gray.300" >
            <Text mb="6">
                {todo.content}
            </Text>
            <Flex align="center" justify="flex-end">
                <Button
                    colorScheme={setColorScheme} variant="outline" size="sm" onClick={handleToggleTodoListItemStatus}>
                        {label}
                </Button>
                <IconButton icon={<DeleteIcon />} variant="enstyled" aria-label="delete" onClick={handleDeleteTodoListItemStatus} />
            </Flex>
        </ListItem>
    );
};
import React from "react";
import { Textarea, Button } from "@chakra-ui/react";

export const TodoAdd = ({ placeholder, leftIcon, buttonText, inputEl, handleAddTodoListItem }) => {
    return (
        <>
            {/* useRef()で作成したrefオブジェクトであるinputElをref属性に指定してDOMを参照する */}
            <Textarea placeholder={placeholder} bgColor="white" mt="8" borderColor="gray.400" ref={inputEl} />
            <Button onClick={handleAddTodoListItem} color="blue" leftIcon={leftIcon}>{buttonText}</Button>
        </>
    );
};
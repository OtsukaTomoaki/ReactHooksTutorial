import React from "react";

export const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
    return (
        <>
            {/* useRef()で作成したrefオブジェクトであるinputElをref属性に指定してDOMを参照する */}
            <textarea ref={inputEl} />
            <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
        </>
    );
};
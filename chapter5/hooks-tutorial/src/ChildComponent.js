import react from "react";

export const ChildComponent = (props) => {
    return <p className={`border-${props.color}`}>{props.children}！！</p>
};
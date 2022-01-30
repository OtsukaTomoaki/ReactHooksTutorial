import react from "react";
import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    return (
        <ChildComponent color="gray">
            ChildComponentにラップされた文字列です
        </ChildComponent>
    );
};
import React from "react";

export const TodoTitle = ({ title, as }) => {
    //asがh1ならばタイトルはh2タグ
    if (as === "h1") return <h1>{title}</h1>;

    if (as === "h2") return <h2>{title}</h2>;

    return <p>{title}</p>;
};

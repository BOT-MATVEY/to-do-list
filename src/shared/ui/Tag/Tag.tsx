import React from "react";
import styles from "./Tag.module.scss";
import classNames from "classnames";

export interface TagProps {
    content: React.ReactNode;
    color: "violet" | "gray";
    style?: "default" | "arrow";
}

export const Tag = ({ color, content, style = "default" }: TagProps) => {
    return (
        <div
            className={classNames(styles[color], styles[style], styles.wrapper)}
        >
            <p className={styles.content}>{content}</p>
        </div>
    );
};

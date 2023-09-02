import { useState } from "react";
import styles from "./ToDoCard.module.scss";

import { Tag } from "../../shared/ui/Tag/Tag";
import { CheckBox } from "../../shared/ui/CheckBox/CheckBox";
import classNames from "classnames";
import { ToDoItem } from "../../shared/types";

export const ToDoCard = ({
    title,
    description,
    dates,
    completed,
    tags,
}: ToDoItem) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <CardTitle title={title} completed={completed} />
                </div>

                <div className={styles.dates}>
                    <span className={styles.date}>{dates.startDate}</span>
                    <span className={styles.date}>{dates.endDate}</span>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.footer}>
                    <div className={styles.tagsContainer}>
                        {tags.map((tag, index) => (
                            <Tag {...tag} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardTitle = ({
    title,
    completed = false,
}: Pick<ToDoItem, "title" | "completed">) => {
    const [isToDoChecked, setIsToDoChecked] = useState(completed);

    const toggleToDo = () => {
        setIsToDoChecked((prev) => !prev);
    };
    return (
        <div className={styles.titleWrapper}>
            <CheckBox
                className={styles.checkbox}
                onChange={toggleToDo}
                checked={isToDoChecked}
            />
            <span
                className={classNames(
                    styles.title,
                    isToDoChecked && styles.checked
                )}
            >
                {" "}
                {title}
            </span>
        </div>
    );
};

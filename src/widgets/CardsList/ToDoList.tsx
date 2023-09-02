import React from "react";
import styles from "./ToDoList.module.scss";
import { ToDoItem } from "../../shared/types";
import { ToDoCard } from "../../entities/TodoCard/ToDoCard";
interface ICardsList {
    toDoItems: ToDoItem[];
}
export const ToDoList = ({ toDoItems }: ICardsList) => {
    return (
        <div className={styles.wrapper}>
            {toDoItems.map((item) => (
                <ToDoCard {...item} key={item.id} />
            ))}
        </div>
    );
};

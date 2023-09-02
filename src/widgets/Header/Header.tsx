import styles from "./Header.module.scss";
import classNames from "classnames";
import { IconPlus } from "../../shared/assets/icons/IconPlus";
interface IHeader {
    amountOfToDoes: number;
    className?: string;
}
export const Header = ({ amountOfToDoes, className }: IHeader) => {
    return (
        <header className={classNames(styles.wrapper, className)}>
            <p className={styles.day}>Today</p>

            <div className={styles.buttons}>
                <button className={styles.buttonAddNewItem}>
                    <IconPlus />
                </button>

                <div className={styles.counter}>{amountOfToDoes}</div>
            </div>
        </header>
    );
};

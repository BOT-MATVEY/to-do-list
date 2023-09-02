import styles from "./CheckBox.module.scss";
import classNames from "classnames";
interface CheckBoxProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    className?: string;
}
export const CheckBox = ({ className, checked, onChange }: CheckBoxProps) => {
    return (
        <label className={classNames(styles.wrapper, className)}>
            <input
                className={styles.shadowCheckbox}
                type="checkbox"
                checked={checked}
                hidden
                onChange={(e) => onChange(e.target.checked)}
            />
            <div className={styles.checkbox} />
        </label>
    );
};

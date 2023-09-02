import styles from "./Avatar.module.scss";

export const Avatar = () => {
    const imageSrc =
        process.env.NODE_ENV === "development"
            ? "./public/images/avatar.jpeg"
            : "./images/avatar.jpeg";
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={imageSrc} alt="" />
        </div>
    );
};

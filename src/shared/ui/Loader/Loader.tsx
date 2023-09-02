import { CSSProperties, ForwardedRef, forwardRef } from "react";
import styles from "./Loader.module.scss";
import classNames from "classnames";

interface LoaderProps {
    isLoading: boolean;
    className?: string;
}

export const Loader = forwardRef(
    (
        { isLoading, className }: LoaderProps,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <div
                ref={ref}
                className={classNames(
                    styles.loader,
                    isLoading && styles.active,
                    className
                )}
            >
                {[1, 1, 1].map((_, index) => (
                    <div
                        key={index}
                        className={styles.loaderElement}
                        style={{ "--index": index } as CSSProperties}
                    >
                        .
                    </div>
                ))}
            </div>
        );
    }
);

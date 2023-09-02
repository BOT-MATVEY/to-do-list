import React, { useEffect } from "react";
import styles from "./IntersectionObserverLoader.module.scss";

import { useIntersectionObserver } from "usehooks-ts";
import { Loader } from "../../shared/ui/Loader/Loader";

interface IntersectionObserverLoaderProps {
    handler: () => void;
    isLoading: boolean;
}

export const IntersectionObserverLoader = ({
    handler,
    isLoading,
}: IntersectionObserverLoaderProps) => {
    const intersectionRef = React.useRef(null);
    const entry = useIntersectionObserver(intersectionRef, {});
    const isIntersecting = entry?.isIntersecting;

    useEffect(() => {
        if (isIntersecting && !isLoading) {
            handler();
        }
    }, [isIntersecting, handler, isLoading]);

    return (
        <Loader
            ref={intersectionRef}
            className={styles.loader}
            isLoading={isLoading}
        />
    );
};

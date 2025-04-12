'use client'
import styles from "./ToastNotification.module.css"
import {useEffect} from "react";

type ToastProps = {
    message: string;
    duration?: number;
    onClose: () => void
}

export default function ToastNotification({
                                              message,
                                              duration=1500,
                                              onClose,
                                          }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={styles.toast_wrap}>
            <span className={styles.toast_message}>{message}</span>
        </div>
    )
}
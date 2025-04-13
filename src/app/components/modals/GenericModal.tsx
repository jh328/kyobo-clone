//src/app/components/modalsGenericModal.tsx
import styles from "./Generic.module.css"


type ModalProps = {
    title: string;              // 1줄 텍
    description?: string;       // 2줄 텍
    confirmText?: string;       // 확인 버튼
    cancelText?: string;        // 취소 버튼
    onClose: () => void;        // 닫기/취소 동작
    onConfirm?: () => void;     // 확인
}

export default function GenericModal({
                                         title,
                                         description,
                                         confirmText = '확인',
                                         cancelText = '취소',
                                         onConfirm,
                                         onClose
                                     }: ModalProps) {


    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_box}>
                <div></div>
                <div
                    className={`${styles.dialog_wrap} ${styles.dialog_content} ${styles.dialog_content} ${styles.pd} ${styles.por}`}>
                    <div className={`${styles.dialog_contents} ${styles.contents_move}`}>
                        <span className={`${styles.text}`}>{title}</span>
                        <span className={`${styles.text_sm}`}>{description}</span>
                    </div>
                    <div className={`${styles.dialog_footer}`}>
                        <button type="button"
                                onClick={onClose}
                                className={`${styles.btn_md} ${styles.btn_common} ${styles.btn_class} ${styles.btn_gray}`}>
                            <span className={styles.text_class}>{cancelText}</span>
                        </button>
                        <button type="button"
                                onClick={onConfirm}
                                className={`${styles.btn_md} ${styles.btn_common} ${styles.btn_class} ${styles.ml_6} ${styles.btn_primary}`}>
                            <span className={styles.text_class}>{confirmText}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
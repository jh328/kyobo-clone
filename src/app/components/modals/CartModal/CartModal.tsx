//src/app/components/modals/CartModal/CartModal.tsx

import styles from "./CartModal.module.css"
import {useRouter} from "next/navigation";

type CartModalProps = {
    onClose: () => void;
}
export default function CartModal({onClose}: CartModalProps) {
    const router = useRouter();

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_box}>
                <div></div>
                <div
                    className={`${styles.dialog_wrap} ${styles.dialog_content} ${styles.dialog_content} ${styles.pd} ${styles.por}`}>
                    <div className={`${styles.dialog_contents} ${styles.contents_move}`}>
                        <span className={`${styles.text}`}>상품이 장바구니에 담겼습니다.</span>
                        <span className={`${styles.text_sm}`}>장바구니로 이동하시겟습니까?</span>
                    </div>
                    <div className={`${styles.dialog_footer}`}>
                        <button type="button"
                                onClick={onClose}
                                className={`${styles.btn_md} ${styles.btn_common} ${styles.btn_class} ${styles.btn_gray}`}>
                            <span className={styles.text_class}>취소</span>
                        </button>
                        <button type="button"
                                onClick={()=> router.push('/cart')}
                                className={`${styles.btn_md} ${styles.btn_common} ${styles.btn_class} ${styles.ml_6} ${styles.btn_primary}`}>
                            <span className={styles.text_class}>확인</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import styles from "./ReviewsHeader.module.css"
import {RefObject} from "react";
import {useSession} from "next-auth/react";


type ReviewsHeaderProps = {
    reviewRef: RefObject<HTMLDivElement> | null;
    onOpenModal: () => void;
    onRequiredLogin: () => void;
    reviewCount:number;
};

const ReviewsHeader = ({reviewRef, onOpenModal, onRequiredLogin,reviewCount}: ReviewsHeaderProps) => {
    const {data:session} =useSession();

    const handleClick = () => {
        const isLoggedIn = !!session;

        if (!isLoggedIn) {
            onRequiredLogin()
            return;
        }
        onOpenModal();
    }
    return (
        <div className={`${styles.title_size_md_btn} ${styles.title_wrap}`}>
            <section ref={reviewRef ?? undefined}>
                <p className={`${styles.title_heading}`}>Klove 리뷰 ({reviewCount})</p>
            </section>
            <button className={`${styles.btn_size_lg} ${styles.ml_6}`}>
                <span className={`${styles.ico_info} ${styles.b_size}`}></span>
                <span className={`${styles.hidden}`}>하 팝업웰케 많아</span>
            </button>
            <div className={`${styles.right_area}`}>
                <p className={`${styles.klover_asterisk} `}>
                    구매 후 리뷰 작성 시, e교환권 200원 적립
                </p>
                <button
                    type="button"
                    onClick={handleClick}
                    className={`${styles.btn_sm} ${styles.btn_primary} ${styles.btn_all_text}`}>
                    <span className={`${styles.ico_review}`}></span>
                    <span className={styles.text_base}>리뷰작성</span>
                </button>
            </div>
        </div>
    )
}

export default ReviewsHeader;
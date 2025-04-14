import styles from "./ReviewsHeader.module.css"
import {RefObject} from "react";


type ReviewsHeaderProps = {
    reviewRef: RefObject<HTMLDivElement> | null;
};

const ReviewsHeader = ({ reviewRef }: ReviewsHeaderProps) => {
    return (
        <div className={`${styles.title_size_md_btn} ${styles.title_wrap}`}>
            <section ref={reviewRef}>
                <p className={`${styles.title_heading}`}>Klover 리뷰 (93)</p>
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
                    className={`${styles.btn_sm} ${styles.btn_primary} ${styles.btn_all_text}`}>
                    <span className={`${styles.ico_review}`}></span>
                    <span className={styles.text_base}>리뷰작성</span>
                </button>
            </div>
        </div>
    )
}

export default ReviewsHeader;
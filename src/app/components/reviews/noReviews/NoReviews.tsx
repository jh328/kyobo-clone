import styles from "./NoReviews.module.css"
import ReviewsListHeader from "@/app/components/reviews/reviewsListHeader/ReviewsListHeader";

const NoReviews = () => {
    return (
        <div className={styles.tab}>
            <ReviewsListHeader/>
            <div className={styles.no_reviews_wrap}>
                    <div className={styles.comment_wrap}>
                        <div></div>
                        <div></div>
                        <div className={`${styles.no_data} ${styles.line} ${styles.size_sm}`}>
                            <div className={`${styles.no_data_color} ${styles.no_data_desc}`}>
                                Klover리뷰를 작성해 보세요.
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default NoReviews;
import styles from "@/app/detail/[id]/detail.module.css";
import ReviewsHeader from "@/app/components/reviews/reviewsHeader/ReviewsHeader";
import {RefObject, useState} from "react";
import ReviewsBox from "@/app/components/reviews/reviewsBox/ReviewsBox";
import NoReviews from "@/app/components/reviews/noReviews/NoReviews";
import ReviewsList from "@/app/components/reviews/reviewsList/ReviewsList";
import ReviewModal from "@/app/components/reviews/ReviewModal/ReviewModal";


export type ReviewType = {
    id: string;
    period: Date;
    content: string;
    tags: string[];
}

type ReviewSectionProps = {
    reviewRef: RefObject<HTMLDivElement> | null;
    onRequireLogin: () => void;
}

const ReviewSection = ({reviewRef, onRequireLogin}:ReviewSectionProps) => {

    const [showReviewModal, setShowReviewModal] = useState(false);
    const [reviews, setReviews] = useState<ReviewType[]>([]);

    const handleReviewSubmit = (newReview: ReviewType) => {
        setReviews(prev => [...prev, newReview]);
        setShowReviewModal(false);
    }


    return (
        <section className={styles.tab_content} style={{marginTop: "70px"}}>
            <div className={`${styles.mt_70}`}>
                {/*!--> Klover 리뷰 제목*/}
                <ReviewsHeader
                    reviewRef={reviewRef}
                    onOpenModal={() => setShowReviewModal(true)}
                    onRequiredLogin={onRequireLogin}
                    reviewCount={reviews.length}
                />


                {showReviewModal && (
                    <ReviewModal
                        onClose={() => setShowReviewModal(false)}
                        onSubmit={handleReviewSubmit}

                    />
                )}
                {/*!-- // Klover 리뷰 제목*/}

                {/*!--> 사용자 총점 */}
                <ReviewsBox/>
                {/*나머지 리뷰박스, 리뷰리스트, 이런 곳에도 reviews={reviews} 값을 줘야한다.*/}
                {/*!-- //사용자 총점 */}

                {/*리뷰 적을 수 있는 칸 ..*/}

                {reviews.length === 0 ? (

                <NoReviews/> ) : (
                <ReviewsList reviews={reviews}/>

                )}


            </div>
            <div className={`${styles.product_detail_together}`}></div>
        </section>
    )
}

export default ReviewSection;
import styles from "./ReviewsList.module.css"
import ReviewsListHeader from "@/app/components/reviews/reviewsListHeader/ReviewsListHeader";
import {ReviewType} from "@/app/components/reviews/ReviewSection";

const ReviewsList = ({reviews}: { reviews: ReviewType[] }) => {
    return (
        <div className={styles.tab_wrap}>
            <ReviewsListHeader/>
            <div className={styles.tab_content}>
                <div className={`${styles.comment_wrap}`}>
                    {/*!--> 리뷰 리스트 */}
                    <div className={`${styles.comment_list}`}>
                        {/*리뷰 한개 폼*/}
                        {reviews.map((review)=> (

                        <div className={`${styles.comment_item}`} key={review.id}>
                            <div className={`${styles.comment_header}`}>
                                <div className={`${styles.left_area}`}>
                                    <div className={styles.user_info_box}>
                                        <span className={`${styles.badge_box} ${styles.badge_base}`}>
                                            <span
                                                className={`${styles.badge_pill} ${styles.badge_class} ${styles.font_xs} ${styles.bl_br} ${styles.text_ex} ${styles.badge_kyobo} ${styles.badge_sm}`}>
                                                <span className={`${styles.text_base} ${styles.text_wh}`}>종이책</span>
                                            </span>
                                            <span
                                                className={`${styles.badge_pill} ${styles.badge_class} ${styles.badge_line_gray} ${styles.ml_6} ${styles.back}  ${styles.badge_sm}`}>
                                                <span className={styles.text_base}>구매자</span>
                                            </span>
                                        </span>
                                        <span className={`${styles.info_item} ${styles.pt_1}`}>유저아이디</span>
                                        <span className={`${styles.gap} ${styles.gap_margin}`}>&#47;</span>
                                        <span className={`${styles.info_item} ${styles.pt_1}`}>작성기간</span>
                                        <span className={`${styles.gap} ${styles.gap_margin}`}>&#47;</span>
                                        <span className={`${styles.info_item} ${styles.pt_1}`}>
                                            <button className={`${styles.btn_comment_util} ${styles.text_report}`}>
                                                <span className={`${styles.text_base}`}>신고/차단</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                                <div className={`${styles.review_right_area}`}>
                                    <div className={`${styles.reivew_summary_wrap}`}>
                                        <div
                                            className={`${styles.rating_sm} ${styles.mt_3} ${styles.rating_footer} ${styles.w_68}`}>
                                            <div>초기화</div>
                                            <div className={`${styles.rating_stars} ${styles.z} ${styles.w68}`}>
                                                <span className={`${styles.empty_stars}`}></span>
                                                <span
                                                    className={`${styles.filled_start}`}>
                                            <span className={`${styles.ml01} ${styles.star}`}>
                                                <i className={`${styles.icon_score_start}`}></i>
                                            </span>
                                            <span className={`${styles.ml01} ${styles.star}`}>
                                                <i className={`${styles.icon_score_start}`}></i>
                                            </span>
                                            <span className={`${styles.ml01} ${styles.star}`}>
                                                <i className={`${styles.icon_score_start}`}></i>
                                            </span>
                                            <span className={`${styles.ml01} ${styles.star}`}>
                                                <i className={`${styles.icon_score_start}`}></i>
                                            </span>
                                        </span>
                                            </div>
                                            <div>caption</div>
                                        </div>
                                        <input type="text" className={styles.rating_input}/>
                                        <span className={`${styles.summary_gap}`}>&#47;</span>
                                        <span className={`${styles.review_quotes_text} ${styles.mr_1}`}>
                                    도움돼요
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.comment_contents}`}>
                                <div className={styles.contents_inner}>
                                    <div className={styles.comment_view_wrap}>
                                        <div className={styles.comment_text_box}>
                                            <div className={styles.comment_text}>
                                                {review.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.comment_footer} ${styles.h_20}`}>
                                <button type="button"
                                        className={`${styles.non_di} ${styles.btn_more_body} ${styles.btn_base} ${styles.dis_in} ${styles.p_0} ${styles.w_62}`}>
                                    <span className={`${styles.btn_more_body} ${styles.text_base}`}>펼치기</span>
                                    <span className={`${styles.text_base} ${styles.footer_ico_arw}`}></span>
                                </button>
                                <div className={`${styles.comment_util_box} ${styles.util}`}>
                                    <div className={`${styles.footer_area} ${styles.h_20} `}>
                                        <button type="button"
                                                className={`${styles.btn_base} ${styles.p_0} ${styles.w_32_h_20}`}>
                                            <span className={`${styles.ico_like} ${styles.text_base}`}></span>
                                            <span className={`${styles.text_base} ${styles.btn_like_text}`}>1</span>
                                        </button>
                                        <button type="button"
                                                className={`${styles.btn_base} ${styles.ml_16} ${styles.p_0} ${styles.w_58_h_20}`}>
                                            <span className={`${styles.text_base} ${styles.ico_reply}`}></span>
                                            <span className={`${styles.text_base} ${styles.btn_replay}`}>
                                                답글
                                                <span className={styles.count}>1</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.comment_reply_wrap}`}></div>
                        </div>
                        ))}
                    </div>
                    {/*!--! //리뷰 리스트 */}

                    {/*!--> 페이지네이션*/}
                    <div className={`${styles.comment_contents}`}>
                        {/* <div className={`${styles.contents_inner}`}>
                            <div className={`${styles.comment_view_wrap}`}>
                                <div className={`${styles.comment_text_box}`}>
                                    <div className={`${styles.comment_text}`}>
                                     ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    {/*!-- //페이지네이션*/}
                    {/*이거는 삭제 해도 되는거임. 실제 div는 3개 값이다.*/}
                </div>
            </div>
        </div>
    )
}

export default ReviewsList;
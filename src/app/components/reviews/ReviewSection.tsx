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

                {/*<div className={`${styles.tab_wrap}`}>
                    !--> 리뷰 ul 태그
                    <div className={`${styles.tab_list_wrap}`} style={{height: "44px"}}>
                        <ul className={`${styles.tabs} ${styles.tabs_sup}`}>
                            <li className={`${styles.tab_item} ${styles.pl0} ${styles.tab_padding}`}>
                                <button className={`${styles.tab_link}`}>
                                    <span className={`${styles.tab_text} ${styles.review_text}`}>전체 리뷰</span>
                                </button>
                            </li>
                            <li className={`${styles.tab_item} ${styles.tab_padding} ${styles.z_sup}`}>
                                <button className={`${styles.tab_link}`}>
                                    <span className={`${styles.tab_text} ${styles.review_text}`}>구매 리뷰</span>
                                </button>
                            </li>
                            <li className={`${styles.tab_item} ${styles.tab_padding}`}>
                                <button className={`${styles.tab_link}`}>
                                    <span className={`${styles.tab_text} ${styles.review_text}`}>한 달 후 리뷰</span>
                                </button>
                            </li>
                        </ul>
                        <div className={`${styles.tab_review_option}`}>
                            <div className={`${styles.form_sel}`}>
                                <select name="" id="">
                                                            <option value="">좋아요 순</option>
                                                            <option value="">최신 순</option>
                                                        </select>
                                <span style={{width: "100%", height: "38px"}}
                                      className={`${styles.ui_selectmenu_button}`}>
                                    <span className={`${styles.ui_selectmenu_icon}`}></span>
                                    <span className={`${styles.ui_selectmenu_text}`}>좋아요 순</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    !-- //리뷰 ul 태그

                    리뷰 리스트 시작..
                    <div className={`${styles.tab_content}`}>
                        <div className={`${styles.comment_wrap}`}>

                            !--> 리뷰 리스트
                            <div className={`${styles.comment_list} ${styles.bt_no}`}>
                                <div className={`${styles.comment_item}`}>
                                    <div className={`${styles.comment_header}`}>
                                        <div className={`${styles.left_area}`}>
                                            <div className={`${styles.user_info_box}`}>
                                                <span
                                                    className={`${styles.badge_box} ${styles.badge_base}`}>
                                                    <span className={`${styles.badge_pill} ${styles.badge_class} ${styles.font_xs} ${styles.bl_br} ${styles.text_ex}`}>
                                                        <span className={`${styles.ico_wish_base} ${styles.text_wh}`}>종이책</span>
                                                    </span>
                                                    <span className={`${styles.badge_pill} ${styles.badge_class} ${styles.badge_line_gray} ${styles.ml6} ${styles.purchaser_text} ${styles.bg_white}`}>
                                                        <span className={styles.text}>구메자</span>
                                                    </span>
                                                </span>
                                                <span
                                                    className={`${styles.info_item} ${styles.pt_1}`}>유저아이디</span>
                                                <span
                                                    className={`${styles.gap} ${styles.gap_margin}`}>&#47;</span>
                                                <span
                                                    className={`${styles.info_item} ${styles.pt_1}`}>작성기간</span>
                                                <span
                                                    className={`${styles.gap} ${styles.gap_margin}`}>&#47;</span>
                                                <span
                                                    className={`${styles.info_item} ${styles.pt_1}`}>
                                                    <button className={`${styles.btn_comment_util}`}>
                                                        <span className={styles.text}>신고/차단</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={`${styles.review_right_area}`}>
                                            <div className={`${styles.reivew_summary_wrap}`}>
                                                <div
                                                    className={`${styles.rating_sm} ${styles.mt3} ${styles.rating_footer} ${styles.w68}`}>
                                                    <div>초기화</div>
                                                    <div
                                                        className={`${styles.rating_stars} ${styles.z} ${styles.w68}`}>
                                                        <span className={`${styles.empty_stars}`}></span>
                                                        <span
                                                            className={`${styles.filled_start}`}>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                 </span>
                                                    </div>
                                                    <div>caption</div>
                                                </div>
                                                <input type="text"
                                                       className={styles.rating_input}/>
                                                <span
                                                    className={`${styles.summary_gap}`}>&#47;</span>
                                                <span
                                                    className={`${styles.review_quotes_text} ${styles.mr1}`}>
                                                                                    도움돼요
                                                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.comment_contents}`}>
                                        <div className={`${styles.contents_inner}`}>
                                            <div className={`${styles.comment_view_wrap}`}>
                                                <div className={`${styles.comment_text_box}`}>
                                                    <div className={`${styles.comment_text}`}>
                                                        리뷰내용 3줄 넘어가는거 아니면, 펼치기 버튼 비활성화 되어야 한다.
                                                        리뷰 작성은 모달로 되어 있고, 모달이 나오면 화면이 조금 어두워진다.ㅣ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.comment_footer}`}>
                                        <button type="button"
                                                className={`${styles.footer_text} ${styles.btn_more_body} ${styles.pl0}`}>
                                                                    <span
                                                                        className={`${styles.btn_more_body} ${styles.footer_text}`}>펼치기</span>
                                            <span className={`${styles.footer_ico_arw}`}></span>
                                        </button>
                                        <div className={`${styles.comment_util_box}`}>
                                            <div className={`${styles.footer_area}`}>
                                                <button type="button"
                                                        className={`${styles.ico_wish_base}`}>
                                                                            <span
                                                                                className={`${styles.ico_like} ${styles.ico_wish_base}`}></span>
                                                    <span
                                                        className={`${styles.ico_wish_base} ${styles.like_text}`}>100</span>
                                                </button>
                                                <button type="button"
                                                        className={`${styles.ico_wish_base} ${styles.ml16}`}>
                                                                            <span
                                                                                className={`${styles.ico_wish_base} ${styles.ico_reply}`}></span>
                                                    <span className={styles.reply_text}>
                                                                                답글
                                                                            <span
                                                                                className={styles.count}>0</span>
                                                                            </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.reply_wrap}`}>리플</div>
                                </div>
                            </div>
                            !--> // 리뷰 리스트

                            !--> 페이지네이션
                            <div className={`${styles.pagination} `}>
                                <button type="button"
                                        className={`${styles.btn_page} ${styles.prev}`}>
                                    <span className={styles.hidden}>이전</span>
                                </button>
                                <div className={`${styles.page_num} ${styles.h24}`}>
                                    <Link href=""
                                          className={`${styles.btn_page_num} ${styles.num_page}`}>1</Link>
                                    <span></span>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>2</Link>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>3</Link>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>4</Link>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>5</Link>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>6</Link>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>7</Link>
                                    <span></span>
                                    <Link href=""
                                          className={`${styles.btn_page_num}`}>8</Link>
                                </div>
                                <button type="button"
                                        className={`${styles.btn_page} ${styles.next}`}>
                                    <span className={styles.hidden}>다음</span>
                                </button>
                            </div>
                            !--> //페이지네이션
                            <div className={`${styles.no_data}`}></div>
                        </div>
                    </div>
                </div>*/}

            </div>
            <div className={`${styles.product_detail_together}`}></div>
        </section>
    )
}

export default ReviewSection;
import styles from "./ReviewsBox.module.css";

const ReviewsBox = () => {
    return (
        <div className={`${styles.klover_review_box} ${styles.klover_padding}`}>
            <div className={`${styles.klover_box_left} ${styles.pl_0}`}>
                <div className={`${styles.box_top}`}>
                    <p className={`${styles.text_user_score}`}>사용자 총점</p>
                    <div className={`${styles.rating_container} ${styles.ml_minus}`}>
                        <div>{/*x*/}</div>
                        <div className={`${styles.rating_stars} ${styles.w_h}`}>
                            <span className={styles.empty_stars}></span>
                            <span className={`${styles.filled_start}`}
                                  style={{width: "98%"}}>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                            </span>
                            <span className={`${styles.empty_stars}`}>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                                <span className={styles.star}>
                                    <i className={styles.icon_star}></i>
                                </span>
                            </span>
                        </div>
                        <div className={`${styles.caption}`}>
                            <span className={`${styles.caption_badge}`}>
                                10점 중 9.8점 이게 데이터임.
                                <span className={`${styles.caption_val}`}>9.81</span>
                                <span className={`${styles.total}`}>10</span>
                            </span>
                        </div>
                    </div>
                    <input type="text" className={styles.rating_input}/>
                </div>
                <div className={`${styles.box_bottom} ${styles.ml_0}`}>
                    <div className={`${styles.score_bar_wrap}`}>
                        <div className={`${styles.rating_sm} ${styles.rating_container} `}>
                            <div title="초기화라고 적혀 있음."></div>
                            <div className={`${styles.rating_stars} ${styles.w_68}`}>
                                <span className={`${styles.empty_stars}`}></span>
                                <span className={`${styles.filled_start}`}>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                            <span className={`${styles.score_bar_inner} ${styles.score_best}`} style={{width: "91%"}}></span>
                        </div>
                        <span className={styles.text_score_bar}>91%</span>
                    </div>

                    <div className={`${styles.score_bar_wrap} ${styles.mt_13}`}>
                        <div className={`${styles.rating_sm} ${styles.rating_container} `}>
                            <div title="초기화라고 적혀 있음."></div>
                            <div className={`${styles.rating_stars} ${styles.w_68}`}>
                                <span className={`${styles.empty_stars}`}></span>
                                <span className={`${styles.filled_start}`}
                                      style={{width: "75%"}}>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                </span>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                            <span className={`${styles.score_bar_inner} ${styles.score_best}`} style={{width: "11%"}}></span>
                        </div>
                        <span className={styles.text_score_bar}>7%</span>
                    </div>

                    <div className={`${styles.score_bar_wrap} ${styles.mt_13}`}>
                        <div className={`${styles.rating_sm} ${styles.rating_container} `}>
                            <div title="초기화라고 적혀 있음."></div>
                            <div className={`${styles.rating_stars} ${styles.w_68}`}>
                                <span className={`${styles.empty_stars}`}></span>
                                <span className={`${styles.filled_start}`} style={{width: "50%"}}>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                            <span className={`${styles.score_bar_inner} ${styles.score_best}`} style={{width: "1%"}}></span>
                        </div>
                        <span className={styles.text_score_bar}>1%</span>
                    </div>
                    <div className={`${styles.score_bar_wrap} ${styles.mt_13}`}>
                        <div className={`${styles.rating_sm} ${styles.rating_container} `}>
                            <div title="초기화라고 적혀 있음."></div>
                            <div className={`${styles.rating_stars} ${styles.w_68}`}>
                                <span className={`${styles.empty_stars}`}></span>
                                <span className={`${styles.filled_start}`} style={{width: "25%"}}>
                                    <span className={`${styles.star} ${styles.ml_01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml_01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml_01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                    <span className={`${styles.star} ${styles.ml_01}`}>
                                        <i className={styles.icon_score_start}>
                                        </i>
                                    </span>
                                </span>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                            <span className={`${styles.score_bar_inner} ${styles.score_best}`} style={{width: "1%"}}></span>
                        </div>
                        <span className={styles.text_score_bar}>1%</span>
                    </div>
                </div>
            </div>
            <div className={`${styles.klover_box_right}`}>
                <div className={`${styles.box_top}`}>
                    <p className={`${styles.text_good_respon}`}>
                        33#의 구매자가
                        <br/>
                        <span className={`${styles.fc_spot}`}>
                            <span className={`${styles.pt0} ${styles.image_ex}`}>
                                집중돼요
                            </span>
                        </span>
                        라고 응답했어요
                    </p>
                </div>
                <div className={`${styles.box_bottom}`}>
                    <div className={`${styles.reply_score_list}`}>
                        <div className={`${styles.reply_score_item} ${styles.pl_0}`}>
                            <div className={`${styles.books_inner}`}>
                                <span className={`${styles.num_score_bar} ${styles.num_score_best}`}>33%
                                </span>
                                <div className={`${styles.average_score_bar} ${styles.average_bar_color}`}>
                                    <span className={`${styles.best_score_bar_inner}`}></span>
                                </div>
                            </div>
                            <p className={`${styles.text_replay}`}>집중돼요</p>
                        </div>
                        <div className={`${styles.reply_score_item} `}>
                            <div className={`${styles.books_inner}`}>
                                <span className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>29%</span>
                                <div className={`${styles.average_score_bar}`}>
                                    <span className={styles.average_score_bar_inner} style={{height: "29%"}}></span>
                                </div>
                            </div>
                            <p className={`${styles.text_gray}`}>도움돼요</p>
                        </div>
                        <div className={`${styles.reply_score_item} `}>
                            <div className={`${styles.books_inner}`}>
                                <span className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>16%</span>
                                <div className={`${styles.average_score_bar}`}>
                                    <span className={styles.average_score_bar_inner} style={{height: "16%"}}></span>
                                </div>
                            </div>
                            <p className={`${styles.text_gray}`}>쉬웠어요</p>
                        </div>
                        <div className={`${styles.reply_score_item} `}>
                            <div className={`${styles.books_inner}`}>
                                <span className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>6%</span>
                                <div className={`${styles.average_score_bar}`}>
                                    <span className={styles.average_score_bar_inner} style={{height: "6%"}}></span>
                                </div>
                            </div>
                            <p className={`${styles.text_gray}`}>최고예요</p>
                        </div>
                        <div className={`${styles.reply_score_item} ${styles.pr0}`}>
                            <div className={`${styles.books_inner}`}>
                                <span className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>15%</span>
                                <div className={`${styles.average_score_bar}`}>
                                    <span className={styles.average_score_bar_inner} style={{height: "15%"}}></span>
                                </div>
                            </div>
                            <p className={`${styles.text_gray}`}>추천해요</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsBox;
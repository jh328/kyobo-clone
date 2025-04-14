import styles from "@/app/detail/[id]/detail.module.css";
import Link from "next/link";

export default function ReviewSection(){
    return (
        <section className={styles.tab_content}>
            <div className={`${styles.mt_70}`}>
                {/*!--> Klover 리뷰 제목*/}
                <div className={`${styles.title_size_md_btn} ${styles.title_wrap}`}>
                    <section>
                        <p className={`${styles.title_heading}`}>Klover 리뷰 (93)</p>
                    </section>
                    <button className={`${styles.btn_size_lg} ${styles.ml6}`}>
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
                            <span className={styles.text}>리뷰작성</span>
                        </button>
                    </div>

                </div>
                {/*!-- // Klover 리뷰 제목*/}

                {/*!--> 사용자 총점 */}
                <div className={`${styles.klover_review_box} ${styles.klover_padding}`}>
                    <div className={`${styles.klover_box_left} ${styles.pl0}`}>
                        <div className={`${styles.box_top}`}>
                            <p className={`${styles.text_user_score}`}>사용자 총점</p>
                            <div className={`${styles.rating_container} ${styles.ml_minus}`}>
                                <div>{/*x*/}</div>
                                <div className={`${styles.rating_stars} ${styles.wh}`}>
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
                                    {/*<span className={`${styles.empty_stars}`}>
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
                                                            </span>*/}
                                </div>
                                <div className={`${styles.caption}`}>
                                                            <span className={`${styles.caption_badge}`}>
                                                                10점 중 9.8점 {/*이게 데이터임.*/}
                                                                <span className={`${styles.caption_val}`}>9.81</span>
                                                                <span className={`${styles.total}`}>10</span>
                                                            </span>
                                </div>
                            </div>
                            <input type="text" className={styles.rating_input}/>
                        </div>
                        <div className={`${styles.box_bottom} ${styles.ml_0}`}>
                            <div className={`${styles.score_bar_wrap}`}>
                                <div
                                    className={`${styles.rating_sm} ${styles.rating_container} `}>
                                    <div title="초기화라고 적혀 있음."></div>
                                    <div className={`${styles.rating_stars} ${styles.w68}`}>
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
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "91%"}}></span>
                                </div>
                                <span className={styles.text_score_bar}>91%</span>{/*실제 데이터*/}
                            </div>
                            <div className={`${styles.score_bar_wrap} ${styles.mt13}`}>
                                <div
                                    className={`${styles.rating_sm} ${styles.rating_container} `}>
                                    <div title="초기화라고 적혀 있음."></div>
                                    <div className={`${styles.rating_stars} ${styles.w68}`}>
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
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "11%"}}></span>
                                </div>
                                <span className={styles.text_score_bar}>7%</span>{/*실제 데이터*/}
                            </div>
                            <div className={`${styles.score_bar_wrap} ${styles.mt13}`}>
                                <div
                                    className={`${styles.rating_sm} ${styles.rating_container} `}>
                                    <div title="초기화라고 적혀 있음."></div>
                                    <div className={`${styles.rating_stars} ${styles.w68}`}>
                                        <span className={`${styles.empty_stars}`}></span>
                                        <span className={`${styles.filled_start}`}
                                              style={{width: "50%"}}>
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
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "1%"}}></span>
                                </div>
                                <span className={styles.text_score_bar}>1%</span>{/*실제 데이터*/}
                            </div>
                            <div className={`${styles.score_bar_wrap} ${styles.mt13}`}>
                                <div
                                    className={`${styles.rating_sm} ${styles.rating_container} `}>
                                    <div title="초기화라고 적혀 있음."></div>
                                    <div className={`${styles.rating_stars} ${styles.w68}`}>
                                        <span className={`${styles.empty_stars}`}></span>
                                        <span className={`${styles.filled_start}`}
                                              style={{width: "25%"}}>
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
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "1%"}}></span>
                                </div>
                                <span className={styles.text_score_bar}>1%</span>{/*실제 데이터*/}
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
                                <div className={`${styles.reply_score_item} ${styles.pl0}`}>
                                    <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.num_score_best}`}>
                                                                    33%
                                                                </span>
                                        <div
                                            className={`${styles.average_score_bar} ${styles.average_bar_color}`}>
                                                                    <span
                                                                        className={`${styles.best_score_bar_inner}`}></span>
                                        </div>
                                    </div>
                                    <p className={`${styles.text_replay}`}>집중돼요</p>
                                </div>
                                <div className={`${styles.reply_score_item} `}>
                                    <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>29%</span>
                                        <div className={`${styles.average_score_bar}`}>
                                                                    <span className={styles.average_score_bar_inner}
                                                                          style={{height: "29%"}}></span>
                                        </div>
                                    </div>
                                    <p className={`${styles.text_gray}`}>도움돼요</p>
                                </div>
                                <div className={`${styles.reply_score_item} `}>
                                    <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>16%</span>
                                        <div className={`${styles.average_score_bar}`}>
                                                                    <span
                                                                        className={styles.average_score_bar_inner}
                                                                        style={{height: "16%"}}></span>
                                        </div>
                                    </div>
                                    <p className={`${styles.text_gray}`}>쉬웠어요</p>
                                </div>
                                <div className={`${styles.reply_score_item} `}>
                                    <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>6%</span>
                                        <div className={`${styles.average_score_bar}`}>
                                                                    <span
                                                                        className={styles.average_score_bar_inner}
                                                                        style={{height: "6%"}}></span>
                                        </div>
                                    </div>
                                    <p className={`${styles.text_gray}`}>최고예요</p>
                                </div>
                                <div className={`${styles.reply_score_item} ${styles.pr0}`}>
                                    <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>15%</span>
                                        <div className={`${styles.average_score_bar}`}>
                                                                    <span
                                                                        className={styles.average_score_bar_inner}
                                                                        style={{height: "15%"}}></span>
                                        </div>
                                    </div>
                                    <p className={`${styles.text_gray}`}>추천해요</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/*!-- //사용자 총점 */}

                {/*리뷰 적을 수 있는 칸 ㅆ비ㅏㄹ..*/}
                <div className={`${styles.tab_wrap}`}>
                    {/*!--> 리뷰 ul 태그*/}
                    <div className={`${styles.tab_list_wrap}`} style={{height: "44px"}}>
                        <ul className={`${styles.tabs} ${styles.tabs_sup}`}>
                            <li className={`${styles.tab_item} ${styles.pl0} ${styles.tab_padding}`}>
                                <button className={`${styles.tab_link}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.review_text}`}>전체 리뷰</span>
                                </button>
                            </li>
                            <li className={`${styles.tab_item} ${styles.tab_padding} ${styles.z_sup}`}>
                                <button className={`${styles.tab_link}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.review_text}`}>구매 리뷰</span>
                                </button>
                            </li>
                            <li className={`${styles.tab_item} ${styles.tab_padding}`}>
                                <button className={`${styles.tab_link}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.review_text}`}>한 달 후 리뷰</span>
                                </button>
                            </li>
                        </ul>
                        <div className={`${styles.tab_review_option}`}>
                            <div className={`${styles.form_sel}`}>
                                {/*<select name="" id="">
                                                            <option value="">좋아요 순</option>
                                                            <option value="">최신 순</option>
                                                        </select>*/}
                                <span style={{width: "100%", height: "38px"}}
                                      className={`${styles.ui_selectmenu_button}`}>
                                                            <span className={`${styles.ui_selectmenu_icon}`}></span>
                                                            <span
                                                                className={`${styles.ui_selectmenu_text}`}>좋아요 순</span>
                                                        </span>
                            </div>
                        </div>
                    </div>
                    {/*!-- //리뷰 ul 태그*/}

                    {/*리뷰 리스트 시작..*/}
                    <div className={`${styles.tab_content}`}>
                        <div className={`${styles.comment_wrap}`}>

                            {/*!--> 리뷰 리스트*/}
                            <div className={`${styles.comment_list} ${styles.bt_no}`}>
                                <div className={`${styles.comment_item}`}>
                                    <div className={`${styles.comment_header}`}>
                                        <div className={`${styles.left_area}`}>
                                            <div className={`${styles.user_info_box}`}>
                                                                        <span
                                                                            className={`${styles.badge_box} ${styles.badge_base}`}>
                                                                            <span
                                                                                className={`${styles.badge_pill} ${styles.badge_class} ${styles.font_xs} ${styles.bl_br} ${styles.text_ex}`}>
                                                                                <span
                                                                                    className={`${styles.ico_wish_base} ${styles.text_wh}`}>종이책</span>
                                                                            </span>
                                                                            <span
                                                                                className={`${styles.badge_pill} ${styles.badge_class} ${styles.badge_line_gray} ${styles.ml6} ${styles.purchaser_text} ${styles.bg_white}`}>
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
                                                                            <button
                                                                                className={`${styles.btn_comment_util}`}>
                                                                                 <span
                                                                                     className={styles.text}>신고/차단</span>
                                                                            </button>
                                                                        </span>
                                            </div>
                                        </div>
                                        <div className={`${styles.review_right_area}`}>
                                            <div className={`${styles.reivew_summary_wrap}`}>
                                                <div
                                                    className={`${styles.rating_sm} ${styles.mt3} ${styles.rating_footer} ${styles.w68}`}>
                                                    <div>{/*초기화*/}</div>
                                                    <div
                                                        className={`${styles.rating_stars} ${styles.z} ${styles.w68}`}>
                                                                                <span
                                                                                    className={`${styles.empty_stars}`}></span>
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
                                                    <div>{/*caption*/}</div>
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
                                    <div className={`${styles.reply_wrap}`}>{/*리플*/}</div>
                                </div>
                            </div>
                            {/*!--> // 리뷰 리스트 */}

                            {/*!--> 페이지네이션*/}
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
                            {/*!--> //페이지네이션*/}
                            <div className={`${styles.no_data}`}></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${styles.product_detail_together}`}></div>
        </section>
    )
}
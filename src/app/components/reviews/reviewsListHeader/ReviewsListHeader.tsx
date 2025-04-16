import styles from "./ReviewsListHeader.module.css";

const ReviewsListHeader = () => {
    return (
        <div className={`${styles.tab_list_wrap} ${styles.h_44}`}>
            <ul className={`${styles.tabs} ${styles.tabs_sup} ${styles.w_664}`}>
                <li className={`${styles.tab_item} ${styles.pl0} ${styles.tab_padding}`}>
                    <button className={`${styles.tab_link}`}>
                        <span className={`${styles.tab_text} ${styles.review_text}`}>전체 리뷰</span>
                    </button>
                </li>
                <li className={`${styles.tab_item} ${styles.tab_padding} ${styles.z_sup}`}>
                    <button className={`${styles.tab_link}`}>
                        <span className={`${styles.tab_text} ${styles.review_text} ${styles.selected_btn}`}>구매 리뷰</span>
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
                    {/*<select name="" id="">
                            <option value="">좋아요 순</option>
                            <option value="">최신 순</option>
                        </select>*/}
                    <span style={{width: "100%", height: "38px"}} className={`${styles.ui_selectmenu_button}`}>
                            <span className={`${styles.ui_selectmenu_icon}`}></span>
                            <span className={`${styles.ui_selectmenu_text}`}>좋아요 순</span>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default ReviewsListHeader;
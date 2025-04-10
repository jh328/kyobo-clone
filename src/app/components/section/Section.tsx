import styles from "./Section.module.css"
import Link from "next/link";

export default function Section() {
    return (
        <div className={styles.welcome_wrap}>
            <div className={styles.contents_inner}>
                <div className={`${styles.part_1} ${styles.welcome_top_grid}`}>
                    <div className={styles.welcome_top_banner}>
                        <div className={`${styles.swiper_container} ${styles.swiper_container_banner}`}>
                            <ul className={`${styles.swiper_wrapper} ${styles.ul_banner}`}
                                style={{transitionDuration: "0", transform: "transform:translate3d(-29370,0,0"}}>
                                <li className={styles.swiper_slide}>
                                    <Link href="" className="">
                                        <div>
                                            <img src="/images/section/section01.jpg" alt="책" className={styles.img_box}
                                                 loading="lazy"/>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className={` ${styles.swiper_auto_control} ${styles.swiper_auto_banner}`}>
                                <button className={`${styles.btn_auto_control} ${styles.btn_left}`}>
                                    <span className={`${styles.ico_swiper_control} ${styles.ico_swiper_btn}`}>
                                        <span className={styles.hidden}>재생</span>
                                    </span>
                                </button>
                                <div className={`${styles.swiper_control_box} ${styles.banner_box}`}>
                                    <button className={`${styles.swiper_button_prev} ${styles.next}`}>
                                        <span className={styles.hidden}>이전</span>
                                    </button>
                                    <div className={`${styles.swiper_pagination} ${styles.pagination}`}>
                                        <span className={styles.swiper_pagination_current}>01</span>
                                        /
                                        <span className={styles.swiper_pagination_total}>33</span>
                                    </div>
                                    <button className={styles.swiper_button_next}>
                                        <span className={styles.hidden}>다음</span>
                                    </button>
                                    <button className={styles.btn_show_all_banner}>전체보기</button>
                                </div>
                            </div>
                            <span className={styles.swiper_notification}></span>
                        </div>
                    </div>
                    <div className={styles.welcome_top_special}>
                        <div className={`${styles.special_container} ${styles.swiper_container_banner}`}>
                            <ul className={styles.special_wrapper}
                                style={{transitionDuration: "0", transform: "translated3d(274px,0,0)"}}>
                                <li style={{width: "274px"}} className={styles.special_slide}>
                                    <Link href="" className={styles.item_area}>
                                        <div className="">
                                            <img src="/images/section/lowest_banner.jpg" alt=""
                                                 className={styles.img_box_special} loading="lazy"/>
                                        </div>
                                        <div className={styles.special_text_box}>
                                            <div className={styles.title}>
                                                오늘만 특가
                                                <br/>
                                                엉금이 디데이 스탑워치
                                            </div>
                                            <div className={styles.desc}>오늘만 이 가격 9,900원</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className={styles.special_control_box}>
                                <button className={styles.special_button_prev}>
                                    <span className={styles.hidden}>이전</span>
                                </button>
                                <div className={styles.special_pagination_a}>
                                    <span className={styles.pagination_current}>01</span>
                                    /
                                    <span className={styles.pagination_total_a}>04</span>
                                </div>
                                <button className={styles.button_next}>
                                    <span className={styles.hidden}>ㄷㅏ음</span>
                                </button>
                            </div>
                            <span className=""></span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.part_2} ${styles.welcome_top_grid}`}>
                    <div className={styles.welcome_arketing_wrap}>
                        <ul className={styles.welcome_marketing_list}>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_01_a02268569d1046d5ae3b8569b4893bba.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>할인혜택</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_02_64cc0909aafa42dfb07ed5ba786d2875.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>오늘만특가</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_03_3097e05a6c804aaf95e5ac16317cff4d.svg"
                                             alt=""/>

                                    </span>
                                    <span className={styles.item_text}>디스커버</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_04_0a2ae2abff884ee6b78437e2aaa8b786.svg"
                                             alt=""/>

                                    </span>
                                    <span className={styles.item_text}>음반.영상</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_05_49332438b774409d9f20bf4a846be7fc.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>바로출판</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_06_38c389abadd8409ab7356a08d73eaa8a.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>이달의 책</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_07_9de19a2c196a45249134c640da579fb9.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>손글씨캠페인</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_08_2c2d5f1900c04cd4bd9a81a0b4d8cb0f.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>Picks</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_09_a3d9d3b714b046278577fdede2372c46.svg"
                                             alt=""/>
                                    </span>
                                    <span className={styles.item_text}>추천</span>
                                </Link>
                            </li>
                            <li className={`${styles.item} ${styles.marketing_item}`}>
                                <Link href="" className={styles.item_a}>
                                    <span className={styles.item_icon}>
                                        <img src="/images/section/PC_QM_10_7604f58055704a0d945335ea2d3d0580.svg"
                                             alt=""/>

                                    </span>
                                    <span className={styles.item_text}>인물&작품</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.welcome_top_ad}>
                        <Link href="">
                            <img src="/images/section/special_banner_ad.jpg" alt="책 특집 보고" className={styles.img_ad_box}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
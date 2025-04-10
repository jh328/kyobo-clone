'use client'

import styles from "./join.module.css"
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function SingUpPage() {

    const router = useRouter();

    const handleSelfJoin = () => {
        router.push("/join/verify/self")
    }


    return (
        <div className={`${styles.wrapper} ${styles.member_login}`}>
            <header className={`${styles.header_wrapper} ${styles.header_wp}`}>
                <div className={styles.header_inner}>
                    <div className={styles.logo_box}>
                        <Link href="/" className={styles.logo_link}>
                            <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="" width="171" height="56"
                                 className={styles.logo_link_img}/> </Link>
                    </div>
                </div>
            </header>
            <main className={styles.container_wrapper}>
                <section className={styles.contents_wrap}>
                    <div className={styles.tab_wrap}>
                        <div className={styles.tab_list_wrap}>
                            <ul className={`${styles.tablist} ${styles.login_tabs} ${styles.ul_helper_reset}`}>
                                <li className={`${styles.tab_item} ${styles.login_tabs_item} ${styles.tabs_mem_corporate} ${styles.tab_member} ${styles.tab_items} ${styles.ui_tabs}`}>
                                    <Link href="" className={styles.tab_link}>
                                        <span className={styles.tab_text}>개인회원</span>
                                    </Link>
                                </li>
                                <li className={styles.tab_corporate}>{/*ml_left login_tabs_item tabs_mem_corporate_member tab_items ui_tabs tab_item 이렇게 사용을 하거나 tab_corporate 이거 하나로 해서 사용해보기  */}
                                    <Link href="" className={styles.tab_link}>
                                        <span className={styles.tab_text}>법인회원</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.tab_content}></div>
                        <div className={styles.tab_content_corporate_member}></div>
                    </div>
                    {/*두번재 div 태그는 개인회원 탭*/}
                    <div className={styles.tab_content}>
                        <div className={styles.member_join_wrap}>
                            <div className={`${styles.btn_wrap} ${styles.justify}`}>
                                <button onClick={handleSelfJoin} className={`${styles.btn_lg} ${styles.btn_primary} ${styles.btn_join}`}>
                                    <span className={styles.text}>회원가입</span>
                                </button>
                                <div className={`${styles.sns_login_box} ${styles.sns_login}`}>
                                </div>
                            </div>
                            <div className={`${styles.sns_login} ${styles.sns_login_box}`}>
                                <ul className={styles.sns_login_list}>
                                    <li className={styles.sns_login_item}>
                                        <Link href="" className={`${styles.btn_sns_login} ${styles.btn_naver}`}>
                                            <span className={styles.hidden}>네이버 로그인</span>
                                        </Link>
                                    </li>
                                    <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                        <button onClick={() => signIn("kakao")} className={`${styles.btn_sns_login} ${styles.btn_kakao}`}>
                                            <span className={styles.hidden}>카카오 회원가입</span>
                                        </button>
                                    </li>
                                    <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                        <Link href="" className={`${styles.btn_sns_login} ${styles.btn_goolge}`}>
                                            <span className={styles.hidden}>구글 로그인</span>
                                        </Link>
                                    </li>
                                    <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                        <Link href="" className={`${styles.btn_apple} ${styles.btn_sns_login}`}>
                                            <span className={styles.hidden}>애플 로그인</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className={`${styles.sns_login_list} ${styles.sns_list_under}`}>
                                    <li className={styles.sns_login_item}>
                                        <Link href="" className={`${styles.btn_mobile} ${styles.btn_sns_login}`}>
                                            <span className={styles.hidden}>전화기 로그인</span>
                                        </Link>
                                    </li>
                                    <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                        <Link href="" className={`${styles.btn_email} ${styles.btn_sns_login}`}>
                                            <span className={styles.hidden}>이메일 로그이</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.login_banner_box} ${styles.hidden}`}></div>
                        <div className={styles.join_benefit_wrap}
                             style={{cursor: "pointer", touchAction: "manipulation"}}>
                            <div className={styles.join_benefit_box_null}>
                                <p className={styles.benefit_title}>신규회원 특별 혜택</p>
                                <div className={styles.benfit_coupon_box}>
                                    <div className={`${styles.coupon_it} ${styles.size_xs}`}>
                                        <div className={styles.coupon_inner}>
                                            <span className={`${styles.left_box} ${styles.left_box_very}`}>
                                                <span className={styles.coupon_logo}>
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className={styles.coupon_img}/>
                                                </span>
                                                <span className={styles.coupon_val}>
                                                    1,000
                                                    <span className={styles.unit}>원</span>
                                                </span>
                                            </span>
                                            <span className={`{styles.right_box} $[styles.right_box_very}`}></span>
                                        </div>
                                    </div>
                                    <div className={`${styles.coupon_it} ${styles.size_xs}`}>
                                        <div className={styles.coupon_inner}>
                                            <span className={`${styles.left_box} ${styles.left_box_very}`}>
                                                <span className={styles.coupon_logo}>
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className={styles.coupon_img}/>
                                                </span>
                                                <span className={styles.coupon_val}>
                                                    1,000
                                                    <span className={styles.unit}>원</span>
                                                </span>
                                            </span>
                                            <span className={`${styles.right_box} ${styles.right_box_very}`}></span>
                                        </div>
                                    </div>
                                    <div className={`${styles.coupon_it} ${styles.size_xs}`}>
                                        <div className={styles.coupon_inner}>
                                            <span className={`${styles.left_box} ${styles.left_box_very}`}>
                                                <span className={styles.coupon_logo}>
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className={styles.coupon_img}/>
                                                </span>
                                                <span className={styles.coupon_val}>
                                                    3,000
                                                    <span className={styles.unit}>원</span>
                                                </span>
                                            </span>
                                            <span className={`${styles.right_box} ${styles.right_box_green}`}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.join_benefit_box}>
                                <p className={styles.benfit_title}>본인인증 추가 혜택</p>
                                <div className={styles.benfit_coupon_box}>
                                    <div className={`${styles.coupon_it} ${styles.size_xs}`}>
                                        <div className={styles.coupon_inner}>
                                            <span className={`${styles.left_box} ${styles.left_box_very}`}>
                                                <span className={styles.coupon_logo}>
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className={styles.coupon_img}/>
                                                </span>
                                                <span className={styles.coupon_val}>
                                                    1,000
                                                    <span className={styles.unit}>원</span>
                                                </span>
                                            </span>
                                            <span className={`${styles.right_box} ${styles.right_box_very}`}></span>
                                        </div>
                                    </div>
                                    <div className={`${styles.coupon_it} ${styles.size_xs}`}>
                                        <div className={styles.coupon_inner}>
                                            <span className={`${styles.left_box} ${styles.left_box_very}`}>
                                                <span className={styles.coupon_logo}>
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className={styles.coupon_img}/>
                                                </span>
                                                <span className={styles.coupon_val}>
                                                    1,000
                                                    <span className={styles.unit}>원</span>
                                                </span>
                                            </span>
                                            <span className={`${styles.right_box} ${styles.right_box_very}`}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*세 번째 div 태그는 법인회원 탭*/}
                    <div className={styles.tab_content}></div>
                </section>
            </main>
            <footer className={styles.footer_wrapper}>
                <div className={styles.footer_inner}>
                    <div className={styles.copyright}>© KYOBO BOOK CENTRE</div>
                </div>
            </footer>
        </div>
    )
};
'use client'
import styles from "./login.module.css"
import Link from "next/link";
import {useUserStore} from "@/app/store/userStore";
import { signIn } from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();
    const {name} = useUserStore();


    return (
        <div className={`${styles.wrapper} ${styles.member_login}`}>
            <header className={styles.header_wrapper}>
                <div className={styles.header_inner}>
                    <div className={styles.logo_box}>
                        <Link href="/" className={styles.logo_link}>
                            <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="교보문고 로고"
                                 className={styles.logo_link_img}/>
                        </Link>
                    </div>
                </div>
            </header>
            <main className={styles.container_wrapper}>
                <section className={`${styles.contents_wrap} ${styles.login}`}>
                    <div className={styles.login_form_wrap} style={{borderBottom: "none"}}>
                        <div className={`${styles.form_com_group} ${styles.valid_check}`}>
                            <div className={`${styles.col_box} ${styles.id}`}>
                                <div className={styles.awesomplete}>
                                    <input type="email" title="아이디입력" className={`${styles.form_ip} ${styles.bblr}`}
                                           placeholder="아이디입력해주세요."/>
                                    <div className={styles.auto_complete_box}>
                                        <div className={styles.custom_scroll_wrap} data-simplebar="init"></div>
                                    </div>
                                    <span className={styles.visually_hidden}></span>
                                </div>
                                <input type="hidden" name="_csrf"/>
                                <span className={`${styles.form_desc} ${styles.tip}`}>아이디를 입력해 주세요.</span>
                            </div>
                            <div className={styles.col_id_pw}>
                                <div className={styles.form_ip_pw}>
                                    <input type="password" className={`${styles.form_ip} ${styles.bblr}`} placeholder="비밀번호를 입력해 주세요."
                                           title="비밀번호 입력"/>
                                    <button className={styles.btn_toggle_pw} type="button">
                                        <span className={styles.hidden}>비밀번호 숨김 상태</span>
                                    </button>
                                </div>
                            </div>
                            <span className={styles.vaild_decs}>아이디를 입력해 주세요.</span>
                        </div>
                        <div className={styles.captch_wrap}></div>
                        <div className={`${styles.btn_wrap_lg} ${styles.justify}`}>
                            <button className={`${styles.btn_lg_a} ${styles.btn_light_gray} ${styles.btn_login} ${styles.btn_justify}`}>
                                <span className={styles.text}>로그인</span>
                            </button>
                        </div>
                        <div className={styles.save_id_box}>
                            <span className={styles.form_chk}>
                                <input type="checkbox"/>
                                <label htmlFor="" className={styles.formSaveId}>
                                    아이디 저장
                                </label>
                            </span>
                            <div className={styles.right_area}>
                                <Link className="" href="">
                                    <span className={styles.btn_text_id_link}>아이디 찾기</span>
                                </Link>
                                <span className={styles.gap}></span>
                                <Link href="" className="">
                                    <span className={styles.btn_text_id_link}>비밀번호 찾기</span>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.sns_login_box}>
                            <ul className={`${styles.sns_login_list}` }>
                                <li className={styles.sns_login_item} >
                                    <button className={`${styles.btn_naver} ${styles.btn_sns_lg} ${styles.btn_sns_login}`}>
                                        <span className={styles.hidden}>네이버 로그인</span>
                                    </button>
                                </li>
                                <li className={`${styles.sns_login_item} ${styles.sns_item_ml} ${styles.pl_0} ${styles.ml_0}`}>
                                    {name ? (
                                        <p>환영합니다, {name}님!</p> // ✅ 로그인된 경우 UI 변경
                                    ) : (
                                        <ul className={`${styles.sns_login_list} ${styles.pl_0}`} style={{width:"50px"}}>
                                            <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                                {/* ✅ 카카오 로그인 버튼 */}
                                                <button onClick={() => signIn("kakao", {callbackUrl:"/"})} className={`${styles.btn_sns_login} ${styles.btn_kakao}`}>
                                                    <span className={styles.hidden}>카카오 로그인</span>
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                    <button className={`${styles.btn_goolge} ${styles.btn_sns_lg} ${styles.btn_sns_login}`}>
                                        <span className={styles.hidden}>구글 로그인</span>
                                    </button>
                                </li>
                                <li className={`${styles.sns_login_item} ${styles.sns_item_ml}`}>
                                    <button className={`${styles.btn_apple} ${styles.btn_sns_lg} ${styles.btn_sns_login}`}>
                                        <span className={styles.hidden}>애플 로그인</span>
                                    </button>
                                </li>
                            </ul>
                           {/* <p className="info_text font_size_xxs">
                                개인정보 보호를 위해 공용 PC에서 사용 시 SNS 계정의 로그아웃
                                <br/>
                                상태를 꼭 확인해 주세요.
                            </p>*/}
                        </div>
                        <div className={styles.join_induce_wrap}>
                            <div className={`${styles.login_banner_box} ${styles.hidden}`}>
                                <Link href="" className={styles.banner_link}>
                                    <span className={styles.hidden}>이거 안해도 됐던거임 하</span>
                                </Link>
                            </div>
                            <div className={`${styles.btn_wrap} ${styles.justify}`}>
                                <Link href="/join" className={styles.btn_lg_join}>
                                    <span className={styles.text}>회원가입</span>
                                </Link>
                            </div>
                            <div className={`${styles.btn_wrap} ${styles.justify}`}>
                                <Link href="" className={`${styles.btn_line_gray} ${styles.btn_wrap_Nonmem}`}>
                                    <span className={styles.text}>비회원 주문조회</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="adv_wrap null 아무 속성 없음. 이건 안해도 되는 것 같음. 다 들어가봐도 화면에 안나옴."></div>
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
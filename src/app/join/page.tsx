'use client'

import "./join.modules.css"
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function SingUpPage() {

    const router = useRouter();

    const handleSelfJoin = () => {
        router.push("/join/verify/self")
    }


    return (
        <div className="wrapper member_login">
            <header className="header_wrapper">
                <div className="header_inner">
                    <div className="logo_box">
                        <Link href="/" className="logo_link">
                            <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="" width="171" height="56"
                                 className="logo_link_img"/> </Link>
                    </div>
                </div>
            </header>
            <main className="container_wrapper">
                <section className="contents_wrap">
                    <div className="tab_wrap">
                        <div className="tab_list_wrap">
                            <ul className="tablist login_tabs ul_helper_reset">
                                <li className="tab_item login_tabs_item tabs_mem_corporate tab_member tab_items ui_tabs">
                                    <Link href="" className="tab_link">
                                        <span className="tab_text">개인회원</span>
                                    </Link>
                                </li>
                                <li className="tab_corporate">{/*ml_left login_tabs_item tabs_mem_corporate_member tab_items ui_tabs tab_item 이렇게 사용을 하거나 tab_corporate 이거 하나로 해서 사용해보기  */}
                                    <Link href="" className="tab_link">
                                        <span className="tab_text">법인회원</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="tab_content"></div>
                        <div className="tab_content_corporate_member"></div>
                    </div>
                    {/*두번재 div 태그는 개인회원 탭*/}
                    <div className="tab_content">
                        <div className="member_join_wrap">
                            <div className="btn_wrap justify">
                                <button onClick={handleSelfJoin} className="btn_lg btn_primary">
                                    <span className="text">회원가입</span>
                                </button>
                                <div className="sns_login_box sns_login">
                                </div>
                            </div>
                            <div className="sns_login sns_login_box">
                                <ul className="sns_login_list">
                                    <li className="sns_login_item">
                                        <Link href="" className="btn_sns_login btn_naver">
                                            <span className="hidden">네이버 로그인</span>
                                        </Link>
                                    </li>
                                    <li className="sns_login_item sns_item_ml">
                                        <button onClick={() => signIn("kakao")} className="btn_sns_login btn_kakao">
                                            <span className="hidden">카카오 회원가입</span>
                                        </button>
                                    </li>
                                    <li className="sns_login_item sns_item_ml">
                                        <Link href="" className="btn_sns_login btn_goolge">
                                            <span className="hidden">구글 로그인</span>
                                        </Link>
                                    </li>
                                    <li className="sns_login_item sns_item_ml">
                                        <Link href="" className="btn_apple btn_sns_login">
                                            <span className="hidden">애플 로그인</span>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="sns_login_list sns_list_under">
                                    <li className="sns_login_item">
                                        <Link href="" className="btn_mobile btn_sns_login">
                                            <span className="hidden">전화기 로그인</span>
                                        </Link>
                                    </li>
                                    <li className="sns_login_item sns_item_ml">
                                        <Link href="" className="btn_email btn_sns_login">
                                            <span className="hidden">이메일 로그이</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="login_banner_box hidden"></div>
                        <div className="join_benefit_wrap"
                             style={{cursor: "pointer", touchAction: "manipulation"}}>
                            <div className="join_benefit_box_null">
                                <p className="benefit_title">신규회원 특별 혜택</p>
                                <div className="benfit_coupon_box">
                                    <div className="coupon_it size_xs">
                                        <div className="coupon_inner">
                                            <span className="left_box left_box_very">
                                                <span className="coupon_logo">
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className="coupon_img"/>
                                                </span>
                                                <span className="coupon_val">
                                                    1,000
                                                    <span className="unit">원</span>
                                                </span>
                                            </span>
                                            <span className="right_box right_box_very"></span>
                                        </div>
                                    </div>
                                    <div className="coupon_it size_xs">
                                        <div className="coupon_inner">
                                            <span className="left_box left_box_very">
                                                <span className="coupon_logo">
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className="coupon_img"/>
                                                </span>
                                                <span className="coupon_val">
                                                    1,000
                                                    <span className="unit">원</span>
                                                </span>
                                            </span>
                                            <span className="right_box right_box_very"></span>
                                        </div>
                                    </div>
                                    <div className="coupon_it size_xs">
                                        <div className="coupon_inner">
                                            <span className="left_box left_box_very">
                                                <span className="coupon_logo">
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className="coupon_img"/>
                                                </span>
                                                <span className="coupon_val">
                                                    3,000
                                                    <span className="unit">원</span>
                                                </span>
                                            </span>
                                            <span className="right_box right_box_green"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="join_benefit_box">
                                <p className="benfit_title">본인인증 추가 혜택</p>
                                <div className="benfit_coupon_box">
                                    <div className="coupon_it size_xs">
                                        <div className="coupon_inner">
                                            <span className="left_box left_box_very">
                                                <span className="coupon_logo">
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className="coupon_img"/>
                                                </span>
                                                <span className="coupon_val">
                                                    1,000
                                                    <span className="unit">원</span>
                                                </span>
                                            </span>
                                            <span className="right_box right_box_very"></span>
                                        </div>
                                    </div>
                                    <div className="coupon_it size_xs">
                                        <div className="coupon_inner">
                                            <span className="left_box left_box_very">
                                                <span className="coupon_logo">
                                                    <img src="/images/common/img_coupon_logo_kyobo_xs@2x.png" alt=""
                                                         className="coupon_img"/>
                                                </span>
                                                <span className="coupon_val">
                                                    1,000
                                                    <span className="unit">원</span>
                                                </span>
                                            </span>
                                            <span className="right_box right_box_very"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*세 번째 div 태그는 법인회원 탭*/}
                    <div className="tab_content"></div>
                </section>
            </main>
            <footer className="footer_wrapper">
                <div className="footer_inner">
                    <div className="copyright">© KYOBO BOOK CENTRE</div>
                </div>
            </footer>
        </div>
    )
};
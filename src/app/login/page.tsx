import "./login.modules.css"
import Link from "next/link";

export default function Page() {
    return (
        <div className="wrapper member_login">
            <header className="header_wrapper">
                <div className="header_inner">
                    <div className="logo_box">
                        <Link href="/" className="logo_link">
                            <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="교보문고 로고"
                                 className="logo_link_img"/>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="container_wrapper">
                <section className="contents_wrap login">
                    <div className="login_form_wrap" style={{borderBottom: "none"}}>
                        <div className="form_com_group valid_check">
                            <div className="col_box id">
                                <div className="awesomplete">
                                    <input type="email" title="아이디입력" className="form_ip bblr"
                                           placeholder="아이디입력해주세요."/>
                                    <div className="auto_complete_box">
                                        <div className="custom_scroll_wrap" data-simplebar="init"></div>
                                    </div>
                                    <span className="visually-hidden"></span>
                                </div>
                                <input type="hidden" name="_csrf"/>
                                <span className="form_desc tip">아이디를 입력해 주세요.</span>
                            </div>
                            <div className="col_id_pw">
                                <div className="form_ip_pw">
                                    <input type="password" className="form_ip bblr" placeholder="비밀번호를 입력해 주세요."
                                           title="비밀번호 입력"/>
                                    <button className="btn_toggle_pw" type="button">
                                        <span className="hidden">비밀번호 숨김 상태</span>
                                    </button>
                                </div>
                            </div>
                            <span className="vaild_decs">아이디를 입력해 주세요.</span>
                        </div>
                        <div className="captch_wrap"></div>
                        <div className="btn_wrap justify">
                            <button className="btn_lg_a btn_light_gray btn_login">
                                <span className="text">로그인</span>
                            </button>
                        </div>
                        <div className="save_id_box">
                            <span className="form_chk">
                                <input type="checkbox"/>
                                <label htmlFor="" className="formSaveId">
                                    아이디 저장
                                </label>
                            </span>
                            <div className="right_area">
                                <Link className="" href="">
                                    <span className="btn_text_id_link">아이디 찾기</span>
                                </Link>
                                <span className="gap"></span>
                                <Link href="" className="">
                                    <span className="btn_text_id_link">비밀번호 찾기</span>
                                </Link>
                            </div>
                        </div>
                        <div className="sns_login_box">
                            <ul className="sns_login_list">
                                <li className="sns_login_item ">
                                    <button className="btn_naver btn_sns_lg btn_sns_login">
                                        <span className="hidden">네이버 로그인</span>
                                    </button>
                                </li>
                                <li className="sns_login_item sns_item_ml">
                                    <button className="btn_kakao btn_sns_lg btn_sns_login">
                                        <span className="hidden">카카오 로그인</span>
                                    </button>
                                </li>
                                <li className="sns_login_item sns_item_ml">
                                    <button className="btn_goolge btn_sns_lg btn_sns_login">
                                        <span className="hidden">구글 로그인</span>
                                    </button>
                                </li>
                                <li className="sns_login_item sns_item_ml">
                                    <button className="btn_apple btn_sns_lg btn_sns_login">
                                        <span className="hidden">애플 로그인</span>
                                    </button>
                                </li>
                            </ul>
                            <p className="info_text font_size_xxs">
                                개인정보 보호를 위해 공용 PC에서 사용 시 SNS 계정의 로그아웃
                                <br/>
                                상태를 꼭 확인해 주세요.
                            </p>
                        </div>
                        <div className="join_induce_wrap">
                            <div className="login_banner_box hidden">
                                <Link href="" className="banner_link">
                                    <span className="hidden">이거 안해도 됐던거임 하</span>
                                </Link>
                            </div>
                            <div className="btn_wrap justify">
                                <Link href="" className="btn_lg_join">
                                    <span className="text">회원가입</span>
                                </Link>
                            </div>
                            <div className="btn_wrap justify">
                                <Link href="" className="btn_line_gray btn_wrap_Nonmem">
                                    <span className="text">비회원 주문조회</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="adv_wrap null 아무 속성 없음. 이건 안해도 되는 것 같음. 다 들어가봐도 화면에 안나옴."></div>
                </section>
            </main>
            <footer></footer>
        </div>
    )
};
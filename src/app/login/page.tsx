import "./login.modules.css"
import Link from "next/link";

export default function Page() {
    return (
        <div className="wrapper_member_login wrapper">
            <header className="header_wrapper">
                <div className="header_inner">
                    <div className="logo_box">
                        <Link href="" className="logo_link">
                            <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="" width="171" height="56"
                                 className="logo_link_img"/>
                        </Link>
                    </div>
                </div>
            </header>
            {/* 컨텐츠 / 로그인 x*/}
            <main className="container_wrapper">
                <section className="contents_wrap">
                    <div className="login_form_wrap">
                        <div className="form_col_group valid_check">
                            <div className="col_box id">
                                <div className="awesomplete">
                                    <input type="email" title="아이디 입력" placeholder="아이디 입력해주세요." className="form_ip bb_ll_radius"/>
                                    <div className="auto_complete_box">
                                        <div className="custom_scroll_wrap data_simplebar">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <span className="visually_hidden"></span>
                                </div>
                                <input type="hidden"/>
                                <span className="form_desc tip">아이디를 입력해 주세요.</span>
                            </div>
                            <div className="col_box pw"></div>
                        </div>
                        <div className="captcha_wrap"></div>
                        <div className="btn_wrap justify"></div>
                        <div className="save_id_box"></div>
                        <div className="sns_login_box"></div>
                        <div className="join_induce_wrap"></div>
                    </div>
                    <div className="adv_wrap"></div>
                </section>
            </main>

            <footer className="footer_wrapper"></footer>
        </div>
    )
};
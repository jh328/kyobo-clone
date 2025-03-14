import "./self.modules.css"
import Link from "next/link";

export default function SelfSignupPage() {
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
                <section className="contents_wrap">
                    <div className="title_wrap title_wrap_has_line title">
                        <p className="title_heading">회원가입</p>
                        <div className="right_area">
                            <ol className="step_round_list">
                                <li className="step_item step_item_active">1</li>
                                <li className="step_item item_two">2</li>
                            </ol>
                        </div>
                    </div>
                    <div className="title_wrap title_mt title">
                        <h2 className="title_heading">본인 인증</h2>
                        <input type="hidden"/>
                    </div>
                    <div className="cert_type_box">
                        <button type="button" className="btn_cert_type">
                            <span className="ico_phone"></span>
                            <span className="text">휴대폰 본인인증</span>
                        </button>
                        <button type="button" className="btn_cert_type">
                            <span className="ico_ipin"></span>
                            <span className="text">아이핀 본인인증</span>
                        </button>
                    </div>
                    <div className="info_text_box">
                        <p className="bul_item_dot font_size_xxs">
                            <span className="fw_medium fc_black">만 14세 미만 가입</span>
                            중 궁금하신 사항은
                            <Link href="" className="fc_black">
                                <span className="fw_medium"> 자주 묻는  질문</span>
                                회원
                            </Link>
                            에서 확인해 주세요.
                        </p>
                        <p className="bul_item_dot font_size_xxs bul_item_ip">
                            본인인증이 잘 되지 않을 경우, 고객센터(1544-1900)나 온라인 1:1 문의를 통해 접수해 주세요.
                            <br/>
                            <Link href="" className="service fw_medium">
                                <span className="text">1:1 문의 바로가기</span>
                                <span className="btn_ico_arrow"></span>
                            </Link>
                        </p>
                    </div>
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
import "./join.modules.css"
import Link from "next/link";

export default function Page() {
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
                </section>
            </main>
            <footer></footer>
        </div>
    )
};
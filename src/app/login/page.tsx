import "./login.modules.css"
import Link from "next/link";

export default function Page() {
    return (
        <div className="wrapper member_login">
            <header className="header_wrapper">
                <div className="header_inner">
                    <div className="logo_box">
                        <Link href="" className="logo_link">
                            <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="교보문고 로고" className="logo_link_img"/>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
};
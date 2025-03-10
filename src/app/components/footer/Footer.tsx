import "./Footer.modules.css"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer_wrapper">
            <div className="footer_header default">
                <div className="footer_inner">
                    <div className="notice_wrap">
                        <span className="notice_text">공지사항</span>
                        <Link href="" className="notice_link">[공지]교보문고 클론코딩 송준한.</Link>
                    </div>
                    <div className="winner notice_wrap"></div>
                </div>
                <div className="welcome_main_service_area"></div>
            </div>
            <div className="footer_body"></div>
        </footer>
    )
};
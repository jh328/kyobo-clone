import SearchHeader from "@/app/components/search_header/search";
import "./Main.modules.css"
import Link from "next/link";

export default function page() {
    return (
        <div className="wrapper">
            <SearchHeader/>
            <main className="container_wrapper my_home">
                <section className="breadcrumb_wrap">
                    <div className="breadcrumb_inner">
                        <ol className="breadcrumb_list">
                            <li className="breadcrumb_item">
                                <Link href="/" className="home_link home_item">HOME</Link>
                            </li>
                            <li className="breadcrumb_item breadcrumb_my">
                                <Link href="/main" className="breadcrumb_mypage">마이</Link>
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="contents_wrap aside">
                    <div className="contents_inner">
                        <aside className="aside_wrap">
                            <div className="body">
                                <div className="my_profifle_area">
                                    <div className="profile_thumb_box">
                                        <Link href="" className="btn_setting">
                                            <div className="thumb_box"></div>
                                            <span className="hidden">프로필 설정 바로기기</span>
                                        </Link>
                                    </div>
                                    <div className="profile_name_box"></div>
                                    <ul className="profile_info_list"></ul>
                                </div>
                                <div className="snb_wrap"></div>
                            </div>
                        </aside>
                        <section className="section_wrap"></section>
                    </div>
                </section>
            </main>
        </div>
    )
};
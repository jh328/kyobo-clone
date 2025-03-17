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
            </main>
        </div>
    )
};
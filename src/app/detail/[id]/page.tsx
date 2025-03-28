'use client'
import styles from './detail.module.css'
import Header from "@/app/components/header/Header";
import Breadcrumb from "@/app/components/breadcrumb/page";
import {books} from "@/app/lib/book";
import {useParams} from "next/navigation";

export default function Detail() {
    const {id} = useParams();
    const book = books.find((b) => b.id === Number(id));

    if (!book) return <div>책을 찾을 수 없습니다.</div>;  // 책이 없을 때 메시지 출력

    return (
        <div className={styles.detail_wrapper}>
            <Header/>
            <main style={{position: "relative"}}>
                <Breadcrumb/>
                <section className={styles.contents_wrap}>
                    <div className={styles.prod_detail_header}>
                        <div className={styles.header_inner}>
                            <div className={styles.detail_title}>
                                <div className={styles.title_area}>
                                    <div className={styles.title_box}>
                                        <div className={styles.overflow_contents}>
                                            <div className={styles.overflow_inner}>
                                                <h1 className={styles.book_title}>
                                                    <span className={styles.prod_title}>{book.title}</span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className={styles.util_btn_box}>
                                        <div className={styles.share_wrap}>
                                            <button className={styles.btn_share}>
                                                <span className={styles.ico_share}></span>
                                                <span className={styles.hidden}>공유</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.pred_desc_area}>
                                        <div className={styles.prod_desc_box}>
                                            <div className={styles.books_comment}>
                                                <div className={styles.books_inner}>
                                                    <span className={styles.prod_desc}>기본기에 충실한 Node</span>
                                                    <span className={styles.gap}>|</span>
                                                    <span className={styles.prod_desc_normal}>3판</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.detail_view}></div>
                        </div>
                    </div>
                    <div className={styles.tab_wrap}></div>
                    <div className={styles.detail_footer}></div>
                </section>
                <div></div>
            </main>
        </div>
    )
}

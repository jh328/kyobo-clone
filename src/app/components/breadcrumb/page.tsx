import Link from "next/link";
import styles from "./breadcrumb.module.css"

export default function Breadcrumb() {
    return (
        <section className={styles.breadcrumb_wrap}>
            <div className={styles.breadcrumb_inner}>
                <ol className={styles.breadcrumb_list}>
                    <li className={styles.breadcrumb_item}>
                        <Link href="/" className={styles.home_link}>Home</Link>
                    </li>
                    <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}>
                        <Link href="" className={styles.btn_sub_depth}>
                            국내도서
                        </Link>
                        <div>패스..</div>
                    </li>
                    <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}>
                        <Link href="" className={styles.btn_sub_depth}>
                            컴퓨터/IT
                        </Link>
                        <div>패스..</div>
                    </li>
                    <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}>
                        <Link href="" className={styles.btn_sub_depth}>
                            웹프로그래밍
                        </Link>
                        <div>패스..</div>
                    </li>
                    <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}>
                        <Link href="" className={styles.btn_sub_depth}>
                            JavaScript
                        </Link>
                        <div>패스..</div>
                    </li>

                </ol>
            </div>
        </section>
    );
};
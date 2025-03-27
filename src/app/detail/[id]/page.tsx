import styles from './detail.module.css'
import Header from "@/app/components/header/Header";

export default function Detail() {
    return (
        <div className={styles.detail_wrapper}>
            <Header/>
            <main style={{position: "relative"}}>
                <section className={styles.breadcrumb_wrap}>
                    <div className={styles.breadcrumb_inner}>
                        <ol className={styles.breadcrumb_list}>
                            <li className={styles.breadcrumb_item}></li>
                            <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}></li>
                            <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}></li>
                            <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}></li>
                            <li className={`${styles.breadcrumb_item} ${styles.item_exception}`}></li>
                        </ol>
                    </div>
                </section>
                <section></section>
                <div></div>
            </main>
        </div>
    )
}

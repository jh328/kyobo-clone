import styles from './detail.module.css'
import Header from "@/app/components/header/Header";
import Link from "next/link";
import Breadcrumb from "@/app/components/breadcrumb/page";

export default function Detail() {
    return (
        <div className={styles.detail_wrapper}>
            <Header/>
            <main style={{position: "relative"}}>
                <Breadcrumb/>
                <section></section>
                <div></div>
            </main>
        </div>
    )
}

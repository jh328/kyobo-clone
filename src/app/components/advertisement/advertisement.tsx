import styles from "./advertisement.module.css"
import Link from "next/link";

export default function Advertisement() {
    return (
        <div className={styles.content_area}>
            <div className={styles.content_inner}>
                <div className={styles.showcase_blurb_wrap}>
                    <div className={styles.showcase_blurb_box}>
                        <Link href="" className={styles.blurb_link}>
                            <img src="/images/advertisment/I_wel_main_right_0308.png" alt="공부 안해서 평생 후회중.." className={styles.blurb_wrap_img}/>
                        </Link>
                    </div>
                    <div className={styles.showcase_blurb_box}>
                        <Link href="" className={styles.blurb_link_ml}>
                            <img src="/images/advertisment/wel_ri.png" alt="대한민국 미래.." className={styles.blurb_wrap_img}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
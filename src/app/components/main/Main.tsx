'use client'
import styles from "./Main.module.css"
import Link from "next/link";
import {books} from "@/app/lib/book";
import {useState} from "react";

export default function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5; // 한 번에 보여줄 책 수

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % books.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
    };

    const currentBook = books[currentIndex];

    return (
        <div className={styles.contents_inner}>
            <div className={styles.title_size_xxl}>
                <h2 className={styles.title_heading}>오늘의 선택</h2>
                <ul className={styles.category_tag_list}>
                    <li className={styles.category_item}>
                        <button className={styles.btn_category}>
                            <span className={styles.text}>전체</span>
                        </button>
                    </li>
                    <li className={styles.category_item}>
                        <button className={styles.btn_category_remain}>
                            <span className={styles.text}>국내도서</span>
                        </button>
                    </li>
                    <li className={styles.category_item}>
                        <button className={styles.btn_category_remain}>
                            <span className={styles.text}>외국도서</span>
                        </button>
                    </li>
                    <li className={styles.category_item}>
                        <button className={styles.btn_category_remain}>
                            <span className={styles.text}>eBook</span>
                        </button>
                    </li>
                    <li className={styles.category_item}>
                        <button className={styles.btn_category_remain}>
                            <span className={styles.text}>sam</span>
                        </button>
                    </li>
                    <li className={styles.category_item}>
                        <button className={styles.btn_category_remain}>
                            <span className={styles.text}>핫트랙스</span>
                        </button>
                    </li>
                    <li className={`${styles.category_item} ${styles.category_item_right}`}>
                        <button className={styles.btn_category_remain}>
                            <span className={styles.text}>교보ONLY</span>
                        </button>
                    </li>
                </ul>
                <div className={styles.right_area}>
                    <Link href="" className={styles.btn_more_plus_text}>
                        <span className={styles.text_plus}>더보기</span>
                        <span className={styles.ico_plus}></span>
                    </Link>
                </div>
            </div>
            <div className={styles.showcase_template_wrap}>
                <div className={styles.template_row}>
                    <div className={styles.template_col}>
                        <div className={styles.expand_related_book_wrap}>
                            <div className={styles.detail_swiper_wrap}>
                                <div className={styles.swiper_container_fade}>
                                    <ul className={styles.main_wrapper}>
                                        <li key={currentBook.id} className={styles.main_li}>
                                            <div className={styles.prod_area_hor_izontal}>
                                                <div className={styles.prod_thumb_box}>
                                                    <Link href={`/detail/${currentBook.id}`} className={styles.prod_link}>
                                                        <span className={styles.prod_img_box}>
                                                                     <img src={currentBook.image}
                                                                          alt={currentBook.title} width={241.43}
                                                                          height={365.38} className={styles.prod_img_box_a}/>

                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className={styles.prod_info_box}>
                                                    <Link href='' className={styles.prod_info_title}>
                                                        <h3 className={styles.prod_name}>{currentBook.title}</h3>
                                                    </Link>
                                                    <span className={styles.prod_author}>{currentBook.author}</span>
                                                    <div className={styles.prod_price}>
                                                        <span className={styles.percent}>10%</span>
                                                        <span className={styles.price}>
                                                            <span className={styles.val}>{currentBook.price}</span>
                                                            <span className={styles.unit}>원</span>
                                                        </span>
                                                    </div>
                                                    <p className={styles.prod_md_comment}>
                                                        {currentBook.comment}
                                                    </p>
                                                    <p className={styles.prod_md_comment_desc}>
                                                        {currentBook.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <span></span>
                                </div>
                            </div>
                            <div className={styles.thumb_swiper_wrap}>
                                <div className={styles.swiper_container_horizontal}>
                                    <ul className={styles.thum_list}>
                                        {books.slice(currentIndex, currentIndex + itemsPerPage).map((book) => (
                                            <li key={book.id} className={styles.thumb_item}>
                                                <div className={styles.thumb_img_box}>
                                                    <Link href="/detail/page">
                                                        <img src={book.image} alt={book.title}
                                                             className={styles.thumb_main_box}/>
                                                    </Link>
                                                </div>
                                                <div className={styles.prod_area}>
                                                    <div className={styles.prod_title}>
                                                        <Link href="" className={styles.prod_info}>
                                                            <span className={styles.prod_book_name}>{book.title}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <span></span>
                                </div>
                            </div>
                            <button onClick={prev} className={styles.main_button_prev}>
                                <span className={styles.hidden}>이전</span>
                            </button>
                            <button onClick={next} className={styles.main_button_next}>
                                <span className={styles.hidden}>다음</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

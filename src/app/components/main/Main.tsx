'use client'
import "./Main.modules.css"
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
        <div className="contents_inner">
            <div className="title_size_xxl">
                <h2 className="title_heading">오늘의 선택</h2>
                <ul className="category_tag_list">
                    <li className="category_item">
                        <button className="btn_category">
                            <span className="text">전체</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">국내도서</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">외국도서</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">eBook</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">sam</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">핫트랙스</span>
                        </button>
                    </li>
                    <li className="category_item category_item_right">
                        <button className="btn_category_remain">
                            <span className="text">교보ONLY</span>
                        </button>
                    </li>
                </ul>
                <div className="right_area">
                    <Link href="" className="btn_more_plus_text">
                        <span className="text_plus">더보기</span>
                        <span className="ico_plus"></span>
                    </Link>
                </div>
            </div>
            <div className="showcase_template_wrap">
                <div className="template_row">
                    <div className="template_col">
                        <div className="expand_related_book_wrap">
                            <div className="detail_swiper_wrap">
                                <div className="swiper_container_fade">
                                    <ul className="main_wrapper">
                                            <li key={currentBook.id} className="main_li">
                                                <div className="prod_area_hor_izontal">
                                                    <div className="prod_thumb_box">
                                                        <Link href="/detail/page" className="prod_link">
                                                        <span className="prod_img_box">
                                                                     <img src={currentBook.image}
                                                                          alt={currentBook.title} width={241.43}
                                                                          height={365.38} className="prod_img_box_a"/>

                                                        </span>
                                                        </Link>
                                                    </div>
                                                    <div className="prod_info_box">
                                                        <Link href='' className="prod_info_title">
                                                            <h3 className="prod_name">{currentBook.title}</h3>
                                                        </Link>
                                                        <span className="prod_author">{currentBook.author}</span>
                                                        <div className="prod_price">
                                                            <span className="percent">10%</span>
                                                            <span className="price">
                                                            <span className="val">{currentBook.price}</span>
                                                            <span className="unit">원</span>
                                                        </span>
                                                        </div>
                                                        <p className="prod_md_comment">
                                                            {currentBook.comment}
                                                        </p>
                                                        <p className="prod_md_comment_desc">
                                                            {currentBook.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                    </ul>
                                    <span></span>
                                </div>
                            </div>
                            <div className="thumb_swiper_wrap">
                                <div className="swiper_container_horizontal">
                                    <ul className="thum_list">
                                        {books.slice(currentIndex, currentIndex + itemsPerPage).map((book) => (
                                            <li key={book.id} className="thumb_item">
                                                <div className="thumb_img_box">
                                                    <Link href="/detail/page">
                                                        <img src={book.image} alt={book.title}
                                                             className="thumb_main_box"/>
                                                    </Link>
                                                </div>
                                                <div className="prod_area">
                                                    <div className="prod_title">
                                                        <Link href="" className="prod_info">
                                                            <span className="prod_book_name">{book.title}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <span></span>
                                </div>
                            </div>
                            <button onClick={prev} className="main_button_prev">
                                <span className="hidden">이전</span>
                            </button>
                            <button onClick={next} className="main_button_next">
                                <span className="hidden">다음</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
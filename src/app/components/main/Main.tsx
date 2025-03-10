import "./Main.modules.css"
import Link from "next/link";

export default function Main() {
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
                                        <li className="main_li">
                                            <div className="prod_area_hor_izontal">
                                                <div className="prod_thumb_box">
                                                    <Link href="" className="prod_link">
                                                        <span className="prod_img_box">
                                                            <img src="/images/main/9788932043500.jpg" alt=""
                                                                 className="prod_img_box_a"/>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="prod_info_box">
                                                    <Link href="" className="prod_info_title">
                                                        <h3 className="prod_name">[소셜] 봄밤의 모든 것</h3>
                                                    </Link>
                                                    <span className="prod_author">백수린.문학과지성사</span>
                                                    <div className="prod_price">
                                                        <span className="percent">10%</span>
                                                        <span className="price">
                                                            <span className="val">15,300</span>
                                                            <span className="unit">원</span>
                                                        </span>
                                                    </div>
                                                    <p className="prod_md_comment">
                                                        "'젊은 거장' 백수린의 네 번째 소설집"
                                                    </p>
                                                    <p className="prod_md_comment_desc">
                                                        섬세하고 사려 깊은 시선, 우아하고 단정한 문장으로 고유의 문학을 구축한 백수린 신작 소설집. 절망 속 한 줌의
                                                        빛을 그린 일곱 편의 이야기가 우리를 위로한다.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <span></span>
                                </div>
                            </div>
                            <div className="thumb_swiper_wrap"></div>
                            <button className=""></button>
                            <button className=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
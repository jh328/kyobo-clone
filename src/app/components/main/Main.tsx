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
                                                            <img src="/images/main/9788932043500.jpg" alt="" className="prod_img_box_a"/>
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="prod_info_box"></div>
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
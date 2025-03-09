import "./Section.modules.css"
import Link from "next/link";

export default function Section() {
    return (
        <div className="welcome_wrap">
            <div className="contents_inner">
                <div className="part_1 welcome_top_grid">
                    <div className="welcome_top_banner">
                        <div className="swiper_container swiper-container_banner">
                            <ul className="swiper_wrapper ul_banner"
                                style={{transitionDuration: "0", transform: "transform:translate3d(-29370,0,0"}}>
                                <li className="swiper_slide">
                                    <Link href="" className="">
                                        <div>
                                            <img src="/images/section/section01.jpg" alt="책" className="img_box"
                                                 loading="lazy"/>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className="swiper_auto_control swiper_auto_banner">
                                <button className="btn_auto_control btn_left">
                                    <span className="ico_swiper_control ico_swiper_btn">
                                        <span className="hidden">재생</span>
                                    </span>
                                </button>
                                <div className="swiper_control_box banner_box">
                                    <button className="swiper_button_prev next">
                                        <span className="hidden">이전</span>
                                    </button>
                                    <div className="swiper_pagination pagination">
                                        <span className="swiper_pagination_current">01</span>
                                        /
                                        <span className="swiper_pagination_total">33</span>
                                    </div>
                                    <button className="swiper_button_next">
                                        <span className="hidden">다음</span>
                                    </button>
                                    <button className="btn_show_all_banner">전체보기</button>
                                </div>
                            </div>
                            <span className="swiper_notification"></span>
                        </div>
                    </div>
                    <div className="welcome_top_special">
                        <div className="special_container swiper-container_banner">
                            <ul className="special_wrapper"
                                style={{transitionDuration: "0", transform: "translated3d(274px,0,0)"}}>
                                <li style={{width: "274px"}} className="special_slide">
                                    <Link href="" className="item_area">
                                        <div className="">
                                            <img src="/images/section/lowest_banner.jpg" alt=""
                                                 className="img_box_special" loading="lazy"/>
                                        </div>
                                        <div className="special_text_box">
                                            <div className="title">
                                                오늘만 특가
                                                <br/>
                                                엉금이 디데이 스탑워치
                                            </div>
                                            <div className="desc">오늘만 이 가격 9,900원</div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <div className="special_control_box">
                                <button className="special_button_prev">
                                    <span className="hidden">이전</span>
                                </button>
                                <div className="special_pagination">

                                </div>
                                <button></button>
                            </div>
                            <span className=""></span>
                        </div>
                    </div>
                </div>
                <div className="part_2 welcome_top_grid">
                    <div className="welcome_arketing_wrap">
                        <ul className="welcome_marketing_list">
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_01_a02268569d1046d5ae3b8569b4893bba.svg"
                                             alt=""/>
                                    </span>
                                    <span className="item_text">할인혜택</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_02_64cc0909aafa42dfb07ed5ba786d2875.svg"
                                             alt=""/>
                                    </span>
                                    <span className="item_text">오늘만특가</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_03_3097e05a6c804aaf95e5ac16317cff4d.svg"
                                             alt=""/>

                                    </span>
                                    <span className="item_text">디스커버</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_04_0a2ae2abff884ee6b78437e2aaa8b786.svg"
                                             alt=""/>

                                    </span>
                                    <span className="item_text">음반.영상</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_05_49332438b774409d9f20bf4a846be7fc.svg"
                                             alt=""/>
                                    </span>
                                    <span className="item_text">바로출판</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_06_38c389abadd8409ab7356a08d73eaa8a.svg"
                                             alt=""/>
                                    </span>
                                    <span className="item_text">이달의 책</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_07_9de19a2c196a45249134c640da579fb9.svg"
                                             alt=""/>

                                    </span>
                                    <span className="item_text">손글씨캠페인</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_08_2c2d5f1900c04cd4bd9a81a0b4d8cb0f.svg"
                                             alt=""/>
                                    </span>
                                    <span className="item_text">Picks</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_09_a3d9d3b714b046278577fdede2372c46.svg"
                                             alt=""/>

                                    </span>
                                    <span className="item_text">추천</span>
                                </Link>
                            </li>
                            <li className="item marketing_item">
                                <Link href="" className="item_a">
                                    <span className="item_icon">
                                        <img src="/images/section/PC_QM_10_7604f58055704a0d945335ea2d3d0580.svg"
                                             alt=""/>

                                    </span>
                                    <span className="item_text">인물&작품</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="welcome_top_ad">
                        <Link href="">
                            <img src="/images/section/special_banner_ad.jpg" alt="책 특집 보고" className="img_ad_box"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
'use client'
import "./Header.modules.css"
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

export default function Header() {
    const {data: session} = useSession();
    return (
        <header className="header-wrapper">
            <div className="service_mall_wrap">
                <div className="service_mall_inner inner_left">
                    <div className="service_mall_box">
                        <ul className="service_mall_list">
                            <li className="service_mall_item">
                                <Link href="" className="tab_a first_tab tab">교보문고</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link href="" className="tab_b ebook tab_Long">eBook</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link href="" className="tab_b e sam tab_Long">sam</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link href="" className="tab_b hot tab_Long">핫트랙스</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link href="" className="tab_b story tab_Long">스토리</Link>
                            </li>
                            <li className="service_mall_item">
                                <button className="btn_brand_more">
                                    <span className="text">브랜드 더보기</span>
                                </button>
                                <div className="brand_more_list_box" style={{width: "114"}}></div>
                            </li>
                        </ul>
                    </div>
                    <div className="customer_service_box box-ml0">
                        <ul className="customer_service_list">
                            {!session && (
                                <li className="customer_service_item_rg">
                                    <Link href="/join" className="customer_service_link">회원가입</Link>
                                </li>
                            )}
                            <li className="customer_service_item">
                                {session ? (
                                    <button onClick={() => signOut()}
                                            className="customer_service_link">
                                        로그아웃
                                    </button>
                                ) : <Link href="/login" className="customer_service_link">로그인</Link>
                                }
                            </li>
                            <li className="customer_service_item">
                                <button className="btn_member_benefit">
                                    <span className="text">회원혜택</span>
                                </button>
                                <ul>나중에하기</ul>
                            </li>
                            <li className="customer_service_item">
                                <Link href="" className="customer_service_link">주문배송</Link>
                            </li>
                            <li className="customer_service_item">
                                <Link href="" className="customer_service_link">매장안내</Link>
                            </li>
                            <li className="customer_service_item">
                                <Link href="" className="customer_service_link">고객센터</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header_inner">
                <div className="gnb_search_wrap">
                    <div className="logo_box">
                        <Link href="" className="logo_box_dis logo_link_book">
                            <span className="hidden">교보문고</span>
                        </Link>
                    </div>
                    <div className="gnb_search_box">
                        <div className="form_sel">
                            <span className="ui_selectmenu_button ui_button" style={{position: "relative"}}>
                                <span className="ui_selectmenu_icon"></span>
                                <span className="ui_selectmenu_text">통합검색</span>
                                <div className="resize_sensor 나중에하기"></div>
                            </span>
                        </div>
                        <div className="search_input_wrap">
                            <input type="text" placeholder="검색어를 입력해주세요." className="ip_gnb_search"/>
                        </div>
                        <Link href="" className="btn_gnb_search"></Link>
                    </div>
                    <ul className="user_menu_list">
                        <li className="user_menu_item_cash user_menu_item">
                            <Link href="" className="user_menu_link">
                                <span className="hidden">e캐시</span>
                            </Link>
                        </li>
                        <li className="user_menu_item cart">
                            <Link href="" className="cart_link">
                                <span className="hidden">장바구니</span>
                                <span className="hidden">카드 사이즈 값 주기 꼭 </span>
                            </Link>
                        </li>
                        <li className="user_menu_item my">
                            {!session ? (
                                <Link href="/login" className="user_link"></Link>
                            ) : (
                                <Link href="/mypage" className="user_link">
                                    <span></span>
                                    <span className="hidden">마페</span>
                                </Link>
                            )}
                        </li>
                    </ul>
                    <div className="auto_complte~~~이거는 안해도 될듯 마우스 갖다대면, 화면 요소에 안나옴"></div>
                </div>
                <nav className="gnb_wrap">
                    <div className="anb_wrap">
                        <button className="btn_anb">
                            <span className="hidden">전체</span>
                        </button>
                        <div className="anb_area 패스 마우스 클릭 하면 안나옴."></div>
                    </div>
                    <ul className="gnb_list">
                        <li className="gnb_item gnb_item_book">
                            <Link href="" className="gnb_link">
                                <em className="em-green">책!책!책!</em>
                                <span className="ico_new">
                                    <span className="hidden">추첸</span>
                                </span>
                            </Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">
                                <em className="em-green">신학기혜택</em>
                                <span className="ico_new">
                                    <span className="hidden">추천</span>
                                </span>
                            </Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">베스트</Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">신상품</Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">이벤트</Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">바로펀딩</Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">PICKS</Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">CASTing</Link>
                        </li>
                        <li className="gnb_item">
                            <Link href="" className="gnb_link">컬처라운지</Link>
                        </li>
                        <li className="gnb_item more_service">
                            <button className="btn_more_service">
                                <span className="hidden">서비스 더보기 =</span>
                            </button>
                            <ul className="more_service_list"></ul>
                        </li>
                    </ul>
                    <ul className="gnb_sub_list">
                        <li className="today_mission">
                            <span className="tip_wrap">
                                <Link href="" className="tip">
                                    <span className="icon_logo">
                                        <img
                                            src="/images/header/오늘의미션GNB광고_i_45_45_af887b6680b1472489db9edebd2b1c51.jpg"
                                            alt="책" className="mission"/>
                                    </span>
                                    <span className="content">
                                        <b>책책책 특집 보고</b>
                                        <span className="icon_ad">AD</span>
                                        <div className="desc">선착순 교환권 받기 </div>
                                    </span>
                                </Link>
                                <Link href="" className="gnb_sub_link">오늘의 미션</Link>
                            </span>
                        </li>
                        <li className="gnb_sub_item ">
                            <Link href="" className="gnb_sub_link">할인혜택</Link>
                        </li>
                    </ul>
                    <div className="curtain_banner_wrap">
                        <button className="btn_curtain_expand">
                            <span className="text_box">
                                드디어 책책책 공개!
                            </span>
                        </button>
                        <div className="curtain_banner_box 값 안나오는거 숙제로하기"></div>
                    </div>
                </nav>
            </div>
        </header>
    )

}
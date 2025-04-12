'use client'
import styles from "./search.module.css"
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

export default function SearchHeader() {
    const {data: session} = useSession();
    return (
        <header className={styles.header_wrapper}>
            <div className={styles.service_mall_wrap}>
                <div className={`${styles.service_mall_inner} ${styles.inner_left}`}>
                    <div className={styles.service_mall_box}>
                        <ul className={styles.service_mall_list}>
                            <li className={styles.service_mall_item}>
                                <Link href="" className={`${styles.tab_a} ${styles.first_tab} ${styles.tab}`}>교보문고</Link>
                            </li>
                            <li className={styles.service_mall_item}>
                                <Link href="" className={`${styles.tab_b} ${styles.ebook} ${styles.tab_Long}`}>eBook</Link>
                            </li>
                            <li className={styles.service_mall_item}>
                                <Link href="" className={`${styles.tab_b} ${styles.sam} ${styles.tab_Long}`}>sam</Link>
                            </li>
                            <li className={styles.service_mall_item}>
                                <Link href="" className={`${styles.tab_b} ${styles.hot} ${styles.tab_Long}`}>핫트랙스</Link>
                            </li>
                            <li className={styles.service_mall_item}>
                                <Link href="" className={`${styles.tab_b} ${styles.story} ${styles.tab_Long}`}>스토리</Link>
                            </li>
                            <li className={styles.service_mall_item}>
                                <button className={styles.btn_brand_more}>
                                    <span className={styles.text}>브랜드 더보기</span>
                                </button>
                                <div className={styles.brand_more_list_box} style={{width: "114"}}></div>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.customer_service_box} ${styles.box_ml0}`}>
                        <ul className={styles.customer_service_list}>
                            {!session && (
                                <li className={styles.customer_service_item_rg}>
                                    <Link href="/join" className={styles.customer_service_link}>회원가입</Link>
                                </li>
                            )}
                            <li className={styles.customer_service_item}>
                                {session ? (
                                    <button onClick={() => signOut()}
                                            className={styles.customer_service_link}>
                                        로그아웃
                                    </button>
                                ) : <Link href="/login" className={styles.customer_service_link}>로그인</Link>
                                }
                            </li>
                            <li className={styles.customer_service_item}>
                                <button className={styles.btn_member_benefit}>
                                    <span className="text">회원혜택</span>
                                </button>
                                <ul>나중에하기</ul>
                            </li>
                            <li className={styles.customer_service_item}>
                                <Link href="" className={styles.customer_service_link}>주문배송</Link>
                            </li>
                            <li className={styles.customer_service_item}>
                                <Link href="" className={styles.customer_service_link}>매장안내</Link>
                            </li>
                            <li className={styles.customer_service_item}>
                                <Link href="" className={styles.customer_service_link}>고객센터</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.header_inner}>
                <div className={styles.gnb_search_wrap}>
                    <div className={styles.logo_box}>
                        <Link href="/" className={`${styles.logo_box_dis} ${styles.logo_link_book}`}>
                            <span className={styles.hidden}>교보문고</span>
                        </Link>
                    </div>
                    <div className={styles.gnb_search_box}>
                        <div className={styles.form_sel}>
                            <span className={`${styles.ui_selectmenu_button} ${styles.ui_button}`} style={{position: "relative"}}>
                                <span className={styles.ui_selectmenu_icon}></span>
                                <span className={styles.ui_selectmenu_text}>통합검색</span>
                                <div className="resize_sensor 나중에하기"></div>
                            </span>
                        </div>
                        <div className={styles.search_input_wrap}>
                            <input type="text" placeholder="검색어를 입력해주세요." className={styles.ip_gnb_search}/>
                        </div>
                        <Link href="" className={styles.btn_gnb_search}></Link>
                    </div>
                    <ul className={styles.user_menu_list}>
                        <li className={`${styles.user_menu_item_cash} ${styles.user_menu_item}`}>
                            <Link href="" className={styles.user_menu_link}>
                                <span className={styles.hidden}>e캐시</span>
                            </Link>
                        </li>
                        <li className={`${styles.user_menu_item} ${styles.cart}`}>
                            <Link href="/cart" className={styles.cart_link}>
                                <span className={styles.hidden}>장바구니</span>
                                <span className={styles.hidden}>카드 사이즈 값 주기 꼭 </span>
                            </Link>
                        </li>
                        <li className={`${styles.user_menu_item} ${styles.my}`}>
                            <Link href="/mypage" className={styles.user_link}>
                                <span></span>
                                <span className={styles.hidden}>마페</span>
                            </Link>
                        </li>
                    </ul>
                </div>
               {/* <nav className="gnb_wrap">
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
                </nav>*/}
            </div>
        </header>
    )

}
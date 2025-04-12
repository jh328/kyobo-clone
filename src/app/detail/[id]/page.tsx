'use client'

import styles from './detail.module.css'
import Header from "@/app/components/header/Header";
import Breadcrumb from "@/app/components/breadcrumb/page";
import {books} from "@/app/lib/book";
import {useParams} from "next/navigation";
import Link from "next/link";
import {formatPrice} from "@/utils/format";
import {useRef, useState} from "react";
import ReviewModal from "@/app/components/modals/ReviewModal/ReviewModal";
import GenericModal from "@/app/components/modals/GenericModal";
import {useRouter} from 'next/navigation'
import {useSession} from "next-auth/react";
import ToastNotification from "@/app/components/toast/ToastNotification";

export default function Detail() {
    const router = useRouter();
    const {data: session} = useSession();

    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showCartModal, setShowCartModal] = useState(false);

    /* 로그인 하라고 알려주는 모달 */
    const [isWished, setIsWished] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastText, setToastText] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);

    const checkLogin = () => {
        if (!session) {
            setShowLoginModal(true);
            return false; /*리턴값을 주는데 여기에서 왜 false를 주는거지? */
        }
        return true;
    }

    const toggleWish = () => {
        const newWish = !isWished;
        setIsWished(newWish);
        setToastText(newWish ? "찜 설정되었어요." : "찜 해제되었어요.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    }

    const handleWishClick = () => {
        if (!checkLogin()) return;
        toggleWish();
    };

    /*scroll event*/
    const eventRef = {
        event: useRef<HTMLDivElement>(null),
        info: useRef<HTMLDivElement>(null),
        review: useRef<HTMLDivElement>(null),
        exchange: useRef<HTMLDivElement>(null),
    };


    /*quantity*/
    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

    const {id} = useParams();
    const book = books.find((b) => b.id === Number(id));


    if (!book) return <div>책을 찾을 수 없습니다.</div>;  // 책이 없을 때 메시지 출력

    const discountedPrice = book.price * (1 - book.discount / 100);


    const handleScroll = (key: keyof typeof eventRef) => {
        eventRef[key].current?.scrollIntoView({behavior: "smooth"});
    }


    return (
        <div className={styles.detail_wrapper}>
            <Header/>
            <main style={{position: "relative"}}>
                <Breadcrumb/>
                <section className={styles.contents_wrap}>
                    <div className={styles.prod_detail_header}>
                        <div className={styles.header_inner}>
                            <div className={styles.detail_title}>
                                <div className={styles.title_area}>
                                    <div className={styles.title_box}>
                                        <div className={styles.overflow_contents}>
                                            <div className={styles.overflow_inner}>
                                                <h1 className={styles.book_title}>
                                                    <span className={styles.prod_title}>{book.title}</span>
                                                </h1>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className={styles.util_btn_box}>
                                        <div className={styles.share_wrap}>
                                            <button className={styles.btn_share}>
                                                <span className={styles.ico_share}></span>
                                                <span className={styles.hidden}>공유</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.pred_desc_area}>
                                        <div className={styles.prod_desc_box}>
                                            <div className={styles.books_comment}>
                                                <div className={styles.books_inner}>
                                                    <span className={styles.prod_desc}>기본기에 충실한 Node</span>
                                                    <span className={styles.gap}>|</span>
                                                    <span className={styles.prod_desc_normal}>3판</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.detail_view}>
                                <div className={styles.type_area}>
                                    <div className={styles.type_list}>
                                        <ul className={styles.type_ko_el}>
                                            <li className={`${styles.paper_book} ${styles.book_select}`}>
                                                <Link href=""
                                                      className={`${styles.btn_prod_type} ${styles.btn_col}`}>
                                                    <span
                                                        className={`${styles.prod_type} ${styles.select_title}`}>국내도서</span>
                                                    <span
                                                        className={`${styles.prod_price}  ${styles.book_price}`}>

                                                       {formatPrice(discountedPrice)}원
                                                    </span>
                                                </Link>
                                            </li>
                                            {/*book_select 이거 밑에 ebook에도 들어가는거 조건문으로 css 조절 해야함. */}
                                            <li className={styles.paper_book}>
                                                <Link href=""
                                                      className={`${styles.btn_prod_type} ${styles.un_select}`}>
                                                    <span className={styles.no_select_title}>eBook</span>
                                                    <span className={styles.book_price}>
                                                        {formatPrice(book.price)}원
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.view_area}>
                                    <div className={styles.prod_info}>
                                        <div className={styles.info_wrap}>
                                            <div className={styles.prod_autor}>
                                                <div className={styles.auto_overflow}>
                                                    <div>
                                                        <div className={styles.author}>
                                                            <Link href="">{book.author}</Link>
                                                            &nbsp; 저자(글)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.publish_date} ${styles.prod_text}`}>
                                                <Link href="" className={styles.btn_link}>{book.period}</Link>
                                            </div>
                                            <div className={styles.best_box}>
                                                <Link href="" className={styles.best_link}>
                                                    <div className={styles.best_title}>
                                                        <span className={styles.text}>주간베스트</span>
                                                    </div>
                                                    <div className={styles.best_text}>
                                                        컴퓨터/IT
                                                        <span className={styles.rank}>427</span>
                                                        위
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={`${styles.prod_text} ${styles.publish_date}`}>
                                                가장 최근에 출시된 개정판입니다.
                                                <Link href="" className={styles.btn_line_gray}>
                                                    <span className={styles.text}>구판보기</span>
                                                    <span className={styles.ico_arw}></span>
                                                </Link>
                                            </div>
                                            <div className={styles.review_box}>
                                                <div className={`${styles.col_review} ${styles.no_before} `}>
                                                    <span
                                                        className={`${styles.review_score} ${styles.lucky}`}>10.0</span>
                                                    <div className={styles.rating_container}>
                                                        <div></div>
                                                        <div className={styles.rating_stars}>
                                                            <span></span>
                                                            <span className={styles.filled_start}>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                    {/*<input type="text"/>*/}
                                                    <span className={styles.review_desc}>
                                                        (
                                                        <span className={styles.val}>24</span>
                                                        개의 리뷰)
                                                    </span>
                                                </div>
                                                <div className={styles.col_review}>
                                                    <span className={styles.review_quoter_text}>
                                                        도움돼요
                                                    </span>
                                                    <span className={styles.review_desc}>
                                                        (
                                                        <span className={styles.val}>38%</span>
                                                        의 구매자)
                                                    </span>
                                                </div>
                                                <button className={styles.btn_go_review}></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.prod_ml} ${styles.prod_middle}`}>
                                        <div className={styles.prod_thumb_swiper}>
                                            <div className={styles.swiper_container}>
                                                <ul className={styles.swiper_wrapper}>
                                                    <li className={styles.prod_thumb_item}>
                                                        <div className={styles.blur_img_wrap}>
                                                            <div className={styles.portrait_img_box}>
                                                                <img src="/images/book/javaScriptDeepDive.jpg" alt=""
                                                                     className={styles.books_img}/>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/*li 4개이고, prod_thumbItem 속성 4개 다 들어감. */}
                                                </ul>
                                            </div>
                                            <div className={styles.swiper_control_box}>
                                                <button className={`${styles.button_prev} ${styles.btn_prev}`}>
                                                    <span className={styles.hidden}>이전</span>
                                                </button>
                                                <div className={styles.swiper_pagination}>
                                                    <span className={styles.pagination_current}>01</span>
                                                    /
                                                    <span className={styles.pagination_total}>04</span>
                                                </div>
                                                <button className={styles.button_next}></button>
                                            </div>
                                        </div>
                                        <div className={styles.btn_wrap}>
                                            <button className={`${styles.btn_xs} ${styles.btn_pill}`}>
                                                <span className={styles.ico_preview}></span>
                                                <span className={styles.text}>미리보기</span>
                                            </button>

                                            <button className={`${styles.btn_xs} ${styles.btn_pill} ${styles.mb} `}>
                                                <span className={styles.ico_ebook_preview}></span>
                                                <span className={styles.text}>eBook 미리보기</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={`${styles.prod_ml} ${styles.prod_info}`}>{/*여기 태그가 책 가격, 오른쪽 값 */}
                                        <div className={`${styles.pord_brea}`}>
                                            <div className={styles.badge_list_box}>
                                                <span className={`${styles.badge_md} ${styles.badge_pr}`}>
                                                    <span className={styles['badge-text']}>MD의 선택</span>
                                                </span>
                                                <span
                                                    className={`${styles.badge_md} ${styles.badge_gray} ${styles['badge-text']}`}>무료배송</span>
                                                <span
                                                    className={`${styles.badge_md} ${styles.badge_gray} ${styles['badge-text']}`}>소득공제</span>
                                            </div>
                                            <div className={styles.prod_price_box}>
                                                <div className={styles.books_price}>
                                                    <span className={styles.percent}>10%</span>
                                                    <span className={styles.price}>
                                                        <span className={styles.books_val}>
                                                            {formatPrice(discountedPrice)}
                                                            <span className={styles.unit}>원</span></span>
                                                    </span>
                                                    <span className={styles.sale_price}>
                                                        <span
                                                            className={styles.cancellationLine}>{formatPrice(book.price)}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.pord_brea} ${styles.prod_guide}`}>
                                            <div className={styles.prod_guide_box}>
                                                <div className={styles.prod_guide_row}>
                                                    <div className={styles.prod_guide_title}>적립/혜택</div>
                                                    <div className={styles.prod_guide_cont}>
                                                        <div className={styles.point_text}>
                                                            {formatPrice(book.accumulation)}P
                                                            <div className={`${styles.tooltip_wrap} ${styles.tool_ml}`}>
                                                                <button type="button" className={styles.btn_tooltip}>
                                                                    <span className={styles.ico_arw}></span>
                                                                    <span className={styles.hidden}>툴팁여는 버튼</span>
                                                                </button>
                                                                <div>{/*tooltip_inner*/}</div>
                                                                {/*버튼 누르면 나오는 값*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.prod_guide_box} ${styles.box_line}`}>
                                                <div className={styles.prod_guide_row}>
                                                    <div className={styles.prod_guide_title}>배송안내</div>
                                                    <div className={styles.prod_guide_cont}>
                                                        <div className={styles.delivery_guide_text}>
                                                            <span className={styles.delivery_type}>무료배송</span>
                                                            <div className={`${styles.type_sm} ${styles.tooltip_wrap}`}>
                                                                <button type="button" className={styles.btn_tooltip}>
                                                                    <span className={styles.ico_info}></span>
                                                                    <span className={styles.hidden}>툴틸열기</span>
                                                                </button>
                                                                <div>{/*tooltip_inner*/}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.prod_guide_row} ${styles.guide_row_mt}`}>
                                                    <div className={styles.prod_guide_cont}>
                                                        <div className={styles.delivery_guide_text}>
                                                            <span
                                                                className={`${styles.badge_deli} ${styles.badge_sm} ${styles.badge_pill} ${styles.badge}`}>
                                                                <span className={styles.deli_text}>새벽배송</span>
                                                            </span>
                                                            <span>
                                                                <span><strong className={styles.blue}>내일(4/2, 수 오전 7시 전) 도착</strong></span>
                                                            </span>
                                                            <button type="button" className={styles.btn_info_popup}>
                                                                <span className={styles.ico_question}></span>
                                                                <span className={styles.hidden}>팝업열기</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.prod_guide_row} ${styles.guide_row_mt}`}>
                                                    <div className={styles.prod_guide_cont}>
                                                        <div className={styles.delivery_guide_text}>
                                                            <span className={styles.fc_gray}>기본배송지 기준</span>
                                                            <div
                                                                className={`${styles.type_sm} ${styles.tooltip_wrap} ${styles.sm_he}`}>
                                                                <button className={styles.btn_tooltip}>
                                                                    <span className={styles.ico_question}></span>
                                                                    <span className={styles.hidden}>팝업열기</span>
                                                                </button>
                                                                <div>{/*tooltip_inner*/}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.prod_guide_row} ${styles.guide_row_mt} ${styles.nonmember}`}>
                                                    <div className={styles.prod_guide_cont}>
                                                        <div className={styles.prod_info_text}>
                                                            <Link href="/login"
                                                                  className={`${styles.point_text} ${styles.text_link}`}>
                                                                <span className={styles.login_text}>로그인</span>
                                                            </Link>
                                                            &nbsp; 후 &nbsp;
                                                            <strong>정확한 배송 안내</strong>
                                                            를 받아보세요!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`${styles.prod_guide_row} ${styles.guide_row_mt}`}>
                                                    <div className={styles.prod_guide_cont}>
                                                        <div className={styles.info_text}>
                                                            <span className={styles.flower_info_flex}>
                                                                <p className={styles.flower_text}>이달의 꽃과 함께 책을 받아보세요!</p>
                                                                <button type="button" className={styles.btn_xxs}>
                                                                    <span className={styles.fw_medium}>자세히보기</span>
                                                                    <span className={styles.ico_more}></span>
                                                                </button>
                                                            </span>
                                                            <p className={styles.bul_item_dot}>
                                                                1권 구매 시 결제 단계에서 적용 가능합니다.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.pord_brea} ${styles.alarm_apply}`}></div>
                                        <div className={`${styles.pord_brea} ${styles.overlap}`}>
                                            <button type="button" className={styles.btn_sm}>
                                                <span className={styles.ico_locate}></span>
                                                <span className={styles.locate_text}>매장·재고 위치</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tab_wrap}>
                        <div className={styles.tab_list_wrap}>
                            {/*이벤트 상품정보 리뷰 교환/반품/품절 탭*/}
                            <div className={`${styles.sps} ${styles.scroll_fixed} ${styles.scroll_fixe}`}>
                                {/*이벤트 상품정보 리뷰 교환/반품/품절 탭*/}
                                <div className={styles.sps_inner}>
                                    <ul className={styles.tabs}>
                                        <li className={styles.tab_item}>
                                            <button onClick={() => handleScroll("event")} className={styles.tab_link}>
                                                <span className={styles.tab_text}>이벤트</span>
                                            </button>
                                        </li>
                                        <li className={`${styles.tab_pa} ${styles.tab_item}`}>
                                            <button onClick={() => handleScroll("info")} className={styles.tab_link}>
                                                <span className={styles.tab_text}>상품정보</span>
                                            </button>
                                        </li>
                                        <li className={styles.tab_item}>
                                            <button onClick={() => handleScroll('review')} className={styles.tab_link}>
                                                <span className={styles.tab_text}>
                                                    리뷰
                                                    <span className={styles.num}>(93)</span>
                                                </span>
                                            </button>
                                        </li>
                                        <li className={styles.tab_item}>
                                            <button onClick={() => handleScroll('exchange')}
                                                    className={styles.tab_link}>
                                                <span className={styles.tab_text}>교환/반품/품절</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className={styles.prod_detail_contents}>
                            <div className={styles.detail_contents_inner}>
                                {/*section 총 4개 */}
                                {/*첫 번째 section 이 책의 이벤트*/}
                                {/*두번째 section함께 구매한 상품 ~~ 책의 기본정보까지 제일 김 ㅈ됨 */}
                                {/*세 번째 section Klover 리뷰 ~~ 교환 반품 품절 안내 위에까지 */}
                                {/*네 번째 section 교환 반품 품절 안내 ~ .상품 설명에 반품 / 교환 관련한 안내가 있는 경우 그 내용을 우선으로 한다는 텍스트까지 */}
                                <section className={styles.tap_content}>
                                    <div className={styles.product_detail_area}>
                                        <div className={`${styles.title_sm} ${styles.title_wrap}`}>
                                            <section ref={eventRef.event}>
                                                <h4 className={styles.title_heading}>이 책의 이벤트</h4>
                                            </section>
                                            <div className={styles.right_area}>
                                                <p className={`${styles.bul_item_asterisk} ${styles.font_size_xxs} ${styles.bul_item_base}`}>
                                                    해외주문/바로드림/제휴사주문/업체배송건의 경우 1+1 증정상품이 발송되지 않습니다.
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.product_event_contents}>
                                            <ul className={styles.event_list}>
                                                <li className={`${styles.event_item}`}>
                                                    <div className={styles.event_area}>
                                                        <Link href="" className={styles.event_link}>
                                                            <div className={styles.event_thumb_box}>
                                                                <span className={styles.img_box}>
                                                                    <img
                                                                        src="/images/event/1795130cbbf34e959a8be67d207e6a52.jpg"
                                                                        alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className={styles.event_info_box}>
                                                                <div className={styles.event_name}>OttOn 어떤 2호: 이름</div>
                                                                <div className={styles.event_period}>2025/02/19 ~
                                                                    2025/03/31
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className={`${styles.event_item}`}>
                                                    <div className={styles.event_area}>
                                                        <Link href="" className={styles.event_link}>
                                                            <div></div>
                                                            <div className={styles.event_info_box}>
                                                                <div className={styles.event_name}>기술스택 별 개발자 추천도서</div>
                                                                <div className={styles.event_period}>2021.12.24 ~
                                                                    2022.12.31
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div></div>
                                </section>
                                <section className={styles.tap_content}>
                                    {/*div 11개 */}
                                    <div></div>

                                    {/*!--함께 구매한 상품 -->*/}
                                    <div className={styles.product_detail_together}>
                                        <div className={`${styles.title_wrap} ${styles.title_size_md}`}>
                                            <section ref={eventRef.info}>
                                                <h4 className={styles.title_heading}>함께 구매한 상품</h4>
                                            </section>
                                        </div>
                                        <div className={styles.round_gray_box}>
                                            <div className={`${styles.title_wrap} ${styles.title_size_def}`}>
                                                <p className={styles.title_heading}>도서</p>
                                            </div>
                                            <div
                                                className={`${styles.swiper_container} ${styles.horizontal} ${styles.prod_swiper_wrap} `}>
                                                <ul className={`${styles.prod_list} ${styles.swiper_wrapper_product}`}
                                                    style={{transition: "translate3d(0,0,0)", transitionDuration: "0"}}>
                                                    <li className={`${styles.swiper_slide} ${styles.purchase_book} ${styles.prod_item} ${styles.slide}`}>
                                                        <div className={styles.prod_area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.prod_info_box}>
                                                                <Link href=""
                                                                      className={`${styles.no_width} ${styles.prod_info}`}>
                                                                    <span
                                                                        className={styles.prod_name}>{book.title}</span>
                                                                </Link>
                                                                <span
                                                                    className={styles.prod_author}>{book.author}</span>
                                                                <div
                                                                    className={`${styles.prod_price} ${styles.width_atuo_price}`}>
                                                                    <span className={`${styles.together_book}`}>
                                                                        <span
                                                                            className={styles.val}>{formatPrice(discountedPrice)}</span>
                                                                        <span
                                                                            className={`${styles.no_color} ${styles.together_unit}`}>원</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className={`${styles.swiper_scrollbar} ${styles.scrollbar}`}>
                                                    <div
                                                        className={`${styles.scrollbar_drag} ${styles.scrollbar_inner}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.round_gray_box}>
                                            <div className={`${styles.title_wrap} ${styles.title_size_def}`}>
                                                <p className={styles.title_heading}>라이프</p>
                                            </div>
                                            <div
                                                className={`${styles.prod_swiper_wrap} ${styles.horizontal} ${styles.swiper_container}`}>
                                                <ul className={`${styles.prod_list} ${styles.swiper_wrapper_product} ${styles.ul_slide}`}>
                                                    <li className={`${styles.swiper_slide} ${styles.purchase_book} ${styles.slide}`}>
                                                        <div className={styles.prod_area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                        <span
                                                                            className={`${styles.img_box} ${styles.life_span}`}>
                                                                            <img src="/images/life/hot1721714687427.jpg"
                                                                                 alt="" className={styles.life_img}/>
                                                                        </span>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.prod_info_box}>
                                                                <Link href=""
                                                                      className={`${styles.no_width} ${styles.prod_info}`}>
                                                                    <span
                                                                        className={styles.prod_name}>[리히텐] 나눔3칸 내열유리 밀폐용기 950ml x 2개</span>
                                                                </Link>
                                                                <div
                                                                    className={`${styles.prod_price} ${styles.width_atuo_price}`}>
                                                                    <span className={`${styles.together_book}`}>
                                                                        <span
                                                                            className={styles.val}>{formatPrice(discountedPrice)}</span>
                                                                        <span
                                                                            className={`${styles.no_color} ${styles.together_unit}`}>원</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className={`${styles.swiper_scrollbar} ${styles.scrollbar}`}>
                                                    <div
                                                        className={`${styles.scrollbar_drag} ${styles.scrollbar_inner}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*!-- //함께 구매한 상품 끝*/}
                                    {/* !--키워드 픽 -->*/}
                                    <div className={styles.product_detail_together}>
                                        <div className={`${styles.title_wrap} ${styles.title_size_md}`}>
                                            <h4 className={styles.title_heading}>키워드 Pick</h4>
                                            <div className={`${styles.tooltip_wrap} ${styles.tool_ml}`}>
                                                <button className={`${styles.btn_tooltip}`}>
                                                    <span className={styles.ico_info}></span>
                                                    <span className={styles.hidden}>하 언제 다하지</span>
                                                </button>
                                                <div>{/*툴틸 열면 나오는 속성*/}</div>
                                            </div>
                                        </div>
                                        <div className={`${styles.tab_wrap}`}>
                                            <div
                                                className={`${styles.tab_list_wrap} ${styles.mb12} ${styles.posi} ${styles.pick_tt}`}>
                                                <ul className={`${styles.tabs} ${styles.ui_helper_reset} ${styles.pick_ui}`}>
                                                    {/*li에서 선택이 된 태그는 회색으로 렌더링해줘야함. selected_li_tage*/}
                                                    <li className={`${styles.keyword_tab_item} ${styles.selected_li_tage} ${styles.keyword_li} ${styles.ui_tabs}`}>
                                                        <Link href="" className={`${styles.tab_link} ${styles.p15}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.pick_text}`}>메서드</span>
                                                        </Link>
                                                    </li>
                                                    <li className={`${styles.keyword_tab_item} ${styles.selected_li_tage} ${styles.keyword_li} ${styles.ui_tabs}`}>
                                                        <Link href="" className={`${styles.tab_link} ${styles.p15}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.pick_text}`}>표현식</span>
                                                        </Link>
                                                    </li>
                                                    <li className={`${styles.keyword_tab_item} ${styles.selected_li_tage} ${styles.keyword_li} ${styles.ui_tabs}`}>
                                                        <Link href="" className={`${styles.tab_link} ${styles.p15}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.pick_text}`}>프로토타입</span>
                                                        </Link>
                                                    </li>
                                                    <li className={`${styles.keyword_tab_item} ${styles.selected_li_tage} ${styles.keyword_li} ${styles.ui_tabs}`}>
                                                        <Link href="" className={`${styles.tab_link} ${styles.p15}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.pick_text}`}>스턴스</span>
                                                        </Link>
                                                    </li>
                                                    <li className={`${styles.keyword_tab_item} ${styles.selected_li_tage} ${styles.keyword_li} ${styles.ui_tabs}`}>
                                                        <Link href="" className={`${styles.tab_link} ${styles.p15}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.pick_text}`}>파싱</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={`${styles.tab_content} ${styles.mt12}`}>
                                                <ul className={`${styles.keyword_pick_list} ${styles.pl0} `}>
                                                    <li className={styles.prod_item}>
                                                        <div className={styles.area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={styles.prod_item}>
                                                        <div className={styles.area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={styles.prod_item}>
                                                        <div className={styles.area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={styles.prod_item}>
                                                        <div className={styles.area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={styles.prod_item}>
                                                        <div className={styles.area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={styles.prod_item}>
                                                        <div className={styles.area}>
                                                            <div className={styles.prod_thumb_box}>
                                                                <Link href="" className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/javaScriptDeepDive.jpg"
                                                                             alt="" className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className={styles.li_more}>
                                                        <button type="button" className={styles.btn_more_plus}>
                                                            <span className={styles.text}>더보기</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* !-- //키워드 픽 */}

                                    {/*!-- 책 상세 이미지 -->*/}
                                    <div className={`${styles.product_detail_together} ${styles.book_img_detail}`}>
                                        <div className={styles.inner}>
                                            <img src="/images/detail/js-detail-img.jpg" alt=""/>
                                        </div>
                                    </div>
                                    {/*!-- //책 상세 이미지 */}

                                    {/*!-->책 소개*/}
                                    <div className={`${styles.product_detail_together} ${styles.text_letter}`}>
                                        <div className={styles.intro_book}>
                                            <div className={`${styles.title_wrap} ${styles.title_sm}`}>
                                                <h2 className={styles.title_heading}>책 소개</h2>
                                            </div>
                                            <div
                                                className={`${styles.title_wrap} ${styles.title_sm} ${styles.mt_zero}`}>
                                                <p className={styles.title_heading}>이 책이 속한 분야</p>
                                            </div>
                                            <ul className={`${styles.intro_category} ${styles.pl0}`}>
                                                <li className={styles.mb12}>
                                                    <Link href="" className={styles.category_link}>국내도서</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>컴퓨터/IT</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>웹프로그래밍</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>JavaScript</Link>
                                                </li>
                                                <li className={styles.mb12}>
                                                    <Link href="" className={styles.category_link}>국내도서</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>컴퓨터/IT</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>대학교재</Link>
                                                </li>
                                                <li className={styles.mb12}>
                                                    <Link href="" className={styles.category_link}>국내도서</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>대학교재</Link>
                                                    <span className={styles.arw_category}> &gt; </span>
                                                    <Link href="" className={styles.category_link}>컴퓨터</Link>
                                                </li>
                                            </ul>
                                            <div></div>
                                        </div>
                                        <div className={styles.intro_bottom}>
                                            <div className={`${styles.book_info_tet} ${styles.text_bold}`}>269개의 그림과 원리를
                                                파헤치는 설명으로 &quot; 자바스크립트의 기본 개념과 동작 원리&quot;를 이해하자!
                                            </div>
                                            <div className={`${styles.prod_info_box} ${styles.book_info_tet}`}>
                                                웹페이지의 단순한 보조 기능을 처리하기 위한 제한적인 용도로 태어난 자바스크립트는 과도하다고 느껴질 만큼 친절한 프로그래밍
                                                언어입니다. 이러한 자바스크립트의 특징ㄹ은 편리한 경우도 있지만 이해하기 어렵게 만들기도 합니다.
                                                <br/>
                                                <br/>
                                                하지만 자바스크립트는 더 이상 제한적인 용도의 프로그래밍 언어가 아닙니다. 오랜 변화를 거쳐 이제 자바스크립트는 프런트엔드와
                                                백엔드 영역의 프로그래밍 언어로 사용할 수 있는 명실상부한 범용 애플리케이션 개발 언어로 성장했습니다. 따라서 자바스크립트를
                                                학습하는 방식도 이에 걸맞게 변화해야 하며, 이 책은 자바스크립트의 기본 개념과 동작 원리를 깊이 있게 학습하고자 하는 독자를
                                                위해 기획도었습니다.
                                                <br/>
                                                <br/>
                                                (모던 자바스크립트 Deep Dive)에서는 자바스크립트를 둘러싼 기본 개념을 정확하고 구체적으로 설명하고, 자바스크립트 코드의
                                                동작 원리를 집요하게 파헤칩니다. 따라서 여러분이 작성한 코드가 컴퓨터 내부에서 어떻게 동작할 것인지 예측하고, 명확히 설명할 수
                                                있도록 돕습니다. 또한 최신 자바스크립트 명세를 반영해 안정적이고 효율적인 코드를 작성할 수 있는 기본기를 다지고, 실전에서
                                                쓰이는 모던 자바스크립트 프레임워크나 도구를 완벽하게 이해하고 활용 수 있게 도와줍니다.
                                            </div>
                                        </div>
                                    </div>
                                    {/*!-- //책 소개*/}

                                    <div></div>

                                    {/*!-->이 책의 총서*/}
                                    <div className={styles.product_detail_together}>
                                        <div className={`${styles.title_wrap} ${styles.title_size_md_btn}`}>
                                            <p className={`${styles.title_heading}`}>
                                                이 책의 총서
                                                <span>(33)</span>
                                            </p>

                                            <button type="button"
                                                    className={`${styles.btn_wish_alarm} ${styles.wish_base} ${styles.wish_ml}`}>
                                                <span className={`${styles.ico_wish} ${styles.ico_wish_base}`}></span>
                                                <span className={styles.hidden}>찜</span>
                                            </button>
                                            <div className={styles.right_area}>
                                                <span className={styles.form_chk}>
                                                    <input type="checkbox" className={styles.input}/>
                                                    <label htmlFor="">
                                                        전체선택
                                                    </label>
                                                </span>
                                                <div className={`${styles.switch_list} ${styles.btn_all_text}`}>
                                                    <button type="button"
                                                            className={`${styles.btn_switch} ${styles.btn_switch_base} ${styles.btn_sm} ${styles.active}`}>
                                                        <span className={`${styles.hidden} `}>이미지형 으로 보기</span>
                                                    </button>
                                                    <button type="button"
                                                            className={`${styles.btn_switch} ${styles.btn_switch_base} ${styles.btn_sm} ${styles.ml_0} ${styles.ico_text}`}>
                                                        <span className={styles.hidden}>텍스트로</span>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`${styles.btn_switch_base} ${styles.ml6_bl} ${styles.btn_sm}`}>
                                                    <span className={styles.ico_all_view}></span>
                                                    <span className={styles.text}>전체목록</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className={`${styles.round_gray_box}`}>
                                            <div
                                                className={`${styles.prod_swiper_wrap} ${styles.swiper_container} ${styles.title_sm} ${styles.h250}`}>
                                                <ul className={`${styles.swiper_wrapper} ${styles.mz}`}
                                                    style={{transform: "translate3d(0,0,0)"}}>
                                                    <li className={`${styles.prod_item} ${styles.swiper_slide} ${styles.purchase_book} ${styles.slide}`}>
                                                        <span
                                                            className={`${styles.form_chk} ${styles.wh22}`}>
                                                            <input type="text" className={styles.input}/>
                                                            <label htmlFor="" className={styles.label_a}>
                                                                <span className={styles.hidden}>선택</span>
                                                                <span className={styles.hidden}>선택</span>
                                                            </label>
                                                        </span>
                                                        <div className={`${styles.prod_area} `}>
                                                            <div className={`${styles.prod_thumb_box}`}>
                                                                <Link
                                                                    href="https://product.kyobobook.co.kr/detail/S000214420933"
                                                                    className={styles.prod_link}>
                                                                    <span className={styles.img_box}>
                                                                        <img src="/images/book/9791158394592.jpg" alt=""
                                                                             className={styles.img}/>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                            <div className={`${styles.mt16}`}>
                                                                <Link href="" className={styles.prod_info}>
                                                                    <span
                                                                        className={`${styles.prod_name} ${styles.book_sm_title}`}>문제풀이로 완성하는 알고리즘+자료구조</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className={`${styles.swiper_scrollbar} ${styles.scrollbar}`}>
                                                    <div
                                                        className={`${styles.scrollbar_drag} ${styles.scrollbar_inner}`}></div>
                                                </div>
                                            </div>
                                            <div></div>
                                            <div className={styles.btn_area}>
                                                <button type="button"
                                                        className={`${styles.ico_wish_base} ${styles.letter_wish}`}>
                                                    <span className={styles.letter_ico_wish}></span>
                                                    <span className={styles.hidden}>찜</span>
                                                </button>
                                                <button type="button"
                                                        className={`${styles.btn_ip} ${styles.btn_light_gray}`}>
                                                    <span className={styles.text}>장바구니</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*!-- //이 책의 총서*/}

                                    {/*!-->작가정보*/}
                                    <div className={styles.product_detail_together}>
                                        <div className={`${styles.title_wrap} ${styles.title_size_md}`}>
                                            <h2 className={styles.title_heading}>작가정보</h2>
                                        </div>
                                        <div className={`${styles.round_gray_box}`}>
                                            <div className={`${styles.title_wrap}`}>
                                                <h3 className={styles.title_heading}>
                                                    <span className={styles.title_perfix}>저자(글)</span>
                                                    <Link href="">
                                                        <span
                                                            className={`${styles.prod_desc_normal} ${styles.color}`}> 이응모</span>
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className={`${styles.writer_info_box} ${styles.prod_info_box}`}>
                                                <div className={styles.overflow_wrap}>
                                                    <div className={`${styles.auto_overflow}`}>
                                                        <div className={`${styles.auto_overflow_inner}`}>
                                                            <p className={`${styles.auto_info_text}`}>
                                                                일본에서 컴퓨터공학을 전공한 후 일본의 자동차 연구소 공용 웹 프레임워크 개발 프로젝트를 시작으로
                                                                프로그래밍 세계에 발을 들여 놓았다. 이후 외국계 IT 기업에서 소프트웨어 컨설턴트로 재직하였고 현재
                                                                소프트웨어 개발사의 대표를 맡고 있다. 프런트엔드 튜토리얼 poiemaweb.com의 운영자이며
                                                                패스트캠퍼스에서 자바스크립트를 강의 중이다. 지은 책으로 《Angular
                                                                Essentials》(루비페이퍼, 2018)가 있다.
                                                                <br/>
                                                                <br/>
                                                                ㆍ 블로그: https://poiemaweb.com
                                                                <br/>
                                                                ㆍ 페이스북: https://www.facebook.com/poiemaweb
                                                                <br/>
                                                                ㆍ 유튜브:
                                                                https://www.youtube.com/channel/UCmcB2RZ8OjfS1vqdaGDxzjw
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={`${styles.auto_overflow_footer}`}>
                                                        <button className={`${styles.btn_more_body} ${styles.pl0}`}>
                                                            <span className={styles.text}>펼치기</span>
                                                            <span
                                                                className={`${styles.ico_arw} ${styles.ico_size} ${styles.ml3}`}></span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*!-- //작가정보*/}

                                    {/*!-->목차*/}
                                    <div className={`${styles.pb_t} ${styles.product_detail_together}`}>
                                        <div className={`${styles.title_wrap} ${styles.title_size_md}`}>
                                            <h2 className={`${styles.title_heading}`}>목차</h2>
                                        </div>
                                        <div className={`${styles.h212}`}>
                                            <div
                                                className={`${styles.auto_overflow_contents} ${styles.overflow_hidden}`}>
                                                <div className={`${styles.auto_overflow_in}`}>
                                                    <ul className={`${styles.book_contents_list} ${styles.pl0} ${styles.mt_zero}`}>
                                                        <li className={`${styles.book_contents_item} ${styles.mb0}`}>
                                                            &#9635; 01장 : 프로그래밍
                                                            <br/>
                                                            1.1 프로그래밍이란?
                                                            <br/>
                                                            1.2 프로그래밍 언어
                                                            <br/>
                                                            1.3 구문과 의미
                                                            <br/>
                                                            <br/>
                                                            &#9635; 02장: 자바스크립트란?
                                                            <br/>
                                                            2.1 자바스크립트의 탄생
                                                            <br/>
                                                            2.2 자바스크립트의 표준화
                                                            <br/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={`${styles.auto_overflow_footer}`}>
                                                <button type="button"
                                                        className={`${styles.btn_more_body} ${styles.pl0}`}>
                                                    <span className={`${styles.text}`}>펼치기</span>
                                                    <span
                                                        className={`${styles.ico_arw} ${styles.ico_size} ${styles.ml3}`}></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*!--//목차*/}

                                    {/*!-->기본정보*/}
                                    <div className={`${styles.product_detail_together}`}>
                                        <div className={`${styles.title_wrap} ${styles.title_size_md_btn}`}>
                                            <h2 className={`${styles.title_heading}`}>기본정보</h2>
                                        </div>
                                        <div className={`${styles.tbl_row_wrap}`}>
                                            <table className={`${styles.tbl_row}`}>
                                                <caption></caption>
                                                <colgroup>
                                                    <col style={{width: "20%"}}/>
                                                    <col style={{width: "80%"}}/>
                                                </colgroup>
                                                <tbody>
                                                <tr>
                                                    <th className={`${styles.row}`}>ISBN</th>
                                                    <td>9791158392239</td>
                                                </tr>
                                                <tr>
                                                    <th className={`${styles.row}`}>발행(출시)일자</th>
                                                    <td>2020년 09월 25일</td>
                                                </tr>
                                                <tr>
                                                    <th className={`${styles.row}`}>쪽수</th>
                                                    <td>956일</td>
                                                </tr>
                                                <tr>
                                                    <th className={`${styles.row}`}>크기</th>
                                                    <td>
                                                        <div className={`${styles.btn_text_box} ${styles.pl0}`}>
                                                            <span className={`${styles.text} `}>189 * 242 * 43 mm / 1763 g</span>
                                                            <button></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className={`${styles.row}`}>총권수</th>
                                                    <td>1권</td>
                                                </tr>
                                                <tr>
                                                    <th className={`${styles.row}`}>시리즈명</th>
                                                    <td>위키북스 프로그래밍 & 프랙티스 시리즈</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*!-- //기본정보*/}

                                    <div></div>
                                </section>

                                {/*!--> 리뷰시작*/}
                                <section className={styles.tab_content}>
                                    <div className={`${styles.product_detail_together}`}>
                                        {/*!--> Klover 리뷰 제목*/}
                                        <div className={`${styles.title_size_md_btn} ${styles.title_wrap}`}>
                                            <section ref={eventRef.review}>
                                                <p className={`${styles.title_heading}`}>Klover 리뷰 (93)</p>
                                            </section>
                                            <button className={`${styles.btn_size_lg} ${styles.ml6}`}>
                                                <span className={`${styles.ico_info} ${styles.b_size}`}></span>
                                                <span className={`${styles.hidden}`}>하 팝업웰케 많아</span>
                                            </button>
                                            <div className={`${styles.right_area}`}>
                                                <p className={`${styles.klover_asterisk} `}>
                                                    구매 후 리뷰 작성 시, e교환권 200원 적립
                                                </p>
                                                <button
                                                    onClick={() => setShowModal(true)}
                                                    className={`${styles.btn_sm} ${styles.btn_primary} ${styles.btn_all_text}`}>
                                                    <span className={`${styles.ico_review}`}></span>
                                                    <span className={styles.text}>리뷰작성</span>
                                                </button>
                                            </div>

                                            {/*모달 조건부 showModal이 true면 컴포넌트 렌더링 false이면 렌더링x*/}
                                            {showModal && <ReviewModal onClose={() => setShowModal(false)}/>}
                                        </div>
                                        {/*!-- // Klover 리뷰 제목*/}

                                        {/*!--> 사용자 총점 */}
                                        <div className={`${styles.klover_review_box} ${styles.klover_padding}`}>
                                            <div className={`${styles.klover_box_left} ${styles.pl0}`}>
                                                <div className={`${styles.box_top}`}>
                                                    <p className={`${styles.text_user_score}`}>사용자 총점</p>
                                                    <div className={`${styles.rating_container} ${styles.ml_minus}`}>
                                                        <div>{/*x*/}</div>
                                                        <div className={`${styles.rating_stars} ${styles.wh}`}>
                                                            <span className={styles.empty_stars}></span>
                                                            <span className={`${styles.filled_start}`}
                                                                  style={{width: "98%"}}>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                            </span>
                                                            {/*<span className={`${styles.empty_stars}`}>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                                <span className={styles.star}>
                                                                    <i className={styles.icon_star}></i>
                                                                </span>
                                                            </span>*/}
                                                        </div>
                                                        <div className={`${styles.caption}`}>
                                                            <span className={`${styles.caption_badge}`}>
                                                                10점 중 9.8점 {/*이게 데이터임.*/}
                                                                <span className={`${styles.caption_val}`}>9.81</span>
                                                                <span className={`${styles.total}`}>10</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <input type="text" className={styles.rating_input}/>
                                                </div>
                                                <div className={`${styles.box_bottom} ${styles.ml_0}`}>
                                                    <div className={`${styles.score_bar_wrap}`}>
                                                        <div
                                                            className={`${styles.rating_sm} ${styles.rating_container} `}>
                                                            <div title="초기화라고 적혀 있음."></div>
                                                            <div className={`${styles.rating_stars} ${styles.w68}`}>
                                                                <span className={`${styles.empty_stars}`}></span>
                                                                <span className={`${styles.filled_start}`}>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>

                                                                </span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "91%"}}></span>
                                                        </div>
                                                        <span className={styles.text_score_bar}>91%</span>{/*실제 데이터*/}
                                                    </div>
                                                    <div className={`${styles.score_bar_wrap} ${styles.mt13}`}>
                                                        <div
                                                            className={`${styles.rating_sm} ${styles.rating_container} `}>
                                                            <div title="초기화라고 적혀 있음."></div>
                                                            <div className={`${styles.rating_stars} ${styles.w68}`}>
                                                                <span className={`${styles.empty_stars}`}></span>
                                                                <span className={`${styles.filled_start}`}
                                                                      style={{width: "75%"}}>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "11%"}}></span>
                                                        </div>
                                                        <span className={styles.text_score_bar}>7%</span>{/*실제 데이터*/}
                                                    </div>
                                                    <div className={`${styles.score_bar_wrap} ${styles.mt13}`}>
                                                        <div
                                                            className={`${styles.rating_sm} ${styles.rating_container} `}>
                                                            <div title="초기화라고 적혀 있음."></div>
                                                            <div className={`${styles.rating_stars} ${styles.w68}`}>
                                                                <span className={`${styles.empty_stars}`}></span>
                                                                <span className={`${styles.filled_start}`}
                                                                      style={{width: "50%"}}>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "1%"}}></span>
                                                        </div>
                                                        <span className={styles.text_score_bar}>1%</span>{/*실제 데이터*/}
                                                    </div>
                                                    <div className={`${styles.score_bar_wrap} ${styles.mt13}`}>
                                                        <div
                                                            className={`${styles.rating_sm} ${styles.rating_container} `}>
                                                            <div title="초기화라고 적혀 있음."></div>
                                                            <div className={`${styles.rating_stars} ${styles.w68}`}>
                                                                <span className={`${styles.empty_stars}`}></span>
                                                                <span className={`${styles.filled_start}`}
                                                                      style={{width: "25%"}}>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                    <span className={`${styles.star} ${styles.ml01}`}>
                                                                        <i className={styles.icon_score_start}>

                                                                        </i>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                        <div className={`${styles.flex195} ${styles.score_bar}`}>
                                                            <span
                                                                className={`${styles.score_bar_inner} ${styles.score_best}`}
                                                                style={{width: "1%"}}></span>
                                                        </div>
                                                        <span className={styles.text_score_bar}>1%</span>{/*실제 데이터*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`${styles.klover_box_right}`}>
                                                <div className={`${styles.box_top}`}>
                                                    <p className={`${styles.text_good_respon}`}>
                                                        33#의 구매자가
                                                        <br/>
                                                        <span className={`${styles.fc_spot}`}>
                                                            <span className={`${styles.pt0} ${styles.image_ex}`}>
                                                                집중돼요
                                                            </span>
                                                        </span>
                                                        라고 응답했어요

                                                    </p>
                                                </div>
                                                <div className={`${styles.box_bottom}`}>
                                                    <div className={`${styles.reply_score_list}`}>
                                                        <div className={`${styles.reply_score_item} ${styles.pl0}`}>
                                                            <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.num_score_best}`}>
                                                                    33%
                                                                </span>
                                                                <div
                                                                    className={`${styles.average_score_bar} ${styles.average_bar_color}`}>
                                                                    <span
                                                                        className={`${styles.best_score_bar_inner}`}></span>
                                                                </div>
                                                            </div>
                                                            <p className={`${styles.text_replay}`}>집중돼요</p>
                                                        </div>
                                                        <div className={`${styles.reply_score_item} `}>
                                                            <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>29%</span>
                                                                <div className={`${styles.average_score_bar}`}>
                                                                    <span className={styles.average_score_bar_inner}
                                                                          style={{height: "29%"}}></span>
                                                                </div>
                                                            </div>
                                                            <p className={`${styles.text_gray}`}>도움돼요</p>
                                                        </div>
                                                        <div className={`${styles.reply_score_item} `}>
                                                            <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>16%</span>
                                                                <div className={`${styles.average_score_bar}`}>
                                                                    <span
                                                                        className={styles.average_score_bar_inner}
                                                                        style={{height: "16%"}}></span>
                                                                </div>
                                                            </div>
                                                            <p className={`${styles.text_gray}`}>쉬웠어요</p>
                                                        </div>
                                                        <div className={`${styles.reply_score_item} `}>
                                                            <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>6%</span>
                                                                <div className={`${styles.average_score_bar}`}>
                                                                    <span
                                                                        className={styles.average_score_bar_inner}
                                                                        style={{height: "6%"}}></span>
                                                                </div>
                                                            </div>
                                                            <p className={`${styles.text_gray}`}>최고예요</p>
                                                        </div>
                                                        <div className={`${styles.reply_score_item} ${styles.pr0}`}>
                                                            <div className={`${styles.books_inner}`}>
                                                                <span
                                                                    className={`${styles.num_score_bar} ${styles.average_num_score_bar}`}>15%</span>
                                                                <div className={`${styles.average_score_bar}`}>
                                                                    <span
                                                                        className={styles.average_score_bar_inner}
                                                                        style={{height: "15%"}}></span>
                                                                </div>
                                                            </div>
                                                            <p className={`${styles.text_gray}`}>추천해요</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*!-- //사용자 총점 */}

                                        {/*리뷰 적을 수 있는 칸 ㅆ비ㅏㄹ..*/}
                                        <div className={`${styles.tab_wrap}`}>
                                            {/*!--> 리뷰 ul 태그*/}
                                            <div className={`${styles.tab_list_wrap}`} style={{height: "44px"}}>
                                                <ul className={`${styles.tabs} ${styles.tabs_sup}`}>
                                                    <li className={`${styles.tab_item} ${styles.pl0} ${styles.tab_padding}`}>
                                                        <button className={`${styles.tab_link}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.review_text}`}>전체 리뷰</span>
                                                        </button>
                                                    </li>
                                                    <li className={`${styles.tab_item} ${styles.tab_padding} ${styles.z_sup}`}>
                                                        <button className={`${styles.tab_link}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.review_text}`}>구매 리뷰</span>
                                                        </button>
                                                    </li>
                                                    <li className={`${styles.tab_item} ${styles.tab_padding}`}>
                                                        <button className={`${styles.tab_link}`}>
                                                            <span
                                                                className={`${styles.tab_text} ${styles.review_text}`}>한 달 후 리뷰</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className={`${styles.tab_review_option}`}>
                                                    <div className={`${styles.form_sel}`}>
                                                        {/*<select name="" id="">
                                                            <option value="">좋아요 순</option>
                                                            <option value="">최신 순</option>
                                                        </select>*/}
                                                        <span style={{width: "100%", height: "38px"}}
                                                              className={`${styles.ui_selectmenu_button}`}>
                                                            <span className={`${styles.ui_selectmenu_icon}`}></span>
                                                            <span
                                                                className={`${styles.ui_selectmenu_text}`}>좋아요 순</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*!-- //리뷰 ul 태그*/}

                                            {/*리뷰 리스트 시작..*/}
                                            <div className={`${styles.tab_content}`}>
                                                <div className={`${styles.comment_wrap}`}>

                                                    {/*!--> 리뷰 리스트*/}
                                                    <div className={`${styles.comment_list} ${styles.bt_no}`}>
                                                        <div className={`${styles.comment_item}`}>
                                                            <div className={`${styles.comment_header}`}>
                                                                <div className={`${styles.left_area}`}>
                                                                    <div className={`${styles.user_info_box}`}>
                                                                        <span
                                                                            className={`${styles.badge_box} ${styles.badge_base}`}>
                                                                            <span
                                                                                className={`${styles.badge_pill} ${styles.badge_class} ${styles.font_xs} ${styles.bl_br} ${styles.text_ex}`}>
                                                                                <span
                                                                                    className={`${styles.ico_wish_base} ${styles.text_wh}`}>종이책</span>
                                                                            </span>
                                                                            <span
                                                                                className={`${styles.badge_pill} ${styles.badge_class} ${styles.badge_line_gray} ${styles.ml6} ${styles.purchaser_text} ${styles.bg_white}`}>
                                                                                <span className={styles.text}>구메자</span>
                                                                            </span>
                                                                        </span>
                                                                        <span
                                                                            className={`${styles.info_item} ${styles.pt_1}`}>유저아이디</span>
                                                                        <span
                                                                            className={`${styles.gap} ${styles.gap_margin}`}>&#47;</span>
                                                                        <span
                                                                            className={`${styles.info_item} ${styles.pt_1}`}>작성기간</span>
                                                                        <span
                                                                            className={`${styles.gap} ${styles.gap_margin}`}>&#47;</span>
                                                                        <span
                                                                            className={`${styles.info_item} ${styles.pt_1}`}>
                                                                            <button
                                                                                className={`${styles.btn_comment_util}`}>
                                                                                 <span
                                                                                     className={styles.text}>신고/차단</span>
                                                                            </button>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className={`${styles.review_right_area}`}>
                                                                    <div className={`${styles.reivew_summary_wrap}`}>
                                                                        <div
                                                                            className={`${styles.rating_sm} ${styles.mt3} ${styles.rating_footer} ${styles.w68}`}>
                                                                            <div>{/*초기화*/}</div>
                                                                            <div
                                                                                className={`${styles.rating_stars} ${styles.z} ${styles.w68}`}>
                                                                                <span
                                                                                    className={`${styles.empty_stars}`}></span>
                                                                                <span
                                                                                    className={`${styles.filled_start}`}>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                    <span
                                                                                        className={`${styles.ml01} ${styles.star}`}>
                                                                                        <i className={`${styles.icon_score_start}`}></i>
                                                                                    </span>
                                                                                 </span>
                                                                            </div>
                                                                            <div>{/*caption*/}</div>
                                                                        </div>
                                                                        <input type="text"
                                                                               className={styles.rating_input}/>
                                                                        <span
                                                                            className={`${styles.summary_gap}`}>&#47;</span>
                                                                        <span
                                                                            className={`${styles.review_quotes_text} ${styles.mr1}`}>
                                                                                    도움돼요
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.comment_contents}`}>
                                                                <div className={`${styles.contents_inner}`}>
                                                                    <div className={`${styles.comment_view_wrap}`}>
                                                                        <div className={`${styles.comment_text_box}`}>
                                                                            <div className={`${styles.comment_text}`}>
                                                                                리뷰내용 3줄 넘어가는거 아니면, 펼치기 버튼 비활성화 되어야 한다.
                                                                                리뷰 작성은 모달로 되어 있고, 모달이 나오면 화면이 조금 어두워진다.ㅣ
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.comment_footer}`}>
                                                                <button type="button"
                                                                        className={`${styles.footer_text} ${styles.btn_more_body} ${styles.pl0}`}>
                                                                    <span
                                                                        className={`${styles.btn_more_body} ${styles.footer_text}`}>펼치기</span>
                                                                    <span className={`${styles.footer_ico_arw}`}></span>
                                                                </button>
                                                                <div className={`${styles.comment_util_box}`}>
                                                                    <div className={`${styles.footer_area}`}>
                                                                        <button type="button"
                                                                                className={`${styles.ico_wish_base}`}>
                                                                            <span
                                                                                className={`${styles.ico_like} ${styles.ico_wish_base}`}></span>
                                                                            <span
                                                                                className={`${styles.ico_wish_base} ${styles.like_text}`}>100</span>
                                                                        </button>
                                                                        <button type="button"
                                                                                className={`${styles.ico_wish_base} ${styles.ml16}`}>
                                                                            <span
                                                                                className={`${styles.ico_wish_base} ${styles.ico_reply}`}></span>
                                                                            <span className={styles.reply_text}>
                                                                                답글
                                                                            <span
                                                                                className={styles.count}>0</span>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`${styles.reply_wrap}`}>{/*리플*/}</div>
                                                        </div>
                                                    </div>
                                                    {/*!--> // 리뷰 리스트 */}

                                                    {/*!--> 페이지네이션*/}
                                                    <div className={`${styles.pagination} `}>
                                                        <button type="button"
                                                                className={`${styles.btn_page} ${styles.prev}`}>
                                                            <span className={styles.hidden}>이전</span>
                                                        </button>
                                                        <div className={`${styles.page_num} ${styles.h24}`}>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num} ${styles.num_page}`}>1</Link>
                                                            <span></span>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>2</Link>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>3</Link>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>4</Link>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>5</Link>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>6</Link>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>7</Link>
                                                            <span></span>
                                                            <Link href=""
                                                                  className={`${styles.btn_page_num}`}>8</Link>
                                                        </div>
                                                        <button type="button"
                                                                className={`${styles.btn_page} ${styles.next}`}>
                                                            <span className={styles.hidden}>다음</span>
                                                        </button>
                                                    </div>
                                                    {/*!--> //페이지네이션*/}
                                                    <div className={`${styles.no_data}`}></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`${styles.product_detail_together}`}></div>
                                </section>
                                {/*!-- // 리뷰끝*/}
                                <section></section>
                            </div>
                            <div className={styles.detail_recommend}></div>
                        </div>
                    </div>

                    {/*장바구니 모달 컴포넌트*/}
                    {showCartModal && (
                        <GenericModal
                            title="상품이 장바구니에 담겼습니다."
                            description="장바구니로 이동하시겠습니까?"
                            confirmText="이동"
                            cancelText="취소"
                            onClose={() => setShowCartModal(false)}
                            onConfirm={() => {
                                setShowCartModal(false);
                                router.push('/cart');
                            }}
                        />
                    )}

                    {showToast && (
                        <ToastNotification message={toastText} onClose={() => setShowToast(false)}/>
                    )}

                    {showLoginModal && (
                        <GenericModal
                            title="찜하기는 로그인 후 이용할 수 있어요."
                            confirmText="이동하기"
                            cancelText="취소"
                            onClose={() => setShowLoginModal(false)}
                            onConfirm={() => {
                                setShowLoginModal(false);
                                router.push("/login");
                            }}
                            />
                        )}

                    <div className={styles.detail_footer}>
                        <div className={`${styles.prod_purchase_info_wrap}`}>
                            <div
                                className={`${styles.footer_contents_inner} ${styles.prod_detail_contents} ${styles.footer}`}>
                                <div>
                                    <span className={`${styles.prod_info_title}`}>총 상품 금액</span>
                                    <span className={`${styles.footer_price}`}>
                                        <span className={`${styles.footer_val} ${styles.color}`}>40,500</span>
                                        <span className={`${styles.footer_val}`}>원</span>
                                    </span>
                                </div>
                                <div className={`${styles.footer_right}`}>
                                    <div id="count" className={`${styles.mr_20} ${styles.prod_item} ${styles.h_44}`}>
                                        <span className={`${styles.ui_spiner} ${styles.h_44}`}>
                                            <button type="button"
                                                    onClick={decrease}
                                                    className={`${styles.btn_quantity} ${styles.btn_spinner} ${styles.btn_up}`}>
                                                <span className={`${styles.down_icon} ${styles.btn_quantity_up_down}`}>수량 줄</span>
                                            </button>
                                            <input type="number"
                                                   value={quantity}
                                                   onChange={(e) => setQuantity(Number(e.target.value))}
                                                   min={1}
                                                   className={`${styles.form_spinner}`}/>
                                            <button type="button"
                                                    onClick={increase}
                                                    className={`${styles.btn_quantity} ${styles.btn_spinner} ${styles.btn_down}`}>
                                                <span className={`${styles.up_icon}  ${styles.btn_quantity_up_down}`}>수량 늘</span>
                                            </button>
                                        </span>
                                    </div>
                                    <div className={`${styles.prod_item}`} style={{textAlign: "center"}}>
                                        <button type="button"
                                                onClick={handleWishClick}
                                                className={`${styles.btn_comment_util} ${styles.btn_lg} ${styles.btn_footer_wish}`}>
                                            <span
                                                className={`${styles.footer_ico_wish} ${styles.btn_comment_util}`}></span>
                                            <span className={`${styles.hidden}`}>내 마음의 저장~</span>
                                        </button>
                                        <Link href=""
                                              className={`${styles.ml6} ${styles.btn_gray} ${styles.mw_120} ${styles.btn_comment_util} ${styles.btn_footer_link}`}>
                                            <span className={`${styles.ico_gift} ${styles.locate_text}`}></span>
                                            <span className={`${styles.locate_text}`} style={{top: "2px"}}>선물하기</span>
                                        </Link>
                                        <button type="button"
                                                onClick={() => setShowCartModal(true)}
                                                className={`${styles.btn_comment_util} ${styles.ico_wish_base} ${styles.ml6} ${styles.mw_120} ${styles.btn_footer_link} ${styles.btn_cart}`}>
                                            <span className={styles.locate_text}>장바구니</span>
                                        </button>
                                        <div className={`${styles.prod_item} ${styles.footer_pay} ${styles.ml6}`}>
                                            <Link href=""
                                                  className={`${styles.mw_120} ${styles.btn_cart} ${styles.btn_footer_link} ${styles.baro} ${styles.btn_comment_util}`}>
                                                <span className={styles.locate_text}>바로드림</span>
                                            </Link>
                                            <Link href=""
                                                  className={`${styles.mw_120} ${styles.ml_0} ${styles.baro_pur} ${styles.btn_footer_link} ${styles.btn_pur} ${styles.btn_comment_util}`}>
                                                <span className={`${styles.locate_text}`}>바로구매</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div></div>
            </main>
        </div>
    );
};

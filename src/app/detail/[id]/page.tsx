'use client'
import styles from './detail.module.css'
import Header from "@/app/components/header/Header";
import Breadcrumb from "@/app/components/breadcrumb/page";
import {books} from "@/app/lib/book";
import {useParams} from "next/navigation";
import Link from "next/link";
import {formatPrice} from "@/utils/format";

export default function Detail() {
    const {id} = useParams();
    const book = books.find((b) => b.id === Number(id));


    if (!book) return <div>책을 찾을 수 없습니다.</div>;  // 책이 없을 때 메시지 출력

    const discountedPrice = book.price * (1 - book.discount / 100);

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
                            <div className={`${styles.sps} ${styles.scroll_fixed}`}>
                                <div className={styles.sps_inner}>
                                    <ul className={styles.tabs}>
                                        <li className={styles.tab_item}>
                                            <Link href="" className={styles.tab_link}>
                                                <span className={styles.tab_text}>이벤트</span>
                                            </Link>
                                        </li>
                                        <li className={`${styles.tab_pa} ${styles.tab_item}`}>
                                            <Link href="" className={styles.tab_link}>
                                                <span className={styles.tab_text}>상품정보</span>
                                            </Link>
                                        </li>
                                        <li className={styles.tab_item}>
                                            <Link href="" className={styles.tab_link}>
                                                <span className={styles.tab_text}>
                                                    리뷰
                                                    <span className={styles.num}>(93)</span>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className={styles.tab_item}>
                                            <Link href="" className={styles.tab_link}>
                                                <span className={styles.tab_text}>교환/반품/품절</span>
                                            </Link>
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
                                            <h4 className={styles.title_heading}>이 책의 이벤트</h4>
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
                                                                    <img src="/images/event/1795130cbbf34e959a8be67d207e6a52.jpg" alt=""/>
                                                                </span>
                                                            </div>
                                                            <div className={styles.event_info_box}>
                                                                <div className={styles.event_name}>OttOn 어떤 2호: 이름</div>
                                                                <div className={styles.event_period}>2025/02/19 ~ 2025/03/31</div>
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
                                                                <div className={styles.event_period}>2021.12.24 ~ 2022.12.31</div>
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
                            </div>
                            <div className={styles.detail_recommend}></div>
                        </div>
                    </div>
                    <div className={styles.detail_footer}></div>
                </section>
                <div></div>
            </main>
        </div>
    );
}

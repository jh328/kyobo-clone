'use client'
import style from "./cart.module.css";
import Link from "next/link";
import {useSession} from "next-auth/react";
import SearchHeader from "@/app/components/search_header/search";
import {useCartStore} from "@/app/store/cartStore";
import {formatPrice} from "@/utils/format";
import {useState} from "react";
import GenericModal from "@/app/components/modals/GenericModal";

export default function Page() {
    const {data: session} = useSession();
    const [showOrderModal, setShowOrderModal] = useState(false);

    let userName;
    if (session && session.user?.name) {
        userName = session.user.name;
    }

    const cartItems = useCartStore((state) => state.cartItems);

    const bookCarts = cartItems.map((item) => {
        const discountedPrice = Math.floor(item.price * (1 - item.discount / 100));
        const point = Math.floor(discountedPrice * 0.05);

        return {
            ...item,
            discountedPrice,
            point,
            totalPrice: discountedPrice * item.quantity
        };
    });

    const totalAmount = bookCarts.reduce((acc, item) => acc + item.totalPrice, 0);
    const totalPoint = bookCarts.reduce((acc, item) => acc + item.point * item.quantity, 0);
    const totalDiscount = bookCarts.reduce(
        (acc, item) => acc + (item.price - item.discountedPrice) * item.quantity,
        0
    );

    const updateQuantity = useCartStore((state) => state.updateQuantity);

    return (
        <div className={style.wrapper}>
            <SearchHeader/>
            <div>{/*플로팅 액션 버튼, 플로팅 고객센터 버튼 그룹, */}</div>
            <main className={style.main_container}>
                <section className={style.pt_50}>
                    <div className={style.contents_inner}>
                        {/*!--> 왼쪽 하단 플로팅 버튼*/}
                        <div></div>
                        {/*!-- //왼쪽 하단 플로팅 버튼*/}

                        {/*!--> 장바구니 제목 */}
                        <div className={style.back_white}>
                            <div className={style.cart_top_inner}>
                                {/*!--> 장바구니 제목*/}
                                <div>
                                    <div className={`${style.title_wrap} ${style.pb_30} ${style.title_base}`}>
                                        <h1 className={`${style.title_heading} ${style.title_text}`}>장바구니 (1)</h1>
                                        <div className={style.order}>
                                            {userName && (
                                                <div className={`${style.ml_12} ${style.order}`}>
                                                    <button
                                                        className={`${style.btn_gray} ${style.btn_sm} ${style.btn_base} `}>
                                                    <span
                                                        className={`${style.ico_locate_black} ${style.btn_base} ${style.btn_locate}`}></span>
                                                        <span className={`${style.text}`}>{userName}</span>
                                                    </button>
                                                </div>
                                            )}
                                            <div className={`${style.order_sort_wrap}`}></div>
                                        </div>
                                        <div className={`${style.right_area} ${style.right}`}>
                                            <ol className={`${style.head_list}`}>
                                                <li className={`${style.step_item} ${style.active}`}>
                                                    <span className={`${style.step_num} ${style.current_num}`}>1</span>
                                                    장바구니
                                                </li>
                                                <li className={`${style.step_item} ${style.ml_16}`}>
                                                    <span className={`${style.step_num}`}>2</span>
                                                    사은품선택
                                                </li>
                                                <li className={`${style.step_item} ${style.ml_16}`}>
                                                    <span className={`${style.step_num}`}>3</span>
                                                    주문/결제
                                                </li>
                                                <li className={`${style.step_item} ${style.ml_16}`}>
                                                    <span className={`${style.step_num}`}>4</span>
                                                    주문완료
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/*!-- //장바구니 제목*/}

                                {/*!--> 전체 리스트 탭*/}
                                <div className={`${style.util_btn_box} ${style.util_width}`}>
                                    <div>
                                        <span className={`${style.form_chk}`}>
                                            <input type="text" className={style.form_input}/>
                                            <label htmlFor="" className={`${style.form_label} ${style.label_all}`}>
                                                전체
                                            </label>
                                        </span>
                                    </div>
                                    <div className={`${style.head_list}`}>
                                        <button type="button"
                                                className={`${style.btn_size_xs} ${style.btn_class} ${style.btn_wish}`}>
                                            <span className={`${style.ico_wish} ${style.btn_base}`}></span>
                                            <span className={`${style.hidden}`}>찜하기</span>
                                        </button>
                                        <button type="button"
                                                className={`${style.ml_4} ${style.btn_class} ${style.btn_delete}`}>
                                            <span className={`${style.ico_delete} ${style.btn_base}`}></span>
                                            <span className={`${style.hidden}`}>삭제</span>
                                        </button>
                                        <button type="button"
                                                className={`${style.ml_4} ${style.btn_class} ${style.btn_gray} ${style.btn_xs}`}>
                                            <span className={style.btn_base}>이미 구매한 상품 확인</span>
                                        </button>
                                        <button type="button"
                                                className={`${style.ml_4} ${style.btn_class} ${style.btn_gray} ${style.btn_xs}`}>
                                            <span className={style.btn_base}>Excel 다운로드</span>
                                        </button>
                                        <button type="button"
                                                className={`${style.ml_4} ${style.btn_class} ${style.btn_gray} ${style.btn_xs}`}>
                                            <span className={style.btn_base}>품/절판 전체삭제</span>
                                        </button>
                                    </div>
                                </div>
                                {/*!-- // 전체 리스트 탭*/}

                                {/*!--> 교보문고 탭*/}
                                <div className={`${style.mb_17} ${style.util_width}`}>
                                    <div className={style.tag_wrap}>
                                        <Link href="/" className={style.home_link}>교보문고</Link>
                                    </div>
                                </div>
                                {/*!-- //교보문고 탭*/}
                            </div>
                            <div></div>
                        </div>
                        {/*!-- // 장바구니 제목 */}

                        {/*!--> 장바구니 목록*/}
                        <div className={style.cart_body}>
                            <div className={style.cart_body_inner}>
                                <div></div>
                                <div></div>

                                {/*!--> 추가적립 부분~ 무료배송 상품 추가하기*/}
                                <div>
                                    <ul className={`${style.pl_0} ${style.m_0}`}>
                                        <li className={`${style.h67} `}>
                                            <div className={`${style.contents_inner}`}>
                                                <div className={style.cart_calculator}>
                                                    <div></div>
                                                    <div className={`${style.free}`} style={{width: "246px"}}>
                                                        <em className={style.pay_text}>5만원</em>
                                                        이상 구매 시 &nbsp;
                                                        <b>추가 적립!</b>
                                                        <button type="button"
                                                                className={`${style.btn_base} ${style.btn_info_popup}`}>
                                                            <span
                                                                className={`${style.ico_question} ${style.btn_base} ${style.que}`}></span>
                                                            <span className={`${style.hidden}`}>팝업</span>
                                                        </button>
                                                    </div>
                                                    <div className={`${style.area}`}>
                                                        <div className={style.progress}>
                                                            <div className={style.bar}>
                                                                <span className={style.bar_color}></span>
                                                            </div>
                                                            <p className={style.bar_text}>*교보문고 배송 상품 기준 (해외주문도서 제외)</p>
                                                        </div>
                                                        <button type="button"
                                                                className={`${style.btn_gray} ${style.btn_xs} ${style.btn_class}`}>
                                                            <Link href="">상품 추가하기</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>
                                        </li>
                                        <li className={`${style.mt_0} ${style.fold_box} ${style.box}`}>
                                            <div
                                                className={`${style.box_header} ${style.fold_box_header} ${style.header}`}>
                                                <span className={`${style.form_chk}`} style={{zIndex: "2"}}>
                                                    <input type="text" className={style.form_input}/>
                                                    <label htmlFor=""
                                                           className={`${style.form_label} ${style.label_head} ${style.label_all}`}>
                                                        교보문고/바로드림
                                                    </label>
                                                </span>
                                                <button className={`${style.btn_class} ${style.btn_fold}`}>
                                                    <span className={style.hidden}>열기</span>
                                                </button>
                                            </div>
                                            <div className={`${style.p_0} ${style.cart_contents}`}
                                                 style={{height: "270px"}}>
                                                <div style={{height: "176px"}}>
                                                    <table className={`${style.tbl_prod} `}
                                                           style={{borderTop: "none", height: "176px"}}>
                                                        <caption>교보문고/바로드림 상품</caption>
                                                        <colgroup>
                                                            <col style={{width: "42px"}}/>
                                                            <col/>
                                                            <col style={{width: "140px"}}/>
                                                            <col style={{width: "222px"}}/>
                                                        </colgroup>
                                                        <tbody>
                                                        {bookCarts.map((item) => (
                                                            <tr key={item.id}>
                                                                <td className={`${style.td_cart} ${style.chk} ${style.w122}`}>
                                                                <span className={`${style.form_no_label}`}>
                                                                    <input type="checkbox"
                                                                           className={`${style.form_input}`}/>
                                                                    <label htmlFor=""
                                                                           className={`${style.form_label} ${style.form_z} ${style.label_all}`}>
                                                                        상품 선택
                                                                    </label>
                                                                </span>
                                                                </td>
                                                                <td className={`${style.td_cart} ${style.th_prod} ${style.bb_none} ${style.w461}`}
                                                                    style={{textAlign: "left"}}>
                                                                    <div
                                                                        className={`${style.td_prod} ${style.prod_area}`}>
                                                                        <div
                                                                            className={`${style.size_sm} ${style.prod_thumb_box} ${style.alone_relative}`}>
                                                                            <Link href=""
                                                                                  className={`${style.prod_link}`}></Link>
                                                                            <Link href=""
                                                                                  className={`${style.prod_link}`}>
                                                                            <span className={`${style.img_box}`}>
                                                                                <img
                                                                                    src={item.image}
                                                                                    alt={item.title}
                                                                                    className={style.img}/>
                                                                            </span>
                                                                            </Link>
                                                                        </div>
                                                                        <div className={`${style.ml_12}`}
                                                                             style={{overflow: "hidden"}}>
                                                                            <Link href=""></Link>
                                                                            <Link href="">
                                                                                <span
                                                                                    className={`${style.prod_name}`}>{item.title}</span>
                                                                            </Link>
                                                                            <div className={style.prod_price}>
                                                                            <span
                                                                                className={style.prod_percent}>{item.discount}%</span>
                                                                                <span className={style.price}>
                                                                                <span
                                                                                    className={`${style.val} ${style.target}`}>&nbsp;{formatPrice(item.discountedPrice)}</span>
                                                                                <span
                                                                                    className={`${style.unit} ${style.target}`}>원</span>
                                                                            </span>
                                                                                <span
                                                                                    className={`${style.price_normal}`}>
                                                                                <span
                                                                                    className={style.normal_price}>{formatPrice(item.price)}</span>
                                                                            </span>
                                                                                <span
                                                                                    className={style.point}>({formatPrice(item.accumulation)}P)</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                {cartItems.map((item) => (
                                                                    <td key={item.id}
                                                                        className={`${style.td_cart} ${style.td_line}`}>
                                                                <span style={{fontSize: "0px"}}>
                                                                    <span className={`${style.val} ${style.target}`}
                                                                          style={{
                                                                              fontSize: "16px",
                                                                              lineHeight: "24px"
                                                                          }}>{formatPrice(totalAmount)}</span>
                                                                    <span className={`${style.unit}`}>원</span>
                                                                </span>
                                                                        <div
                                                                            className={`${style.mt_10} ${style.form_box}`}>
                                                                    <span
                                                                        className={`${style.ui_spinner} ${style.numbers_books}`}>
                                                                        <button type="button"
                                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                                className={`${style.num_btn} ${style.btn_mar} ${style.sel_btn} ${style.ui_btn} ${style.bottom_0} ${style.down}`}>
                                                                            <span
                                                                                className={`${style.ui_icon}`}>수량 1+</span>
                                                                        </button>
                                                                        <input type="number"
                                                                               value={item.quantity}
                                                                               onChange={(e) =>updateQuantity(item.id,Math.max(1, Number(e.target.value)))}
                                                                               title="수량"
                                                                               className={`${style.spinner} ${style.num_input}`}/>
                                                                        <button type="button"
                                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                                className={`${style.num_btn} ${style.btn_ram} ${style.sel_btn} ${style.ui_btn} ${style.bb_none}`}>
                                                                            <span className={`${style.ui_icon_plus}`}>수량 1-</span>
                                                                        </button>
                                                                    </span>
                                                                        </div>
                                                                    </td>
                                                                ))}
                                                                <td className={`${style.td_cart} ${style.td_line}`}>
                                                                    <div className={style.text_delivery}>
                                                                        <div>
                                                                            <p className={style.delivery_desc}>
                                                                            <span className={style.val}>
                                                                                <strong>내일(4/10,목)도착</strong>
                                                                            </span>
                                                                            </p>
                                                                        </div>
                                                                        <div className={style.text_inner}>
                                                                        <span
                                                                            className={`${style.badge_pill} ${style.btn_cla} ${style.btn_primary} ${style.btn_size_sm}`}>
                                                                            <span className={style.btn_base}>바로드림</span>
                                                                        </span>
                                                                            <p className={style.delivery_desc}>
                                                                            <span className={style.val}>
                                                                                04/10(목)부터 수령 가능
                                                                            </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <button
                                                                        className={`${style.btn_delete_ord} ${style.btn_class}`}>

                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div></div>
                                                <div></div>
                                                <input type="text"/>
                                                <input type="text"/>
                                                <input type="text"/>
                                            </div>
                                            <div></div>
                                        </li>
                                    </ul>
                                </div>
                                {/*!-- //추가적립 부분~ 무료배송 상품 추가하기*/}

                                {/*!--> FOR U*/}
                                <div></div>
                                {/*!-- //FOR U*/}


                                {/*!--> 책을 마주하는 마음으로*/}
                                <div></div>
                                {/*!-- //책을 마주하는 마음으로*/}

                                {/*!--> 4월에는 바로 이책*/}
                                <div></div>
                                {/*!-- //4월에는 바로 이책*/}

                                {/*!--> 페이*/}
                                <div></div>
                                {/*!-- //페이*/}

                                {/*!--> 장바구니 유의사항*/}
                                <div></div>
                                {/*!-- //장바구니 유의사항*/}

                                {/*스크립트 두개*/}
                                {/*스크립트 두개*/}
                                <div>{/*없음*/}</div>

                                {/*오른쪽 탭 결제 하는거*/}
                                <div></div>
                                {/*오른쪽 탭 결제 하는거*/}

                                <div></div>
                                <div className={`${style.cart_into}`}>
                                    <div className={`${style.info_area}`}>
                                        <div className={style.payment_box}>
                                            <h2 className={style.hidden}>주문총액</h2>
                                            <ul className={style.pl_0}>
                                                <li className={` ${style.payments_item}`}>
                                                    <p className={style.label}>상품 금액</p>
                                                    <div className={style.right_box}>
                                                        <span className={style.price}>
                                                            <span
                                                                className={`${style.spot}`}>{formatPrice(totalAmount)}</span>
                                                            <span className={`${style.unit}`}>원</span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className={`${style.mt_12} ${style.payments_item}`}>
                                                    <p className={`${style.label}`}>배송비</p>
                                                    <button type="button"
                                                            className={`${style.btn_info_ques} ${style.btn_class} ${style.p_0}`}>
                                                        <span className={`${style.ico_question} ${style.btn_base}`}
                                                              style={{width: "14px", height: "14px"}}></span>
                                                        <span className={`${style.hidden}`}>팝업</span>
                                                    </button>
                                                    <div className={`${style.right_box}`}>
                                                        <span className={style.price}>
                                                            <span className={`${style.spot}`}>+ 0</span>
                                                            <span className={`${style.unit}`}
                                                                  style={{marginLeft: "2px"}}>원</span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className={`${style.mt_12} ${style.payments_item}`}>
                                                    <p className={`${style.label}`}>상품 할인</p>
                                                    <div className={`${style.right_box}`}>
                                                        <span className={style.price}>
                                                             <span className={`${style.spot}`}
                                                                   style={{color: "#5055b1"}}> - {formatPrice(totalDiscount)}</span>
                                                            <span className={`${style.unit}`}
                                                                  style={{marginLeft: "2px"}}>원</span>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {showOrderModal && (
                                            <GenericModal
                                                title="1개의 상품을"
                                                description="담으시겠어요?"
                                                confirmText="확인"
                                                cancelText="취소"
                                                onClose={() => setShowOrderModal(false)}
                                                onConfirm={() => {
                                                    setShowOrderModal(true)
                                                }}
                                            />
                                        )}
                                        <div className={style.info_box}>
                                            <ul className={style.pl_0}>
                                                <li className={`${style.payments_item}`}>
                                                    <p className={` ${style.label} ${style.amount_pay}`}>결제 예정 금액</p>
                                                    <div className={`${style.right_box}`}>
                                                        <span className={style.price}>
                                                            <span
                                                                className={`${style.total_price}`}>{formatPrice(totalAmount)}</span>
                                                            <span className={`${style.unit}`}
                                                                  style={{verticalAlign: "1px"}}>원</span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className={`${style.payments_item} ${style.mt_10}`}>
                                                    <p className={style.label}
                                                       style={{fontSize: "13px", lineHeight: "19px"}}>적립 예정 포인트</p>
                                                    <button type="button"
                                                            className={`${style.btn_info_ques} ${style.btn_class} ${style.p_0}`}>
                                                        <span className={`${style.ico_question} ${style.btn_base}`}
                                                              style={{width: "14px", height: "14px"}}></span>
                                                        <span className={`${style.hidden}`}>팝업</span>
                                                    </button>
                                                    <div className={style.right_box}>
                                                        <span className={style.price}>
                                                            <span
                                                                className={`${style.amount_price}`}>{formatPrice(totalPoint)}</span>
                                                            <span className={`${style.unit}`}
                                                                  style={{marginLeft: "2px"}}>P</span>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={`${style.btn_order} ${style.btn_wrap} ${style.mt_30}`}>
                                            <button type="button"
                                                    onClick={() => setShowOrderModal(true)}
                                                    className={`${style.btn_pay} ${style.btn_class} ${style.btn_lg}`}>
                                                <span className={style.btn_base}>
                                                    주문하기 (
                                                    <span className={style.sum_total}>1</span>
                                                    )
                                                </span>
                                            </button>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className={`${style.mt_10} ${style.btn_wrap}`}>
                                        <button type="button"
                                                className={`${style.btn_primary} ${style.btn_md} ${style.btn_class}`}>
                                            <span className={style.btn_base}>
                                                바로드림 주문 (
                                                <span>10000000</span>
                                                )
                                            </span>
                                        </button>
                                    </div>
                                    <div className={`${style.mt_10} ${style.btn_wrap} ${style.justify}`}></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        {/*!-- // 장바구니 목록*/}
                    </div>
                </section>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <div></div>
            </main>
            <footer></footer>
        </div>
    );
}
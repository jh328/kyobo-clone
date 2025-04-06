import style from "./cart.module.css";
import Link from "next/link";

export default function Page() {
    return (
        <div className={style.wrapper}>
            <header/>
            <div>{/*플로팅 액션 버튼, 플로팅 고객센터 버튼 그룹, */}</div>
            장바구니
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
                                            <div className={`${style.ml_12} ${style.order}`}>
                                                <button
                                                    className={`${style.btn_gray} ${style.btn_sm} ${style.btn_base} `}>
                                                    <span
                                                        className={`${style.ico_locate_black} ${style.btn_base} ${style.btn_locate}`}></span>
                                                    <span className={`${style.text}`}>로그아웃 하면 안보여지고, 로그인 하면 보여짐 display none값 줘야한다.</span>
                                                </button>
                                            </div>
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
                                    <ul>
                                        <li className={style.h67}>
                                            <div className={`${style.contents_inner}`}>
                                                <div className={style.cart_calculator}>
                                                    <div></div>
                                                    <div className={`${style.free}`} style={{width:"246px"}}>
                                                        <em className={style.pay_text}>5만원</em>
                                                        이상 구매 시 &nbsp;
                                                        <b>추가 적립!</b>
                                                        <button type="button" className={`${style.btn_base} ${style.btn_info_popup}`}>
                                                            <span className={`${style.ico_question} ${style.btn_base} ${style.que}`}></span>
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
                                                        <button type="button" className={`${style.btn_gray} ${style.btn_xs} ${style.btn_class}`}>
                                                            <Link href="">상품 추가하기</Link>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>
                                        </li>
                                        <li className={`${style.mt_0} ${style.fold_box} ${style.box}`}>
                                            <div className={`${style.box_header} ${style.fold_box_header} ${style.header}`}>
                                                <span className={`${style.form_chk}`} style={{zIndex:"2"}}>
                                                    <input type="text" className={style.form_input}/>
                                                    <label htmlFor="" className={`${style.form_label} ${style.label_head} ${style.label_all}`}>
                                                        교보문고/바로드림
                                                    </label>
                                                </span>
                                                <button></button>
                                            </div>
                                            <div></div>
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
                                <div></div>
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
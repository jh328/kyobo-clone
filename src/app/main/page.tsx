import SearchHeader from "@/app/components/search_header/search";
import "./Main.modules.css"
import Link from "next/link";

export default function page() {
    return (
        <div className="wrapper">
            <SearchHeader/>
            <main className="container_wrapper my_home">
                <section className="breadcrumb_wrap">
                    <div className="breadcrumb_inner">
                        <ol className="breadcrumb_list">
                            <li className="breadcrumb_item">
                                <Link href="/" className="home_link home_item">HOME</Link>
                            </li>
                            <li className="breadcrumb_item breadcrumb_my">
                                <Link href="/main" className="breadcrumb_mypage">마이</Link>
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="contents_wrap aside">
                    <div className="contents_inner">
                        <aside className="aside_wrap">
                            <div className="body">
                                <div className="my_profifle_area">
                                    <div className="profile_thumb_box">
                                        <Link href="" className="btn_setting">
                                            <div className="thumb_box"></div>
                                            <span className="hidden">프로필 설정 바로기기</span>
                                        </Link>
                                    </div>
                                    <div className="profile_name_box">
                                        <span className="name wrap">
                                            <b className="nickname">홍길동</b>
                                            님
                                        </span>
                                        <span className="badge type_icon">
                                            <Link href="" className="badge_lg pill bp">
                                                <span className="text">프렌즈</span>
                                            </Link>
                                            <span className=""></span>
                                            <Link href="" className=""></Link>
                                        </span>
                                    </div>
                                    <ul className="profile_info_list">
                                        <li className="info_item item_mi">
                                            <Link href="" className="info_link">
                                                <span className="title">찜</span>
                                                <span className="val">15</span>
                                            </Link>
                                        </li>
                                        <li className="info_item item_pu">
                                            <Link href="" className="info_link">
                                                <span className="title">리스트</span>
                                                <span className="val">15</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="snb_wrap">
                                    <ul>
                                        <li>
                                            <Link href="" className="snb_link">쇼핑내역</Link>
                                            <ul className="m0">
                                                <li>
                                                    <Link href="" className="snb_item_link">주문/배송목록</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">선물함</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">매장 구매 내역</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">영수증 조회 / 후 적립</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="ul_m_top">
                                            <Link href="" className="snb_link">라이브러리</Link>
                                            <ul className="m0">
                                                <li>
                                                    <Link href="" className="snb_item_link">메인</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">리스트</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">코멘트</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">Klover리뷰</Link>
                                                </li>
                                                <li>
                                                    <Link href="" className="snb_item_link">문장수집</Link>
                                                </li>
                                                <li>
                                                    <Link href="" className="snb_item_link">찜</Link>
                                                </li>
                                                <li>
                                                    <Link href="" className="snb_item_link">구독</Link>
                                                </li>
                                                <li>
                                                    <Link href="" className="snb_item_link">e-라이브러리</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="ul_m_top">
                                            <Link href="" className="snb_link">활동내역</Link>
                                            <ul className="m0">
                                                <li>
                                                    <Link href="" className="snb_item_link">커뮤니티 활동 내역</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">이벤트 참여 내역</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">문화공간 이용 내역</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="ul_m_top">
                                            <Link href="" className="snb_link">나의 통장</Link>
                                            <ul className="m0">
                                                <li>
                                                    <Link href="" className="snb_item_link">통합포인트</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">e교환권</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">기프트카드</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">교보캐시</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">쿠폰</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">교보e캐시</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">예치금</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="ul_m_top">
                                            <Link href="" className="snb_link">문의내역</Link>
                                            <ul className="m0">
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">1:1 문의</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">핫트랙스 상품 문의내역</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">업체배송 문의내역</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="ul_m_top">
                                            <Link href="" className="snb_link">회원정보</Link>
                                            <ul className="m0">
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">회원정보수정</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">로그인 설정</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">마케팅 수신 설정</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">교보북클럽 카드</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">MY매장</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">배송 주소록</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="ul_m_top">
                                            <Link href="" className="snb_link">알림센터</Link>
                                            <ul className="m0">
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">알림함</Link>
                                                </li>
                                                <li className="m-top">
                                                    <Link href="" className="snb_item_link">알림신청내역</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        <section className="section_wrap">
                            {/*h1태그 있는 곳 */}
                            <div className="switch_toggle_wrap">
                                <div className="toggle_title">
                                    <div className="toggle_box">
                                        <button className="btn_switch btn_alarm" type="button">
                                            <span className="text">알림</span>
                                        </button>
                                        <button className="btn_switch btn_recommendation" type="button">
                                            <span className="text">추천</span>
                                        </button>
                                    </div>
                                    <ul className="toggle_list">
                                        <li className="toggle_item">
                                            <button className="btn_toggle_item active" type="button">
                                                <span className="text">전체</span>
                                            </button>
                                        </li>
                                        <li className="toggle_item toggle_item_m0">
                                            <button type="button" className="btn_toggle_item">
                                                <span className="text">이벤트 · 혜택</span>
                                            </button>
                                        </li>
                                    </ul>
                                    <ul className="toggle_list toggle_none"></ul>
                                </div>
                                <div className="toggle_content">
                                    <div></div>
                                    <div className="custom_swiper_wrap">
                                        <div className="swi_container">
                                            <ul className="prod_blur"
                                                style={{transitionDuration: "0", transform: "translate3d(0,0,0)"}}>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고)🔔컬처라운지 이벤트 3월 마지막 기회</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고)💌오늘만 특가 : 밸런스온 프리미엄시트</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li className="blur_items blur_slide">
                                                    <div className="blur_wrap">
                                                        <Link href="" className="blur_inner blur_link">
                                                            <div className="my_header">
                                                                <span className="alarm_state">이벤트 · 혜택</span>
                                                                <span className="state_desc">새소식</span>
                                                            </div>
                                                            <div className="alarm_box">
                                                                <div className="alarm_desc">(광고) 어떻게 교재가 반값?</div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="control_box">
                                            <button type="button" className="button_prev">
                                                <span className="hidden">이전</span>
                                            </button>
                                            <button type="button" className="button_next">
                                                <span className="hidden">다음</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="benfit_info_wrap"></div>
                            <div className="여기는 마우스 손 올리면 안나옴"></div>
                            <div className="여기는 마우스 손 올리면 안나옴"></div>
                            <div className="title_wrap"></div>
                            <ul className="my_library_list"></ul>
                            <div className="my_activity_wrap"></div>
                            {/*스크립트 파일*/}
                            {/*메인 테그에서 내가 설정한 태그들 제외하고서 푸터 빼고 안해도 됨. */}
                        </section>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    );
};
'use client'
import SearchHeader from "@/app/components/search_header/search";
import "./MyPage.modules.css"
import Link from "next/link";
import Footer from "@/app/components/footer/Footer";
import {useSession} from "next-auth/react";

export default function MyPage() {
    const {data: session} = useSession();

    let userName;
    if (session && session.user?.name) {
        userName = session.user.name;
    }
    console.log("카카오 유저 확인 : ",userName)

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
                                            <b className="nickname">{userName}님</b>
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
                                                                <div className="alarm_desc">(광고)🔔컬처라운지 이벤트 3월 마지막 기회
                                                                </div>
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
                                                                <div className="alarm_desc">(광고)💌오늘만 특가 : 밸런스온 프리미엄시트
                                                                </div>
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
                            <div className="benfit_info_wrap">
                                <div className="benfit_ico_group">
                                    <div className="benfit_item benfit_a">
                                        <Link href="" className="benefit_link">
                                            <span className="benefit_title">통합포인트</span>
                                            <div className="benefit_val">
                                                <span className="my_val">1,120</span>
                                                <span className="point">P</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="benfit_item benfit_box">
                                        <Link href="" className="benefit_link">
                                            <span className="benefit_title">e교환권</span>
                                            <div className="benefit_val">
                                                <span className="my_val">1.000,000</span>
                                                <span className="point">원</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="benfit_item benfit_box">
                                        <Link href="" className="benefit_link">
                                            <span className="benefit_title">기프트카드</span>
                                            <div className="benefit_val">
                                                <span className="my_val">100</span>
                                                <span className="point">장</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="benfit_item benfit_box">
                                        <Link href="" className="benefit_link">
                                            <span className="benefit_title">교보캐시</span>
                                            <div className="benefit_val">
                                                <span className="my_val">5,000,000,000</span>
                                                <span className="point">원</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="benfit_sub_group">
                                    <div className="benefit_sub_box pl">
                                        <Link href="" className="box_link">
                                            <span className="b_title">쿠폰</span>
                                            <div className="b_val">
                                                <span className="my_val">10</span>
                                                <span className="point">장</span>

                                            </div>
                                        </Link>
                                    </div>
                                    <div className="benefit_sub_box line">
                                        <Link href="" className="box_link">
                                            <span className="b_title">교보e캐시</span>
                                            <div className="b_val">
                                                <span className="my_val">1,000,000,000</span>
                                                <span className="point">원</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="benefit_sub_box line">
                                        <Link href="" className="box_link">
                                            <span className="b_title">예치금</span>
                                            <div className="b_val">
                                                <span className="my_val">1,000</span>
                                                <span className="point">원</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="여기는 마우스 손 올리면 안나옴"></div>
                            <div className="여기는 마우스 손 올리면 안나옴"></div>
                            <div className="title_wrap">
                                <p className="title_head">라이브러리 리스트</p>
                                <div className="right_area">
                                    <Link href="" className="btn_more_view">
                                        <span className="text_more">더보기</span>
                                        <span className="ico_plus"></span>
                                    </Link>
                                </div>
                            </div>
                            <ul className="my_library_list">
                                <li className="my_library_item">
                                    <div className="my_library_box">
                                        <div className="my_library_bg">
                                            <img src="/images/book/9791158391720.jpg" alt="코어자바스크립트"
                                                 className="my_img"/>
                                        </div>
                                        <div className="my_library_box_inner">
                                            <Link href="" className="my_library_link">
                                                <div className="my_library_img_box">
                                                    <div className="img_box">
                                                        <img src="/images/book/9791158391720.jpg" alt=""
                                                             className="img_book"/>
                                                    </div>
                                                </div>
                                                <div className="my_library_info">
                                                    <span className="my_library_title">나의 보관함</span>
                                                    <div className="thumb_list">
                                                        <span className="thumb_add thumb">
                                                            <span className="text_add">+2</span>{/*데이터 넣어야함.*/}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="my_library_item">
                                    <div className="my_library_box">
                                        <div className="my_library_bg">
                                            <img src="/images/book/9791169212540.jpg" alt="코어자바스크립트"
                                                 className="my_img"/>
                                        </div>
                                        <div className="my_library_box_inner">
                                            <Link href="" className="my_library_link">
                                                <div className="my_library_img_box radius">
                                                    <div className="img_box ">
                                                        <img src="/images/book/9791169212540.jpg" alt=""
                                                             className="img_book"/>
                                                    </div>
                                                </div>
                                                <div className="my_library_info">
                                                    <span className="my_library_title">#구매</span>
                                                    <div className="thumb_list">
                                                        <span className="thumb_add thumb">
                                                            <span className="text_add">+150</span>{/*데이터 넣어야함.*/}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="my_library_item mr_zero">
                                    <div className="no_data_line">
                                        <p className="no_data_desc">
                                            나만의 리스트를 만들고
                                            <br/>
                                            나의 기억을 기록해보세요...
                                        </p>
                                        <button type="button" className="btn_add_cont">
                                            <span className="ico_add_cont"></span>
                                            <span className="text_additional">추가</span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <div className="my_activity_wrap">
                                <div className="continue_view_box">
                                    <div className="title_wrap titme_sizi_md">
                                        <h2 className="title_head">이어보기</h2>
                                    </div>
                                    <div className="continue_view_list">
                                        <div className="view_item">
                                            <div className="continue_prod no_data">
                                                <p className="no_data_desc font">독서/시청 중인 상품/콘텐츠가 없습니다.</p>
                                                <p className="no_data_sdesc">
                                                    Picks추천과 함께
                                                    <br/>
                                                    책 읽는 습관을 길러보세요.
                                                </p>
                                                <div className="continue_prod_swiper">
                                                    <div className="swiper_container">
                                                        <ul className="swiper_wrapper"
                                                            style={{transform: "transform3d(0,0,0)"}}>
                                                            <li className="swiper_slide">
                                                                <div className="prod_area">
                                                                    <div className="prod_thumb">
                                                                        <Link href="" className="prod_link_a">
                                                                            <span className="img_item_book">
                                                                                <img
                                                                                    src="/images/book/9791158394646.jpg"
                                                                                    alt="" className="img_react"/>
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                    <div className="prod_info">
                                                                        <Link href="" className="books_title">
                                                                            <span className="prod_name">리액트의 핵심 개념과 동작원리부터 Next.js까지 리액트의 모든 것</span>
                                                                        </Link>
                                                                        <span className="prod_author">김용찬 저자(글)</span>
                                                                        <button type="button"
                                                                                className="button_list btn_list">
                                                                            <span
                                                                                className="bookasa ico_list_plus btn_list_plus"></span>
                                                                            <span className="add_text">리스트 추가</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <div></div>
                                                    </div>
                                                    <div className="swiper_control_box"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="activity_more_box">
                                    <div className="my_quick_link_box">
                                        <div className="title_wrap pb">
                                            <p className="title_head">바로가기</p>
                                        </div>
                                        <div className="no_data_line h150">
                                            <p className="no_data_desc">자주 쓰는 메뮤, 꺼내 두고 사용해요</p>
                                            <button type="button" className="btn_add_cont">
                                                <span className="ico_add_cont"></span>
                                                <span className="text_additional">추가하기PC</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="sam_voucher_wrap">
                                        <div className="sam_info_box box">
                                            <Link href="" className="sam_info_link">
                                                <span className="info_desc">
                                                    eBook부터 종이책까지,
                                                    <br/>
                                                    폭넓은 독서생활의 시작
                                                    <br/>
                                                    <span className="sam_logo">
                                                        <img src="/images/common/img_my_sam_logo@2x.png"
                                                             className="sam_img" alt=""/>
                                                    </span>
                                                </span>
                                                <span className="btn_size_sm">
                                                    <span className="sm_text">이용안내</span>
                                                    <span className="ico_arw"></span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="sam_info_box mar_left">
                                            <Link href="" className="sam_info_link">
                                                <span className="info_desc">
                                                    기억하고 기록하는
                                                    <br/>
                                                    나만의 공간,
                                                    <br/>
                                                    <span className="fw_bold">
                                                      라이브러리
                                                    </span>
                                                </span>
                                                <span className="btn_size_sm">
                                                    <span className="sm_text">라이브러리</span>
                                                    <span className="ico_arw"></span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};
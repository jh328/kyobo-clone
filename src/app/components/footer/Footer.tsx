import "./Footer.modules.css"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer_wrapper">
            <div className="footer_header default">
                <div className="footer_inner">
                    <div className="notice_wrap">
                        <span className="notice_text">공지사항</span>
                        <Link href="" className="notice_link">[공지] 프론트엔드 개발자 송준한 취뽀 곧 예정</Link>
                        <div className="footer_right_area">
                            <Link href="" className="btn_more_plus_footer">
                                <span className="text">더보기</span>
                                <span className="ico_plus"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="notice_wrap winner">
                        <span className="notice_text">합격자 발표</span>
                        <Link href="" className="notice_link">합격자 : 송준한 합격을 축하드립니다.</Link>
                        <div className="footer_right_area">
                            <Link href="" className="btn_more_plus_footer">
                                <span className="text">더보기</span>
                                <span className="ico_plus"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="welcome_main_service_area">
                    <div className="area_footer_inner">
                        <div className="service_groop_area">
                            <div className="service_group_box">
                                <Link href="" className="a_group_name title_group_name">회원혜택</Link>
                                <ul className="service_list">
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">교보북클럽</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">등급 혜택</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">신규 회원 혜택</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">Prestige Lounge</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">제휴 혜택</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="service_group_box bl_pl">
                                <Link href="" className="title_group_name">쇼핑 TIP</Link>
                                <ul className="service_list">
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">제휴 혜택</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">교보문고 기프트카드</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">대량 구매</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">리딩 트리</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="service_group_box bl_pl">
                                <Link href="" className=" title_group_name">빠른 서비스</Link>
                                <ul className="service_list">
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">북클럽카드 등록</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">영수증 후 적립</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">영수증 후 적립</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">교보캐시 조회.충전</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">교보e캐시 조회.충전</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">기프트카드 조회.충전</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">협력사 여러분</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="service_group_box bl_pl">
                                <Link href="" className="title_group_name">교보문고 소식</Link>
                                <ul className="service_list">
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">인스타그램(교보문고)</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">인스타그램(교보문고 온라인)</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">페이스북(교보문고 온라인)</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">X(교보문고 온라인)</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">유튜브(교보문고 온라인)</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">교보문고 디자인 시스템</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="service_group_box bl_pl">
                                <Link href="" className="a_group_name title_group_name">FAQ</Link>
                                <ul className="service_list">
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">주문.결제</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">eBook</Link>
                                    </li>
                                    <li className="service_item">
                                        <Link href="" className="item_link_cl">도서.상품정보</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_body">
                <div className="f_inner">
                    <div className="footer_logo_box">
                        <div className="f_logo_box">
                            <Link href="" className="logo_link">
                                <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="" className="img_footer"/>
                            </Link>
                        </div>
                        <div className="right_box">
                            <div className="family_site_box">
                                <button className="btn_family_site">
                                    <span className="text family_text">Family Site</span>
                                </button>
                                <ul></ul>
                            </div>
                            <div className="sns_share_box">
                                <Link href="" className="sns_youtube sns_share">
                                    <span className="hidden">유튭 공유</span>
                                </Link>
                                <Link href="" className="sns_face sns_share sns_ml">
                                    <span className="hidden">페북 공유</span>
                                </Link>
                                <Link href="" className="sns_inst sns_share sns_ml">
                                    <span className="hidden">인스타 공유</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer_contents_wrap"></div>
                </div>
            </div>
        </footer>
    )
};
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
                    <div className="footer_contents_wrap">
                        <div className="footer_contents_left">
                            <div className="footer_menu_box">
                                <ul className="footer_menu_list">
                                    <li className="footer_menu_item no-before">
                                        <Link href="" className="footer_menu_link">회사소개</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link">이용약관</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link item_privacy">개인정보처리방침</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link">청소년보호정책</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link">대량주문안내</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link">협력사여러분</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link">채용정보</Link>
                                    </li>
                                    <li className="footer_menu_item">
                                        <Link href="" className="footer_menu_link">광고소개</Link>
                                    </li>
                                </ul>
                            </div>
                            <address className="footer_info_box">
                                <span className="info_text">대표이사: 안병현, 김상훈</span>
                                <span className="gap">|</span>
                                <span className="info_text">서울특별시 종로구 종로1</span>
                                <span className="gap"></span>
                                <span className="info_text">사업자등록번호:102-81-11670</span>
                                <br/>
                                <span className="info_text call">대표전화 : 1544-1900(발신자 부담전화) </span>
                                <span className="gap"></span>
                                <span className="info_text">FAX:0502-987-5711(지역번호 공통)</span>
                                <span className="gap"></span>
                                <span className="info_text">서울특별시 통신판매업신고번호 : 제 653호</span>
                                <Link href="">혹시 모르니 패스~</Link>
                            </address>
                            <div className="copyright">
                                © KYOBO BOOK CENTRE
                            </div>
                        </div>
                        <div className="footer_contents_right">
                            <div className="footer_service">
                                <span className="service_text">토스페이먼츠 구매인전서비스</span>
                                <Link href="" className="btn_footer_link">서비스 가입 확인</Link>
                                <p className="service_desc">
                                    고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한
                                    <br/>
                                    토스페이먼츠의 구매안전한서비스를 이용하실 수 있습니다.
                                </p>
                            </div>
                            <div className="footer_mark_isms">
                                <Link href="" className="mark_link">
                                    정보보호관리체계
                                    <br/>
                                    ISMS 인증획득
                                </Link>
                                <p className="mark_desc">
                                    [인증범위] 인터넷 교보문고 및 브랜드 서비스 운영
                                    <br/>
                                    [유효기간] 2023.11.15 ~ 2026.11.14
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
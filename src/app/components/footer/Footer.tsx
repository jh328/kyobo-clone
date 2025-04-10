import styles from "./Footer.module.css"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer_wrapper}>
            <div className={`${styles.footer_header} ${styles.default}`}>
                <div className={styles.footer_inner}>
                    <div className={styles.notice_wrap}>
                        <span className={styles.notice_text}>공지사항</span>
                        <Link href="" className={styles.notice_link}>[공지] 프론트엔드 개발자 송준한 취뽀 곧 예정</Link>
                        <div className={styles.footer_right_area}>
                            <Link href="" className={styles.btn_more_plus_footer}>
                                <span className={styles.text}>더보기</span>
                                <span className={styles.ico_plus}></span>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles.notice_wrap} ${styles.winner}`}>
                        <span className={styles.notice_text}>합격자 발표</span>
                        <Link href="" className={styles.notice_link}>합격자 : 송준한 합격을 축하드립니다.</Link>
                        <div className={styles.footer_right_area}>
                            <Link href="" className={styles.btn_more_plus_footer}>
                                <span className={styles.text}>더보기</span>
                                <span className={styles.ico_plus}></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.welcome_main_service_area}>
                    <div className={styles.area_footer_inner}>
                        <div className={styles.service_groop_area}>
                            <div className={styles.service_group_box}>
                                <Link href="" className={`${styles.a_group_name} ${styles.title_group_name}`}>회원혜택</Link>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>교보북클럽</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>등급 혜택</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>신규 회원 혜택</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>Prestige Lounge</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>제휴 혜택</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.service_group_box} ${styles.bl_pl}`}>
                                <Link href="" className={styles.title_group_name}>쇼핑 TIP</Link>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>제휴 혜택</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>교보문고 기프트카드</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>대량 구매</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>리딩 트리</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.service_group_box} ${styles.bl_pl}`}>
                                <Link href="" className={styles.title_group_name}>빠른 서비스</Link>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>북클럽카드 등록</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>영수증 후 적립</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>영수증 후 적립</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>교보캐시 조회.충전</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>교보e캐시 조회.충전</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>기프트카드 조회.충전</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>협력사 여러분</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.service_group_box} ${styles.bl_pl}`}>
                                <Link href="" className={styles.title_group_name}>교보문고 소식</Link>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>인스타그램(교보문고)</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>인스타그램(교보문고 온라인)</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>페이스북(교보문고 온라인)</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>X(교보문고 온라인)</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>유튜브(교보문고 온라인)</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>교보문고 디자인 시스템</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${styles.service_group_box} ${styles.bl_pl}`}>
                                <Link href="" className={`${styles.a_group_name} ${styles.title_group_name}`}>FAQ</Link>
                                <ul className={styles.service_list}>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>주문.결제</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>eBook</Link>
                                    </li>
                                    <li className={styles.service_item}>
                                        <Link href="" className={styles.item_link_cl}>도서.상품정보</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_body}>
                <div className={styles.f_inner}>
                    <div className={styles.footer_logo_box}>
                        <div className={styles.f_logo_box}>
                            <Link href="" className={styles.logo_link}>
                                <img src="/images/common/img_logo_kyobo_footer@2x.png" alt="" className={styles.img_footer}/>
                            </Link>
                        </div>
                        <div className={styles.right_box}>
                            <div className={styles.family_site_box}>
                                <button className={styles.btn_family_site}>
                                    <span className={`${styles.text} ${styles.family_text}`}>Family Site</span>
                                </button>
                                <ul></ul>
                            </div>
                            <div className={styles.sns_share_box}>
                                <Link href="" className={`${styles.sns_youtube} ${styles.sns_share}`}>
                                    <span className={styles.hidden}>유튭 공유</span>
                                </Link>
                                <Link href="" className={`${styles.sns_face} ${styles.sns_share} ${styles.sns_ml}`}>
                                    <span className={styles.hidden}>페북 공유</span>
                                </Link>
                                <Link href="" className={`${styles.sns_inst} ${styles.sns_share} ${styles.sns_ml}`}>
                                    <span className={styles.hidden}>인스타 공유</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_contents_wrap}>
                        <div className={styles.footer_contents_left}>
                            <div className={styles.footer_menu_box}>
                                <ul className={styles.footer_menu_list}>
                                    <li className={`${styles.footer_menu_item} ${styles.no_before}`}>
                                        <Link href="" className={styles.footer_menu_link}>회사소개</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={styles.footer_menu_link}>이용약관</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={`${styles.footer_menu_link} ${styles.item_privacy}`}>개인정보처리방침</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={styles.footer_menu_link}>청소년보호정책</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={styles.footer_menu_link}>대량주문안내</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={styles.footer_menu_link}>협력사여러분</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={styles.footer_menu_link}>채용정보</Link>
                                    </li>
                                    <li className={styles.footer_menu_item}>
                                        <Link href="" className={styles.footer_menu_link}>광고소개</Link>
                                    </li>
                                </ul>
                            </div>
                            <address className={styles.footer_info_box}>
                                <span className={styles.info_text}>대표이사: 안병현, 김상훈</span>
                                <span className={styles.gap}>|</span>
                                <span className={styles.info_text}>서울특별시 종로구 종로1</span>
                                <span className={styles.gap}></span>
                                <span className={styles.info_text}>사업자등록번호:102-81-11670</span>
                                <br/>
                                <span className={`${styles.info_text} ${styles.call}`}>대표전화 : 1544-1900(발신자 부담전화) </span>
                                <span className={styles.gap}></span>
                                <span className={styles.info_text}>FAX:0502-987-5711(지역번호 공통)</span>
                                <span className={styles.gap}></span>
                                <span className={styles.info_text}>서울특별시 통신판매업신고번호 : 제 653호</span>
                                <Link href="">혹시 모르니 패스~</Link>
                            </address>
                            <div className={styles.copyright}>
                                © KYOBO BOOK CENTRE
                            </div>
                        </div>
                        <div className={styles.footer_contents_right}>
                            <div className={styles.footer_service}>
                                <span className={styles.service_text}>토스페이먼츠 구매인전서비스</span>
                                <Link href="" className={styles.btn_footer_link}>서비스 가입 확인</Link>
                                <p className={styles.service_desc}>
                                    고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한
                                    <br/>
                                    토스페이먼츠의 구매안전한서비스를 이용하실 수 있습니다.
                                </p>
                            </div>
                            <div className={styles.footer_mark_isms}>
                                <Link href="" className={styles.mark_link}>
                                    정보보호관리체계
                                    <br/>
                                    ISMS 인증획득
                                </Link>
                                <p className={styles.mark_desc}>
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
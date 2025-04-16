import style from "./Review.module.css"
import Link from "next/link";
import {useState} from "react";
import {ReviewType} from "@/app/components/reviews/ReviewSection";

type ReviewModalProps = {
    onClose: () => void;
    onSubmit: (review: ReviewType) => void;
}


export default function ReviewModal({onClose, onSubmit}: ReviewModalProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [content, setContent] = useState("");

    const tags = ["집중돼요", "도움돼요", "쉬웠어요", "최고예요", "추천해요"];

    // 리뷰 등록 유효성 검사
    const registrationInspection = setSelectedTag !== null && content.trim().length >= 10;

    const handleSubmit = () => {

        if (!selectedTag) return;

        const newReview: ReviewType = {
            id: crypto.randomUUID(),
            period: new Date(),
            content,
            tags: [selectedTag] //tags:[selectedTag!] 이것도 좋지만, 조건부로 처리하는게 좋다고 함.
        }
        console.log("등록될 리뷰, ", newReview)
        onSubmit(newReview);
    }

    console.log("content : ", content);
    console.log("setContent : ", setContent);

    return (
        <div className={`${style.base}`}>
            <div className={`${style.ui_dialog} ${style.dialog}`}>
                <div></div>
                <div className={`${style.dialog_content} ${style.ui_widget_content}`}>
                    {/*!--> x버튼*/}
                    <button
                        onClick={onClose}
                        type="button" className={`${style.btn_base} ${style.btn_close}`}>
                        <span className={`${style.ico_close} ${style.btn_base}`}></span>
                        <span className={style.hidden}>닫기</span>
                    </button>
                    {/*!-- //x버튼*/}

                    {/*!--> 헤더*/}
                    <div className={`${style.header} ${style.dialog_header}`}>
                        <div className={`${style.dialog_title}`}>
                            리뷰작성
                        </div>
                    </div>
                    {/*!-- //헤더*/}

                    {/*!--> 내용*/}
                    <div className={`${style.dialog_contents} ${style.contents}`}>
                        <div className={`${style.custom_scroll_wrap} ${style.mh}`}>
                            <div className={`${style.simplebar_wrapper} ${style.margin_all}`}>
                                <div>
                                    <div></div>

                                    <div className={`${style.simplebar_placeholder}`}>

                                    </div>
                                </div>
                                <div className={`${style.mask}`}>
                                    <div className={`${style.simplebar_offset}`}>
                                        <div className={`${style.simplebar_content}`}>
                                            <div className={`${style.hfull} ${style.hm} ${style.inner}`}>
                                                <div className={`${style.custom_scroll_inner}`}>
                                                    {/*!--> 책 사진*/}
                                                    <div className={`${style.thumbnail_round_box}`}>
                                                        <div className={`${style.prod_area}`}>
                                                            <div className={`${style.prod_thumb_box}`}>
                                                                <Link href="" className={`${style.prod_link}`}>
                                                                        <span className={`${style.img_box}`}>
                                                                            <img
                                                                                src="/images/book/javaScriptDeepDive.jpg"
                                                                                alt="" className={`${style.img}`}/>
                                                                        </span>
                                                                </Link>
                                                            </div>
                                                            <div className={`${style.prod_info_box}`}>
                                                                <Link href="" className={`${style.prod_info}`}>
                                                                        <span
                                                                            className={`${style.prod_name}`}>책 이름</span>
                                                                </Link>
                                                                <div className={`${style.rating_container}`}>
                                                                    <div></div>
                                                                    <div
                                                                        className={`${style.rating_stars} ${style.mt_2} ${style.wh_100}`}>
                                                                        <span></span>
                                                                        <span className={`${style.filled_stars}`}>
                                                                                <span className={`${style.star}`}>
                                                                                    <i className={`${style.icon_star}`}>
                                                                                    </i>
                                                                                </span>
                                                                                 <span className={`${style.star}`}>
                                                                                    <i className={`${style.icon_star}`}>

                                                                                    </i>
                                                                                </span>
                                                                                 <span className={`${style.star}`}>
                                                                                    <i className={`${style.icon_star}`}>

                                                                                    </i>
                                                                                </span>
                                                                                 <span className={`${style.star}`}>
                                                                                    <i className={`${style.icon_star}`}>

                                                                                    </i>
                                                                                </span>
                                                                            </span>
                                                                    </div>
                                                                    <div
                                                                        className={`${style.caption} ${style.caption_num}`}>
                                                                            <span
                                                                                className={`${style.caption_badge} ${style.badge}`}>
                                                                                <span className={`${style.lh}`}>
                                                                                    <span>10점 중 10점</span>
                                                                                    <span
                                                                                        className={`${style.val}`}>10</span>
                                                                                    <span
                                                                                        className={`${style.total}`}>10</span>
                                                                                </span>
                                                                            </span>
                                                                    </div>
                                                                </div>
                                                                <input type="text"
                                                                       className={`${style.rating_input}`}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*!-- //책 사진*/}

                                                    {/*!--> 책 구매 후 경고*/}
                                                    <div className={`${style.info_text_box} ${style.mt_10}`}>
                                                        <ul className={`${style.pl_0}`}>
                                                            <li className={`${style.bul_item_dot} ${style.bul_base} ${style.font_base}`}>
                                                                구매 후 90일 이내 작성 시,
                                                                <span
                                                                    className={`${style.fc_black}`}>e교환권 200원</span>
                                                                (최초 1회)
                                                            </li>
                                                            <li className={`${style.bul_item_dot} ${style.bul_base} ${style.font_base} ${style.mt_6}`}>
                                                                한 달 후 리뷰 작성시
                                                                <span
                                                                    className={`${style.fc_black}`}>e교환권 100원</span>
                                                                (최초 1회)
                                                            </li>
                                                            <li className={`${style.bul_item_dot} ${style.bul_base} ${style.font_base} ${style.mt_6}`}>
                                                                리워드 제외 상품 :
                                                                마이 &gt;     라이브러리 &gt;     Klover리뷰 &gt;     리워드 안내 참고₩
                                                            </li>
                                                            <li className={`${style.bul_item_dot} ${style.bul_base} ${style.font_base} ${style.mt_6}`}>
                                                                리뷰 작성시 리워드는 다음 날 제공 (단, 상품 발송 전 작성시 상품도착 다음날 제공)
                                                            </li>
                                                            <li className={`${style.bul_item_dot} ${style.bul_base} ${style.font_base} ${style.mt_6}`}>
                                                                펀딩 리뷰는 마이 &gt; 라이브러리 &gt; Klover리뷰 에서 작성가능
                                                                <Link href=""
                                                                      className={`${style.btn_xxs} ${style.btn_gray} ${style.ml_all}`}>
                                                                    <span className={`${style.text}`}>펀딩 리뷰 작성하기</span>
                                                                    <span className={`${style.ico_arw}`}></span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/*!-- //책 구매 후 경고*/}

                                                    {/*!--> 태그 선택*/}
                                                    <div className={`${style.mt_20}`}>
                                                        {/*!--> 감성 태그*/}
                                                        <div className={`${style.form_box_null}`}>
                                                            <div className={`${style.form_title}`}>
                                                                <span
                                                                    className={`${style.info_text} ${style.form_label}`}>
                                                                    감성태그
                                                                    <span className={`${style.required}`}>
                                                                        <span className={style.hidden}>필수입력</span>
                                                                    </span>
                                                                </span>
                                                                <p className={`${style.bul_base} ${style.p_text}`}>가장 와
                                                                    닿는 하나의 키워드를 선택해주세요.</p>
                                                            </div>
                                                            <div className={`${style.mt_10} ${style.gray_color}`}>
                                                                <div className={`${style.size_lg}`}>
                                                                    {tags.map((tag) => (
                                                                        <button type="button"
                                                                                key={tag}
                                                                                className={`${style.btn_tab_base} ${style.tag} ${selectedTag === tag ? style.selected_tag : ""}`}
                                                                                onClick={() => {
                                                                                    console.log("잘 클릭 됨", tag)
                                                                                    setSelectedTag(tag)
                                                                                }}
                                                                        >
                                                                            <span
                                                                                className={style.tag_text}>{tag}</span>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*!-- //감성 태그*/}

                                                        {/*!--> 리뷰 작성*/}
                                                        <div className={`${style.mt24}`}>
                                                            <div className={`${style.form_title}`}>
                                                                <label htmlFor=""
                                                                       className={`${style.form_label} ${style.info_text}`}>
                                                                    리뷰 작성
                                                                    <span className={style.required}>
                                                                        <span className={style.hidden}>필수입력 이걸 어떻게 처리 할지 고민하기</span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className={`${style.mt_10}`}>
                                                                <div className={`${style.byte_check_wrap}`}>
                                                                    <textarea name="review"
                                                                              onChange={(e) => setContent(e.target.value)}
                                                                              id="review"
                                                                              value={content}
                                                                              placeholder="내용을 10자 이상 입력해 주세요.
                                                                              주제와 무관한 댓글,
                                                                              악플, 배송문의 등의 글은 임의 삭제될 수 있습니다."
                                                                              className={`${style.text_form} ${style.text_textarea}`}
                                                                    >
                                                                    </textarea>
                                                                    <div
                                                                        className={`${style.byte_check_footer} ${style.byte_check}`}>
                                                                        <span
                                                                            className={`${style.count} ${style.review_text}`}>{content.length}</span>
                                                                        <span className={style.review_total}>
                                                                            3000
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*!-- //리뷰 작성*/}

                                                        {/*!--> 사진첨부*/}
                                                        <div className={style.mt24}>
                                                            <div className={`${style.form_title}`}>
                                                                <div
                                                                    className={`${style.form_label} ${style.info_text}`}>
                                                                    <span className={style.info_text}>사진 첨부(선택)</span>
                                                                    <span
                                                                        className={`${style.file_attach_val} ${style.pt_4}`}>
                                                                        <span
                                                                            className={`${style.info_text} ${style.lh}`}>&nbsp;0 </span>
                                                                        <span
                                                                            className={`${style.phote_total}`}> / 5</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className={`${style.mt_10}`}>
                                                                <ul className={`${style.fs_0} ${style.pl_0}`}>
                                                                    <li className={`${style.dv_two} ${style.mr_0}`}>
                                                                        <span className={`${style.pd_two}`}>
                                                                            <span className={style.btn_box}>
                                                                                <input type="file"
                                                                                       className={style.file}/>
                                                                                <label htmlFor=""
                                                                                       className={style.img_label}>
                                                                                    <span className={style.hidden}>첨부 파일 추가</span>
                                                                                </label>
                                                                                <span className={style.img_box_add}>
                                                                                    <span
                                                                                        className={style.img_view}></span>
                                                                                    <button type="button"
                                                                                            className={style.btn_remopve_img}>
                                                                                        <span
                                                                                            className={style.hidden}>첨부파일삭제</span>
                                                                                    </button>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <p className={`${style.mt_10}  ${style.bul_base} ${style.font_base} ${style.pl_8} ${style.ppqq}`}>
                                                                    JPG, PNG, GIF 파일만 최대 5장 업로드 가능합니다.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/*!-- //사진첨부*/}
                                                    </div>
                                                    {/*!-- //태그 선택*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div></div>
                            <div className={`${style.simplebar_track}`}>
                                <div className={`${style.scrollbar} ${style.scroll}`}
                                     style={{height: "416px", display: "block", transform: "translate3d(0px,0px,0px)"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*!-- //내용*/}

                    {/*!--> footer*/}
                    <div className={`${style.dialog_footer}`}>
                        <button type="button"
                                onClick={() => {
                                    console.log("버튼 클릭")
                                    handleSubmit();
                                }}
                                className={`${style.btn_md} ${style.btn_primary} ${style.btn_base} ${registrationInspection ? style.btn_registration : style.btn_ev}`}>
                            <span className={style.text_base}>등록</span>
                        </button>
                    </div>
                    {/*!-- //footer*/}
                </div>
            </div>
            <div></div>
        </div>
    );
}
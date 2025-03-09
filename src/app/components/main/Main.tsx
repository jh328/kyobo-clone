import "./Main.modules.css"

export default function Main() {
    return (
        <div className="contents_inner">
            <div className="title_size_xxl">
                <h2 className="title_heading">오늘의 선택</h2>
                <ul className="category_tag_list">
                    <li className="category_item">
                        <button className="btn_category">
                            <span className="text">전체</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">국내도서</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">외국도서</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">eBook</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">sam</span>
                        </button>
                    </li>
                    <li className="category_item">
                        <button className="btn_category_remain">
                            <span className="text">핫트랙스</span>
                        </button>
                    </li>
                    <li className="category_item category_item_right">
                        <button className="btn_category_remain">
                            <span className="text">교보ONLY</span>
                        </button>
                    </li>
                </ul>
                <div className="right_area"></div>
            </div>
            <div className="showcase_template_wrap"></div>
        </div>
    )
};
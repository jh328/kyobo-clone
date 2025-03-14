import "./begin.modules.css";

export default function Begin() {
    return (
        <div className="container">
            <div className="inner">
                <h1 className="title_register">회원가입</h1>
                <div className="content">
                    <form id="join_form" className="form">
                        <div className="form_list">
                            <div className="form_item">
                                <input type="text" id="id" name="id" placeholder="아이디를 입력해주세요." required />
                            </div>
                            <div className="form_item">
                                <input type="password" placeholder="비밀번호를 입력해주세요." required />
                            </div>
                            <div className="form_item">
                                <input type="email" placeholder="이메일을 입력해주세요." required />
                            </div>
                        </div>
                        <button type="submit" className="btn_submit">가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

"use client";
import "./begin.modules.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Begin() {
    const router = useRouter();
    const [userData, setUserData] = useState({
        id: "",
        password: "",
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // 🚀 LocalStorage에 데이터 저장
        localStorage.setItem("user", JSON.stringify(userData));
        console.log("✅ 회원가입 완료!", userData);

        // 홈 화면으로 이동
        router.push("/");
    };

    return (
        <div className="container">
            <div className="inner">
                <h1 className="title_register">회원가입</h1>
                <div className="content">
                    <form id="join_form" className="form" onSubmit={handleSubmit}>
                        <div className="form_list">
                            <div className="form_item">
                                <input
                                    type="text"
                                    name="id"
                                    placeholder="아이디를 입력해주세요."
                                    value={userData.id}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form_item">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    value={userData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form_item">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="이메일을 입력해주세요."
                                    value={userData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn_submit">가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

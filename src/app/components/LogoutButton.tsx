"use client";

import { signOut } from "next-auth/react";
import { useUserStore } from "@/app/store/userStore";

export default function LogoutButton() {
    const { clearUser } = useUserStore(); // ✅ Zustand 상태 초기화 함수 가져오기

    const handleLogout = async () => {
        await signOut();
        clearUser(); // ✅ Zustand에서 유저 정보 삭제
    };

    return (
        <button onClick={handleLogout} className="btn_logout">
            로그아웃
        </button>
    );
}

"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import {useUserStore} from "@/app/store/userStore";

export function ClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <SessionSync>{children}</SessionSync>
        </SessionProvider>
    );
}

function SessionSync({ children }: { children: React.ReactNode }) {
    const { data: session } = useSession(); // ✅ NextAuth 세션 가져오기
    const { setUser, clearUser } = useUserStore(); // ✅ Zustand 상태 가져오기

    useEffect(() => {
        if (session?.user) {
            setUser({
                id: session.user.id as string,
                name: session.user.name as string,
                email: session.user.email as string,
            });
        } else {
            clearUser();
        }
    }, [session, setUser, clearUser]);

    return <>{children}</>; // ✅ 로그인 상태를 동기화한 후 children을 렌더링
}

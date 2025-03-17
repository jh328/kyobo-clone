import NextAuth, {NextAuthOptions, Profile, Session} from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { JWT } from "next-auth/jwt";

interface User {
    id: string;
    name: string;
    email: string | null | undefined;
}


const userDatabase: Record<string, User> = {};

export const authOptions: NextAuthOptions = {
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID as string,
            clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({
                      token,
                      account,
                      profile,
                  }: { token: JWT; account?: Record<string, unknown> | null; profile?: Profile | undefined }) {
            if (account) {
                console.log("🔹 [JWT Callback] 원본 프로필 정보:", profile);

                token.accessToken = account.access_token as string;
                token.id = profile?.sub as string;
                token.name = profile?.name as string;
                token.email = profile?.email as string;

                console.log("🔹 [JWT Callback] 로그인 정보:");
                console.log("ID:", token.id);
                console.log("Name:", token.name);
                console.log("Email:", token.email);


                // ✅ 회원가입 기능 추가 (DB 없이 객체에 저장)
                if (!userDatabase[token.email]) {
                    console.log("새로운 회원가입:", token.email);
                    userDatabase[token.email] = {
                        id: token.id,
                        name: token.name,
                        email: token.email,
                    };
                }
            }
            return token;
        },
        async session({
                          session,
                          token,
                      }: { session: Session; token: JWT }) {
            session.user = {
                id: token.id,
                name: token.name,
                email: token.email,
            };
            return session;
        }
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

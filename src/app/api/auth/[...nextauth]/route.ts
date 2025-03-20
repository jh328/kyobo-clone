import NextAuth, {NextAuthOptions, Profile, Session} from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import {JWT} from "next-auth/jwt";

interface User {
    id: string;
    name: string;
    email: string | null | undefined;
}

interface KakaoProfile extends Profile {
    properties?: {
        nickname?: string;
        profile_image?: string;
        thumbnail_image?: string;
    };
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
                  }: { token: JWT; account?: Record<string, unknown> | null; profile?: KakaoProfile | undefined }) {
            if (account) {
                console.log("프로필 정보:", profile);

                token.accessToken = account.access_token as string;
                token.id = profile?.sub as string;
                token.name = profile?.properties?.nickname as string;
                token.email = profile?.email as string;

                console.log("프로필 정보 확인1: ", profile?.name);
                console.log("프로필 정보 확인2: ", profile?.properties)
                console.log("프로필 정보 확인3: ", profile?.email)
                console.log("프로필 정보 확인4: ", profile?.sub)


                if (!userDatabase[token.email]) {
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
export {handler as GET, handler as POST};

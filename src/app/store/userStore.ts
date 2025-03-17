import {create} from "zustand/react";

interface UserState {
    id: string | null;
    name: string | null;
    email: string | null;
    setUser: (user: { id: string; name: string; email: string }) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    id: null,
    name: null,
    email: null,
    setUser: (user) => set({id: user.id, name: user.name, email: user.email}),
    clearUser: () => set({id:null, name:null, email: null}),
}))
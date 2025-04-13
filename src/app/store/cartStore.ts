import {Book} from "@/app/lib/book";
import {create} from "zustand/react";
import { persist } from 'zustand/middleware';

interface CartState {
    cartItems: (Book & { quantity: number })[];
    addToCart: (item: Book) => "new" | "existing";
    updateQuantity: (id: number, quantity: number) => void;
}



export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cartItems: [],
            addToCart: (item: Book) => {
                const existingItem = get().cartItems.find((i) => i.id === item.id);

                if (existingItem) {
                    set((state) => ({
                        cartItems: state.cartItems.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    }));
                    return 'existing';
                }

                set((state) => ({
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                }));

                return 'new';
            },
            updateQuantity:(id,quantity)=> {
                set((state)=> ({
                    cartItems:state.cartItems.map((item)=>
                    item.id === id? {...item, quantity:Math.max(1, quantity)} :item)
                }))
            }
        }),
        {
            name: 'JH_STORAGE',
        }
    )
);

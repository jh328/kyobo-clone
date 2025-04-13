'use client'
import {useState} from "react";

export function useQuantity(initial = 1) {
    const [quantity, setQuantity] = useState(initial);

    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => Math.max(1, prev - 1));

    return {quantity, increase, decrease}
}

//src/utils/format.ts
export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('ko-KR').format(price);
}
'use client'

import GenericModal from "@/app/components/modals/GenericModal";
import {useRouter} from 'next/navigation'

type ModalManagerProps = {
    showCartModal: boolean;
    setShowCartModal: (value: boolean) => void;

    showLoginModal: boolean;
    setShowLoginModal: (value: boolean) => void;


    showAlreadyCart: boolean;
    setShowAlreadyCart: (value: boolean) => void;

    showWishLoginModal: boolean;
    setShowWishLoginModal: (value: boolean) => void;

}

export default function ModalManager({
                                         showCartModal,
                                         setShowCartModal,
                                         showLoginModal,
                                         setShowLoginModal,
                                         showAlreadyCart,
                                         setShowAlreadyCart,
                                         showWishLoginModal,
                                         setShowWishLoginModal

                                     }: ModalManagerProps) {
    const router = useRouter();


    return (
        <>

            {showWishLoginModal && (
                <GenericModal
                    title="찜하기는 로그인 후 이용할 수 있어요"
                    confirmText="이동하기"
                    cancelText="취소"
                    onClose={() => setShowWishLoginModal(false)}
                    onConfirm={() => {
                        setShowWishLoginModal(false);
                        router.push("/login")
                    }}
                />
            )}


            {showLoginModal && (
                <GenericModal
                    title="로그인 후 이용가능합니다"
                    description="로그인 페이지로 이동하시겠습니까?"
                    confirmText="확인"
                    cancelText="취소"
                    onClose={() => setShowLoginModal(false)}
                    onConfirm={() => {
                        setShowLoginModal(false);
                        router.push("/login")
                    }}
                />
            )}

            {showCartModal && (
                <GenericModal
                    title="상품이 장바구니에 담겼습니다."
                    description="장바구니로 이동하시겠습니까?"
                    confirmText="확인"
                    cancelText="취소"
                    onClose={() => setShowCartModal(false)}
                    onConfirm={() => {
                        setShowCartModal(false);
                        router.push("/cart")
                    }}
                />
            )}

            {showAlreadyCart && (
                <GenericModal
                    title="장바구니에 이미 담은 상품이 있어 수량이 추가 되었습니다."
                    description="장바구니로 이동하시겠습니까?"
                    confirmText="확인"
                    cancelText="취소"
                    onClose={() => setShowAlreadyCart(false)}
                    onConfirm={() => {
                        setShowAlreadyCart(false);
                        router.push('/cart')
                    }}
                />
            )}

        </>
    )
}
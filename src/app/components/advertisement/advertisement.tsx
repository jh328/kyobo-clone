import "./advertisement.modules.css"
import Link from "next/link";

export default function Advertisement() {
    return (
        <div className="content_area">
            <div className="content_inner">
                <div className="showcase_blurb_wrap">
                    <div className="showcase_blurb_box">
                        <Link href="" className="blurb_link">
                            <img src="/images/advertisment/I_wel_main_right_0308.png" alt="공부 안해서 평생 후회중.." className="blurb_wrap_img"/>
                        </Link>
                    </div>
                    <div className="showcase_blurb_box">
                        <Link href="" className="blurb_link_ml">
                            <img src="/images/advertisment/wel_ri.png" alt="대한민국 미래.." className="blurb_wrap_img"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
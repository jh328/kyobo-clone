import Header from "@/app/components/header/Header";
import Section from "@/app/components/section/Section";
import Main from "@/app/components/main/Main";
import Advertisement from "@/app/components/advertisement/advertisement";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
    return (
        <div className="wrapper">
            <Header/>
            <Section/>
            <Main/>
            <Advertisement/>
            <Footer/>
        </div>
    );
}

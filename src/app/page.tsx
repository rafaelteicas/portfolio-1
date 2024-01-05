import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomeContent from "./home-content";
import Tech from "./skills";
import About from "./about";


export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <div className="children" id="home">
                <HomeContent />
                <About />
                <Tech />
            </div>
            <Footer />
        </div>
    );
}

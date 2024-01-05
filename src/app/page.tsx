import Navbar from "@/components/navbar";
import About from "./about";
import Contact from "./contact";
import Tech from "./tech";
import Projects from "./projects";


export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <div className="children">
                <About />
                <Projects />
            </div>
            <Contact />
        </div>
    );
}

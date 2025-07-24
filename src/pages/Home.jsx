import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Overview } from "../components/Overview";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />

        <StarBackground />
        <Navbar />
        <main>
            <Overview />
            <About />
            <Skills />
            <Projects />
            <ContactSection />
        </main>
        <Footer />


    </div>;
};
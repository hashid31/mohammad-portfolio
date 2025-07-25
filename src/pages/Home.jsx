import { Navbar } from "../components/Navbar.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from "../components/StarBackground.jsx";
import { Overview } from "../components/Overview.jsx";
import { About } from "../components/About.jsx";
import { Skills } from "../components/Skills.jsx";
import { Projects } from "../components/Projects.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";

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
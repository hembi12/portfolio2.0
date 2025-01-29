import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DockComponent from "./components/DockComponent";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    const togglePrivacyPolicy = () => {
        setShowPrivacyPolicy(!showPrivacyPolicy);
    };

    return (
        <div className="font-sans">
            {showPrivacyPolicy ? (
                <PrivacyPolicy onBackToPortfolio={() => setShowPrivacyPolicy(false)} />
            ) : (
                <>
                    <section id="header">
                        <Header />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="contact">
                        {/* Pasar la función como prop */}
                        <Contact onShowPrivacyPolicy={togglePrivacyPolicy} />
                    </section>
                    <section id="work-experience">
                        <WorkExperience />
                    </section>
                    <section id="education">
                        <Education />
                    </section>

                    <DockComponent />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;

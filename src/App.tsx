import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact/Contact";
import DockComponent from "./components/DockComponent";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
    return (
        <Router>
            <div className="font-sans">
                <Routes>
                    {/* Página principal */}
                    <Route
                        path="/"
                        element={
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
                                    <Contact />
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
                        }
                    />
                    {/* Página de Política de Privacidad con onBackToPortfolio */}
                    <Route path="/privacy-policy" element={<PrivacyPolicyWrapper />} />
                </Routes>
            </div>
        </Router>
    );
};

// Componente que pasa la prop correctamente
const PrivacyPolicyWrapper: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegar

    return <PrivacyPolicy onBackToPortfolio={() => navigate("/#contact")} />;
};

export default App;

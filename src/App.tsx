import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Element } from "react-scroll"; // ✅ Importamos Element de react-scroll
import Header from "./components/Header";
import About from "./components/about/About";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import DockComponent from "./components/dock/DockComponent";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router>
                <div className="font-sans">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header/>
                                    <Element name="about">
                                        <About />
                                    </Element>
                                    <Element name="projects">
                                        <Projects />
                                    </Element>
                                    <Element name="skills">
                                        <Skills />
                                    </Element>
                                    <Element name="contact">
                                        <Contact />
                                    </Element>
                                    <Element name="work-experience">
                                        <WorkExperience />
                                    </Element>
                                    <Element name="education">
                                        <Education />
                                    </Element>
                                    <DockComponent /> {/* ✅ Dock usará estos IDs para desplazarse */}
                                    <Footer />
                                </>
                            }
                        />
                        <Route path="/privacy-policy" element={<PrivacyPolicyWrapper />} />
                    </Routes>
                </div>
            </Router>
        </HelmetProvider>
    );
};

// Componente que maneja la navegación
const PrivacyPolicyWrapper: React.FC = () => {
    const navigate = useNavigate();
    return <PrivacyPolicy onBackToPortfolio={() => navigate("/#contact")} />;
};

export default App;

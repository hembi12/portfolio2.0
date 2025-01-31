import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ Importamos el provider
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
        <HelmetProvider> {/* ✅ Envolvemos la App */}
            <Router>
                <div className="font-sans">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header />
                                    <About />
                                    <Projects />
                                    <Skills />
                                    <Contact />
                                    <WorkExperience />
                                    <Education />
                                    <DockComponent />
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

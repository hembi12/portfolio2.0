import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import DockComponent from "./components/dock/DockComponent";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const About = lazy(() => import("./components/about/About"));
const WorkExperience = lazy(() => import("./components/WorkExperience"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App: React.FC = () => {
    return (
        <Router>
            <div className="font-sans">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <section id="header">
                                    <Header />
                                </section>
                                <Suspense fallback={<div className="text-center text-gray-400">Loading...</div>}>
                                    <section id="about"><About /></section>
                                    <section id="projects"><Projects /></section>
                                    <section id="skills"><Skills /></section>
                                    <section id="contact"><Contact /></section>
                                    <section id="work-experience"><WorkExperience /></section>
                                    <section id="education"><Education /></section>
                                </Suspense>
                                <DockComponent />
                                <Footer />
                            </>
                        }
                    />
                    <Route path="/privacy-policy" element={<PrivacyPolicyWrapper />} />
                </Routes>
            </div>
        </Router>
    );
};

const PrivacyPolicyWrapper: React.FC = () => {
    const navigate = useNavigate();
    return (
        <PrivacyPolicy onBackToPortfolio={() => {
            navigate("/");
            setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }} />
    );
};

export default App;

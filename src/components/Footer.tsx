import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="gap-4 pt-4 border-t border-gray-100 pb-16 max-w-3xl mx-auto px-4 text-center">
                <p className="text-sm mb-4">
                    Designed and Built by <span className="text-cyan-200 font-semibold">Héctor Martil</span>.
                </p>
                <p className="text-sm">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-200 hover:text-cyan-50 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-200 hover:text-cyan-50 transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="pb-16 container mx-auto px-4 text-center">
                <p className="text-sm mb-4">
                    Designed and Built by <span className="font-semibold">Your Name</span>.
                </p>
                <p className="text-sm">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

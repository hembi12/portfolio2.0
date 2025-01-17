import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <section className="my-12 px-4 max-w-3xl mx-auto text-center md:text-left">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold mb-4">Get in Touch!</h2>
            <p className="mt-4 text-gray-200 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left mb-6">
                I am eager to contribute to <span className="text-cyan-200">impactful projects</span>. Let's <span className="text-cyan-200">connect</span> and discuss how I can bring <span className="text-cyan-200">value</span> to your <span className="text-cyan-200">team</span>!
            </p>
            <div className="flex justify-center gap-6">
                {/* Email Button */}
                <a
                    href="mailto:yourname@example.com"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm shadow-md hover:bg-gray-200 transition"
                >
                    <FaEnvelope />
                    Email Me
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/5211234567890" // Replace with your WhatsApp number in international format
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-medium text-sm shadow-md hover:bg-green-600 transition"
                >
                    <FaWhatsapp />
                    WhatsApp Me
                </a>
            </div>
        </section>
    );
};

export default Contact;

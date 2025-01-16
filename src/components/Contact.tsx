import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <section className="my-12 px-4 max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-4xl sm:text-4xl lg:text-5xl font-semibold mb-4">Get in Touch!</h2>
            <p className="mt-4 text-gray-600 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left mb-6">
                Have a great project idea or just want to connect? I'd love to hear from you! Let's build something amazing together. 🚀
            </p>
            <div className="flex justify-center gap-6">
                {/* Email Button */}
                <a
                    href="mailto:yourname@example.com"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium text-sm shadow-md hover:bg-gray-800 transition"
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

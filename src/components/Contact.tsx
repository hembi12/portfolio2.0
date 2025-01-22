import React from "react";

const Contact: React.FC = () => {
    return (
        <section className="my-12 px-4 max-w-3xl mx-auto text-center md:text-left">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold mb-4">
                Get in Touch!
            </h2>
            <p className="mt-4 text-gray-200 text-md sm:text-base lg:text-lg leading-relaxed md:text-left mb-6">
                I am eager to contribute to <span className="text-cyan-200">impactful projects</span>. Let's{" "}
                <span className="text-cyan-200">connect</span> and discuss how I can bring{" "}
                <span className="text-cyan-200">value</span> to your <span className="text-cyan-200">team</span>!
            </p>
            <form
                action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree or backend endpoint
                method="POST"
                className="bg-black border border-white p-6 rounded-lg mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-200 text-sm font-medium mb-2 text-left"
                    >
                        Your Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-200 text-sm font-medium mb-2 text-left"
                    >
                        Your Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-200 text-sm font-medium mb-2 text-left"
                    >
                        Your Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-8 py-2 sm:px-8 sm:py-2 rounded-full bg-cyan-500 text-white font-bold text-base sm:text-lg shadow-md hover:bg-cyan-400 transition focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;

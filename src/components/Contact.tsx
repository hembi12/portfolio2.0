import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importar Link de react-router-dom

interface ContactProps {
    onShowPrivacyPolicy?: () => void; // Prop opcional en caso de que se necesite lógica adicional
}

const Contact: React.FC<ContactProps> = () => {
    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    const [formErrors, setFormErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");
    const [privacyChecked, setPrivacyChecked] = useState(false);

    const validateForm = (formData: FormData) => {
        const errors = { name: "", email: "", subject: "", message: "", privacy: "" };

        const name = formData.get("name") as string;
        if (!name || name.trim().length < 3) {
            errors.name = "Name must be at least 3 characters.";
        }

        const email = formData.get("email") as string;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.email = "Please enter a valid email address.";
        }

        const subject = formData.get("subject") as string;
        if (!subject) {
            errors.subject = "Please select a subject.";
        }

        const message = formData.get("message") as string;
        if (!message || message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters.";
        }

        if (!privacyChecked) {
            errors.privacy = "You must agree to the Privacy Policy.";
        }

        setFormErrors(errors);

        return !Object.values(errors).some((error) => error !== "");
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormStatus("");
        setIsSubmitting(true);

        const formData = new FormData(event.currentTarget);

        if (validateForm(formData)) {
            try {
                const response = await fetch(formEndpoint!, {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                    mode: "cors",
                });

                if (response.ok) {
                    setFormStatus("Message sent successfully!");
                    event.currentTarget.reset();
                    setPrivacyChecked(false);
                } else {
                    setFormStatus("Failed to send the message. Please try again.");
                }
            } catch {
                setFormStatus("An error occurred while sending the message. Please try again.");
            }
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="my-12 px-4 max-w-3xl mx-auto text-center md:text-left">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold mb-4">
                Get in Touch!
            </h2>
            <form
                onSubmit={handleSubmit}
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
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
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
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-gray-200 text-sm font-medium mb-2 text-left"
                    >
                        Subject:
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select Subject
                        </option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                    </select>
                    {formErrors.subject && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                    )}
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
                        className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>
                    {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                </div>
                <div className="mb-4 flex items-start">
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={privacyChecked}
                        onChange={(e) => setPrivacyChecked(e.target.checked)}
                        className="mt-1"
                    />
                    <label
                        htmlFor="privacy"
                        className="ml-2 text-gray-200 text-sm"
                    >
                        I agree to the{" "}
                        <Link
                            to="/privacy-policy" // Navega a la página de Política de Privacidad
                            className="text-cyan-200 hover:text-cyan-50 hover:underline transition"
                        >
                            Privacy Policy
                        </Link>
                    </label>
                </div>
                {formErrors.privacy && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.privacy}</p>
                )}
                {formStatus && (
                    <p
                        className={`text-sm mt-2 ${
                            formStatus.includes("success")
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {formStatus}
                    </p>
                )}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-2 sm:px-8 sm:py-2 rounded-full font-bold text-base sm:text-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
                            isSubmitting
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-cyan-500 hover:bg-cyan-400 text-white"
                        }`}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;

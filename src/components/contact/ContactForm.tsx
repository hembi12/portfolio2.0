// components/Contact/ContactForm.tsx
import { useState } from "react";
import ContactInput from "./ContactInput";
import ContactCheckbox from "./ContactCheckbox";
import { useFormValidation } from "./useFormValidation";

const ContactForm = () => {
    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const { formErrors, validateForm } = useFormValidation(privacyChecked);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState("");

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
                    headers: { Accept: "application/json" },
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
        <form onSubmit={handleSubmit} className="bg-black border border-white p-6 rounded-lg mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            {/* Nombre */}
            <ContactInput id="name" name="name" label="Your Name:" error={formErrors.name} />

            {/* Email */}
            <ContactInput id="email" name="email" type="email" label="Your Email:" error={formErrors.email} />

            {/* Asunto (Subject) */}
            <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-200 text-sm font-medium mb-2 text-left">
                    Subject:
                </label>
                <select id="subject" name="subject" className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200">
                    <option value="" disabled>
                        Select Subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
                {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
            </div>

            {/* Mensaje */}
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-200 text-sm font-medium mb-2 text-left">
                    Your Message:
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>

            {/* Checkbox de Política de Privacidad */}
            <ContactCheckbox checked={privacyChecked} onChange={() => setPrivacyChecked(!privacyChecked)} error={formErrors.privacy} />

            {/* Mensaje de estado del formulario */}
            {formStatus && <p className={`text-sm mt-2 ${formStatus.includes("success") ? "text-green-500" : "text-red-500"}`}>{formStatus}</p>}

            {/* Botón de Envío */}
            <div className="flex justify-center">
                <button type="submit" disabled={isSubmitting} className={`px-8 py-2 rounded-full font-bold text-base sm:text-lg ${isSubmitting ? "bg-gray-500" : "bg-cyan-500 hover:bg-cyan-400 text-white"}`}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

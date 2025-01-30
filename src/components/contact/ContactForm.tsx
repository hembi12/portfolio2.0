// components/Contact/ContactForm.tsx
import { useState } from "react";
import { useFormValidation, FormData } from "./useFormValidation";
import ContactInput from "./ContactInput";
import ContactCheckbox from "./ContactCheckbox";

const ContactForm = () => {
    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useFormValidation();

    const showToast = async (message: string, type: "success" | "error") => {
        const toastModule = await import("react-toastify");
        const toast = toastModule.toast;
        
        toast[type](message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch(formEndpoint!, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            await showToast("Message sent successfully!", "success");
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
            await showToast("Failed to send the message. Please try again.", "error");
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-black border border-white p-6 rounded-lg mx-auto w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
            <ContactInput id="name" name="name" label="Your Name:" error={errors.name?.message} register={register} />
            <ContactInput id="email" name="email" type="email" label="Your Email:" error={errors.email?.message} register={register} />
            <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-200 text-sm font-medium mb-2 text-left">Subject:</label>
                <select {...register("subject")} className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200">
                    <option value="" disabled>Select Subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-200 text-sm font-medium mb-2 text-left">Your Message:</label>
                <textarea {...register("message")} rows={5} className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200"></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <ContactCheckbox register={register} error={errors.privacy?.message} />
            <div className="flex justify-center">
                <button type="submit" disabled={isSubmitting} className={`px-8 py-2 rounded-full font-bold text-base sm:text-lg ${isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-400 text-white"}`}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

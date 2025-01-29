// components/Contact/useFormValidation.ts
import { useState } from "react";

interface FormErrors {
    name: string;
    email: string;
    subject: string;
    message: string;
    privacy: string;
}

export const useFormValidation = (privacyChecked: boolean) => {
    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: "",
    });

    const validateForm = (formData: FormData): boolean => {
        const errors: FormErrors = { name: "", email: "", subject: "", message: "", privacy: "" };

        if (!formData.get("name") || formData.get("name")!.toString().trim().length < 3) {
            errors.name = "Name must be at least 3 characters.";
        }

        const email = formData.get("email") as string;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.email = "Please enter a valid email address.";
        }

        if (!formData.get("subject")) {
            errors.subject = "Please select a subject.";
        }

        if (!formData.get("message") || formData.get("message")!.toString().trim().length < 10) {
            errors.message = "Message must be at least 10 characters.";
        }

        if (!privacyChecked) {
            errors.privacy = "You must agree to the Privacy Policy.";
        }

        setFormErrors(errors);
        return !Object.values(errors).some((error) => error !== "");
    };

    return { formErrors, validateForm };
};

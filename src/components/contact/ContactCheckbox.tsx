// components/Contact/ContactCheckbox.tsx
import { Link } from "react-router-dom";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "./useFormValidation";

interface ContactCheckboxProps {
    error?: string;
    register: UseFormRegister<FormData>;
}

const ContactCheckbox: React.FC<ContactCheckboxProps> = ({ error, register }) => {
    return (
        <div className="mb-4 flex items-start">
            <input type="checkbox" {...register("privacy")} className="mt-1" />
            <label htmlFor="privacy" className="ml-2 text-gray-200 text-sm">
                I agree to the{" "}
                <Link to="/privacy-policy" className="text-cyan-200 hover:text-cyan-50 hover:underline transition">
                    Privacy Policy
                </Link>
            </label>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default ContactCheckbox;

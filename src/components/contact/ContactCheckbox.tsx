// components/Contact/ContactCheckbox.tsx
import { Link } from "react-router-dom";

interface ContactCheckboxProps {
    checked: boolean;
    onChange: () => void;
    error?: string;
}

const ContactCheckbox: React.FC<ContactCheckboxProps> = ({ checked, onChange, error }) => {
    return (
        <div className="mb-4 flex items-start">
            <input type="checkbox" id="privacy" checked={checked} onChange={onChange} className="mt-1" />
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

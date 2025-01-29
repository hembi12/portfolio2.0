// components/Contact/ContactInput.tsx
interface ContactInputProps {
    id: string;
    name: string;
    type?: string;
    label: string;
    error?: string;
}

const ContactInput: React.FC<ContactInputProps> = ({ id, name, type = "text", label, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-200 text-sm font-medium mb-2 text-left">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className="w-full px-4 py-2 rounded-md bg-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default ContactInput;

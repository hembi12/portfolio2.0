import { UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormData } from "./useFormValidation";

interface ContactInputProps {
    id: string;
    name: keyof FormData;
    type?: string;
    label: string;
    error?: string;
    register: UseFormRegister<FormData>;
}

const ContactInput: React.FC<ContactInputProps> = ({ id, name, type = "text", label, error, register }) => {
    const { t } = useTranslation();

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-200 text-lg font-medium mb-2 text-left">
                {label}
            </label>
            <input
                {...register(name)}
                type={type}
                id={id}
                className="w-full px-4 py-2 rounded-md bg-gray-500 border border-white text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder={t(`contact.form.placeholder.${name}`)} // Placeholder dinámico basado en traducción
                aria-label={label} // Accesibilidad para lectores de pantalla
                aria-invalid={error ? "true" : "false"} // Indicar errores de accesibilidad
                aria-describedby={error ? `${id}-error` : undefined} // Relaciona el error con el input
                autoComplete={type === "email" ? "email" : "on"} // Autocompletar si es email
                autoCapitalize={type === "email" ? "none" : "words"} // Capitalizar nombres
            />
            {error && <p id={`${id}-error`} className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default ContactInput;

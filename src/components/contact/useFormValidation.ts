// components/Contact/useFormValidation.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Definir la estructura del formulario con TypeScript
export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    privacy: boolean;
}

// Esquema de validación con Yup (debe coincidir con FormData)
const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Name must be at least 3 characters.")
        .required("Name is required."),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
    subject: Yup.string()
        .required("Please select a subject."),
    message: Yup.string()
        .min(10, "Message must be at least 10 characters.")
        .required("Message is required."),
    privacy: Yup.boolean()
        .oneOf([true], "You must agree to the Privacy Policy.")
        .required(),
}).required(); // 👈 Se agrega `.required()` para evitar errores de inferencia

export const useFormValidation = () => {
    return useForm<FormData>({
        resolver: yupResolver(validationSchema as Yup.ObjectSchema<FormData>), // 👈 Se tipa correctamente sin `any`
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            privacy: false,
        },
    });
};

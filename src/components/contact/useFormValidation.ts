import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

// Definir la estructura del formulario con TypeScript
export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    privacy: boolean;
}

const useFormValidation = () => {
    const { t } = useTranslation();

    // Esquema de validación con Yup (debe coincidir con FormData)
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, t("contact.validation.nameMin"))
            .required(t("contact.validation.nameRequired")),
        email: Yup.string()
            .email(t("contact.validation.emailInvalid"))
            .required(t("contact.validation.emailRequired")),
        subject: Yup.string()
            .required(t("contact.validation.subjectRequired")),
        message: Yup.string()
            .min(10, t("contact.validation.messageMin"))
            .required(t("contact.validation.messageRequired")),
        privacy: Yup.boolean()
            .oneOf([true], t("contact.validation.privacyRequired"))
            .required(),
    }).required();

    return useForm<FormData>({
        resolver: yupResolver(validationSchema as Yup.ObjectSchema<FormData>),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            privacy: false,
        },
    });
};

export { useFormValidation };
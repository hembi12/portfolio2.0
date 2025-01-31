import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section
            id="contact-section"
            aria-labelledby="contact-title"
            className="my-8 px-4 max-w-3xl mx-auto"
        >
            <h2
                id="contact-title"
                className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left"
            >
                {t('contact.title')}
            </h2>

            <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left max-w-3xl mx-auto">
                {t('contact.description')}
            </p>

            <div className="mt-6 max-w-3xl mx-auto">
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;

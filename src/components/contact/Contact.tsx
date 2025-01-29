// components/Contact/Contact.tsx
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact" className="my-12 px-4 max-w-3xl mx-auto text-center md:text-left">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent text-4xl sm:text-4xl lg:text-5xl font-semibold mb-4">
                Get in Touch!
            </h2>
            <ContactForm />
        </section>
    );
};

export default Contact;

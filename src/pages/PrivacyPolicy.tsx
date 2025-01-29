import React, { useEffect } from "react";

interface PrivacyPolicyProps {
    onBackToPortfolio: () => void; // Prop para manejar la navegación al portafolio
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToPortfolio }) => {
    // Asegura que la página siempre se abra en la parte superior
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackClick = () => {
        onBackToPortfolio(); // Navega a la página principal
        setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100); // Un pequeño retraso para asegurar que la navegación se complete antes del scroll
    };

    return (
        <section className="max-w-3xl mx-auto my-12 px-4 text-gray-200">
            <h1 className="text-4xl font-bold mb-6">Política de Privacidad</h1>

            <p className="mb-4">
                Última actualización: <strong>[Fecha]</strong>
            </p>

            <h2 className="text-2xl font-semibold mt-6">1. Información que Recopilamos</h2>
            <p>Cuando utilizas este sitio web, podemos recopilar información personal de las siguientes maneras:</p>
            <ul className="list-disc list-inside mt-2">
                <li><strong>Información proporcionada directamente:</strong> Nombre, correo electrónico, asunto y contenido del mensaje cuando usas el formulario de contacto.</li>
                <li><strong>Datos recopilados automáticamente:</strong> Dirección IP, tipo de navegador, sistema operativo y actividad en el sitio mediante cookies y tecnologías similares.</li>
                <li><strong>Cookies y tecnologías de rastreo:</strong> Utilizamos cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">2. Uso de la Información</h2>
            <p>La información recopilada puede utilizarse para:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Responder consultas enviadas a través del formulario de contacto.</li>
                <li>Mejorar la experiencia del usuario y la funcionalidad del sitio.</li>
                <li>Cumplir con requisitos legales y regulatorios aplicables.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">3. Base Legal para el Tratamiento de Datos</h2>
            <p>Dependiendo de tu ubicación, el tratamiento de datos personales se basa en:</p>
            <ul className="list-disc list-inside mt-2">
                <li><strong>GDPR (Unión Europea):</strong> Consentimiento, cumplimiento contractual o interés legítimo.</li>
                <li><strong>CCPA (California, EE.UU.):</strong> Derecho a conocer, eliminar y optar por no compartir datos.</li>
                <li><strong>LFPDPPP (México):</strong> Derecho de Acceso, Rectificación, Cancelación y Oposición (ARCO).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">4. Derechos del Usuario</h2>
            <p>Los usuarios tienen los siguientes derechos sobre su información:</p>
            <ul className="list-disc list-inside mt-2">
                <li><strong>Acceder a los datos personales almacenados.</strong></li>
                <li><strong>Rectificar información incorrecta o desactualizada.</strong></li>
                <li><strong>Solicitar la eliminación de datos personales.</strong></li>
                <li><strong>Restringir u objetar el procesamiento de datos.</strong></li>
                <li><strong>Solicitar la portabilidad de datos.</strong></li>
            </ul>
            <p>Para ejercer estos derechos, contáctanos en <strong>[tu correo]</strong>.</p>

            <h2 className="text-2xl font-semibold mt-6">5. Seguridad de la Información</h2>
            <p>Implementamos medidas de seguridad para proteger la información del usuario contra accesos no autorizados, pérdida o alteración. Sin embargo, ninguna transmisión de datos por Internet es 100% segura.</p>

            <h2 className="text-2xl font-semibold mt-6">6. Uso de Cookies</h2>
            <p>Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. Puedes gestionar o deshabilitar cookies desde la configuración de tu navegador.</p>

            <h2 className="text-2xl font-semibold mt-6">7. Enlaces a Terceros</h2>
            <p>Este sitio web puede contener enlaces a sitios externos. No somos responsables de las prácticas de privacidad de terceros.</p>

            <h2 className="text-2xl font-semibold mt-6">8. Cambios en la Política de Privacidad</h2>
            <p>Nos reservamos el derecho de actualizar esta política en cualquier momento. Se recomienda revisarla periódicamente.</p>

            <h2 className="text-2xl font-semibold mt-6">9. Contacto</h2>
            <p>Si tienes preguntas sobre esta política de privacidad, contáctanos en <strong>[tu correo]</strong>.</p>

            <div className="text-center mt-4 mb-6">
            <button
                    onClick={handleBackClick} // Usa la nueva función que maneja la navegación y el scroll
                    className="text-cyan-200 hover:text-cyan-50 hover:underline transition"
                >
                    Volver al Portafolio
                </button>
            </div>
        </section>
    );
};

export default PrivacyPolicy;

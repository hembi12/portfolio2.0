import React from 'react';
import ProfilePicture from '../assets/ProfilePicture.jpg'; // Importamos la imagen
import WordRotate from "@/components/ui/word-rotate"; // Importamos WordRotate correctamente

const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row items-center md:items-start justify-between mt-16 px-4 max-w-3xl mx-auto gap-6">
            {/* Texto del encabezado */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold leading-tight flex items-center gap-2">
                    <span className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                        Hi, I'm
                    </span>
                    <WordRotate
                        className="bg-gradient-to-b from-cyan-500 to-cyan-200 bg-clip-text text-transparent"
                        words={["Héctor", "Martil"]}
                    />
                    <span>👋</span>
                </h1>
                <p className="text-gray-200 text-md sm:text-base lg:text-xl leading-relaxed">
                    <span className="text-cyan-200">Customer service expert</span> turned
                    <span className="text-cyan-200"> full-stack developer</span>. Passionate about programming who sits in front of his monitors every day to{' '}
                    <span className="text-cyan-200">learn something new</span>.
                </p>
            </div>

            {/* Imagen de perfil */}
            <div className="flex-shrink-0 mt-6 -mr-6"> {/* Agregado mt-4 */}
                <img
                    src={ProfilePicture}
                    alt="Profile picture"
                    className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
                    loading="lazy"
                />
            </div>
        </header>
    );
};

export default Header;

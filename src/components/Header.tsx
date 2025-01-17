import React from 'react';
import ProfilePicture from '../assets/ProfilePicture.webp'; // Importamos la imagen

const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left mt-16 px-4 max-w-3xl mx-auto">
            {/* Texto del encabezado */}
            <div className="flex-1">
                <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="bg-gradient-to-b from-cyan-500 to-cyan-200 bg-clip-text text-transparent">Héctor</span> 👋
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mt-4">
                    <span className="text-cyan-200">Customer service expert</span> turned
                    <span className="text-cyan-200"> full-stack developer</span>. Passionate about programming who sits in front of his monitors every day to <span className="text-cyan-200">learn something new</span>.
                </p>
            </div>

            {/* Imagen de perfil */}
            <div className="mt-6 md:mt-0 flex-shrink-0">
                <img
                    src={ProfilePicture} // Usamos la imagen importada
                    alt="Dillion's profile"
                    className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg"
                />
            </div>
        </header>
    );
};

export default Header;

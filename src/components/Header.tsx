import React from 'react';
import ProfilePicture from '../assets/ProfilePicture.webp'; // Importamos la imagen

const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left mt-32 px-4 max-w-3xl mx-auto">
            {/* Texto del encabezado */}
            <div className="flex-1">
                <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="text-blue-500">Dillion</span> 👋
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mt-4 text-gray-600">
                    Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.
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

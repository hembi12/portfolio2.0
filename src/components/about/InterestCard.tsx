import React, { useState, useEffect, useCallback } from "react";
import {
    FaUserCircle, FaCheckCircle, FaComment, FaRetweet,
    FaHeart, FaShare, FaEllipsisH, FaBookmark
} from "react-icons/fa";

interface Interest {
    name: string;
    username: string;
    text: string;
    verified?: "blue" | "gold";
    time: string;
}

// Función segura para manejar `localStorage`
const safeLocalStorageGet = <T,>(key: string, defaultValue: T): T => {
    try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : defaultValue;
    } catch {
        return defaultValue;
    }
};

const InterestCard: React.FC<Interest> = ({ name, username, text, verified, time }) => {
    const [state, setState] = useState(() => ({
        likes: safeLocalStorageGet(`${username}-likes`, 0),
        retweets: safeLocalStorageGet(`${username}-retweets`, 0),
        comments: safeLocalStorageGet(`${username}-comments`, 0),
        shares: safeLocalStorageGet(`${username}-shares`, 0),
        saved: safeLocalStorageGet(`${username}-saved`, false),
    }));

    // Efecto para actualizar localStorage al cambiar `state`
    useEffect(() => {
        try {
            Object.entries(state).forEach(([key, value]) => {
                localStorage.setItem(`${username}-${key}`, JSON.stringify(value));
            });
        } catch {
            console.warn("No se pudo acceder a localStorage.");
        }
    }, [state, username]);

    // Función optimizada para manejar cambios de estado
    const handleAction = useCallback((key: keyof typeof state) => {
        setState(prev => ({
            ...prev,
            [key]: key === "saved" ? !prev.saved : prev[key] + 1
        }));
    }, []);

    return (
        <figure className="w-80 p-4 rounded-xl bg-white shadow-md hover:bg-gray-100 border border-gray-200">
            {/* Cabecera del tweet */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <FaUserCircle className="text-gray-600" size={40} aria-label="User avatar" />
                    <div>
                        <figcaption className="text-md font-bold text-gray-900 flex items-center gap-1">
                            {name}
                            {verified && (
                                <FaCheckCircle
                                    className={verified === "blue" ? "text-blue-500" : "text-yellow-500"}
                                    size={16}
                                    aria-label="Verified account"
                                />
                            )}
                        </figcaption>
                        <p className="text-sm text-gray-500">
                            {username} · <span className="text-gray-400">{time}</span>
                        </p>
                    </div>
                </div>
                <button title="Más opciones" className="text-gray-500">
                    <FaEllipsisH aria-hidden="true" />
                </button>
            </div>

            {/* Contenido del tweet */}
            <p className="text-sm text-gray-800 mt-2">{text}</p>

            {/* Acciones del tweet */}
            <div className="flex justify-between text-gray-500 text-sm mt-3">
                <button onClick={() => handleAction("comments")} className="flex items-center gap-1 hover:text-gray-700 transition-transform transform hover:scale-110" title="Comentar" aria-label="Comentar">
                    <FaComment size={14} /> {state.comments}
                </button>
                <button onClick={() => handleAction("retweets")} className="flex items-center gap-1 hover:text-green-600 transition-transform transform hover:scale-110" title="Retweet" aria-label="Retweet">
                    <FaRetweet size={14} /> {state.retweets}
                </button>
                <button onClick={() => handleAction("likes")} className="flex items-center gap-1 hover:text-red-500 transition-transform transform hover:scale-110" title="Me gusta" aria-label="Me gusta">
                    <FaHeart size={14} /> {state.likes}
                </button>
                <button onClick={() => handleAction("saved")} className={`flex items-center gap-1 transition-transform transform hover:scale-110 ${state.saved ? "text-blue-500" : "hover:text-blue-500"}`} title={state.saved ? "Quitar de guardados" : "Guardar"} aria-label={state.saved ? "Quitar de guardados" : "Guardar"}>
                    <FaBookmark size={14} />
                </button>
                <button onClick={() => handleAction("shares")} className="flex items-center gap-1 hover:text-gray-700 transition-transform transform hover:scale-110" title="Compartir" aria-label="Compartir">
                    <FaShare size={14} /> {state.shares}
                </button>
            </div>
        </figure>
    );
};

export default InterestCard;

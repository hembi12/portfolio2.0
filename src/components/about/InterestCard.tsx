import React, { useState, useEffect } from "react";
import { FaUserCircle, FaCheckCircle, FaComment, FaRetweet, FaHeart, FaShare, FaEllipsisH, FaBookmark } from "react-icons/fa";

interface Interest {
    name: string;
    username: string;
    text: string;
    verified?: "blue" | "gold";
    time: string;
}

// Función segura para manejar `localStorage` con tipado estricto
const safeLocalStorageGet = <T,>(key: string, defaultValue: T): T => {
    try {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : defaultValue;
    } catch {
        return defaultValue;
    }
};

const InterestCard: React.FC<Interest> = ({ name, username, text, verified, time }) => {
    const [likes, setLikes] = useState<number>(() => safeLocalStorageGet(`${username}-likes`, 0));
    const [retweets, setRetweets] = useState<number>(() => safeLocalStorageGet(`${username}-retweets`, 0));
    const [comments, setComments] = useState<number>(() => safeLocalStorageGet(`${username}-comments`, 0));
    const [shares, setShares] = useState<number>(() => safeLocalStorageGet(`${username}-shares`, 0));
    const [saved, setSaved] = useState<boolean>(() => safeLocalStorageGet(`${username}-saved`, false));

    useEffect(() => {
        try {
            localStorage.setItem(`${username}-likes`, JSON.stringify(likes));
            localStorage.setItem(`${username}-retweets`, JSON.stringify(retweets));
            localStorage.setItem(`${username}-comments`, JSON.stringify(comments));
            localStorage.setItem(`${username}-shares`, JSON.stringify(shares));
            localStorage.setItem(`${username}-saved`, JSON.stringify(saved));
        } catch {
            console.warn("No se pudo acceder a localStorage.");
        }
    }, [username, likes, retweets, comments, shares, saved]);

    return (
        <figure className="w-80 p-4 rounded-xl bg-white shadow-md hover:bg-gray-100 border border-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <FaUserCircle className="text-gray-600" size={40} />
                    <div>
                        <figcaption className="text-md font-bold text-gray-900 flex items-center gap-1">
                            {name}
                            {verified && (
                                <FaCheckCircle className={verified === "blue" ? "text-blue-500" : "text-yellow-500"} size={16} />
                            )}
                        </figcaption>
                        <p className="text-sm text-gray-500">{username} · <span className="text-gray-400">{time}</span></p>
                    </div>
                </div>
                <button title="Más opciones" className="text-gray-500">
                    <FaEllipsisH />
                </button>
            </div>
            <p className="text-sm text-gray-800 mt-2">{text}</p>
            <div className="flex justify-between text-gray-500 text-sm mt-3">
                <button
                    onClick={() => setComments(comments + 1)}
                    className="flex items-center gap-1 hover:text-gray-700 transition-transform transform hover:scale-110"
                    title="Comentar"
                >
                    <FaComment size={14} /> {comments}
                </button>
                <button
                    onClick={() => setRetweets(retweets + 1)}
                    className="flex items-center gap-1 hover:text-green-600 transition-transform transform hover:scale-110"
                    title="Retweet"
                >
                    <FaRetweet size={14} /> {retweets}
                </button>
                <button
                    onClick={() => setLikes(likes + 1)}
                    className="flex items-center gap-1 hover:text-red-500 transition-transform transform hover:scale-110"
                    title="Me gusta"
                >
                    <FaHeart size={14} /> {likes}
                </button>
                <button
                    onClick={() => setSaved(!saved)}
                    className={`flex items-center gap-1 transition-transform transform hover:scale-110 ${saved ? "text-blue-500" : "hover:text-blue-500"}`}
                    title={saved ? "Quitar de guardados" : "Guardar"}
                >
                    <FaBookmark size={14} />
                </button>
                <button
                    onClick={() => setShares(shares + 1)}
                    className="flex items-center gap-1 hover:text-gray-700 transition-transform transform hover:scale-110"
                    title="Compartir"
                >
                    <FaShare size={14} /> {shares}
                </button>
            </div>
        </figure>
    );
};

export default InterestCard;

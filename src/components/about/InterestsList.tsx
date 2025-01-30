import React from "react";
import { Marquee } from "@/components/ui/marquee";
import InterestCard from "./InterestCard";

// Definimos correctamente la interfaz Interest
interface Interest {
    name: string;
    username: string;
    text: string;
    verified?: "gold" | "blue"; // Solo puede ser "gold", "blue" o undefined
    time: string;
}

const interests: Interest[] = [
{ name: "F1 Fan", username: "@F1Fan", text: "La F1 es velocidad, estrategia y pura adrenalina. Cada carrera es un espectáculo de tecnología e intensidad. 🏁 🏎️", verified: "gold", time: "2h" },
{ name: "My Friends", username: "@MyFriends", text: "Nada como las risas, los momentos y las locuras con amigos. Siempre hacen la vida más divertida. 🥳 🎮", verified: "blue", time: "5h" },
{ name: "Music Addict", username: "@MusicAddict", text: "La música siempre está ahí: inspira, motiva y te acompaña en cada momento. No hay vida sin un buen soundtrack. 🎵 🎸", verified: "gold", time: "1d" },
{ name: "Cat Lover", username: "@CatLover", text: "Los gatos son puro flow: independientes, cariñosos y con más personalidad que muchos humanos. 😺 🐈‍⬛", verified: "blue", time: "3h" },
{ name: "TARS", username: "@TARS", text: "*Interstellar* es arte: ciencia, emociones y una banda sonora que te deja viajando por el tiempo. 🚀 🪐", verified: "gold", time: "8h" },
{ name: "In Love", username: "@InLove", text: "Tener a alguien especial es lo mejor: amor, apoyo y momentos únicos que hacen todo más bonito. 💕 😍", verified: "blue", time: "2d" },
{ name: "Wander Lust", username: "@WanderLust", text: "Viajar es la mejor inversión: descubres, aprendes y creas recuerdos que duran para siempre. ✈️ 🏖️", verified: "gold", time: "12h" },
{ name: "Coder Life", username: "@CoderLife", text: "Ser dev es convertir ideas en realidad. Código, café y muchas noches en vela solucionando bugs. 🤖 💾", verified: "blue", time: "4h" },
{ name: "Zero Miedo", username: "@ZeroMiedo", text: "La lucha libre es pura pasión. Héroes, villanos y el espectáculo que siempre deja con la piel de gallina. 💪 🔥", verified: "gold", time: "6h" },
{ name: "Family First", username: "@FamilyFirst", text: "La familia lo es todo: amor, risas, apoyo incondicional y una buena comida casera siempre. 🏆 ❤️", verified: "blue", time: "1d" },
{ name: "Top Food", username: "@TopFood", text: "La comida mexicana es otro nivel: tacos, mole, pozole y ese toquecito de picante que lo hace perfecto. 🌶️ 🇲🇽", verified: "gold", time: "3d" }
];

const InterestsList: React.FC = () => {
    return (
        <div className="mt-6">
            <Marquee pauseOnHover className="[--duration:40s]">
                {interests.map((interest) => (
                    <InterestCard key={interest.username} {...interest} />
                ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:45s]">
                {interests.map((interest) => (
                    <InterestCard key={interest.username} {...interest} />
                ))}
            </Marquee>
        </div>
    );
};

export default InterestsList;

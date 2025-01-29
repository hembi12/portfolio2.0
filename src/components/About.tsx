import React from "react";
import { useTranslation } from "react-i18next";
import { Marquee } from "@/components/ui/marquee";
import { FaUserCircle, FaCheckCircle, FaComment, FaRetweet, FaHeart, FaShare, FaEllipsisH } from "react-icons/fa";

interface Interest {
    name: string;
    username: string;
    text: string;
    verified?: "blue" | "gold";
    time: string;
}

const interests: Interest[] = [
    { name: "F1 Fan", username: "@F1Fan", text: "La F1 es velocidad, estrategia y pura adrenalina. Cada carrera es un espectáculo de tecnología e intensidad. 🏁 🏎️", verified: "gold", time: "2h" },
    { name: "My Friends", username: "@MyFriends", text: "Nada como las risas, los momentos y las locuras con amigos. Siempre hacen la vida más divertida. 🥳 🎮", time: "5h" },
    { name: "Music Addict", username: "@MusicAddict", text: "La música siempre está ahí: inspira, motiva y te acompaña en cada momento. No hay vida sin un buen soundtrack. 🎵 🎸", verified: "gold", time: "1d" },
    { name: "Cat Lover", username: "@CatLover", text: "Los gatos son puro flow: independientes, cariñosos y con más personalidad que muchos humanos. 😺 🐈‍⬛", time: "3h" },
    { name: "TARS", username: "@TARS", text: "*Interstellar* es arte: ciencia, emociones y una banda sonora que te deja viajando por el tiempo. 🚀 🪐", verified: "blue", time: "8h" },
    { name: "In Love", username: "@InLove", text: "Tener a alguien especial es lo mejor: amor, apoyo y momentos únicos que hacen todo más bonito. 💕 😍", time: "2d" },
    { name: "Wander Lust", username: "@WanderLust", text: "Viajar es la mejor inversión: descubres, aprendes y creas recuerdos que duran para siempre. ✈️ 🏖️", time: "12h" },
    { name: "Coder Life", username: "@CoderLife", text: "Ser dev es convertir ideas en realidad. Código, café y muchas noches en vela solucionando bugs. 🤖 💾", verified: "gold", time: "4h" },
    { name: "Zero Miedo", username: "@ZeroMiedo", text: "La lucha libre es pura pasión. Héroes, villanos y el espectáculo que siempre deja con la piel de gallina. 💪 🔥", time: "6h" },
    { name: "Family First", username: "@FamilyFirst", text: "La familia lo es todo: amor, risas, apoyo incondicional y una buena comida casera siempre. 🏆 ❤️", time: "1d" },
    { name: "Top Food", username: "@TopFood", text: "La comida mexicana es otro nivel: tacos, mole, pozole y ese toquecito de picante que lo hace perfecto. 🌶️ 🇲🇽", verified: "blue", time: "3d" }
];

const InterestCard: React.FC<Interest> = ({ name, username, text, verified, time }) => {
    return (
        <figure className="w-80 p-4 rounded-xl bg-white shadow-md hover:bg-gray-100 border border-gray-200 font-sans">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <FaUserCircle className="text-gray-600" size={40} />
                    <div>
                        <figcaption className="text-md font-bold text-gray-900 flex items-center gap-1">
                            {name}
                            {verified && (
                                <FaCheckCircle
                                    className={verified === "blue" ? "text-blue-500" : "text-yellow-500"}
                                    size={16}
                                />
                            )}
                        </figcaption>
                        <p className="text-sm text-gray-500">{username} · <span className="text-gray-400">{time}</span></p>
                    </div>
                </div>
                <FaEllipsisH className="text-gray-500 cursor-pointer" />
            </div>
            <p className="text-sm text-gray-800 mt-2 leading-relaxed">{text}</p>
            <div className="flex justify-between text-gray-500 text-sm mt-3">
                <FaComment size={14} className="cursor-pointer hover:text-gray-700" />
                <FaRetweet size={14} className="cursor-pointer hover:text-green-600" />
                <FaHeart size={14} className="cursor-pointer hover:text-red-500" />
                <FaShare size={14} className="cursor-pointer hover:text-gray-700" />
            </div>
        </figure>
    );
};

const About: React.FC = () => {
    const { t, ready } = useTranslation();
    if (!ready) return <div className="animate-pulse text-gray-400 text-center">Loading translations...</div>;

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl text-center md:text-left" aria-label={t("about.title")}>
                {t("about.title")}
            </h2>
            <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                {t("about.description.part1")} <span className="text-cyan-200">{t("about.highlights.newCareer")}</span> {t("about.description.part2")} <span className="text-cyan-200">{t("about.highlights.creativity")}</span> {t("about.description.part3")}
            </p>
            <div className="mt-6">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {interests.map((interest, index) => (
                        <InterestCard key={index} {...interest} />
                    ))}
                </Marquee>
            </div>
            <div className="mt-6">
                <Marquee reverse pauseOnHover className="[--duration:45s]">
                    {interests.map((interest, index) => (
                        <InterestCard key={index} {...interest} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default About;

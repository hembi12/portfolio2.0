import React from "react";
import { useTranslation } from "react-i18next";
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

const InterestsList: React.FC = () => {
    const { t } = useTranslation();

    const interests: Interest[] = [
        { name: "F1 Fan", username: "@F1Fan", text: t("interests.F1Fan"), verified: "gold", time: "2h" },
        { name: "My Friends", username: "@MyFriends", text: t("interests.MyFriends"), verified: "blue", time: "5h" },
        { name: "Music Addict", username: "@MusicAddict", text: t("interests.MusicAddict"), verified: "gold", time: "1d" },
        { name: "Cat Lover", username: "@CatLover", text: t("interests.CatLover"), verified: "blue", time: "3h" },
        { name: "TARS", username: "@TARS", text: t("interests.TARS"), verified: "gold", time: "8h" },
        { name: "In Love", username: "@InLove", text: t("interests.InLove"), verified: "blue", time: "2d" },
        { name: "Wander Lust", username: "@WanderLust", text: t("interests.WanderLust"), verified: "gold", time: "12h" },
        { name: "Coder Life", username: "@CoderLife", text: t("interests.CoderLife"), verified: "blue", time: "4h" },
        { name: "Zero Miedo", username: "@ZeroMiedo", text: t("interests.ZeroMiedo"), verified: "gold", time: "6h" },
        { name: "Family First", username: "@FamilyFirst", text: t("interests.FamilyFirst"), verified: "blue", time: "1d" },
        { name: "Top Food", username: "@TopFood", text: t("interests.TopFood"), verified: "gold", time: "3d" }
    ];

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
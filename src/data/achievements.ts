/**
 * IEEE MC Marrakesh Achievements & Awards
 * Competitions where members participated and won prizes
 */

export interface Achievement {
    prize: string;
    prizeRank: "1st" | "2nd" | "3rd" | "Best Design" | "Honorable Mention";
    robotName?: string;
    competitionName: string;
    institution: string;
    year?: string;
    image: string;
}

export const achievements: Achievement[] = [
    {
        prize: "1st Place",
        prizeRank: "1st",
        robotName: "AT Vision",
        competitionName: "COCIA-conf 2025",
        institution: "EST Casablanca",
        image: "/assets/achievements/cocia-1st.jpg",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        robotName: "NeuroDrive",
        competitionName: "Road Safety Competition",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/neurodrive.jpeg",
    },
    {
        prize: "1st Place",
        prizeRank: "1st",
        robotName: "AT Vision",
        competitionName: "AUI Entrepreneurship Award",
        institution: "Al Akhawayn University",
        image: "/assets/achievements/aui.jpg",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        robotName: "FireTruck",
        competitionName: "COCIA-conf 2025",
        institution: "EST Casablanca",
        image: "/assets/achievements/cocia_3rd.jpg",
    },
    {
        prize: "1st Place",
        prizeRank: "1st",
        robotName: "AT Vision",
        competitionName: "Hackathon ISMAGI 2025 - Water: The Flow of Innovation",
        institution: "ISMAGI Rabat",
        image: "/assets/achievements/ismagi.jpg",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        robotName: "FireTruck",
        competitionName: "AISEC 2025",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/aisec.jpg",
    },
    {
        prize: "Best Design Award",
        prizeRank: "Best Design",
        robotName: "RoboForge",
        competitionName: "Robot Basketball",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/roboforge.jpeg",
    },
];

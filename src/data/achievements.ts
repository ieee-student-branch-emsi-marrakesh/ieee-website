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
        prize: "Best Design Award",
        prizeRank: "Best Design",
        robotName: "RoboForge",
        competitionName: "Robot Basketball",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/roboforge.jpg",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        robotName: "NeuroDrive",
        competitionName: "Road Safety Competition",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/neurodrive.jpg",
    },
    {
        prize: "1st Place",
        prizeRank: "1st",
        competitionName: "COCIA-conf 2025",
        institution: "EST Casablanca",
        image: "/assets/achievements/cocia-1st.jpg",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        robotName: "FireTruck",
        competitionName: "COCIA-conf 2025",
        institution: "EST Casablanca",
        image: "/assets/achievements/firetruck-cocia.jpg",
    },
    {
        prize: "3rd Place",
        prizeRank: "3rd",
        robotName: "FireTruck",
        competitionName: "AISEC 2025",
        institution: "ENSA Marrakech",
        image: "/assets/achievements/firetruck-aisec.jpg",
    },
];

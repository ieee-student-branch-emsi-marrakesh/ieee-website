export interface Supervisor {
    name: string;
    title: string;
    role: string;
    image: string;
}

export const supervisors: Supervisor[] = [
    {
        name: "Dr. Abdelati REHA",
        title: "PhD in ...",
        role: "Research and Development Director at EMSI Marrakesh",
        image: "/assets/supervisors/reha.jpg",
    },
    {
        name: "Dr. Raja MOUACHI",
        title: "Doctor of Engineering, Electrical Engineering, Renewable Energies, Computer Science",
        role: "Coordinator of the Industrial Engineering program at EMSI Marrakesh",
        image: "/assets/supervisors/mouachi.jpg",
    },
    {
        name: "Dr. Fatimazahra JAKJOUD",
        title: "PhD in AI and Embedded Systems",
        role: "Professor at EMSI Marrakesh",
        image: "/assets/supervisors/jakjoud.jpg",
    },
    {
        name: "Dr. Omaima BENKHADDA",
        title: "Doctor of Electrical Engineering and Telecommunications",
        role: "Professor at EMSI Marrakesh",
        image: "/assets/supervisors/benkhadda.jpg",
    },
];

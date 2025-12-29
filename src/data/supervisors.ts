export interface Supervisor {
    name: string;
    title: string;
    role: string;
    image: string;
}

export const supervisors: Supervisor[] = [
    {
        name: "Abdelati REHA",
        title: "PhD in ...",
        role: "Research and Development Director at EMSI Marrakesh",
        image: "/assets/supervisors/reha.jpg",
    },
    {
        name: "Raja MOUACHI",
        title: "Doctor of Engineering, Electrical Engineering, Renewable Energies, Computer Science",
        role: "Coordinator of the Industrial Engineering program at EMSI Marrakesh",
        image: "/assets/supervisors/mouachi.jpg",
    },
    {
        name: "Fatimazahra JAKJOUD",
        title: "PhD in AI and Embedded Systems",
        role: "Professor at EMSI Marrakesh",
        image: "/assets/supervisors/jakjoud.jpg",
    },
    {
        name: "Omaima BENKHADDA",
        title: "Doctor of Electrical Engineering and Telecommunications",
        role: "Professor at EMSI Marrakesh",
        image: "/assets/supervisors/benkhadda.jpg",
    },
];

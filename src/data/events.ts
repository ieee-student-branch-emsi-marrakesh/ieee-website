export interface Event {
    title: string;
    description: string;
    date: string;
    image: string;
    category: "Workshop" | "Competition" | "Talk" | "Bootcamp";
    isPast: boolean;
}

export const events: Event[] = [
    /* Upcoming Events */
    {
        title: "Vision AI Competition",
        description: "AI Projects Competition.",
        date: "February 14, 2026",
        image: "/assets/events/vision_ai.jpg",
        category: "Competition",
        isPast: false,
    },

    /* Past Events */
    {
      title: "Cyber Security & CTFs Bootcamp",
      description: "",
      date: "Decemeber 10, 2025",
      image: "/assets/events/cyber_ctf.jpg",
      category: "Bootcamp",
      isPast: true,
    },
    {
        title: "Initiation en Entrepreneuriat",
        description: "",
        date: "November 19, 2025",
        image: "/assets/events/init_entrep.png",
        category: "Talk",
        isPast: true,
    },
    {
        title: "SolidWorks Workshop",
        description: "",
        date: "April 30, 2025",
        image: "/assets/events/solidworks.jpg",
        category: "Workshop",
        isPast: true,
    },
    {
        title: "Cloud Computing Basics With AWS",
        description: "",
        date: "April 24, 2025",
        image: "/assets/events/aws.jpg",
        category: "Workshop",
        isPast: true,
    },
    {
        title: "Power Up with Linux: Learn, Practice, Advance",
        description: "",
        date: "April 19, 2025",
        image: "/assets/events/linux.jpg",
        category: "Workshop",
        isPast: true,
    },
];

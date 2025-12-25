export interface Cell {
    id: string;
    name: string;
    description: string;
    activities: string[];
    schedule: string;
    image: string;
}

export const cells: Cell[] = [
    {
        id: "cvtt",
        name: "CVTT (Computer Vision & Tech Trends)",
        description: "Focuses on the latest trends in computer vision, AI, and emerging technologies.",
        activities: [
            "Image processing workshops",
            "Object detection projects",
            "Deep learning seminars",
        ],
        schedule: "Every Wednesday at 14:00",
        image: "/assets/cells/cvtt.jpg",
    },
    {
        id: "cs",
        name: "CS (Computer Society)",
        description: "Dedicated to advancing the theory and practice of computer and information processing.",
        activities: [
            "Competitive programming training",
            "Software development projects",
            "Hackathons",
        ],
        schedule: "Every Saturday at 10:00",
        image: "/assets/cells/cs.jpg",
    },
    {
        id: "ras",
        name: "RAS (Robotics and Automation Society)",
        description: "Bringing together students interested in robotics, automation, and control systems.",
        activities: [
            "Robot building sessions",
            "Control systems design",
            "Field trips to tech labs",
        ],
        schedule: "Every Tuesday at 16:00",
        image: "/assets/cells/ras.jpg",
    },
];
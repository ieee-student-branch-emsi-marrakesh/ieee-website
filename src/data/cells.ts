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
];

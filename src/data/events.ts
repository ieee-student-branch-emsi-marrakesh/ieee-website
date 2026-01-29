export interface Speaker {
    name: string;
    role: string;
}

export interface Event {
    title: string;
    description: string;
    date: string;
    image: string;
    category: "Workshop" | "Competition" | "Talk" | "Bootcamp";
    isPast: boolean;
    type: "workshop" | "bootcamp" | "competition" | "talk";
    location: string;
    detailedDescription: string;
    speakers?: Speaker[];
    objectives?: string[];
    tools?: string[];
    gallery?: string[];
    registrationLink?: string;
}

export const events: Event[] = [
    /* Upcoming Events */
    {
        title: "Vision AI Competition",
        description: "AI Projects Competition.",
        date: "February 14, 2026",
        image: "/assets/events/vision_ai.jpg",
        category: "Competition",
        type: "competition",
        location: "EMSI Marrakesh",
        isPast: false,
        detailedDescription: "Join us for an exciting AI competition where teams will compete to build innovative computer vision solutions. Participants will tackle real-world challenges using state-of-the-art machine learning techniques and present their projects to a panel of industry experts.",
        objectives: [
            "Develop innovative AI-powered vision solutions",
            "Apply machine learning techniques to real-world problems",
            "Present technical solutions to industry experts",
            "Network with AI professionals and fellow students"
        ],
        registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSevHzkE1GcGxOSTjUK9pt-V-3Hbi6tH4iXHZ2oefE9-M5Q0dQ/viewform?usp=sharing&ouid=105034487534648453116",
    },

    /* Past Events */
    {
        title: "Cyber Security & CTFs Bootcamp",
        description: "Intensive bootcamp covering cybersecurity fundamentals and Capture The Flag competitions.",
        date: "December 10, 2025",
        image: "/assets/events/cyber_ctf.jpg",
        category: "Bootcamp",
        type: "bootcamp",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "An intensive hands-on bootcamp designed to introduce students to the exciting world of cyber security and CTF competitions. Participants learned essential security concepts, practiced penetration testing techniques, and competed in live CTF challenges. The bootcamp covered web security, cryptography and reverse engineering fundamentals.",
        speakers: [
            {
                name: "Youness SBAI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "Kali Linux",
            "Nmap",
            "Burp Suite",
            "Wireshark",
            "Metasploit",
            "John the Ripper",
        ],
    },
    {
        title: "Initiation en Entrepreneuriat",
        description: "Introduction to entrepreneurship and startup culture.",
        date: "November 19, 2025",
        image: "/assets/events/init_entrep.png",
        category: "Talk",
        type: "talk",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "An inspiring talk introducing students to the fundamentals of entrepreneurship and innovation. The session covered essential topics including idea validation, business model development, startup funding, and the entrepreneurial mindset. Attendees learned from successful entrepreneurs about their journey, challenges, and key lessons learned in building successful ventures.",
        speakers: [
            {
                name: "Dr. Inass BOUBEKRI",
                role: "Doctor in Economics - Professor at EMSI Marrakesh - Business Consultant"
            }
        ],
    },
    {
        title: "SolidWorks Workshop",
        description: "Hands-on workshop on 3D CAD modeling using SolidWorks.",
        date: "April 30, 2025",
        image: "/assets/events/solidworks.jpg",
        category: "Workshop",
        type: "workshop",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "A comprehensive hands-on workshop introducing students to professional 3D CAD modeling using SolidWorks. Participants learned fundamental modeling techniques, assembly creation, technical drawing generation, and simulation basics. The workshop included practical exercises where students designed and modeled real-world mechanical components and assemblies.",
        speakers: [
            {
                name: "Mouad ELCRAFSI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "SolidWorks 2024",
            "3D Modeling",
            "Assembly Design",
            "Technical Drawings"
        ],
    },
    {
        title: "Cloud Computing Basics With AWS",
        description: "Introduction to cloud computing concepts and AWS services.",
        date: "April 24, 2025",
        image: "/assets/events/aws.jpg",
        category: "Workshop",
        type: "workshop",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "An introductory workshop on cloud computing fundamentals using Amazon Web Services (AWS). Students learned about cloud architecture, core AWS services, and hands-on deployment of applications. The workshop covered EC2, S3, RDS, Lambda, and basic DevOps practices. Participants gained practical experience by deploying their first cloud-based applications and understanding cloud cost optimization.",
        speakers: [
            {
                name: "Majdouline SABRI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "AWS EC2",
            "AWS S3",
            "AWS Lambda",
            "AWS RDS",
            "CloudFormation",
            "AWS CLI"
        ],
    },
    {
        title: "Power Up with Linux: Learn, Practice, Advance",
        description: "Comprehensive Linux fundamentals and command-line mastery.",
        date: "April 19, 2025",
        image: "/assets/events/linux.jpg",
        category: "Workshop",
        type: "workshop",
        location: "EMSI Marrakesh",
        isPast: true,
        detailedDescription: "A comprehensive workshop designed to empower students with essential Linux skills. From basic command-line operations to advanced system administration, participants learned to navigate the Linux ecosystem with confidence. The workshop covered file system management, shell scripting, process management, networking basics, and package management. Students gained hands-on experience through practical exercises and real-world scenarios.",
        speakers: [
            {
                name: "Abdelilah HABIB",
                role: "Student at EMSI Marrakesh"
            },
            {
                name: "Mohamed ERRAJI",
                role: "Student at EMSI Marrakesh"
            }
        ],
        tools: [
            "Ubuntu/Debian",
            "Bash Scripting",
            "Vim/Nano",
            "Git",
            "SSH",
            "Package Managers (apt, yum)"
        ],
    },
];

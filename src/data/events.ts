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
      title: "CATIA Design Bootcamp",
      description: "Bootcamp featuring two workshops on CATIA for mechanical design and CAD fundamentals.",
        date: "December 24, 2025",
      image: "/assets/events/catia.jpg",
      category: "Bootcamp",
      type: "bootcamp",
      location: "EMSI Marrakesh",
      isPast: true,
      detailedDescription: "A hands-on CATIA bootcamp composed of two workshops aimed at introducing students to one of the most powerful CAD tools used in the mechanical, automotive, and aerospace industries. The bootcamp focused on building a strong foundation in CATIA, from understanding its industrial relevance to mastering its interface and core functionalities. Through practical guidance and real-world insights, participants strengthened their CAD and design skills while preparing for advanced engineering projects.",
        speakers: [
          {
            name: "Yahya LOUKILI",
            role: "Student at EMSI Marrakesh"
          }
        ],
        objectives: [
          "Introduce CATIA and its industrial applications",
          "Understand the CATIA interface and core features",
          "Develop foundational CAD and mechanical design skills",
          "Prepare students for advanced design and engineering projects"
        ],
      tools: [
        "CATIA V5",
        "3D CAD Modeling",
        "Mechanical Design",
        "Part Design",
        "Assembly Design"
      ],
    },
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
      title: "EMSIstes INNOV'25",
      description: "Innovation competition focused on smart systems and emerging technologies.",
      date: "May 24, 2025",
      image: "/assets/events/emsistes_innov25.jpg",
      category: "Competition",
      type: "competition",
      location: "EMSI Marrakesh",
      isPast: true,
      detailedDescription: "EMSIstes INNOV is an innovation-driven competition that brought together students to design and prototype smart systems addressing real-world challenges. The competition focused on key domains such as HealthTech, Smart Mobility, Renewable Energy, and Artificial Intelligence. Teams worked collaboratively to develop impactful solutions, combining technical skills, creativity, and entrepreneurial thinking, before presenting their projects to a jury.",
      objectives: [
        "Encourage innovation and problem-solving using smart systems",
        "Apply AI and emerging technologies to real-world challenges",
        "Promote teamwork and interdisciplinary collaboration",
        "Expose students to project pitching and evaluation by a jury"
      ],
      tools: [
        "Artificial Intelligence",
        "IoT & Smart Systems",
        "Renewable Energy Technologies",
        "Data Analysis",
        "Prototyping Tools"
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

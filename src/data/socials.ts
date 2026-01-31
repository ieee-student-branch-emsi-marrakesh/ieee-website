/**
 * Official IEEE EMSI Marrakesh Contact Information
 * Centralized configuration for all social media links and contact details
 */

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    email: string;
    location: string;
}

/**
 * Official Social Media Links
 */
export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/ieeestudentbranchemsimarrakech/",
    instagram: "https://www.instagram.com/ieee.emsi.marrakech/",
    github: "https://github.com/ieee-student-branch-emsi-marrakesh",
} as const;

/**
 * Official Contact Email
 */
export const CONTACT_EMAIL = "studentbranchiee@gmail.com";

/**
 * Contact Information
 */
export const CONTACT_INFO: ContactInfo = {
    email: CONTACT_EMAIL,
    location: "EMSI Guéliz, Marrakesh, Morocco",
};

/**
 * Generate mailto link for email
 */
export const getMailtoLink = (email: string = CONTACT_EMAIL): string => {
    return `mailto:${email}`;
};

/**
 * Social links array for easy iteration
 */
export const getSocialLinksArray = () => [
    {
        name: "LinkedIn",
        url: SOCIAL_LINKS.linkedin,
        platform: "linkedin",
    },
    {
        name: "Instagram",
        url: SOCIAL_LINKS.instagram,
        platform: "instagram",
    },
    {
        name: "GitHub",
        url: SOCIAL_LINKS.github,
        platform: "github",
    },
];

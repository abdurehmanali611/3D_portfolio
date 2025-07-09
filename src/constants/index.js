import { EITA, logovolaso, vehicle, gym, abdu, teap, study } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    typescript,
    nextjs,
    nodejs,
    react,
    sass,
    expo,
    tailwindcss,
    firebase,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
   
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: expo,
        name: "React Native Expo",
        type: "Mobile Development",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Volaso Technologies",
        icon: logovolaso,
        iconBg: "#accbe1",
        date: "March 2022 - April 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Next.js Developer",
        company_name: "EITA",
        icon: EITA,
        iconBg: "#b7e4c7",
        date: "Sep 2024 - Dec 2024",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Fleet Management",
        icon: vehicle,
        iconBg: "#fbc3bc",
        date: "Feb 2025 - Present",
        points: [
            "Developing and maintaining Mobile applications using React Native expo",
            "Implementing responsive design and ensuring cross-device compatibility.",
            "IT IS STILL UNDER DEVELOPMENT TO EVEN INCLUDE AI ON IT."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Fleet Management",
        icon: vehicle,
        iconBg: "#a2d2ff",
        date: "Feb 2025 - Present",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/abdurehmanali611',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abdurehman-ali-592238281/',
    }
];

export const projects = [
    {
        iconUrl: EITA,
        theme: 'btn-back-red',
        name: 'EITA - Ethiopian Islamic Teaching Association',
        description: 'Developed a web and mobile application that tracks and represents services of the organization.',
        link: 'https://github.com/abdurehmanali611/EITA.git',
    },
    {
        iconUrl: vehicle,
        theme: 'btn-back-green',
        name: 'Vehicle Request Management App',
        description: 'Created a Mobile App for the Institutions fleet management enabling users to request vehicles and Getting Approved by Responsibles.',
        link: 'https://github.com/abdurehmanali611/Internship_vehicle_Request_INSA.git',
    },
    {
        iconUrl: logovolaso,
        theme: 'btn-back-blue',
        name: 'Volaso Technologies',
        description: 'Designed and built a website for use as a portfolio for a technology company specially in Driverless Cars.',
        link: 'https://github.com/abdurehmanali611/volaso_tech.git',
    },
    {
        iconUrl: gym,
        theme: 'btn-back-pink',
        name: 'Fitness Gym Single Page Website',
        description: 'Built a complete portfolio for a Gym, allowing users to access services that are given by the Gym.',
        link: 'https://github.com/abdurehmanali611/fitness_site.git',
    },
    {
        iconUrl: abdu,
        theme: 'btn-back-yellow',
        name: 'Personal Site (Portfolio)',
        description: 'Built a complete portfolio for me, including my prior projects when we were in our first journey.',
        link: 'https://github.com/abdurehmanali611/personal_site.git',
    },
    {
        iconUrl: teap,
        theme: 'btn-back-orange',
        name: 'Teap',
        description: 'Built a Mobile App for an organization that was intended to work like uber by connecting Technicians to the Householders .',
        link: 'https://github.com/abdurehmanali611/Tip_Expo_51.git',
    },
    {
        iconUrl: study,
        theme: 'btn-back-black',
        name: 'Study Pal',
        description: 'Built a Mobile App intended for helping to study hard for their exam and general knowledge.',
        link: 'https://github.com/abdurehmanali611/Study_App.git',
    }
];
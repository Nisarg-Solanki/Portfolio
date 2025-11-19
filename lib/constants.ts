import { FiCloud } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGraphql,
} from "react-icons/si";

export const PERSONAL_INFO = {
  name: "Nisarg Solanki",
  title: "MERN Stack Developer",
  email: "solankinisarg815@gmail.com",
  phone: "",
  location: "",
  bio: "Frontend-focused MERN Stack Developer specializing in building fast, intuitive, and modern web experiences.",
  avatar: "/nisarg-profile.JPG",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Nisarg-Solanki/",
  linkedin: "https://www.linkedin.com/in/nisarg-solanki-808113292/",
  email: `mailto:${PERSONAL_INFO.email}`,
};

export const STATS = {
  experience: "1.5+",
  projects: "2+",
  clients: "",
  awards: "",
};

export const SKILLS = [
  { name: "HTML 5", logo: SiHtml5, color: "#E34F26" },
  { name: "CSS 3", logo: SiCss3, color: "#1572B6" },
  { name: "JavaScript", logo: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", logo: SiTypescript, color: "#3178C6" },
  { name: "React Js", logo: SiReact, color: "#61DAFB" },
  { name: "Next Js", logo: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", logo: SiTailwindcss, color: "#38B2AC" },
  { name: "Node Js", logo: SiNodedotjs, color: "#339933" },
  { name: "Express JS", logo: SiExpress, color: "#808080" },
  { name: "Mongo DB", logo: SiMongodb, color: "#47A248" },
  { name: "MySql", logo: SiMysql, color: "#4479A1" },
  { name: "Git", logo: SiGit, color: "#F05032" },
  { name: "REST API", logo: FiCloud, color: "#9333EA" },
  { name: "GraphQL API", logo: SiGraphql, color: "#E535AB" },
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "bg-cyan-500" },
      { name: "Next.js", level: 85, color: "bg-gray-800" },
      { name: "TypeScript", level: 88, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-600" },
      { name: "Express", level: 82, color: "bg-gray-700" },
      { name: "MySql", level: 80, color: "bg-blue-700" },
      { name: "MongoDB", level: 78, color: "bg-green-500" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 88, color: "bg-orange-600" },
      { name: "REST API", level: 90, color: "bg-purple-600" },
      { name: "GraphQL API", level: 90, color: "bg-pink-600" },
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "Ellifi",
    position: "Frontend Developer",
    period: "JAN 2024 - OCT 2025",
    description:
      "Developed and maintained high-quality client projects using modern frontend technologies, delivering responsive, user-centric interfaces and optimized performance.",
    icon: "🚀",
  },
];

export const PROJECTS = [
  {
    title: "Movie Website",
    description:
      "An interactive movie platform built with React and Redux Toolkit, allowing users to explore, search, and manage favorite movies. Features a responsive UI and smooth navigation for an engaging experience.",
    image: "/movie-screening-image.png",
    tech: ["React.js", "Redux Toolkit"],
    link: "",
    github: "https://github.com/Nisarg-Solanki/Movie-Screening",
  },
  {
    title: "Myntra Clone",
    description:
      "A frontend-focused e-commerce web app inspired by Myntra, featuring product browsing, cart and wishlist management, and category-based filtering with a fully responsive design.",
    image: "/myntra-clone-image.png",
    tech: ["React.js", "Node.js", "Express.js"],
    link: "",
    github: "https://github.com/Nisarg-Solanki/Myntr-Clone",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS to showcase projects and experience. Includes a contact form, dark/light theme toggle, and integrated analytics for performance tracking.",
    image: "/portfolio-image.png",
    tech: ["Next.js", "Tailwind CSS", "Formspree", "Vercel"],
    link: "",
    github: "https://github.com/Nisarg-Solanki/Portfolio",
  },
];

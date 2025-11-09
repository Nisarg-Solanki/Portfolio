export const PERSONAL_INFO = {
  name: "Nisarg Solanki",
  title: "MERN Stack Developer",
  email: "solankinisarg815@gmail.com",
  phone: "",
  location: "",
  bio: "Full Stack Developer specializing in building exceptional digital experiences with modern web technologies",
  avatar: "/images/nisarg-profile.JPG",
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
  { name: "HTML 5", logo: "" },
  { name: "CSS 3", logo: "" },
  { name: "JavaScript", logo: "" },
  { name: "TypeScript", logo: "" },
  { name: "React Js", logo: "" },
  { name: "Next Js", logo: "" },
  { name: "Tailwind CSS", logo: "" },
  { name: "Node Js", logo: "" },
  { name: "Express JS", logo: "" },
  { name: "Mongo DB", logo: "" },
  { name: "MySql", logo: "" },
  { name: "Git", logo: "" },
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
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "Ellifi",
    position: "Frontend Developer",
    period: "JAN 2024 - OCT 2025",
    description:
      "Developed and maintained multiple client projects using modern web technologies.",
    icon: "🚀",
  },
];

export const PROJECTS = [
  {
    title: "Movie Website",
    description:
      "A full-stack e-commerce solution with payment integration and admin dashboard.",
    image: "🎬",
    tech: ["React.js", "Redux Toolkit"],
    link: "",
    github: "https://github.com/Nisarg-Solanki/Movie-Screening",
  },
  {
    title: "Myntra Clone",
    description: "Collaborative task management tool with real-time updates.",
    image: "🛒",
    tech: ["React.js", "Node.js", "Express.js"],
    link: "",
    github: "https://github.com/Nisarg-Solanki/Myntr-Clone",
  },
];

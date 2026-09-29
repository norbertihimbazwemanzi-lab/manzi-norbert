export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  problemSolved?: string;
  architectureNotes?: string;
  challengesAndSolutions?: string[];
  features?: string[];
  technologies: string[];
  category: 'Platforms' | 'Systems' | 'Web Apps' | 'Mobile';
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
  year: string;
  role: string;
  clientOrContext?: string;
  status?: string;
  isComingSoon?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'Tooling & Workflow' | 'Design & Practices';
  percentage: number;
  iconName: string;
  color: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  title: string;
  organization: string;
  type: 'Education' | 'Experience' | 'Milestone';
  description: string;
  skills: string[];
  highlight: string;
}

export interface CorePhilosophy {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface InnerCirclePerson {
  id: string;
  name: string;
  role: 'Sibling' | 'Friend';
  tagline: string;
  socialHandle?: string;
  socialUrl?: string;
  platform?: string;
  description: string;
  avatarColor: string;
}

export const PROFILE = {
  name: "Ihimbazwe Manzi Norbert",
  shortName: "Norbert Manzi",
  nickname: "IT Norbert",
  title: "Software Developer & Full-Stack Builder",
  education: "L4 Software Development",
  organization: "TVET Rwanda",
  location: "Kigali, Rwanda",
  availability: "Available for freelance and opportunities",
  email: "norbertihimbazwemanzi@gmail.com",
  phone: "0790962628",
  phoneDisplay: "0790962628 (+250 790 962 628)",
  whatsappUrl: "https://wa.me/250790962628",
  github: "https://github.com/norbertihimbazwemanzi-lab/",
  githubHandle: "norbertihimbazwemanzi-lab",
  linkedin: "https://www.linkedin.com/in/manzi-norbert",
  linkedinHandle: "manzi norbert",
  facebook: "https://www.facebook.com/manziwizzynorbert",
  facebookHandle: "manziwizzynorbert",
  instagram: "https://instagram.com/ma_nzi1",
  instagramHandle: "ma_nzi1",
  bioShort: "I build modern, fast and responsive web applications with clean code and exceptional user experience.",
  aboutBio: "I'm a Software Development student with a passion for building digital products that make life easier. I enjoy solving problems, learning new technologies and creating meaningful solutions through code. Based in Kigali, Rwanda, I combine clean architecture, modern frontend frameworks, and cloud backends to deliver delightful, dependable user experiences.",
};

export const INNER_CIRCLE: InnerCirclePerson[] = [
  {
    id: "sibling-usanase",
    name: "Usanase Lilly Brave",
    role: "Sibling",
    tagline: "Beloved Sibling & Family",
    socialHandle: "usanaselillybrave",
    socialUrl: "https://instagram.com/usanaselillybrave",
    platform: "Instagram / Social Media",
    description: "My wonderful sibling, always a great source of inspiration, encouragement, and love.",
    avatarColor: "from-pink-500 to-rose-600"
  },
  {
    id: "friend-irakoze",
    name: "Irakoze Hertier",
    role: "Friend",
    tagline: "Close Friend & Companion",
    description: "My dear friend, standing by me through every stage of life, learning, and growth.",
    avatarColor: "from-sky-500 to-indigo-600"
  }
];

export const CORE_PHILOSOPHIES: CorePhilosophy[] = [
  {
    title: "Clean Code",
    tagline: "Readable, maintainable and scalable code.",
    description: "I write clean, maintainable and scalable code following best practices, strict type safety, and modular component architecture.",
    iconName: "Code2"
  },
  {
    title: "Problem Solving",
    tagline: "Turning complex problems into practical solutions.",
    description: "I love solving complex problems and turning ideas into working products with high performance and seamless interaction.",
    iconName: "Cpu"
  },
  {
    title: "Continuous Growth",
    tagline: "Constantly learning and improving.",
    description: "I never stop learning and constantly improving my skills, keeping up with modern web technologies, AI tools, and distributed patterns.",
    iconName: "TrendingUp"
  }
];

export const SKILLS: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    percentage: 90,
    iconName: "FileCode",
    color: "#e34f26",
    description: "Semantic markup, web accessibility landmarks, and search optimization standards."
  },
  {
    name: "CSS",
    category: "Frontend",
    percentage: 90,
    iconName: "Palette",
    color: "#1572b6",
    description: "Modern CSS Grid, Flexbox, custom design systems, animations, and cross-browser styling."
  },
  {
    name: "JavaScript",
    category: "Frontend",
    percentage: 90,
    iconName: "Binary",
    color: "#f7df1e",
    description: "ES6+ syntax, asynchronous programming, event-driven pipelines, closures, and DOM optimization."
  },
  {
    name: "TypeScript",
    category: "Frontend",
    percentage: 85,
    iconName: "FileCode2",
    color: "#3178c6",
    description: "Static type checking, interfaces, generic types, strict type validation, and robust contracts."
  },
  {
    name: "React",
    category: "Frontend",
    percentage: 90,
    iconName: "Atom",
    color: "#61dafb",
    description: "Component architecture, custom hooks, state management, memoization, and fast virtual DOM updates."
  },
  {
    name: "Vue",
    category: "Frontend",
    percentage: 75,
    iconName: "Flame",
    color: "#42b883",
    description: "Vue 3 Composition API, reactive references, Pinia state stores, and Single File Components."
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    percentage: 95,
    iconName: "Wind",
    color: "#38bdf8",
    description: "Utility-first styling, design token consistency, responsive breakpoints, and sleek glassmorphism."
  },
  {
    name: "Firebase",
    category: "Backend & Cloud",
    percentage: 80,
    iconName: "Database",
    color: "#ffca28",
    description: "Cloud Firestore real-time listeners, Firebase Authentication, Cloud Storage, and security rules."
  },
  {
    name: "Cloud",
    category: "Backend & Cloud",
    percentage: 85,
    iconName: "Cloud",
    color: "#0087ff",
    description: "Scalable cloud infrastructure, serverless deployments, secure storage pipelines, and API integrations."
  },
  {
    name: "Git",
    category: "Tooling & Workflow",
    percentage: 90,
    iconName: "GitBranch",
    color: "#f05032",
    description: "Version control, atomic commits, branch workflows, conflict resolution, and repository hygiene."
  },
  {
    name: "GitHub",
    category: "Tooling & Workflow",
    percentage: 90,
    iconName: "Github",
    color: "#ffffff",
    description: "Open source collaboration, code reviews, pull requests, issue tracking, and CI/CD actions."
  },
  {
    name: "AI Prompting",
    category: "Tooling & Workflow",
    percentage: 92,
    iconName: "Sparkles",
    color: "#38bdf8",
    description: "Designing clear, structured and effective prompts to guide AI tools toward accurate, useful and consistent results."
  },
  {
    name: "UI / UX",
    category: "Design & Practices",
    percentage: 80,
    iconName: "Layout",
    color: "#f24e1e",
    description: "Visual hierarchy, typography scaling, intuitive user flows, dark mode theming, and micro-interactions."
  },
  {
    name: "Responsive Design",
    category: "Design & Practices",
    percentage: 95,
    iconName: "Smartphone",
    color: "#38bdf8",
    description: "Adaptive layouts across smartphones (320px+), tablets, laptops, and ultra-wide desktop monitors."
  },
  {
    name: "Photoshop",
    category: "Design & Practices",
    percentage: 85,
    iconName: "Image",
    color: "#31a8ff",
    description: "Professional visual asset crafting, image manipulation, UI mockups, and high-fidelity graphic design."
  }
];

export const PROJECTS: Project[] = [];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "edu-2026",
    date: "2026",
    title: "L4 Software Development Student",
    organization: "TVET Rwanda",
    type: "Education",
    description: "Currently pursuing Level 4 in Software Development. Learning advanced web development, relational & NoSQL databases, algorithms, software engineering principles, and agile methodologies.",
    skills: ["Web Development", "Databases", "Algorithms", "Software Engineering"],
    highlight: "TVET Rwanda"
  },
  {
    id: "exp-fullstack",
    date: "2026",
    title: "Full-Stack Web Development",
    organization: "Independent Development",
    type: "Experience",
    description: "Designing and developing modern, responsive web applications with clean component architecture, reactive state management, and real-time database integrations.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    highlight: "Independent Development"
  },
  {
    id: "exp-cloud",
    date: "2025 - 2026",
    title: "Cloud & API Integrations",
    organization: "Software Projects",
    type: "Experience",
    description: "Building scalable backend pipelines, authentication workflows, cloud datastore rules, and low-latency API connections.",
    skills: ["Firebase Firestore", "Authentication", "Cloud Storage", "REST APIs"],
    highlight: "Cloud Engineering"
  },
  {
    id: "milestone-2025",
    date: "2025",
    title: "Started My Coding Journey",
    organization: "Self Learning",
    type: "Milestone",
    description: "Began learning HTML, CSS and JavaScript. Built foundational web interfaces, explored software architecture, and developed a strong passion for software engineering.",
    skills: ["HTML5", "CSS3", "JavaScript", "Web Fundamentals"],
    highlight: "Self Learning"
  }
];

export const IMAGES = {
  hero: "/assets/bg_hero_workspace_1787849622447-Btsx_L4E.jpg",
  about: "/assets/bg_mountain_exp_1787849690031-CpLlW6wI.jpg",
  skills: "/assets/bg_skills_network_1787849649171-DQB5mCDj.jpg",
  projects: "/assets/bg_projects_cubes_1787849661783-UpG5XUMU.jpg",
  projectDetail: "/assets/bg_waves_detail_1787849677586-Crhtbo6A.jpg",
  journey: "/assets/journey_workspace_bg_1787854299557-BVQJb6_U.jpg",
  contact: "/assets/bg_contact_crystal_1787849705452-0Iz61b8p.jpg"
};

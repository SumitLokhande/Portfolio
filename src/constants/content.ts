import project0 from "../assets/projects/project-0.png";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { Experience, Project, Contact } from "../types";

export const HERO_CONTENT: string =
  "Senior Software Developer with 8 years of experience building scalable SaaS platforms and high-performance web applications across fintech, banking, e-commerce, blockchain, and enterprise domains. Proficient in React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, Redux Toolkit, MongoDB, Elasticsearch, PostgreSQL, Angular, and Vue.js. Expertise in frontend architecture, reusable components, state management, REST API integration, microservices orchestration, real-time applications, responsive UI development, performance and search optimization, CI/CD, and Storybook-based component libraries. Proven ability to modernize complex systems and deliver scalable, secure, maintainable solutions aligned with business goals.";

export const ABOUT_TEXT: string = `I am a Senior Software Developer with 8 years of experience designing, developing, and scaling high-performance web applications across SaaS, fintech, banking, e-commerce, enterprise, and blockchain domains. My core expertise includes **React.js, Next.js, TypeScript, JavaScript, Node.js, and Express.js**, complemented by experience with MongoDB, Elasticsearch, PostgreSQL, Angular, and Vue.js.
I specialize in frontend architecture, reusable component design, state management, REST API integration, microservices integration, application performance optimization, search pipeline optimization, and scalable system design. I have experience building component libraries with Storybook, developing responsive user interfaces, integrating backend services, and modernizing complex applications to improve maintainability, efficiency, and user experience. My approach combines clean code, pragmatic engineering decisions, and a strong focus on delivering measurable business value.
I am passionate about continuously improving my skills in system design, software architecture, and emerging technologies while building reliable, maintainable, and scalable solutions. Beyond software engineering, I enjoy long-distance motorcycle touring, gaming, and developing personal projects that allow me to experiment with new technologies and turn ideas into practical applications.`;
export const EXPERIENCES: Experience[] = [
  {
    year: "Apr 2025 - May 2026",
    role: "Senior Software Engineer",
    company: "iSoftStone",
    description: `Led architecture and development initiatives for a high-scale SaaS platform serving location and business management workflows. Re-architected a critical search pipeline from FE → Node → Thrift → Elasticsearch to FE → Node → Elasticsearch, reducing API latency by 200% and significantly improving platform responsiveness. Integrated distributed RESTful microservices into the core platform, enabling unified service orchestration and improved scalability. Delivered Google & Apple Listing Accuracy modules and Bing Profile Deletion workflows, increasing platform engagement by 15%. Automated operational workflows, reducing manual effort by 30% while improving deployment stability and CI/CD compatibility.`,
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Elasticsearch",
      "REST APIs",
      "Microservices",
      "Material UI",
      "Jenkins",
      "Storybook",
      "Cody AI",
    ],
  },

  {
    year: "Nov 2022 - Dec 2024",
    role: "Senior React JS Developer",
    company: "Parallel-Minds",
    description: `Developed scalable booking and workflow management platforms focused on reusable component architecture, performance optimization, and maintainability. Designed responsive user interfaces, integrated complex APIs, and improved frontend data management strategies. Collaborated closely with cross-functional teams to deliver business-critical features while maintaining high code quality and scalability standards.`,
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "Material UI",
      "Bootstrap",
      "JavaScript",
    ],
  },

  {
    year: "Mar 2021 - Nov 2022",
    role: "Senior System Engineer",
    company: "Indexnine",
    description: `Built scalable frontend architectures for fintech and identity verification platforms using React, Vue.js, and TypeScript. Designed reusable component libraries using Storybook, enabling faster feature development across teams. Implemented real-time workflows using WebSockets and developed interactive financial dashboards with advanced data visualization capabilities.`,
    technologies: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "Redux Toolkit",
      "WebSockets",
      "Storybook",
      "Ant Design",
      "Material UI",
      "Vuetify",
    ],
  },

  {
    year: "Jan 2020 - Mar 2021",
    role: "Senior System Engineer",
    company: "IBM",
    description: `Contributed to enterprise-scale banking and workforce management applications used across global organizations. Developed advanced search, filtering, and resource discovery solutions while integrating multiple backend services. Worked across React, Angular, Node.js, and ASP.NET ecosystems to deliver highly reliable business applications.`,
    technologies: [
      "React.js",
      "Angular",
      "TypeScript",
      "Redux",
      "Node.js",
      "ASP.NET",
      "Material UI",
      "REST APIs",
    ],
  },

  {
    year: "Apr 2019 - Dec 2019",
    role: "Technical Consultant",
    company: "Cipherhut",
    description: `Designed and developed blockchain-based products including cryptocurrency exchanges, wallet systems, investment platforms, and real-time trading dashboards. Built scalable frontend and backend solutions while implementing WebSocket-powered real-time communication and transaction workflows.`,
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "Redux",
      "Angular",
      "Bootstrap",
    ],
  },

  {
    year: "Aug 2017 - Apr 2019",
    role: "Associate",
    company: "Capco",
    description: `Developed enterprise banking and financial applications for mobile and web platforms using Ionic and Angular. Delivered responsive user interfaces, workflow automation features, and customer-facing applications within Agile development environments.`,
    technologies: ["Ionic", "Angular", "JavaScript", "TypeScript", "Bootstrap"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Game Website",
    image: project0,
    description:
      "Built a full-stack gaming portal using PERN (PostgreSQL, Express, React, Node.js) with JWT authentication, protected routes, game discovery, detailed game pages, shopping, and Game of the Year collections. Integrated Google Gemini Flash for personalized AI game recommendations. Developed a responsive UI using TypeScript, Redux Toolkit, and Tailwind CSS, backed by RESTful APIs and PostgreSQL.",
    technologies: [
      "React JS",
      "Redux",
      "Gemini",
      "TypeScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
    ],
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, user authentication and admin panel.",
    technologies: [
      "React JS",
      "Redux",
      "Tailwind",
      "TypeScript",
      "NodeJS",
      "MongoDB",
    ],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React Native", "TypeScript", "NodeJS", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React JS", "Tailwind", "TypeScript"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React JS", "Redux", "Tailwind", "TypeScript"],
  },
];

export const CONTACT: Contact = {
  address: "Pune,India",
  phoneNo: "+91 7385442329 ",
  email: "sumitlokhande1267@gmail.com",
};

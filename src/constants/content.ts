import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { Experience, Project, Contact } from "../types";

export const HERO_CONTENT: string = `I am a Web developer with 7.4 years of experience designing and developing responsive user interfaces, testing and debugging web and mobile apps. Proven ability to optimize web functionalities that improve data retrieval and workflow efficiency.`;

export const ABOUT_TEXT: string = `I am a dedicated and versatile front-end stack developer with a passion for creating efficient and user-friendly web applications. With 7+ years of professional experience, I have worked with a variety of technologies, including ReactJS, Angular, VueJS, Node.js, MongoDb, Typescript, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing games, riding motorcycles, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "Nov 2022 - Dec 2024",
    role: "Senior React JS Developer",
    company: "Parallel-Minds, Pune",
    description: `Worked on the development and maintenance of web applications with a focus on building intuitive UI components, API integration, and efficient data management.`,
    technologies: [
      "React JS (Class-based)",
      "Material UI",
      "JavaScript",
      "Bootstrap 4",
    ],
  },
  {
    year: "March 2021 - Nov 2022",
    role: "Senior System Engineer",
    company: "Indexnine, Pune",
    description: `Contributed to multiple projects involving front-end development, state management, and UI/UX design.`,
    technologies: ["React JS", "Redux Toolkit", "Material UI", "JavaScript"],
  },
  {
    year: "Jan 2020 - March 2021",
    role: "Senior System Engineer",
    company: "IBM, Pune",
    description: `Involved in the development and maintenance of enterprise-grade applications using cutting-edge front-end technologies.`,
    technologies: ["Angular 7", "ASP.NET"],
  },
  {
    year: "April 2019 - Dec 2019",
    role: "Technical Consultant",
    company: "Cipherhut, World Trade Center, Pune",
    description: `Developed web applications and admin panels, focusing on front-end architecture, responsive design, and seamless user experience.`,
    technologies: ["Angular 8", "Bootstrap 4.3"],
  },
  {
    year: "Aug 2017 - April 2019",
    role: "Associate",
    company: "Capco, Vatika Business Center, Pune",
    description: `Developed web applications and mobile applications and admin panels, focusing on front-end architecture, responsive design, and seamless user experience.`,
    technologies: ["Ionic", "Angular 8", "Bootstrap 4.3"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT: Contact = {
  address: "Pune,India",
  phoneNo: "+91 7385442329 ",
  email: "sumitlokhande858@gmail.com",
};

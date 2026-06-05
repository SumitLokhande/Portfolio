import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { Experience, Project, Contact } from "../types";

export const HERO_CONTENT: string = `I am a Web developer with 8+ years of experience designing and developing responsive user interfaces, testing and debugging web and mobile apps. Proven ability to optimize web functionalities that improve data retrieval and workflow efficiency.`;

export const ABOUT_TEXT: string = `I am a dedicated and versatile MERN stack developer with a passion for creating efficient and user-friendly web applications. With 8+ years of professional experience, I have worked with a variety of technologies, including ReactJS, Angular, VueJS, Node.js, MongoDb, Typescript, and Ionic. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing games, riding motorcycles, exploring new technologies.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "April 2025 - May 2026",
    role: "Senior Software Engineer",
    company: "iSoftStone",
    description: `Re-architected the data pipeline from FE → Node → Thrift → Elasticsearch to a streamlined FE → Node → Elasticsearch flow, improving API latency by 200%. Led integration of internal RESTful microservices into the core platform, enabling unified access and enhancing extensibility across teams. Built and launched Google & Apple Listing Accuracy and created the Bing Profile Deletion workflow for Single/Bulk, boosting engagement by 15%. Designed Listing Accuracy Workflow, reducing manual ops by 30% and improving build stability and CI/CD compatibility.`,
    technologies: [
      "React JS",
      "Redux Toolkit",
      "Angular JS",
      "Node.js",
      "MongoDB",
      "Material UI",
      "TypeScript",
      "Bootstrap",
      "Cody",
    ],
  },
  {
    year: "Nov 2022 - Dec 2024",
    role: "Senior React JS Developer",
    company: "Parallel-Minds, Pune",
    description: `Worked on the development and maintenance of web applications with a focus on building intuitive UI components, API integration, and efficient data management.`,
    technologies: [
      "React JS",
      "Redux Toolkit",
      "Material UI",
      "TypeScript",
      "Bootstrap 4",
    ],
  },
  {
    year: "March 2021 - Nov 2022",
    role: "Senior System Engineer",
    company: "Indexnine, Pune",
    description: `Contributed to multiple projects involving front-end development, state management, and UI/UX design.`,
    technologies: [
      "React JS",
      "Redux Toolkit",
      "VueJS",
      "Vuetify",
      "Ant Design",
      "Material UI",
      "TypeScript",
    ],
  },
  {
    year: "Jan 2020 - March 2021",
    role: "Senior System Engineer",
    company: "IBM, Pune",
    description: `Involved in the development and maintenance of enterprise-grade applications using cutting-edge web development technologies.`,
    technologies: [
      "React JS",
      "Redux",
      "Material UI",
      "TypeScript",
      "Angular 7",
      "ASP.NET",
      "NodeJS",
      "MongoDB",
    ],
  },
  {
    year: "April 2019 - Dec 2019",
    role: "Technical Consultant",
    company: "Cipherhut, World Trade Center, Pune",
    description: `Developed web applications and admin panels, focusing on front-end and backend architecture, responsive design, and seamless user experience.`,
    technologies: [
      "React JS",
      "Redux",
      "Material UI",
      "TypeScript",
      "Angular 8",
      "Bootstrap 4.3",
      "NodeJS",
      "MongoDB",
    ],
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
  email: "sumitlokhande858@gmail.com",
};

export const FullStackRoadMap: object = {
  program_name:
    "30-Day Senior Engineer → Senior Full Stack Engineer Upgrade Program",
  program_goal:
    "Transform from React Developer → Senior Full Stack Engineer → Product Engineer Architecture Thinker [cite: 1, 11]",
  focus_areas: [
    "System thinking",
    "Ownership",
    "Scalability",
    "Communication",
    "Backend confidence",
    "AI integration",
    "Interview storytelling",
  ],
  final_rules_of_engagement: {
    do: [
      "Think like an architect: Focus on the 'why' and system-wide impact.",
      "Explain tradeoffs: Discuss what you didn't choose and why.",
      "Focus on scalability: Build features that handle massive growth.",
      "Speak confidently: Seniority is about presence and clarity.",
      "Show ownership: Take responsibility for the end-to-end product.",
    ],
    dont: [
      "Undersell yourself: You are a Product Engineer, not just a coder.",
      "Say 'only frontend': You own the whole stack now.",
      "Overclaim infra expertise: Be honest about your limits.",
      "Panic about notice period: It is a standard business process.",
      "Random-learn: Stick strictly to this roadmap.",
    ],
  },
  execution_protocol: [
    "Step 1: Ticket Triage - Read the Daily Coding Tip to understand the architectural goal.",
    "Step 2: Deep Work - Spend 90 minutes on the day's core technical concept.",
    "Step 3: Tradeoff Analysis - Write 2 pros and 2 cons for the day's technology to build system thinking.",
    "Step 4: Definition of Done - Complete all 5 action points for the day's specific task.",
    "Step 5: XP Update - Log your points and update your rank status.",
  ],
  xp_system: {
    tasks: [
      { task: "Finish learning session", xp: "+20 XP" },
      { task: "Finish coding task", xp: "+30 XP" },
      { task: "Solve DSA problem", xp: "+15 XP" },
      { task: "Write architecture notes", xp: "+20 XP" },
      { task: "Mock interview answer", xp: "+25 XP" },
      { task: "Build mini feature", xp: "+40 XP" },
      { task: "Apply to 5 companies", xp: "+20 XP" },
    ],
    ranks: [
      { xp_range: "0-200", rank: "React Survivor" },
      { xp_range: "200-500", rank: "Full Stack Engineer" },
      { xp_range: "500-900", rank: "Senior Product Engineer" },
      { xp_range: "900-1400", rank: "Platform Architect" },
      { xp_range: "1400+", rank: "Remote SaaS Warrior" },
    ],
  },
  daily_roadmap: [
    {
      day: 1,
      focus: "Identity Upgrade + Resume + GitHub Cleanup",
      tip: "Think like engineer, not just developer.",
      definition_of_done: [
        "Audit LinkedIn for ownership-driven keywords.",
        "Remove junior/tutorial projects from GitHub; pin high-impact repos.",
        "Craft a 2-sentence value proposition for remote SaaS roles.",
        "Identify 5 target high-tier companies and their tech stacks.",
        "Update resume bullet points to focus on business impact and scalability.",
      ],
    },
    {
      day: 2,
      focus: "Advanced TypeScript",
      tip: "Strong typing = scalable systems.",
      definition_of_done: [
        "Implement Generics for reusable API response wrappers.",
        "Refactor complex state using Discriminated Unions.",
        "Replace 'any' with 'unknown' or 'never' across a project.",
        "Create custom Utility Types for deep-nested partial updates.",
        "Configure strict mode and document the tradeoff of strictness vs velocity.",
      ],
    },
    {
      day: 3,
      focus: "Node.js Architecture",
      tip: "Understand event loop deeply.",
      definition_of_done: [
        "Diagram the Node.js Event Loop phases.",
        "Build a file processing script using Streams for large datasets.",
        "Implement a custom Event Emitter for service communication.",
        "Execute a CPU-intensive task using Worker Threads.",
        "Explain the role of libuv in Node.js concurrency.",
      ],
    },
    {
      day: 4,
      focus: "REST API Design",
      tip: "APIs are product contracts.",
      definition_of_done: [
        "Design a versioned API (v1 vs v2) with a sunset strategy.",
        "Implement standardized global error-handling middleware.",
        "Add HATEOAS links to a primary resource response.",
        "Generate live Swagger/OpenAPI documentation from code.",
        "Design a multi-tier rate-limiting strategy (IP vs User-based).",
      ],
    },
    {
      day: 5,
      focus: "Redis + Caching",
      tip: "Performance is a feature.",
      definition_of_done: [
        "Set up a local Redis instance and connect to Node.js.",
        "Implement the 'Cache-Aside' pattern for frequent GET requests.",
        "Define and justify TTL (Time-to-Live) values for various data types.",
        "Build a real-time notification trigger using Redis Pub/Sub.",
        "Benchmark API latency with and without the caching layer.",
      ],
    },
    {
      day: 6,
      focus: "PostgreSQL Basics",
      tip: "Backend credibility booster.",
      definition_of_done: [
        "Write a complex JOIN query across 3+ tables.",
        "Use EXPLAIN ANALYZE to optimize a slow database query.",
        "Create a database migration script for schema changes.",
        "Implement Row Level Security (RLS) for data privacy.",
        "Design and normalize a many-to-many relationship schema.",
      ],
    },
    {
      day: 7,
      focus: "Boss Battle: Mini SaaS App",
      tip: "Ship something working.",
      definition_of_done: [
        "Integrate Node.js, PostgreSQL, and Redis into one app.",
        "Build a full 'Create User' flow with backend validation.",
        "Implement secure JWT-based authentication.",
        "Deploy the backend services to a cloud provider.",
        "Write a technical README documenting the system architecture.",
      ],
    },
    {
      day: 8,
      focus: "System Design Basics",
      tip: "Think scalability first.",
      definition_of_done: [
        "Diagram a system with Load Balancer, App Servers, and DB Replicas.",
        "Explain the tradeoffs between Horizontal and Vertical scaling.",
        "Apply the CAP Theorem to a hypothetical system choice.",
        "Draft a failover strategy for a primary database outage.",
        "Write a design document for a service handling 10k concurrent users.",
      ],
    },
    {
      day: 9,
      focus: "Microservices Concepts",
      tip: "Reduce coupling.",
      definition_of_done: [
        "Deconstruct a monolith into 3 logical microservices.",
        "Define communication protocols (Sync vs Async/Message Queue).",
        "Implement a shared authentication strategy for services.",
        "Design a data consistency plan (Saga pattern or 2PC).",
        "Set up centralized logging for a multi-service environment.",
      ],
    },
    {
      day: 10,
      focus: "GraphQL Fundamentals",
      tip: "Efficient data fetching matters.",
      definition_of_done: [
        "Define a GraphQL schema with Types and Resolvers.",
        "Implement a Query to solve an 'over-fetching' scenario.",
        "Build a Mutation for data updates.",
        "Set up a Dataloader to solve the N+1 problem.",
        "Compare GraphQL vs REST tradeoffs for a specific use case.",
      ],
    },
    {
      day: 11,
      focus: "WebSocket Systems",
      tip: "Realtime changes UX massively.",
      definition_of_done: [
        "Implement a Socket.io server with room-based broadcasting.",
        "Handle frontend socket reconnection and state sync.",
        "Design a fallback mechanism (Long Polling).",
        "Implement heartbeat/ping-pong to maintain active connections.",
        "Scale WebSockets using a Redis adapter.",
      ],
    },
    {
      day: 12,
      focus: "Elasticsearch Deep Dive",
      tip: "Search systems are valuable.",
      definition_of_done: [
        "Set up an Elasticsearch index with custom mapping.",
        "Implement a fuzzy-search query for user data.",
        "Perform data aggregations for a dashboard view.",
        "Sync data from PostgreSQL to Elasticsearch (CDC or script).",
        "Explain the tradeoff of eventual consistency in search.",
      ],
    },
    {
      day: 13,
      focus: "Docker + CI/CD",
      tip: "Deployment confidence matters.",
      definition_of_done: [
        "Write a multi-stage Dockerfile for a production build.",
        "Use Docker Compose to orchestrate local dev environments.",
        "Configure a CI/CD pipeline (GitHub Actions/GitLab CI).",
        "Implement automated testing in the deployment pipeline.",
        "Explain the benefits of containerization for horizontal scaling.",
      ],
    },
    {
      day: 14,
      focus: "Boss Battle: SaaS Architecture",
      tip: "Communicate architecture clearly.",
      definition_of_done: [
        "Present a complete system design for a complex SaaS.",
        "Justify the choice of database, cache, and messaging layers.",
        "Explain how the system handles 100k+ users.",
        "Identify and address potential single points of failure.",
        "Create a visual architecture diagram for stakeholders.",
      ],
    },
    {
      day: 15,
      focus: "OpenAI APIs",
      tip: "AI integration is future leverage.",
      definition_of_done: [
        "Securely integrate the OpenAI SDK into a Node.js backend.",
        "Implement Prompt Templates for consistent AI behavior.",
        "Add streaming support (SSE) for real-time AI responses.",
        "Build a utility to track and limit AI token usage costs.",
        "Implement fallback logic for AI model rate limits.",
      ],
    },
    {
      day: 16,
      focus: "RAG Systems",
      tip: "Search + AI is powerful.",
      definition_of_done: [
        "Build a vector database integration (Pinecone/Milvus/Postgres-pgvector).",
        "Implement a script to generate and store document embeddings.",
        "Create a retrieval chain that fetches context for AI prompts.",
        "Implement 'Similarity Search' for relevant data retrieval.",
        "Explain the tradeoff between vector search accuracy and speed.",
      ],
    },
    {
      day: 17,
      focus: "AI SaaS Workflows",
      tip: "Automate intelligence.",
      definition_of_done: [
        "Design a multi-step AI workflow (e.g., Summary -> Action Items).",
        "Implement an 'AI Agent' with access to specific tools/APIs.",
        "Create an automated queue for background AI processing.",
        "Implement 'Human-in-the-loop' for AI output verification.",
        "Explain the scalability challenges of long-running AI tasks.",
      ],
    },
    {
      day: 18,
      focus: "Advanced React Optimization",
      tip: "Optimize rendering and state.",
      definition_of_done: [
        "Profile a React app using DevTools to find 'bottleneck' renders.",
        "Implement React.memo, useMemo, and useCallback strategically.",
        "Refactor a large state object into smaller, optimized providers.",
        "Implement code-splitting and lazy loading for heavy routes.",
        "Compare the performance of different state management libraries.",
      ],
    },
    {
      day: 19,
      focus: "Communication Training",
      tip: "Senior engineers explain clearly.",
      definition_of_done: [
        "Practice explaining a complex technical bug to a non-tech person.",
        "Draft a clear, concise Technical Design Document (TDD).",
        "Roleplay a stakeholder meeting about a project delay.",
        "Practice the 'STAR' method for behavioral interview answers.",
        "Record yourself explaining a system design and critique your clarity.",
      ],
    },
    {
      day: 20,
      focus: "Leadership Thinking",
      tip: "Ownership mindset matters.",
      definition_of_done: [
        "Propose a technical improvement for your current project.",
        "Mentor a peer or review a PR with constructive, high-level feedback.",
        "Take 'end-to-end' ownership of a small feature's lifecycle.",
        "Practice 'Extreme Ownership' by admitting and fixing a mistake.",
        "Identify and document 'Technical Debt' in your current codebase.",
      ],
    },
    {
      day: 21,
      focus: "Boss Battle: AI Dashboard",
      tip: "Build + explain.",
      definition_of_done: [
        "Build a dashboard displaying real-time data and AI insights.",
        "Implement interactive visualizations for AI-processed data.",
        "Ensure the dashboard is responsive and optimized for speed.",
        "Present the dashboard, explaining the tech stack and AI role.",
        "Gather feedback and document 3 potential future improvements.",
      ],
    },
    {
      day: 22,
      focus: "LinkedIn + Portfolio Upgrade",
      tip: "Visibility creates opportunity.",
      definition_of_done: [
        "Update LinkedIn with 3-4 impactful projects from this sprint.",
        "Write a featured post about a technical challenge you solved.",
        "Polish your portfolio site with high-quality screenshots/diagrams.",
        "Request 2-3 recommendations from previous colleagues/clients.",
        "Set LinkedIn to 'Open to Work' for specific remote roles.",
      ],
    },
    {
      day: 23,
      focus: "Frontend System Design",
      tip: "Frontend can scale too.",
      definition_of_done: [
        "Design a Micro-frontend architecture for a large application.",
        "Plan a global state and data synchronization strategy.",
        "Design a shared 'Component Library' for consistency and speed.",
        "Implement an 'Offline First' strategy using Service Workers.",
        "Explain the tradeoffs of Client-Side vs Server-Side vs Static rendering.",
      ],
    },
    {
      day: 24,
      focus: "Backend System Design",
      tip: "Reliability is critical.",
      definition_of_done: [
        "Implement a 'Circuit Breaker' pattern for external API calls.",
        "Design a 'Dead Letter Queue' for failed background jobs.",
        "Plan a database partitioning strategy for high-volume data.",
        "Implement health-check endpoints and monitoring alerts.",
        "Explain the tradeoff between 'Strong Consistency' and 'Eventual Consistency'.",
      ],
    },
    {
      day: 25,
      focus: "SaaS Multi-Tenancy",
      tip: "Learn platform thinking.",
      definition_of_done: [
        "Design a database schema with 'tenant_id' for isolation.",
        "Implement middleware to enforce tenant scoping on all queries.",
        "Set up dynamic subdomain routing (e.g., t1.app.com).",
        "Compare Shared Schema vs Isolated DB tradeoffs.",
        "Conduct a test to ensure Tenant A cannot access Tenant B data.",
      ],
    },
    {
      day: 26,
      focus: "Remote Interview Simulation",
      tip: "Practice under pressure.",
      definition_of_done: [
        "Perform a 45-minute timed coding challenge.",
        "Practice 'Live Whiteboarding' on a system design problem.",
        "Record and review your technical explanations.",
        "Practice answering 'Culture Fit' questions with confidence.",
        "Refine your home setup (Lighting/Audio) for remote professionalism.",
      ],
    },
    {
      day: 27,
      focus: "Salary Negotiation",
      tip: "Positioning changes salary.",
      definition_of_done: [
        "Research market rates for Remote Senior roles in your target area.",
        "Draft a 'Value-Based' pitch for a $XX,XXX salary increase.",
        "Practice responding to 'What is your current salary?' deflection.",
        "Identify non-salary benefits to negotiate (Equity/PTO/Budget).",
        "Roleplay a negotiation scenario with a friend or coach.",
      ],
    },
    {
      day: 28,
      focus: "Full Mock Interview",
      tip: "Simulate the real battle.",
      definition_of_done: [
        "Complete a 3-hour full-loop interview simulation.",
        "Request feedback on both technical and behavioral performance.",
        "Identify 3 key areas of improvement for the final push.",
        "Review your 'Project Story' for the most complex feature built.",
        "Ensure all technical concepts from days 1-27 are recallable.",
      ],
    },
    {
      day: 29,
      focus: "Applications Blitzkrieg",
      tip: "Momentum beats hesitation.",
      definition_of_done: [
        "Submit high-quality applications to 10+ target SaaS companies.",
        "Send personalized follow-up notes to hiring managers/recruiters.",
        "Leverage your network for internal referrals.",
        "Keep a tracker for all application statuses and deadlines.",
        "Review and tweak your pitch based on initial responses.",
      ],
    },
    {
      day: 30,
      focus: "Final Boss Battle",
      tip: "You are now upgraded.",
      definition_of_done: [
        "Complete one final, high-complexity engineering challenge.",
        "Verify your final XP score and claim the 'SaaS Warrior' rank.",
        "Reflect on the 30-day journey and document your key learnings.",
        "Celebrate the transformation from a coder to an architect.",
        "Commit to continuous growth and ownership in your next role.",
      ],
    },
  ],
};

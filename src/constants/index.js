import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  sqlserver,
  mysql,
  rest,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  moneris,
  oracle,
  jr,
  TC,
  covid,
  ToDoList,
  FV,
  LA,
  kelhel,
  microverse,
  VAG,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: ux,
  },
  {
    title: "Software Engineer",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "Program Management",
  },
  {
    name: "stakeholder Management",
  },
  {
    name: "Vendor Management",
  },
  {
    name: "Cross Functional collaboration",
  },
  {
    name: "Strategic Planning",
  },
  {
    name: "Risk Management",
  },
  {
    name: "Team Leadership and development",
  },
  {
    name: "Change Management",
  },
  {
    name: "Continuous improvement",
  },
  {
    name: "Agile Methodology and Scrum",
  },
  {
    name: "Lean Management",
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "SQL Server",
  //   icon: sqlserver,
  // },
  // {
  //   name: "SQL",
  //   icon: graphql,
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Project Co-ordinator",
    company_name: "LogicAdd Software Private Ltd (Internship)",
    icon: LA,
    iconBg: "#333333",
    date: "Dec 2016 - Feb 2017",
  },
  {
    title: "Program Manager",
    company_name: "Oracle Cerner Healthcare, India",
    icon: oracle,
    iconBg: "#333333",
    date: "Feb 2017 - April 2022",
  },
  {
    title: "Program Manager",
    company_name: "Oracle Cerner Healthcare, Canada",
    icon: oracle,
    iconBg: "#333333",
    date: "May 2022 - Aug 2022",
  },
  {
    title: "Senior Scrum Master",
    company_name: "Moneris Solutions",
    icon: moneris,
    iconBg: "#333333",
    date: "Sept 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "IT Financial Planning",
    description:
      "As a seasoned Program Manager, I am known for spearheading transformative capital and expense planning initiatives" +
      "that drive efficiency and transparency across departments. By introducing effective processes and leveraging technology," +
      "I have reduced manual processes by an impressive 80%, resulting in significant time and cost savings.",
    //image: jr,
    demo: "#",
    demo: "https://financial-planning-capitalexpense.netlify.app/",
  },
  {
    id: "project-2",
    name: "Business Resilience",
    description:
      "I spearheaded the business continuity and disaster recovery project for my organization, while focusing" +
      "to safeguard operations and ensure resilience in the face of unforeseen challenges. Leveraging my expertise" +
      "in risk management and strategic planning.",
    demo: "https://bcdr.netlify.app/",
  },
  {
    id: "project-3",
    name: "Product Program MGMT",
    description:
      "I spearheaded transformative efforts to drive innovation, launch new products, and enhance existing services. With a relentless focus on delivering exceptional customer experiences, I led cross-functional teams through every stage of the project lifecycle, from ideation to successful implementation.",
    demo: "https://program-management-for-products.netlify.app/",
  },
];

export { services, technologies, experiences, projects };

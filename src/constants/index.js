import {
  React,
  ReactNative,
  Next,
  MERN,
  JavaScript,
  TypeScript,
  TailwindCSS,
  MaterialUI,
  ReactJS,
  Redux,
  Formik,
  NextJS,
  NodeJS,
  ExpressJS,
  MongoDB,
  Npm,
  Yarn,
  HeliusSystems,
  BachelorsDegree,
  FrontEndProfessional,
  ReactNativeSpecialization,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "React.js", icon: React },
  { title: "React Native", icon: ReactNative },
  { title: "Next.js", icon: Next },
  { title: "MERN stack", icon: MERN },
];

const technologies = [
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "Tailwind CSS", icon: TailwindCSS },
  { name: "Material UI", icon: MaterialUI },
  { name: "React.js", icon: ReactJS },
  { name: "Redux", icon: Redux },
  { name: "Formik", icon: Formik },
  { name: "Next.js", icon: NextJS },
  { name: "Node.js", icon: NodeJS },
  { name: "Express.js", icon: ExpressJS },
  { name: "MongoDB", icon: MongoDB },
  { name: "NPM", icon: Npm },
  { name: "Yarn", icon: Yarn },
];

const experiences = [
  {
    title: "E-Commerce Developer",
    company_name: "Helius Systems",
    icon: HeliusSystems,
    iconBg: "#fff",
    date: "Nov 2021 - Feb 2022",
    points: [
      "Worked on Ecommerce websites using nopCommerce.",
      "Did UX/UI and E2E testing.",
      "Used nopCommerce, Jira and Slack.",
    ],
  },
  {
    title: ".NET Developer",
    company_name: "Helius Systems",
    icon: HeliusSystems,
    iconBg: "#fff",
    date: "Mar 2022 - Jun 2022",
    points: [
      "Learned and made small projects using HTML, CSS, Bootstrap, JavaScript, jQuery, SQL Server, C#, .NET MVC, Kendo UI and CSLA.NET.",
      "Used Visual Studio Code, SQL Server and Visual Studio.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Helius Systems",
    icon: HeliusSystems,
    iconBg: "#fff",
    date: "Jul 2022 - Present",
    points: [
      "Created, updated and maintained UIs for web and mobile applications using functional React.js, and object oriented React Native components combined with TypeScript, Axios, and Material UI.",
      "Converted PWAs to native Android and iOS applications using PWA Builder.",
      "Used Visual Studio Code, Android Studio, XCode, Azure DevOps, Jira and Slack.",
    ],
  },
];

const projects = [
  {
    name: "University College Logos, Bachelor's Degree",
    description:
      "Bachelor's degree in Applied Informatics from University College Logos.",
    tags: [
      { name: "Batch", color: "green-text-gradient" },
      { name: "C", color: "green-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "VisualBasic", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "PHP", color: "green-text-gradient" },
    ],
    image: BachelorsDegree,
    source_code_link:
      "https://github.com/joanskenderi/University-College-LOGOS",
  },
  {
    name: "Front-End Developer Professional Certificate",
    description:
      "Solutions for Meta Front-End Developer Professional Certificate.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "orange-text-gradient" },
      { name: "Bootstrap", color: "orange-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "Jest", color: "orange-text-gradient" },
      { name: "Git", color: "orange-text-gradient" },
      { name: "UX/UI", color: "orange-text-gradient" },
      { name: "ReactJS", color: "orange-text-gradient" },
      { name: "ChakraUI", color: "orange-text-gradient" },
      { name: "Formik", color: "orange-text-gradient" },
      { name: "Yup", color: "orange-text-gradient" },
    ],
    image: FrontEndProfessional,
    source_code_link:
      "https://github.com/joanskenderi/Meta-Front-End-Developer-Professional-Certificate",
  },
  {
    name: "React Native Specialization",
    description: "Solutions for Meta React Native Specialization.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "blue-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Jest", color: "blue-text-gradient" },
      { name: "Git", color: "blue-text-gradient" },
      { name: "UX/UI", color: "blue-text-gradient" },
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Expo", color: "blue-text-gradient" },
      { name: "ReactNative", color: "blue-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "RestAPI", color: "blue-text-gradient" },
    ],
    image: ReactNativeSpecialization,
    source_code_link:
      "https://github.com/joanskenderi/Meta-React-Native-Specialization",
  },
];

export { services, technologies, experiences, projects };

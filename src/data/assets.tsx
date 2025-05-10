import { Assets, Details, Items, Layer } from "@/types/types";
import {
  RiBug2Line,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiDraftLine,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiVuejsFill,
  RiNextjsFill,
  RiNodejsFill,
  RiDatabase2Fill,
  RiDatabaseFill,
  RiTailwindCssFill,
  RiBootstrapFill,
  RiGitBranchFill,
  RiGithubFill,
  RiTerminalWindowFill,
  RiExchangeBoxFill,
  RiLockPasswordFill,
  RiCloudFill,
  RiFileCodeFill,
  RiBracesFill,
  RiGlobalFill,
} from "@remixicon/react";

export const assets: Assets[] = [
  { image: "/project1.png", black: "/project1-black.png", url: "hey" },
  { image: "/project4.png", black: "/project4-black.png", url: "hi" },
  { image: "/project3.png", black: "/project3-black.png", url: "hello" },
  { image: "/project2.png", black: "/project2-black.png", url: "hoo" },
];

export const layers: Layer[] = [
  {
    icon: <RiDraftLine className="text-3xl text-white" />,
    title: "Website Conception",
    description:
      "Planning and structuring the website's layout, goals, and user journey with a clean and efficient UX/UI foundation.",
    image: "/project1.png",
    black: "/project1-black.png",
  },
  {
    icon: <RiCodeSSlashLine className="text-3xl text-white" />,
    title: "Front-End Building",
    description:
      "Transforming ideas into interactive designs using modern technologies like React, TailwindCSS, and responsive principles.",
    image: "/images/frontend.png",
    black: "/project2-black.png",
  },
  {
    icon: <RiDatabase2Line className="text-3xl text-white" />,
    title: "Back-End Logic",
    description:
      "Setting up secure, scalable server-side logic with RESTful APIs, databases, and authentication mechanisms.",
    image: "/images/backend.png",
    black: "/project4-black.png",
  },
  {
    icon: <RiBug2Line className="text-3xl text-white" />,
    title: "Debugging and Deploying",
    description:
      "Testing thoroughly to eliminate bugs, then deploying a stable product using modern CI/CD practices and hosting services.",
    image: "/project2.png",
    black: "/project2-black.png",
  },
];

export const items1 : Items[] = [
  { icon: <RiHtml5Fill />, name: "HTML5" },
  { icon: <RiCss3Fill />, name: "CSS3" },
  { icon: <RiJavascriptFill />, name: "JavaScript" },
  { icon: <RiReactjsFill />, name: "React.js" },
  { icon: <RiVuejsFill />, name: "Vue.js" },
  { icon: <RiNextjsFill />, name: "Next.js" },
  { icon: <RiNodejsFill />, name: "Node.js" },
  { icon: <RiDatabase2Fill />, name: "MongoDB" },
  { icon: <RiDatabaseFill />, name: "SQL" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
];

export const items2 : Items[] = [
  { icon: <RiBootstrapFill />, name: "Bootstrap" },
  { icon: <RiGitBranchFill />, name: "Git" },
  { icon: <RiGithubFill />, name: "GitHub" },
  { icon: <RiTerminalWindowFill />, name: "Command Line" },
  { icon: <RiExchangeBoxFill />, name: "RESTful APIs" },
  { icon: <RiLockPasswordFill />, name: "Authentication" },
  { icon: <RiCloudFill />, name: "Cloud Deployment" },
  { icon: <RiFileCodeFill />, name: "TypeScript" },
  { icon: <RiBracesFill />, name: "Express.js" },
  { icon: <RiGlobalFill />, name: "Responsive Design" },
];

export const riad = {
  image: "/me.png",
  black: "/me-black.png",
};

export const details: Details[] = [
  {
    id: "1",
    title: "Liberty School website",
    image: "/project1.png",
    black: "/project1-black.png",
    description:
      "A modern educational platform built with the MERN stack, enabling course management, assignments, quizzes, and real-time communication between teachers and students.",
    task:
      "Designed and developed the entire user interface using modern web technologies, focusing on responsive design, intuitive navigation, and smooth transitions to enhance user experience and make learning more fun.",
    url: "https://liberty-school.vercel.app",
  },
  {
    id: "2",
    title: "A doctor landing page",
    image: "/project4.png",
    black: "/project4-black.png",
    description:
      "This is actually my first website, I made it to showcase a doctor's profile and all what they do in the service of their patients.",
    task:
      "Built and deployed the frontend of the website, used beginer friendly web technologies (HTML, CSS, and Tailwind).",
    url: "https://example.com/project2",
    ready: false
  },
  {
    id: "3",
    title: "AI-based app - Jobpilot",
    image: "/project3.png",
    black: "/project3-black.png",
    description:
      "An AI-based application designed to revolutionize the job search and recruitment process for both job seekers and employers. By leveraging artificial intelligence, Jobpilot enhances the way individuals find jobs and how companies identify the best candidates.",
    task:
      "Built and deployed the backend infrastructure, implemented an NLP logic using machine learning libraries, and ensured real-time interaction through efficient API communication.",
    url: "https://example.com/project3",
    ready: false
  },
  {
    id: "4",
    title: "E-Commerce Website - Kimberlite",
    image: "/project2.png",
    black: "/project2-black.png",
    description:
      "A fully functional, modern e-commerce platform designed to provide a seamless online shopping experience, complete with product listings, user accounts, and secure checkout capabilities.",
    task:
      "Created the front-end using Next, typescript and Tailwind CSS, implemented dynamic state handling with hooks and context, and optimized the layout for usability and fast performance across devices.",
    url: "https://example.com/project4",
    ready: false
  },
];



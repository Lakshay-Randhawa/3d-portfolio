import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  circle,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend React Developer",
    company_name: "Origami",
    icon: circle,
    iconBg: "#383E56",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Developing and maintaining IOS application using React Native and other related technologies.",
      "Worked as a founding member of the team and was responsible for the development of the application from scratch.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked on the speech to text feature using AI.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Feel Good Fitness",
    icon: circle,
    iconBg: "#383E56",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developed a web applications for a fitness firm using MERN stack.",
      "Collaborating with a teams of 5 developers to create a high-quality product.",
      "Implementing Redux for state management to improve app efficiency by 1.5X design.",
      "Participated in code reviews by leading frontend reviews.",
    ],
  },
  {
    title: "Computer Sales Associate",
    company_name: "Best Buy",
    icon: circle,
    iconBg: "#383E56",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Helped customers to make a right choice of computer hardware and software based on their needs.",
      "Gained some outstanding communication skills while interacting with different people and handling situations.",
      "Showcased debugging skills by helping Geek Squad.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Changed my thought that junior developers can't be a part of the founding team.",
    name: "Nic Laflamme",
    designation: "CEO",
    company: "Origami",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Transformed my business from using excel sheets and what not to an outstanding web application.",
    name: "Chloe Catherine",
    designation: "Owner",
    company: "Feel Good Fitness",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "One of the most active students in the class who always thinks differently and comes up with new ideas.",
    name: "Ali Moussa",
    designation: "Instructor",
    company: "SAIT",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Tracker",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

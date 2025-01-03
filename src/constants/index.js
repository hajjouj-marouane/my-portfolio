import {
  backend,
  bootstrap,
  codedrops,
  creator,
  css,
  fib,
  figma,
  git,
  github,
  gitlab,
  gmail,
  html,
  instagram,
  jQuery,
  javascript,
  linkedin,
  mobile,
  reactjs,
  redux,
  tailwind,
  twitter,
  typescript,
  web,
  logo
} from "../assets";

export const navLinks = [
  
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Career",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Performance Optimization",
    icon: mobile,
  },
  {
    title: "Custom Web Solutions",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "BACCALAUREAT",
    company_name: "SCIENCES PHYSIQUES OPTION FRANÇAIS",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "LYCEE SAADA",
      "Maroc | Agadir",
    ],
  },
  {
    title: "TECHNICIEN SPÉCIALISÉ",
    company_name: " OPTION WEB FULL STACK",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      "CITE DES METIERS ET DES COMPETENCES, SOUSS-MASSA",
      "Maroc | Agadir",
    ],
  },
  {
    title: "cycle d'ingenieur ",
    company_name: "",
    icon: codedrops,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "universiapolis polytechnique",
      "Maroc | Agadir",
    ],
  }
];

const socials = [
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/marouane-hajjouj-16b850294/"
  },
  {
    image: github,
    link: "https://github.com/hajjouj-marouane"
  },
  {
    image: gitlab,
    link: ""
  },
  {
    image: twitter,
    link: ""
  },
  {
    image: instagram,
    link: "https://www.instagram.com/marouane_hajjouj/"
  },
  {
    image: gmail,
    link: "mailto:marouane.hajjouj@e-polytechnique.ma"
  }
]

const projects = [
  {
    name: "aucun",
    description:
      "",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient"
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    openSource: false,
    source_code_link: "",
  },
  
];


const certificates = [
  {
    name: "Cisco Certified Cyber sécurité",
    organization: "Cisco Networking Academy",
    icon: 'https://i.ibb.co/PmLfRvD/HAJJOUJMAROUANE-Cyber-s-curit-certificate-1.jpg', // Remplacez par l'image Cisco
    date: "15 feb 2024",
    points: [
      "",
    ],
  },
  {
    name: "Cisco Certified IT",
    organization: "Cisco Networking Academy",
    icon: 'https://i.ibb.co/jvwpLy7/HAJJOUJMAROUANE-IT-certificate-1.jpg', // Remplacez par l'image Cisco
    date: "16 feb 2024",
    points: [
      "Introduction to loT",
    ],
  },
  {
    name: "Cisco Certified JS",
    organization: "Cisco Networking Academy",
    icon: 'https://i.ibb.co/KXL4cf6/HAJJOUJMAROUANE-js-certificate-1.jpg', // Remplacez par l'image Cisco
    date: "17 feb 2024",
    points: [
      "Javascript Essentials 1 (JSE)",
    ],
  },
  {
    name: "Cisco Certified PCAP",
    organization: "Cisco Networking Academy",
    icon: 'https://i.ibb.co/HBzvdrh/HAJJOUJMAROUANE-python-fq-certificate-1.jpg', // Remplacez par l'image Cisco
    date: "14 feb 2024",
    points: [
      "Programming Essentials in python",
    ],
  },
];


export { services, technologies, experiences, projects, socials, certificates };



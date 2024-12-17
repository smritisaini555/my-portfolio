import {
  mobile,
  backend,
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
  expandimo_logo,
  redSky_logo,
  sass,
  nextjs,
  rtl,
  tamm,
  atlashxm,
  savvypayment,
  webtruck,
  mobiletruck,
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
    title: "Web Developer",
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
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML",
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Sass",
  //   icon: sass,
  // },
  // {
  //   name: "Next Js",
  //   icon: nextjs,
  // },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  // {
  //   name: "React Testing Library",
  //   icon: rtl,
  // },
  // {
  //   name: "Jest",
  //   icon: Jest,
  // },
  // {
  //   name: "Azure Devops",
  //   icon: AzureDevops,
  // },
  // {
  //   name: "Jira",
  //   icon: Jira,
  // },
];

const experiences = [
  {
    title: "React.js Intern",
    company_name: "Redsky Advance Solutions Pvt. Ltd.",
    icon: redSky_logo,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Opportunity to gain practical experience in front-end development using React.js.",
      "Improve proficiency in JavaScript, React.js, and associated tools and libraries.",
      "Work alongside senior developers and designers to build user-friendly interfaces.",
      "Build reusable, modular, and efficient React components. Debug and troubleshoot issues in existing codebases.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Expandimo Technology",
    icon: expandimo_logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers. Adaptability and a solution-driven mindset across all stages of development.",
    ],
  },
];



const projects = [
  {
    name: "My TAMM",
    description:
      "A government website for Abu Dhabi for their citizens. It’s accessibility and inclusivity allowing people within Abu Dhabi to access everyday vital services across Healthcare, Housing, Education, Citizenship, Residency and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Workbench",
        color: "green-text-gradient",
      },
      {
        name: "Camunda",
        color: "pink-text-gradient",
      },
    ],
    current: '',
    image: tamm,
    source_code_link: "https://www.tamm.abudhabi/en",
  },
  {
    name: "Atlas HXM",
    description:
      "Atlas HXM is a platform for direct Employer of Record (EOR). It deliver the flexibility for companies to expand across borders, onboard talent, manage compliance, and pay their global workforce without the need of multiple third-party providers.",
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
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    current: '',
    image: atlashxm,
    source_code_link: "https://www.atlashxm.com/",
  },
  {
    name: "Savvy Hub Payment",
    description:
      "Savvy Hub Payment is a portal for Abu Dhabi citizens. Savvy Hub Payment is a portal for subscription for the products. We have created the payment pages for subscription of the product. All the details are saved in Zoho billing including all the invoices.",
    tags: [
      {
        name: "webflow",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    current: '',
    image: savvypayment,
    source_code_link: "https://savvyhubpayment.webflow.io/",
  },
  {
    name: "Truck Transport Web",
    description:
      "Truck transport project is to manage all the data between the vendor and the driver. It will help the vendor to manage the trips of driver, the products and the salary of the driver.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "antdesign",
        color: "blue-text-gradient",
      },
    ],
    current: 'Ongoing (Admin Panel)',
    image: webtruck,
    source_code_link: "https://frontend-truck-transport.vercel.app/",
  },
  {
    name: "Truck Transport Mobile",
    description:
      "Truck transport project is to manage all the data between the vendor and the driver. 2 applications will be created, one for vendor and another one for driver. It is to manage the trips and salary.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    current: 'Ongoing (Mobile Application)',
    image: mobiletruck,
    source_code_link: "",
  },
];

export { services, technologies, experiences, projects };

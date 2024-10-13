import { meta, shopify, starbucks, tesla, dxc,ucan,atlasRTX} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    java,
    cplusplus,
    postgresql,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Pyhton",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Data Base",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Data Base",
    },
    {
        imageUrl: nextjs,
        name: "Nextjs",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Nodejs",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Product Engineering Intern",
        company_name: "AtlasRTX",
        icon: atlasRTX,
        iconBg: "#FFD1DC",
        date: "May 2024 - Aug 2024",
        points: [
            "Designed and integrated health check endpoints for Azure Functions using C#, performing minute-by-minute checks with five attempts before sending alerts, reducing alert noise by 30%",
            "Developed Azure AI Search using text-embedding-ada-002 and GPT-3.5 Turbo from OpenAI, leveraging RAG for vectorized and semantic search, improving accuracy from 13.8% to 96.5%",
            "Engineered CI pipelines with YAML, PowerShell, and Bicep scripts to automate the integration of 6 Azure Functions, achieving an 85% speed improvement",
            
        ],
    },
    {
        title: "Service Information Developer",
        company_name: "DXC Technology",
        icon: dxc,
        iconBg: "#FBF9F1",
        date: "Sep 2022 - July 2023",
        points: [
            "Provided on-site consultancy for SAP MM(Materials Management), CO(Controlling), and ABAP modules, optimizing workflows and improving data accuracy by 25%",
            "Created an automated inventory system using ABAP, SQL, and Python. Reduced inventory checking time from 3 days to 3 hours",
            "Led SAP S/4 HANA projects for WMS and ERP integration, automated purchase orders, and enabled real-time AWS data exchange for freight tracking. Boosted manufacturing efficiency by 35% and reduced inventory costs by 20%",
            
        ],
    },
    {
        title: "SAP ABAP Developer",
        company_name: "Ucan System",
        icon: ucan,
        iconBg: "#AAD7D9",
        date: "Nov 2021 - Aug 2022",
        points: [
            "Engineered 23 custom ALV reports, 14 OOALV reports, and 3 SmartForms in SAP S/4 HANA, improving report generation efficiency by 40% and enhancing data visibility for end-users",
            "Spearheaded the ERP and CRM data exchange project. Delivered 11 RFCs(Remote Function Call), attaining a 90% reduction in data processing time",
            "Reduced manual testing time by 60% and improved test coverage and reliability across various SAP modules",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ShaneChen0219',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/hsiangyuan-chen',
    }
];

export const projects = [
    { 
        iconUrl:sass,
        theme: 'btn-back-pink',
        name:'School Faq',
        description:"Created a web application with Next.js and Flask-based Python server to provide an interactive interface for users to engage with the University chatbot",
        link:'',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Squeezing Koopa & Goomba Game',
        description: 'A 2D game using C++ with the SFML framework, including dynamic items generation and responsiveness in-game collisions. ',
        link: 'https://github.com/ShaneChen0219/Mario-Jump-Game',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Temperature Record API',
        description: "A RESTful API that allows tempeture records application to CRUD the DB. It's base on Python and Flask, integrated with PostgreSQL using ElephantSQL. ",
        link: 'https://github.com/ShaneChen0219/RESTapiForTemperature',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Animated Portfolio',
        description: 'A responsive 3D portfolio base on React.js, allowing users to send email to specific email address.',
        link: 'https://github.com/ShaneChen0219/3DPortfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Food Ordering App',
        description: 'Built an online ordering app, which covers user authentication, checkout payment processing, and order acceptance facilitated through automated email notifications.',
        link: '',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Simplified TLS Protocol',
        description: 'Build a simplified TLS (Transport Layer Security) protocol involves the establishment of a secure communication channel between a server and a client. ',
        link: 'https://github.com/ShaneChen0219/TLS-communitation.git',
    },
];
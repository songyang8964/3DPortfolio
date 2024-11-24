import {meta, shopify, starbucks, tesla, dxc, ucan, atlasRTX, rongzhi} from "../assets/images";
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
        title: "Software Engineer Intern",
        company_name: "Rongzhi Information Technology Co., Ltd",
        icon: rongzhi,
        iconBg: "#FFD1DC",
        date: "Jul 2024 - May 2023",
        points: [
            "Participated in the back-end development using Java EE, Spring Boot, and Hibernate, closely collaborating with the front-end team",
            "Developed and implemented CI/CD pipeline using GitHub Actions, automating build and deployment processes for a static web app on Alibaba Cloud, reducing manual effort by 80%",
            "Mentored two interns in back-end technologies and contributed to the successful launch of two projects with positive user feedback, earning the Outstanding Contributor Award",
            
        ],
    },
    // {
    //     title: "Service Information Developer",
    //     company_name: "DXC Technology",
    //     icon: dxc,
    //     iconBg: "#FBF9F1",
    //     date: "Sep 2022 - July 2023",
    //     points: [
    //         "Provided on-site consultancy for SAP MM(Materials Management), CO(Controlling), and ABAP modules, optimizing workflows and improving data accuracy by 25%",
    //         "Created an automated inventory system using ABAP, SQL, and Python. Reduced inventory checking time from 3 days to 3 hours",
    //         "Led SAP S/4 HANA projects for WMS and ERP integration, automated purchase orders, and enabled real-time AWS data exchange for freight tracking. Boosted manufacturing efficiency by 35% and reduced inventory costs by 20%",
    //
    //     ],
    // },
    // {
    //     title: "SAP ABAP Developer",
    //     company_name: "Ucan System",
    //     icon: ucan,
    //     iconBg: "#AAD7D9",
    //     date: "Nov 2021 - Aug 2022",
    //     points: [
    //         "Engineered 23 custom ALV reports, 14 OOALV reports, and 3 SmartForms in SAP S/4 HANA, improving report generation efficiency by 40% and enhancing data visibility for end-users",
    //         "Spearheaded the ERP and CRM data exchange project. Delivered 11 RFCs(Remote Function Call), attaining a 90% reduction in data processing time",
    //         "Reduced manual testing time by 60% and improved test coverage and reliability across various SAP modules",
    //     ],
    // },
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
        link: 'https://github.com/songyang8964',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/song-yang-37aa29291/',
    }
];

export const projects = [
    { 
        iconUrl:sass,
        theme: 'btn-back-pink',
        name:'Hotel Review Analysis Using Spark',
        description:"A project that leverages Spark and machine learning models to analyze hotel reviews, providing sentiment classification and performance comparison to help hotels improve services based on customer feedback.",
        link:'https://github.com/songyang8964/HotelReviewAnalysis',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Crowd-Sourced Review App',
        description: 'A crowd-sourced review app featuring email login, store reviews, coupon flash sales, daily check-ins, and blog updates from followed influencers, allowing users to browse recommended content, search local businesses, view details and reviews, post blogs, and purchase limited-time deals.',
        link: 'https://github.com/songyang8964/GrabReview',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Handwritten RPC Framework',
        description: "A high-performance RPC framework based on Java, Etcd, and Vert.x, implementing a network server, serializer, registry center.",
        link: 'https://github.com/songyang8964/song-rpc',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Animated Portfolio',
        description: 'A responsive 3D portfolio base on React.js, allowing users to send email to specific email address.',
        link: 'https://github.com/songyang8964/3DPortfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Ebook Storage System',
        description: 'A full-stack Wiki system for storage of eBooks and documents, built with Spring Boot for the backend and Vue 3 with Ant Design Vue for the frontend.',
        link: 'https://github.com/songyang8964/Wiki',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Reggie Takeout',
        description: 'A custom product designed for the food service industry, consisting of a system management backend for internal staff to manage restaurant categories, dishes, meals, orders, and employees, along with a mobile application for consumers to browse dishes, add items to their cart, and place orders online. ',
        link: 'https://github.com/songyang8964/takeout',
    },
];
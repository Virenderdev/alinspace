import header from "../../images/header.jpg";
import header1 from "../../images/image1.jpg"
export const NavItems = [
    {  
        id: 1,
        name:"home",
        links: "/"
    },
    {   
        id:2,
        name:"Services",
        links: "/services"
    },
    {  
        id:3,
        name:"Blog",
        links: "/blog"
    },
    {  
        id:4,
        name:"Team",
        links: "/team"
    },
    {

        id: 5,
        name:"Contact",
        links: "/contact"
    },
]

export const cardData = [
    {
        title:"AUTONOMUS AGENT DEVELOPMENT",
        feature1: "Workflow Automation",
        feature2: "Natural Language to SQL",
        feature3: "Complex Data Pipelines",
        feature4: "Self Adapting System",
        imageUrl:{header}
    },
    {
        title: "ENTERPRISE CONSULTING",
        feature1: "Strategy Developement",
        feature2: "Perfomance Evaluation",
        feature3: "Use Case Identification",
        feature4: "Feasibility Assessment",
        imageUrl:{header1}
    },
    {
        title: "CHATBOT DEVELOPMENT",
        feature1: "GPT Development",
        feature2: "Secure Solutions",
        feature3: "Knowledge Response",
        feature4: "Model Tuning",
        imageUrl:""
    }
]
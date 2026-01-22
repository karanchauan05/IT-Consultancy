export interface JobPost {
    id: string;
    title: string;
    level: string;
    location: string;
    type: string;
    description: string;
    jobSummary?: string[];
    responsibilities: string[];
    requirements: string[];
}

export const JOB_POSTS: JobPost[] = [
    {
        id: "software-engineer",
        title: "Software Engineer",
        level: "Mid-Senior",
        location: "London, UK",
        type: "Full-time",
        description: "We are looking for a skilled Software Engineer to join our dynamic team. You will be responsible for developing high-quality applications, writing clean code, and collaborating with cross-functional teams to define, design, and ship new features.",
        jobSummary: [
            "Building scalable web applications with React and Node.js",
            "Designing and implementing RESTful APIs",
            "Working in an Agile development environment",
            "Contributing to architectural decisions"
        ],
        responsibilities: [
            "Develop and maintain high-quality software solutions.",
            "Write clean, scalable, and efficient code.",
            "Collaborate with cross-functional teams to define, design, and ship new features.",
            "Troubleshoot, debug, and upgrade existing software.",
            "Participate in code reviews and advocate for best practices."
        ],
        requirements: [
            "Bachelor's degree in Computer Science or related field.",
            "3+ years of experience in software development.",
            "Proficiency in JavaScript/TypeScript, React, and Node.js.",
            "Experience with cloud platforms (AWS/Azure/GCP).",
            "Strong problem-solving skills and attention to detail."
        ]
    },
    {
        id: "data-scientist",
        title: "Data Scientist",
        level: "Senior",
        location: "New York, USA",
        type: "Full-time",
        description: "Join us to unlock the power of data. As a Data Scientist, you will analyze complex datasets, build predictive models, and provide actionable insights to drive business decisions.",
        jobSummary: [
            "Analyzing large-scale datasets for trends and patterns",
            "Developing advanced machine learning models",
            "Translating data into strategic business recommendations",
            "Working with state-of-the-art AI technologies"
        ],
        responsibilities: [
            "Analyze large datasets to extract meaningful insights.",
            "Build and deploy predictive models and machine learning algorithms.",
            "Collaborate with stakeholders to identify business opportunities.",
            "Visualize data and present findings to non-technical audiences.",
            "Stay up-to-date with the latest advancements in AI and data science."
        ],
        requirements: [
            "Master's or PhD in Data Science, Statistics, or related field.",
            "5+ years of experience in data analysis and modeling.",
            "Proficiency in Python, R, and SQL.",
            "Experience with machine learning frameworks (TensorFlow, PyTorch).",
            "Strong communication and storytelling skills."
        ]
    },
    {
        id: "product-designer",
        title: "Product Designer",
        level: "Mid-level",
        location: "San Francisco, USA",
        type: "Remote",
        description: "We are seeking a creative Product Designer to craft intuitive and engaging user experiences. You will work closely with product managers and engineers to translate user needs into beautiful, functional designs.",
        jobSummary: [
            "Creating user-centered designs for web and mobile",
            "Standardizing design systems and components",
            "Conducting user research and testing",
            "Collaborating closely with product teams"
        ],
        responsibilities: [
            "Design user flows, wireframes, prototypes, and high-fidelity mockups.",
            "Conduct user research and usability testing.",
            "Collaborate with engineers to ensure design implementation accuracy.",
            "Maintain and evolve the design system.",
            "Advocate for the user throughout the product development process."
        ],
        requirements: [
            "Bachelor's degree in Design, HCI, or related field.",
            "3+ years of experience in product design.",
            "Proficiency in Figma, Sketch, and Adobe Creative Suite.",
            "Strong portfolio showcasing end-to-end design process.",
            "Excellent understanding of user-centered design principles."
        ]
    },
    {
        id: "devops-engineer",
        title: "DevOps Engineer",
        level: "Senior",
        location: "Berlin, DE",
        type: "Full-time",
        description: "Help us build a robust infrastructure. As a DevOps Engineer, you will automate deployment pipelines, ensure system scalability, and maintain high availability of our services.",
        responsibilities: [
            "Design and implement CI/CD pipelines.",
            "Manage cloud infrastructure using Infrastructure as Code (IaC).",
            "Monitor system performance and ensure high availability.",
            "Collaborate with development teams to optimize release processes.",
            "Implement security best practices."
        ],
        requirements: [
            "Bachelor's degree in Computer Science or related field.",
            "5+ years of experience in DevOps or Site Reliability Engineering.",
            "Proficiency in Docker, Kubernetes, and Terraform.",
            "Strong experience with CI/CD tools (Jenkins, GitLab CI).",
            "Solid understanding of networking and security concepts."
        ]
    },
    {
        id: "business-analyst",
        title: "Business Analyst",
        level: "Entry-Mid",
        location: "Mumbai, IN",
        type: "Contract",
        description: "Bridge the gap between business and technology. As a Business Analyst, you will gather requirements, analyze processes, and recommend solutions to improve business efficiency.",
        responsibilities: [
            "Gather and document business requirements.",
            "Analyze business processes and identify areas for improvement.",
            "Create functional specifications and use cases.",
            "Facilitate communication between business stakeholders and technical teams.",
            "Assist in user acceptance testing (UAT)."
        ],
        requirements: [
            "Bachelor's degree in Business, Management, or related field.",
            "2+ years of experience as a Business Analyst.",
            "Strong analytical and problem-solving skills.",
            "Excellent written and verbal communication skills.",
            "Experience with Agile methodologies."
        ]
    },
    {
        id: "ai-ml-engineer",
        title: "AI/ML Engineer",
        level: "Senior",
        location: "Toronto, CA",
        type: "Hybrid",
        description: "Push the boundaries of AI. You will design, develop, and deploy state-or-the-art machine learning models to solve complex problems.",
        responsibilities: [
            "Design and implement machine learning models and algorithms.",
            "Train and fine-tune models on large datasets.",
            "Optimize models for performance and scalability.",
            "Collaborate with data scientists and software engineers.",
            "Research new AI techniques and apply them to real-world problems."
        ],
        requirements: [
            "Master's degree in Computer Science, AI, or related field.",
            "4+ years of experience in AI/ML development.",
            "Strong programming skills in Python and C++.",
            "Deep understanding of deep learning architectures (CNN, RNN, Transformers).",
            "Experience with ML deployment, MLOps, and model serving."
        ]
    }
];

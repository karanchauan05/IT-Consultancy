export interface SearchItem {
    id: string;
    title: string;
    description: string;
    category: 'Solution' | 'Industry' | 'Resource' | 'Career' | 'Page';
    href: string;
}

export const SEARCH_DATA: SearchItem[] = [
    // Pages
    { id: 'p1', title: 'What we do', description: 'Our solutions and service offerings.', category: 'Page', href: '/services' },
    { id: 'p2', title: 'Who we work with', description: 'Industries we serve and client success stories.', category: 'Page', href: '/industries' },
    { id: 'p3', title: 'Resources', description: 'Latest thinking on technology and business.', category: 'Page', href: '/resources' },
    { id: 'p5', title: 'Careers', description: 'Join our global community of technologists.', category: 'Page', href: '/careers' },
    { id: 'p6', title: 'About', description: 'Our mission, values, and leadership.', category: 'Page', href: '/about' },
    { id: 'p7', title: 'Contact', description: 'Get in touch with our global teams.', category: 'Page', href: '/contact' },

    // Solutions
    // Solutions
    { id: 's1', title: 'Scaling AI', description: 'Enterprise-grade AI solutions for measurable impact.', category: 'Solution', href: '/services/scaling-ai' },
    { id: 's2', title: 'Customer Experience', description: 'Seamless, personalized experiences across touchpoints.', category: 'Solution', href: '/services/customer-experience' },
    { id: 's3', title: 'Product Innovation', description: 'Modern design and user-centered approaches.', category: 'Solution', href: '/services/product-innovation' },
    { id: 's4', title: 'Data Modernization', description: 'Unlock value with modern platforms and analytics.', category: 'Solution', href: '/services/data-modernization' },
    { id: 's5', title: 'Platform Modernization', description: 'Modernize legacy systems with cloud-native architectures.', category: 'Solution', href: '/services/platform-modernization' },

    // Industries
    { id: 'i1', title: 'Financial Services', description: 'Digital transformation in banking and insurance.', category: 'Industry', href: '/industries/financial-services' },
    { id: 'i2', title: 'Retail & E-commerce', description: 'Omnichannel experiences that drive loyalty.', category: 'Industry', href: '/industries/retail-ecommerce' },
    { id: 'i3', title: 'Healthcare', description: 'AI-powered diagnostics and patient care.', category: 'Industry', href: '/industries/healthcare' },
    { id: 'i4', title: 'Automotive', description: 'Next-gen software-defined vehicle platforms.', category: 'Industry', href: '/industries/automotive' },

    // Resources
    { id: 'res1', title: 'Generative AI Efficiency', description: 'The new frontier of efficiency with GenAI.', category: 'Resource', href: '/resources/articles/generative-ai-efficiency' },
    { id: 'res2', title: 'Responsible Tech Trust', description: 'Building trust through responsible technology.', category: 'Resource', href: '/resources/articles/responsible-tech-trust' },
    { id: 'res3', title: 'Cloud-Native Future', description: 'Why cloud-native architectures are essential.', category: 'Resource', href: '/resources/articles/cloud-native-future' },
    { id: 'cs1', title: 'Modern Banking Transformation', description: 'Reinventing digital banking for a major institution.', category: 'Resource', href: '/resources/publications/modern-banking-transformation' },
    { id: 'cs2', title: 'Omnichannel Retail Success', description: 'Omnichannel transformation for a leading global retailer.', category: 'Resource', href: '/resources/publications/omnichannel-retail-success' },
    { id: 'cs3', title: 'AI Healthcare Diagnostics', description: 'AI-powered diagnostics platform for healthcare providers.', category: 'Resource', href: '/resources/publications/ai-healthcare-diagnostics' },
    { id: 'cs4', title: 'Automotive Software Platform', description: 'Next-gen software-defined vehicle platform.', category: 'Resource', href: '/resources/publications/automotive-software-platform' },

    // Careers
    { id: 'c1', title: 'Software Engineer', description: 'Building the future of digital business.', category: 'Career', href: '/careers/software-engineer' },
    { id: 'c2', title: 'Data Scientist', description: 'Extracting value from complex datasets.', category: 'Career', href: '/careers/data-scientist' },
    { id: 'c3', title: 'Product Designer', description: 'Craft intuitive and engaging user experiences.', category: 'Career', href: '/careers/product-designer' },
    { id: 'c4', title: 'DevOps Engineer', description: 'Build robust infrastructure and automation pipelines.', category: 'Career', href: '/careers/devops-engineer' },
    { id: 'c5', title: 'Business Analyst', description: 'Bridge the gap between business and technology.', category: 'Career', href: '/careers/business-analyst' },
    { id: 'c6', title: 'AI/ML Engineer', description: 'Push the boundaries of AI with state-of-the-art models.', category: 'Career', href: '/careers/ai-ml-engineer' },
    { id: 'c7', title: 'Graduate Program', description: 'Kickstart your career with world-class training.', category: 'Career', href: '/careers/open-positions' },
];

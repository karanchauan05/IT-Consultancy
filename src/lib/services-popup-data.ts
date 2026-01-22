import { TrendingUp, Users, Clock, Award, Zap, Shield, Target, Rocket, Database, Brain, Globe, Cpu } from 'lucide-react';

export interface ServicePopupData {
    title: string;
    description: string;
    keyBenefits: string[];
    stats: Array<{
        metric: string;
        value: string;
        icon: any;
        description: string;
    }>;
    technologies: string[];
    caseStudyTitle: string;
    caseStudyResult: string;
    link: string;
}

export const SERVICES_POPUP_DATA: Record<string, ServicePopupData> = {
    'scaling-ai': {
        title: "Scaling AI",
        description: "Transform your business with enterprise-grade AI solutions that deliver measurable impact.",
        keyBenefits: [
            "Reduce model deployment time by 80%",
            "Implement automated ML pipelines",
            "Ensure ethical AI governance",
            "Scale to millions of predictions daily",
            "Real-time model monitoring & drift detection",
            "ROI-focused AI strategy development"
        ],
        stats: [
            {
                metric: "Faster Deployment",
                value: "80%",
                icon: Rocket,
                description: "Reduction in time-to-production"
            },
            {
                metric: "Model Accuracy",
                value: "95%+",
                icon: Target,
                description: "Average model performance"
            },
            {
                metric: "Cost Reduction",
                value: "60%",
                icon: TrendingUp,
                description: "In infrastructure costs"
            },
            {
                metric: "Uptime",
                value: "99.9%",
                icon: Shield,
                description: "AI system availability"
            }
        ],
        technologies: [
            "TensorFlow", "PyTorch", "MLflow", "Kubeflow", "AWS SageMaker", 
            "Azure ML", "Databricks", "Apache Airflow", "Docker", "Kubernetes",
            "Vector Databases", "LangChain", "OpenAI", "Hugging Face"
        ],
        caseStudyTitle: "Fortune 500 Retailer AI Transformation",
        caseStudyResult: "Implemented end-to-end ML platform serving 50M+ daily predictions, reducing customer churn by 35% and increasing revenue by $120M annually through personalized recommendations.",
        link: "/services/scaling-ai"
    },
    'customer-experience': {
        title: "Customer Experience",
        description: "Create seamless, personalized experiences that delight customers across every touchpoint.",
        keyBenefits: [
            "Increase user engagement by 150%",
            "Reduce bounce rates significantly",
            "Implement omnichannel experiences",
            "A/B test and optimize continuously",
            "Accessibility-first design approach",
            "Mobile-responsive across all devices"
        ],
        stats: [
            {
                metric: "User Engagement",
                value: "150%",
                icon: Users,
                description: "Average increase"
            },
            {
                metric: "Conversion Rate",
                value: "45%",
                icon: TrendingUp,
                description: "Improvement achieved"
            },
            {
                metric: "Load Time",
                value: "<2s",
                icon: Zap,
                description: "Page load speed"
            },
            {
                metric: "Satisfaction",
                value: "4.8/5",
                icon: Award,
                description: "User satisfaction score"
            }
        ],
        technologies: [
            "React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS",
            "Figma", "Adobe XD", "Storybook", "Jest", "Cypress", "Framer Motion",
            "GraphQL", "REST APIs", "Progressive Web Apps", "Micro-frontends"
        ],
        caseStudyTitle: "E-commerce Platform Redesign",
        caseStudyResult: "Redesigned checkout flow resulting in 67% reduction in cart abandonment and 2.3x increase in mobile conversions, generating $45M additional revenue in first year.",
        link: "/services/customer-experience"
    },
    'product-innovation': {
        title: "Product Innovation",
        description: "Build products that matter with modern engineering practices and user-centered design.",
        keyBenefits: [
            "Accelerate time-to-market by 50%",
            "Validate ideas before full development",
            "Implement lean startup methodology",
            "Build scalable MVP architectures",
            "Continuous user feedback integration",
            "Market-fit validation frameworks"
        ],
        stats: [
            {
                metric: "Time to Market",
                value: "50%",
                icon: Clock,
                description: "Faster product launches"
            },
            {
                metric: "Success Rate",
                value: "85%",
                icon: Target,
                description: "Product-market fit"
            },
            {
                metric: "User Adoption",
                value: "3x",
                icon: Users,
                description: "Faster user growth"
            },
            {
                metric: "Development Cost",
                value: "40%",
                icon: TrendingUp,
                description: "Reduction in costs"
            }
        ],
        technologies: [
            "React Native", "Flutter", "Swift", "Kotlin", "Node.js", "Python",
            "AWS", "Google Cloud", "Firebase", "Supabase", "PostgreSQL", "MongoDB",
            "Docker", "Kubernetes", "CI/CD", "Terraform", "Serverless", "GraphQL"
        ],
        caseStudyTitle: "FinTech Startup MVP Development",
        caseStudyResult: "Built and launched digital banking platform in 4 months, acquired 100K users in first 6 months, secured $25M Series A funding based on product traction.",
        link: "/services/product-innovation"
    },
    'data-modernization': {
        title: "Data Modernization",
        description: "Unlock the value of your data with modern platforms and analytics capabilities.",
        keyBenefits: [
            "Reduce data processing time by 90%",
            "Implement real-time analytics",
            "Ensure GDPR/CCPA compliance",
            "Self-service BI for business users",
            "Automated data quality monitoring",
            "Cloud-native data architecture"
        ],
        stats: [
            {
                metric: "Processing Speed",
                value: "90%",
                icon: Zap,
                description: "Faster data processing"
            },
            {
                metric: "Data Quality",
                value: "99.5%",
                icon: Shield,
                description: "Accuracy improvement"
            },
            {
                metric: "Cost Savings",
                value: "70%",
                icon: TrendingUp,
                description: "Infrastructure costs"
            },
            {
                metric: "Query Performance",
                value: "10x",
                icon: Database,
                description: "Faster analytics"
            }
        ],
        technologies: [
            "Snowflake", "BigQuery", "Databricks", "Apache Spark", "dbt", "Airflow",
            "Kafka", "Kinesis", "Tableau", "Power BI", "Looker", "Fivetran",
            "Stitch", "AWS Glue", "Azure Data Factory", "Terraform", "Python", "SQL"
        ],
        caseStudyTitle: "Healthcare Data Lake Implementation",
        caseStudyResult: "Migrated 500TB+ legacy data to modern cloud platform, enabling real-time patient analytics that reduced diagnosis time by 40% and improved treatment outcomes.",
        link: "/services/data-modernization"
    },
    'platform-modernization': {
        title: "Enterprise Platform Modernization",
        description: "Modernize legacy systems with cloud-native architectures and DevOps practices.",
        keyBenefits: [
            "Increase deployment frequency by 100x",
            "Achieve 99.99% system availability",
            "Reduce operational overhead by 60%",
            "Implement auto-scaling capabilities",
            "Zero-downtime deployments",
            "Enhanced security & compliance"
        ],
        stats: [
            {
                metric: "Deployment Frequency",
                value: "100x",
                icon: Rocket,
                description: "More frequent releases"
            },
            {
                metric: "System Uptime",
                value: "99.99%",
                icon: Shield,
                description: "Availability guarantee"
            },
            {
                metric: "Recovery Time",
                value: "<5min",
                icon: Clock,
                description: "Mean time to recovery"
            },
            {
                metric: "Cost Reduction",
                value: "60%",
                icon: TrendingUp,
                description: "Operational savings"
            }
        ],
        technologies: [
            "Kubernetes", "Docker", "AWS EKS", "Azure AKS", "GCP GKE", "Terraform",
            "Helm", "Istio", "Prometheus", "Grafana", "Jenkins", "GitLab CI",
            "ArgoCD", "Vault", "Consul", "Redis", "PostgreSQL", "Microservices"
        ],
        caseStudyTitle: "Insurance Company Platform Migration",
        caseStudyResult: "Migrated monolithic claims system to microservices architecture, reducing processing time from hours to minutes and enabling 24/7 operations with 99.99% uptime.",
        link: "/services/platform-modernization"
    },
    'application-management': {
        title: "Digital Application Management",
        description: "Optimize and evolve your digital applications for maximum business value.",
        keyBenefits: [
            "Proactive performance monitoring",
            "Continuous security updates",
            "Feature enhancement roadmaps",
            "Technical debt reduction",
            "24/7 application support",
            "Cost optimization strategies"
        ],
        stats: [
            {
                metric: "Performance Gain",
                value: "75%",
                icon: Zap,
                description: "Application speed improvement"
            },
            {
                metric: "Uptime",
                value: "99.95%",
                icon: Shield,
                description: "Application availability"
            },
            {
                metric: "Issue Resolution",
                value: "<2hrs",
                icon: Clock,
                description: "Average response time"
            },
            {
                metric: "Cost Optimization",
                value: "45%",
                icon: TrendingUp,
                description: "Operational cost reduction"
            }
        ],
        technologies: [
            "New Relic", "Datadog", "Splunk", "ELK Stack", "Prometheus", "Grafana",
            "PagerDuty", "Jira", "ServiceNow", "AWS CloudWatch", "Azure Monitor",
            "SonarQube", "Snyk", "OWASP", "Load Balancers", "CDN", "Caching"
        ],
        caseStudyTitle: "Media Company Application Portfolio",
        caseStudyResult: "Managed 50+ applications serving 10M+ daily users, achieved 99.95% uptime, reduced operational costs by 45% while delivering 200+ feature enhancements annually.",
        link: "/services/application-management"
    }
};
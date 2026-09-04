/**
 * TechnoKraft Services - Dynamic Service Detail Loader
 * Dynamically switches service content, SEO metadata, breadcrumbs, features, process, and tech stack.
 */

(function ($) {
    'use strict';

    const SERVICES_DATA = {
        'custom-software': {
            id: 'custom-software',
            menuTitle: 'Custom Software & AI Solutions',
            menuIcon: 'fa-solid fa-code',
            pageTitle: 'Custom Software Development & AI Integration in Nashik | Java & Python | TechnoKraft',
            metaDescription: 'Leading custom software development and AI integration company in Nashik, Maharashtra. We engineer enterprise Java (Spring Boot), Python (Django/FastAPI), ERP, CRM, and AI-powered software solutions for local and global enterprises.',
            metaKeywords: 'Custom Software Development Nashik, AI Integration Services Nashik, Java Software Development, Python Development Nashik, Enterprise ERP Nashik, Software Company Maharashtra, Pune IT Network, TechnoKraft Services',
            breadcrumb: 'Custom Software & AI Integration',
            heading: 'Custom Software Development with AI Integration (Java & Python)',
            badge: 'Enterprise Java, Python & AI Software Engineering',
            mainImage: 'images/resource/service-2.jpg',
            mainImageAlt: 'Custom Software Development with AI Integration by TechnoKraft Services in Nashik',
            introP1: 'At TechnoKraft Services, we engineer enterprise-grade custom software solutions infused with cutting-edge AI integration to solve complex business challenges, automate core operations, and accelerate digital transformation. Based in Nashik, Maharashtra with an extensive client network across India and globally, our engineering team constructs high-performance, secure, and future-proof software architectures using industry-standard Java, Python, and modern microservices.',
            introP2: 'Whether developing large-scale ERP and CRM platforms, automated predictive workflow engines, or multi-tenant SaaS products, our agile engineering team harnesses the power of Java (Spring Boot), Python (Django, FastAPI), and AI/LLM models. We ensure rapid time-to-market, zero-defect code quality, seamless legacy system integration, and maximum operational efficiency for businesses in Nashik, Pune, Mumbai, and worldwide.',
            feature1: {
                icon: 'images/icons/service-4.png',
                heading: 'Enterprise Java & Spring Boot',
                headingSpan: 'Architecture',
                text: 'Robust, secure, and multi-threaded enterprise software backends engineered for high-concurrency transaction processing and 99.99% uptime.'
            },
            feature2: {
                icon: 'images/icons/feature-7.png',
                heading: 'Python & AI Integration',
                headingSpan: 'Workflows',
                text: 'Intelligent workflow automation, predictive analytics pipelines, FastAPI microservices, and custom Generative AI/LLM integrations.'
            },
            processImage: 'images/resource/service-11.jpg',
            processImageAlt: 'TechnoKraft Custom Software and AI Engineering Process',
            processTitle: 'Local IT Leadership & Global Enterprise Delivery Network',
            processText: 'With 12+ years of established leadership in Nashik’s technology corridor and a delivery network serving enterprise clients across Maharashtra, India, and international markets, TechnoKraft Services pairs local reliability with global engineering benchmarks. Every custom software release undergoes strict automated unit testing, security vulnerability scans, and performance profiling.',
            capabilities: [
                'Enterprise Java (Spring Boot) & Python (Django, FastAPI) Application Engineering',
                'AI-Powered Workflow Automation & Intelligent Business Decision Engines',
                'Custom ERP, CRM, SCM & Multi-Tenant SaaS Platform Development',
                'Predictive Analytics, NLP & Generative AI / LLM Model Integration',
                'Microservices Architecture, RESTful/GraphQL APIs & Middleware Integration',
                'High-Volume Database Optimization, PostgreSQL/MySQL & Data Warehousing'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: 'Java & Python <br>Full-Stack Mastery' },
                { icon: 'images/icons/service-36.png', text: 'AI-Infused Enterprise <br>Architecture' },
                { icon: 'images/icons/service-37.png', text: 'Nashik Hub & Global <br>Delivery Network' }
            ],
            techStack: ['Java (Spring Boot)', 'Python (FastAPI / Django)', 'AI / LLM Integration', 'React / Next.js', 'Node.js', 'PostgreSQL / MySQL', 'Docker / Kubernetes', 'Redis Cache', 'Apache Kafka', 'AWS / Azure Cloud']
        },

        'web-development': {
            id: 'web-development',
            menuTitle: 'Web App & UI/UX Design',
            menuIcon: 'fa-solid fa-globe',
            pageTitle: 'Web Application Development & UI/UX Design Nashik | TechnoKraft Services',
            metaDescription: 'Top-rated web application development and UI/UX design company in Nashik. TechnoKraft builds fast, responsive, SEO-optimized web platforms, e-commerce, and modern SaaS portals using React, Python, and Java backends.',
            metaKeywords: 'Web Development Nashik, UI/UX Design Nashik, Web Application Development, Python Web Apps, Java Web Portals, React Next.js Development, E-Commerce Portals, TechnoKraft Services',
            breadcrumb: 'Web App & UI/UX Design',
            heading: 'Web Application Development & Intuitive UI/UX Design',
            badge: 'Modern Web Architecture & AI UX',
            mainImage: 'images/resource/service-8.jpg',
            mainImageAlt: 'Web Application Development & UI/UX Design by TechnoKraft Services in Nashik',
            introP1: 'TechnoKraft Services creates high-impact, blazing-fast web applications and visually captivating UI/UX experiences that captivate users and accelerate conversion rates. Combining creative aesthetics with engineering excellence, we deliver digital web solutions that reflect your brand identity and perform flawlessly across all device formats.',
            introP2: 'Our full-stack web development services encompass enterprise web portals, interactive SaaS interfaces, progressive web applications (PWAs), and scalable e-commerce ecosystems. Built with modern JavaScript frameworks, robust Python and Java backends, and strict SEO standards, our web platforms deliver unparalleled responsiveness, accessibility, and search visibility across Nashik, Maharashtra, and global markets.',
            feature1: {
                icon: 'images/icons/service-33.png',
                heading: 'Modern Single Page Apps',
                headingSpan: '(SPA)',
                text: 'Ultra-fast, reactive web interfaces built with React, Next.js, and Vue.js for an engaging desktop and mobile user experience.'
            },
            feature2: {
                icon: 'images/icons/feature-6.png',
                heading: 'Full-Stack Python & Java',
                headingSpan: 'Backends',
                text: 'Secure, high-concurrency backend services using Python FastAPI/Django and Java Spring Boot for seamless data management.'
            },
            processImage: 'images/resource/service-10.jpg',
            processImageAlt: 'TechnoKraft Web UI/UX Design & Development in Nashik',
            processTitle: 'Beautiful Interfaces Backed by Robust Engineering',
            processText: 'We believe that great software must be as intuitive to use as it is powerful behind the scenes. Our design-led approach combines in-depth user journey mapping, design heuristics, modern typography, and optimized asset pipelines to create web applications that look world-class and load in milliseconds.',
            capabilities: [
                'Progressive Web Apps (PWA) & Single Page Applications (SPA)',
                'Enterprise Web Portals & Custom Content Management Systems',
                'High-Volume E-Commerce Platforms with Payment Gateways',
                'Human-Centered UI/UX Wireframing & Interactive Prototyping',
                'Full-Stack Python & Java REST/GraphQL API Integration',
                'Search Engine Optimization (SEO) & Core Web Vitals Tuning'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: '100% Responsive <br>& Cross-Browser' },
                { icon: 'images/icons/service-36.png', text: 'Core Web Vitals <br>& SEO Optimized' },
                { icon: 'images/icons/service-37.png', text: 'Intuitive UX <br>& High Conversion' }
            ],
            techStack: ['React.js', 'Next.js', 'Python (Django / FastAPI)', 'Java (Spring)', 'TypeScript', 'Tailwind CSS', 'Bootstrap 5', 'Node.js', 'PostgreSQL', 'GraphQL', 'Vite', 'REST APIs']
        },

        'mobile-development': {
            id: 'mobile-development',
            menuTitle: 'Mobile App Development',
            menuIcon: 'fa-solid fa-mobile-screen',
            pageTitle: 'Mobile App Development Company in Nashik | iOS & Android Apps | TechnoKraft Services',
            metaDescription: 'Leading mobile application development company in Nashik. TechnoKraft develops native iOS, Android, and Flutter cross-platform mobile apps with rich features, high security, and offline support.',
            metaKeywords: 'Mobile App Development Nashik, iOS App Development, Android App Development, Flutter Apps, React Native Nashik, App Developers Nashik, TechnoKraft Services',
            breadcrumb: 'Mobile App Development',
            heading: 'Native & Cross-Platform Mobile App Development',
            badge: 'Mobile App Engineering',
            mainImage: 'images/resource/service-3.jpg',
            mainImageAlt: 'Mobile App Development Services iOS Android Flutter TechnoKraft',
            introP1: 'TechnoKraft Services builds powerful, intuitive, and secure mobile applications that connect your business directly to your customers. Whether you need native iOS and Android apps or efficient cross-platform solutions built on Flutter and React Native, our mobile engineers craft delightful mobile experiences tailored to your goals.',
            introP2: 'From initial concept and UX wireframing to App Store & Google Play deployment, we manage the entire mobile lifecycle. Our mobile solutions feature offline sync capabilities, real-time push notifications, geolocation tracking, biometric authentication, and frictionless payment gateway integrations.',
            feature1: {
                icon: 'images/icons/service-5.png',
                heading: 'Cross-Platform Flutter',
                headingSpan: '& React Native',
                text: 'Single-codebase efficiency delivering native-grade 60 FPS performance, shared business logic, and halved time-to-market.'
            },
            feature2: {
                icon: 'images/icons/feature-1.png',
                heading: 'Native iOS & Android',
                headingSpan: 'Engineering',
                text: 'Specialized Swift and Kotlin architectures utilizing platform-native hardware APIs, Bluetooth BLE, sensors, and camera processing.'
            },
            processImage: 'images/resource/service-11.jpg',
            processImageAlt: 'TechnoKraft Mobile App Testing & Deployment',
            processTitle: 'Delivering Fluid Mobile Experiences at Scale',
            processText: 'Our mobile applications are engineered for reliability and scalability. We adhere strictly to Apple Human Interface Guidelines and Google Material Design principles to ensure effortless navigation, rapid response times, and consistent brand engagement that garners 5-star app store ratings.',
            capabilities: [
                'Native iOS App Development (Swift, SwiftUI)',
                'Native Android App Development (Kotlin, Jetpack Compose)',
                'Cross-Platform Hybrid Apps (Flutter, React Native)',
                'Mobile Backend-as-a-Service (BaaS) & RESTful Cloud APIs',
                'In-App Purchases, Subscriptions & Payment Gateway Integration',
                'Push Notifications, Real-Time Chat & Geolocation Services'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: 'App Store & Play <br>Store Approved' },
                { icon: 'images/icons/service-36.png', text: 'Offline Sync & <br>Real-Time Data' },
                { icon: 'images/icons/service-37.png', text: 'Biometric & <br>End-to-End Security' }
            ],
            techStack: ['Flutter', 'React Native', 'Swift', 'SwiftUI', 'Kotlin', 'Firebase', 'SQLite', 'Realm', 'AWS Amplify', 'GraphQL', 'Google Maps API']
        },

        'cloud-services': {
            id: 'cloud-services',
            menuTitle: 'Cloud Services & DevOps',
            menuIcon: 'fa-solid fa-cloud',
            pageTitle: 'Cloud Migration & DevOps Automation Services in Nashik | TechnoKraft',
            metaDescription: 'Accelerate your cloud transformation with TechnoKraft Services. AWS, Azure, Google Cloud migration, Docker containerization, Kubernetes orchestration, and automated CI/CD pipelines.',
            metaKeywords: 'Cloud Solutions Nashik, Cloud Migration Nashik, DevOps Services, AWS Consulting, Azure Cloud, Docker Kubernetes, CI/CD Pipelines, TechnoKraft Services',
            breadcrumb: 'Cloud Services & DevOps',
            heading: 'Scalable Cloud Infrastructure, Migration & DevOps',
            badge: 'Cloud & Infrastructure',
            mainImage: 'images/resource/service-5.jpg',
            mainImageAlt: 'Cloud Services and DevOps Engineering by TechnoKraft Services',
            introP1: 'Transform your business agility and infrastructure scalability with TechnoKraft\'s comprehensive Cloud Services and DevOps engineering. We empower organizations to migrate, modernize, and manage their cloud environments across Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).',
            introP2: 'Our certified cloud architects design resilient, auto-scaling architectures with automated continuous integration and continuous deployment (CI/CD) pipelines. By eliminating manual deployment friction, optimizing cloud infrastructure spend, and enforcing enterprise-grade security, we ensure your applications operate with 99.99% availability.',
            feature1: {
                icon: 'images/icons/service-7.png',
                heading: 'Zero-Downtime Cloud',
                headingSpan: 'Migration',
                text: 'Seamless lift-and-shift or cloud-native re-architecting of on-premise infrastructure to AWS, Azure, or GCP without disrupting business.'
            },
            feature2: {
                icon: 'images/icons/feature-4.png',
                heading: 'Automated CI/CD &',
                headingSpan: 'Containers',
                text: 'Docker containerization, Kubernetes clustering, and automated deployment pipelines for lightning-fast, error-free releases.'
            },
            processImage: 'images/resource/service-10.jpg',
            processImageAlt: 'TechnoKraft Cloud Architecture & DevOps Automation',
            processTitle: 'Optimizing Performance, Cost & Reliability',
            processText: 'Through Infrastructure as Code (IaC) with Terraform and Ansible, comprehensive cloud monitoring with Prometheus and Grafana, and automated cost optimization (FinOps), we ensure your IT infrastructure remains agile, secure, and cost-efficient at every stage of growth.',
            capabilities: [
                'Public, Private & Hybrid Cloud Architecture Design',
                'Legacy Server to Cloud Migration (AWS, Azure, GCP)',
                'Docker Containerization & Kubernetes Cluster Management',
                'Automated CI/CD Pipeline Setup (GitHub Actions, GitLab, Jenkins)',
                'Infrastructure as Code (Terraform, CloudFormation, Ansible)',
                'Cloud Cost Optimization (FinOps) & Disaster Recovery Planning'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: '99.99% Infrastructure <br>Reliability' },
                { icon: 'images/icons/service-36.png', text: 'Up to 40% Cloud <br>Cost Savings' },
                { icon: 'images/icons/service-37.png', text: '24/7 Server & Log <br>Monitoring' }
            ],
            techStack: ['AWS (EC2, S3, RDS, Lambda, EKS)', 'Microsoft Azure', 'Google Cloud (GCP)', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'NGINX', 'Prometheus', 'Grafana']
        },

        'ai-ml': {
            id: 'ai-ml',
            menuTitle: 'AI & Machine Learning',
            menuIcon: 'fa-solid fa-brain',
            pageTitle: 'AI & Machine Learning Solutions in Nashik | TechnoKraft Services',
            metaDescription: 'Harness artificial intelligence and machine learning with TechnoKraft Services. Predictive modeling, NLP, computer vision, AI chatbots, LLM integration, and intelligent process automation.',
            metaKeywords: 'AI Services Nashik, Machine Learning Solutions, Predictive Analytics, AI Chatbots, LLM Integration, Computer Vision, TechnoKraft Services',
            breadcrumb: 'AI & Machine Learning',
            heading: 'Intelligent AI & Machine Learning Business Solutions',
            badge: 'Artificial Intelligence & Data',
            mainImage: 'images/resource/service-6.jpg',
            mainImageAlt: 'AI and Machine Learning Solutions by TechnoKraft Services',
            introP1: 'Unlock transformative business value, predictive foresight, and hyper-automated processes with TechnoKraft Services\' AI and Machine Learning solutions. We assist enterprises in transforming raw, unstructured data into actionable intelligence and automated decision-making engines.',
            introP2: 'Our data scientists and AI specialists build bespoke machine learning models, natural language processing (NLP) pipelines, computer vision systems, and intelligent LLM-powered virtual assistants. From predictive maintenance in manufacturing to customer churn analysis in retail, our AI solutions drive tangible ROI.',
            feature1: {
                icon: 'images/icons/service-31.png',
                heading: 'Predictive Analytics &',
                headingSpan: 'Forecasting',
                text: 'Machine learning algorithms trained on historical data to anticipate market trends, customer behavior, demand spikes, and equipment failures.'
            },
            feature2: {
                icon: 'images/icons/feature-5.png',
                heading: 'Generative AI &',
                headingSpan: 'Chatbots',
                text: 'Custom LLM integrations, conversational AI agents, document intelligence, and automated omnichannel customer support.'
            },
            processImage: 'images/resource/service-11.jpg',
            processImageAlt: 'TechnoKraft AI Pipeline & Data Modeling',
            processTitle: 'From Raw Data to Actionable Intelligence',
            processText: 'We guide you through every stage of AI adoption: data auditing, pipeline cleansing, feature engineering, model training, validation, and real-time API deployment. We ensure your machine learning models are ethical, explainable, and compliant with enterprise privacy standards.',
            capabilities: [
                'Custom Machine Learning & Deep Learning Model Development',
                'Natural Language Processing (NLP) & Sentiment Analysis',
                'Computer Vision, Object Detection & Optical Character Recognition (OCR)',
                'Custom Generative AI & Retrieval-Augmented Generation (RAG) Systems',
                'Recommendation Engines & Personalization Algorithms',
                'Big Data Engineering & Automated ETL Pipelines'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: 'Actionable Predictive <br>Accuracy' },
                { icon: 'images/icons/service-36.png', text: 'Enterprise-Grade <br>Data Security' },
                { icon: 'images/icons/service-37.png', text: 'Scalable Real-Time <br>Inference' }
            ],
            techStack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'Hugging Face', 'LangChain', 'OpenAI APIs', 'Apache Spark', 'Pandas', 'NumPy']
        },

        'cybersecurity': {
            id: 'cybersecurity',
            menuTitle: 'Cybersecurity & Audits',
            menuIcon: 'fa-solid fa-shield-halved',
            pageTitle: 'Cybersecurity & IT Security Audits Nashik | TechnoKraft Services',
            metaDescription: 'Protect your enterprise digital assets with TechnoKraft Services. Comprehensive vulnerability assessments, penetration testing, compliance audits (ISO, GDPR, HIPAA), and firewall management.',
            metaKeywords: 'Cybersecurity Nashik, Vulnerability Assessment Nashik, Penetration Testing VAPT, ISO 27001 Compliance, Security Audits, TechnoKraft Services',
            breadcrumb: 'Cybersecurity & Audits',
            heading: 'Enterprise Cybersecurity, Audits & Compliance',
            badge: 'Cybersecurity & Risk Management',
            mainImage: 'images/resource/service-7.jpg',
            mainImageAlt: 'Cybersecurity and IT Security Audits by TechnoKraft Services',
            introP1: 'In an era of escalating cyber threats and strict regulatory standards, TechnoKraft Services delivers defense-in-depth cybersecurity solutions that safeguard your enterprise data, infrastructure, and brand reputation. We identify vulnerabilities before malicious actors can exploit them.',
            introP2: 'Our certified security analysts conduct comprehensive penetration testing (VAPT), cloud security posture management, data encryption audits, and compliance gap assessments. We fortify your entire digital perimeter against ransomware, phishing, zero-day vulnerabilities, and data breaches.',
            feature1: {
                icon: 'images/icons/service-32.png',
                heading: 'Vulnerability Assessment &',
                headingSpan: 'VAPT',
                text: 'Systematic black-box and white-box penetration testing of web applications, mobile apps, network endpoints, and cloud infrastructure.'
            },
            feature2: {
                icon: 'images/icons/feature-2.png',
                heading: 'Regulatory Compliance',
                headingSpan: 'Audits',
                text: 'Align your IT policies and security controls with global standards including ISO/IEC 27001, GDPR, HIPAA, SOC 2, and PCI-DSS.'
            },
            processImage: 'images/resource/service-10.jpg',
            processImageAlt: 'TechnoKraft Cybersecurity Audits & SOC Monitoring',
            processTitle: 'Proactive Threat Defense & Incident Readiness',
            processText: 'We implement zero-trust network architectures, multi-factor authentication (MFA), end-to-end payload encryption, and automated Security Information & Event Management (SIEM) monitoring to neutralize threats in real time.',
            capabilities: [
                'Web & Mobile Application Security Testing (VAPT)',
                'Network Vulnerability Assessment & Penetration Audits',
                'Cloud Security Architecture & IAM Configuration',
                'ISO 27001, GDPR, HIPAA, and SOC 2 Compliance Readiness',
                'Incident Response Planning & Disaster Recovery Runbooks',
                'Employee Security Awareness Training & Phishing Simulations'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: 'Certified Ethical <br>Hackers (CEH)' },
                { icon: 'images/icons/service-36.png', text: 'Zero-Trust Security <br>Framework' },
                { icon: 'images/icons/service-37.png', text: '24/7 Threat Monitoring <br>& SOC' }
            ],
            techStack: ['OWASP ZAP', 'Burp Suite', 'Wireshark', 'Metasploit', 'Nessus', 'Kali Linux', 'Cloudflare WAF', 'Snort', 'Splunk', 'OpenVPN', 'SSL/TLS Encryption']
        },

        'it-consulting': {
            id: 'it-consulting',
            menuTitle: 'IT Consulting & Strategy',
            menuIcon: 'fa-solid fa-lightbulb',
            pageTitle: 'IT Consulting & Digital Transformation Strategy Nashik | TechnoKraft',
            metaDescription: 'Strategic IT consulting and technology roadmapping by TechnoKraft Services in Nashik. We modernize enterprise architectures, optimize ROI, streamline digital transformation, and reduce IT costs.',
            metaKeywords: 'IT Consulting Nashik, Technology Strategy Nashik, Digital Transformation, IT Advisory, CTO as a Service, TechnoKraft Services',
            breadcrumb: 'IT Consulting & Strategy',
            heading: 'Strategic IT Advisory & Digital Transformation',
            badge: 'Technology Strategy & Advisory',
            mainImage: 'images/resource/service-4.jpg',
            mainImageAlt: 'IT Consulting and Strategic Technology Advisory by TechnoKraft Services',
            introP1: 'Navigating rapid technological change requires expert advisory that bridges the gap between technology capabilities and strategic business objectives. TechnoKraft Services provides actionable IT consulting services that empower C-suite executives and business leaders to make informed technology investments.',
            introP2: 'We audit existing legacy systems, formulate comprehensive digital transformation roadmaps, recommend optimal modern tech stacks, and optimize IT operational expenditures. Our strategic guidance enables your organization to innovate faster, improve operational resilience, and maximize ROI on every digital initiative.',
            feature1: {
                icon: 'images/icons/service-6.png',
                heading: 'Digital Roadmap &',
                headingSpan: 'Architecture',
                text: 'End-to-end technology blueprinting that aligns your IT infrastructure, software stacks, and cloud strategy with long-term commercial goals.'
            },
            feature2: {
                icon: 'images/icons/feature-3.png',
                heading: 'IT Cost Optimization &',
                headingSpan: 'ROI',
                text: 'In-depth software license audits, infrastructure cost reduction strategies, and vendor evaluation to minimize waste and maximize value.'
            },
            processImage: 'images/resource/service-11.jpg',
            processImageAlt: 'TechnoKraft IT Strategy Planning Session',
            processTitle: 'Guiding Your Digital Evolution with Confidence',
            processText: 'With over a decade of hands-on software development and systems engineering experience in Nashik, TechnoKraft delivers vendor-neutral, pragmatic technology advisory. We do not just present slides—we architect implementable technical solutions that deliver measurable efficiency gains.',
            capabilities: [
                'Enterprise Digital Transformation Strategy & Execution',
                'Legacy Software Modernization & Migration Roadmaps',
                'Tech Stack Evaluation, Selection & Proof of Concept (PoC)',
                'Business Process Automation & Workflow Re-engineering',
                'IT Governance, Risk Management & Compliance (GRC)',
                'Dedicated CTO-as-a-Service & Virtual CIO Advisory'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: '12+ Years Advisory <br>Experience' },
                { icon: 'images/icons/service-36.png', text: 'Vendor-Neutral <br>Best Practices' },
                { icon: 'images/icons/service-37.png', text: 'Proven Digital <br>Transformation ROI' }
            ],
            techStack: ['Agile & Scrum', 'TOGAF', 'ITIL Framework', 'Jira & Confluence', 'Enterprise Architecture', 'Microservices', 'Multi-Cloud Strategy']
        },

        'digital-marketing': {
            id: 'digital-marketing',
            menuTitle: 'Digital Marketing & SEO',
            menuIcon: 'fa-solid fa-chart-line',
            pageTitle: 'Digital Marketing & SEO Services Nashik | Top Ranked | TechnoKraft',
            metaDescription: 'Accelerate online growth with TechnoKraft Services. Data-driven technical SEO, Google Ads PPC management, social media marketing (SMM), and conversion rate optimization in Nashik.',
            metaKeywords: 'Digital Marketing Nashik, SEO Services Nashik, Google Ads Nashik, Social Media Marketing, PPC Management, Content Strategy, TechnoKraft Services',
            breadcrumb: 'Digital Marketing & SEO',
            heading: 'Data-Driven Digital Marketing, SEO & Growth Marketing',
            badge: 'Growth Marketing & Technical SEO',
            mainImage: 'images/resource/service-9.jpg',
            mainImageAlt: 'Digital Marketing and SEO Services by TechnoKraft Services Nashik',
            introP1: 'Expand your digital footprint, dominate search engine rankings, and convert casual visitors into loyal customers with TechnoKraft Services\' results-oriented digital marketing and technical SEO solutions. We combine creative storytelling with rigorous data analytics to maximize your return on ad spend (ROAS).',
            introP2: 'From on-page and technical search engine optimization (SEO) that boosts Google rank for competitive keywords to hyper-targeted Google Ads (PPC), LinkedIn B2B campaigns, and social media marketing, our growth strategies deliver steady, measurable streams of qualified leads.',
            feature1: {
                icon: 'images/icons/service-34.png',
                heading: 'Technical SEO &',
                headingSpan: 'Organic Rank',
                text: 'Comprehensive keyword research, Schema markup, Core Web Vitals optimization, authoritative backlink building, and top-tier Google rankings.'
            },
            feature2: {
                icon: 'images/icons/feature-7.png',
                heading: 'PPC & Performance',
                headingSpan: 'Advertising',
                text: 'High-converting Google Search, Display, and Meta (Facebook/Instagram) ad campaigns engineered for maximum ROI and lower cost-per-lead.'
            },
            processImage: 'images/resource/service-8.jpg',
            processImageAlt: 'TechnoKraft Digital Marketing & Analytics Dashboard',
            processTitle: 'Maximizing Visibility, Traffic & Conversions',
            processText: 'We track every impression, click, and conversion through advanced analytics dashboards. By constantly A/B testing ad copy, landing page layouts, and audience segments, we continuously lower your customer acquisition costs while multiplying lead volume.',
            capabilities: [
                'Technical & On-Page Search Engine Optimization (SEO)',
                'Local SEO & Google Business Profile Optimization (Nashik & Global)',
                'Google Ads (PPC), Search, Shopping & Display Campaigns',
                'Social Media Marketing & Paid Campaigns (LinkedIn, Instagram, Facebook)',
                'Content Marketing, Copywriting & Email Automation',
                'Conversion Rate Optimization (CRO) & User Funnel Analytics'
            ],
            highlights: [
                { icon: 'images/icons/service-35.png', text: 'Top 10 Google <br>Ranking Strategies' },
                { icon: 'images/icons/service-36.png', text: 'Transparent Weekly <br>Analytics & ROI' },
                { icon: 'images/icons/service-37.png', text: 'High Conversion <br>Rate (CRO)' }
            ],
            techStack: ['Google Search Console', 'Google Analytics 4 (GA4)', 'SEMrush', 'Ahrefs', 'Google Tag Manager', 'Meta Ads Manager', 'Google Ads', 'Screaming Frog', 'Hotjar']
        }
    };

    // Aliases lookup table for backwards compatibility and easy hash matching
    const ALIASES = {
        'ui-ux-web-design': 'web-development',
        'ui-ux': 'web-development',
        'web-design': 'web-development',
        'web-app-development': 'web-development',
        'software-development': 'custom-software',
        'custom-software-dev': 'custom-software',
        'mobile-app': 'mobile-development',
        'mobile-app-development': 'mobile-development',
        'mobile-apps': 'mobile-development',
        'cloud': 'cloud-services',
        'cloud-devops': 'cloud-services',
        'cloud-and-devops': 'cloud-services',
        'ai': 'ai-ml',
        'ml': 'ai-ml',
        'ai-machine-learning': 'ai-ml',
        'artificial-intelligence': 'ai-ml',
        'cyber-security': 'cybersecurity',
        'security-compliance': 'cybersecurity',
        'security-audits': 'cybersecurity',
        'technology-consulting': 'it-consulting',
        'it-strategy': 'it-consulting',
        'consulting': 'it-consulting',
        'social-media-marketing': 'digital-marketing',
        'seo': 'digital-marketing',
        'delivery-services': 'cloud-services'
    };

    /**
     * Resolve a service key or alias to a valid service data object
     */
    function resolveServiceKey(key) {
        if (!key) return 'custom-software';
        const cleaned = key.toString().toLowerCase().replace(/^#/, '').replace(/^\?service=/, '').trim();
        if (SERVICES_DATA[cleaned]) return cleaned;
        if (ALIASES[cleaned]) return ALIASES[cleaned];
        return 'custom-software';
    }

    /**
     * Render the selected service dynamically
     */
    function renderService(serviceKey, options) {
        const opts = Object.assign({ scrollToContent: false, updateHistory: true }, options);
        const resolvedKey = resolveServiceKey(serviceKey);
        const data = SERVICES_DATA[resolvedKey];
        if (!data) return;

        // 1. Update Document Metadata (SEO)
        document.title = data.pageTitle;
        $('meta[name="description"]').attr('content', data.metaDescription);
        if ($('meta[name="keywords"]').length) {
            $('meta[name="keywords"]').attr('content', data.metaKeywords);
        }
        $('meta[property="og:title"]').attr('content', data.pageTitle);
        $('meta[property="og:description"]').attr('content', data.metaDescription);
        $('meta[property="twitter:title"]').attr('content', data.pageTitle);
        $('meta[property="twitter:description"]').attr('content', data.metaDescription);

        // 2. Update Hero Page Title & Breadcrumb
        $('.page-title h2').text(data.breadcrumb);
        $('.page-title .bread-crumb li:last-child').text(data.breadcrumb);

        // 3. Update Category Sidebar Active Class
        $('.category-widget .cat-list li').removeClass('active');
        $(`.category-widget .cat-list li[data-service="${resolvedKey}"]`).addClass('active');

        // 4. Smooth Content Transition
        const $contentSide = $('.service-detail .inner-box');
        $contentSide.css({ opacity: 0.2, transition: 'opacity 0.25s ease' });

        setTimeout(function () {
            // Main Image (if present)
            if ($('#service-main-image').length) {
                $('#service-main-image').attr('src', data.mainImage).attr('alt', data.mainImageAlt);
            }

            // Main Title & Paragraphs
            $('#service-main-title').text(data.heading);
            $('#service-intro-p1').text(data.introP1);
            $('#service-intro-p2').text(data.introP2);

            // Feature 1
            $('#feature-1-icon').attr('src', data.feature1.icon).attr('alt', data.feature1.heading);
            $('#feature-1-heading').html(`${data.feature1.heading} <span>${data.feature1.headingSpan || ''}</span>`);
            $('#feature-1-text').text(data.feature1.text);

            // Feature 2
            $('#feature-2-icon').attr('src', data.feature2.icon).attr('alt', data.feature2.heading);
            $('#feature-2-heading').html(`${data.feature2.heading} <span>${data.feature2.headingSpan || ''}</span>`);
            $('#feature-2-text').text(data.feature2.text);

            // Process Section
            $('#service-process-image').attr('src', data.processImage).attr('alt', data.processImageAlt);
            $('#service-process-title').text(data.processTitle);
            $('#service-process-text').text(data.processText);

            // Capabilities Checklist
            if ($('#service-capabilities-list').length) {
                let capsHtml = '';
                data.capabilities.forEach(function (cap) {
                    capsHtml += `<li><i class="fa-solid fa-circle-check text-primary me-2"></i> ${cap}</li>`;
                });
                $('#service-capabilities-list').html(capsHtml);
            }

            // Tech Stack Badges
            if ($('#service-tech-stack').length) {
                let techHtml = '';
                data.techStack.forEach(function (tech) {
                    techHtml += `<span class="badge bg-light text-dark border px-3 py-2 me-2 mb-2"><i class="fa-solid fa-code me-1 text-primary"></i> ${tech}</span>`;
                });
                $('#service-tech-stack').html(techHtml);
            }

            // Highlights (3 Bottom Cards)
            if (data.highlights && data.highlights.length >= 3) {
                for (let i = 0; i < 3; i++) {
                    $(`#highlight-icon-${i + 1}`).attr('src', data.highlights[i].icon);
                    $(`#highlight-text-${i + 1}`).html(data.highlights[i].text);
                }
            }

            // Restore Opacity
            $contentSide.css({ opacity: 1 });
        }, 150);

        // 5. Update Browser History / URL Hash without reloading
        if (opts.updateHistory && window.location.hash !== '#' + resolvedKey) {
            if (history.pushState) {
                history.pushState(null, null, '#' + resolvedKey);
            } else {
                window.location.hash = '#' + resolvedKey;
            }
        }

        // 6. Smooth Scroll if requested (e.g., mobile click)
        if (opts.scrollToContent && $(window).width() < 992) {
            $('html, body').animate({
                scrollTop: $('.service-detail').offset().top - 100
            }, 500);
        }
    }

    /**
     * Parse initial service from URL Hash or Query Parameter
     */
    function getInitialServiceKey() {
        // 1. Check URL Hash
        if (window.location.hash) {
            return window.location.hash.substring(1);
        }
        // 2. Check Query Param ?service=...
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('service')) {
            return urlParams.get('service');
        }
        return 'custom-software';
    }

    /**
     * Initialize on DOM Ready
     */
    $(document).ready(function () {
        // Only run on service-detail page
        if (!$('.service-detail').length) return;

        const initialKey = getInitialServiceKey();
        renderService(initialKey, { scrollToContent: false, updateHistory: false });

        // Handle category sidebar click
        $('.category-widget .cat-list').on('click', 'a', function (e) {
            e.preventDefault();
            const serviceKey = $(this).attr('data-service') || $(this).attr('href').replace('#', '');
            renderService(serviceKey, { scrollToContent: true, updateHistory: true });
        });

        // Handle browser Back / Forward navigation
        $(window).on('hashchange', function () {
            const hashKey = window.location.hash.substring(1);
            if (hashKey) {
                renderService(hashKey, { scrollToContent: false, updateHistory: false });
            }
        });
    });

})(window.jQuery);

let Content = {
    navItems: [
        {
            text: "Home",
            link: "/#",
            internal: true
        },
        {
            text: "Blog",
            link: "https://medium.com/@brandon.r.caton"
        },
        {
            text: "Resume",
            link: "/resume",
            internal: true
        },
    ],
    landing: {
        greeting: "Hello 👋",
        name: "I'm Brandon",
        introParagraph: "I'm a New Jersey/NYC based Software Engineer. My expertise is in microservice development and architecture in public and private cloud platforms.",
        buttonText: "View my resume"
    },
    technologies: {
        Languages: [
            {
                image: "javascript-icon.png",
                name: "JS"
            },
            {
                image: "csharp-icon.png",
                name: "C#"
            },
            {
                image: "go-icon.png",
                name: "Go"
            },
            {
                image: "bash-icon.png",
                name: "Bash"
            },
            {
                image: "html-icon.png",
                name: "HTML"
            },
            {
                image: "css-icon.png",
                name: "CSS"
            }
        ],
        Frameworks: [
            {
                image: "node-icon.png",
                name: "Node"
            },
            {
                image: "dotnet-icon.png",
                name: ".Net Core"
            },
            {
                image: "react-icon.png",
                name: "React"
            }
        ],
        Technologies: [
            {
                image: "git-icon.png",
                name: "Git"
            },
            {
                image: "docker-icon.png",
                name: "Docker"
            },
            {
                image: "jenkins-icon.png",
                name: "Jenkins"
            },
            {
                image: "gcp-icon.png",
                name: "GCP"
            },
            {
                image: "helm-icon.png",
                name: "Helm"
            },
            {
                image: "terraform-icon.png",
                name: "Terraform"
            },
            {
                image: "kubernetes-icon.png",
                name: "Kubernetes"
            },
        ]
    },
    workHistory: [
        {
            company: "UPS",
            position: "DEVOPS ENGINEER",
            dates: "JANURARY 2019 - CURRENT",
            image: "ups-logo.png",
            description: [
                "Developed web portal to automate infrastructure provisioning",
                "Spearheaded the CI/CD pipeline design and implementation to cloud platforms",
                "Educated 30+ development teams in microservice development patterns"
            ]
        },
        {
            company: "New Jersey Institute of Technology",
            position: "SOFTWARE DEVELOPER",
            dates: "SEPTEMBER 2017 - APRIL 2019",
            image: "njit-logo.png",
            description: [
                "Developed grade report and user management pages",
                "Redesigned and built new REST endpoints",
                "Collaborated with web design team members to produce optimal site workflows"
            ]
        },
        {
            company: "Atlantic Health System",
            position: "IT TECHNICIAN (INTERN)",
            dates: "JANUARY 2016 - MAY 2016",
            image: "atlantic-health-logo.png",
            description: [
                "Wrote script to include location when retrieving hospital device information",
                "Diagnosed and resolved errors in medical software"
            ]
        },
    ],
    email: "brandon.r.caton@gmail.com"
}


export default Content;
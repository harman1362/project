interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription: string;
  features: string[];
  technologies: string[];
  demoLink: string;
  githubLink: string;
  role?: string;
  duration?: string;
  // Add other properties as needed
}

export const projects = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    title: "Dynamic Dashboard for Analytics",
    description: "A comprehensive analytics dashboard with reusable Angular components, real-time data visualization, and NgRx state management.",
    tags: ["Angular", "D3.js", "NgRx"],
    longDescription: "Built a sophisticated analytics dashboard that processes and visualizes complex data in real-time. The application features interactive charts, customizable widgets, and advanced filtering capabilities. Users can monitor key metrics, analyze trends, and generate detailed reports.",
    role: "Lead Frontend Developer",
    duration: "6 months",
    features: [
      "Real-time data visualization with D3.js",
      "Customizable dashboard layouts",
      "Advanced filtering and search capabilities",
      "Data export functionality",
      "User authentication and role-based access",
      "Interactive charts and graphs",
      "Responsive design for all devices",
      "Dark mode support"
    ],
    technologies: ["Angular", "D3.js", "NgRx", "TypeScript", "RxJS", "Angular Material", "SCSS", "Jest"],
    demoLink: "https://demo-link.com",
    githubLink: "https://github.com/yourusername/project"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized user experiences.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    longDescription: "Developed a full-stack e-commerce solution that handles thousands of daily transactions. The platform includes advanced features like real-time inventory tracking, secure payment processing, and AI-powered product recommendations.",
    role: "Full Stack Developer",
    duration: "8 months",
    features: [
      "Real-time inventory management with WebSocket",
      "Secure payment gateway integration (Stripe)",
      "User authentication with JWT and OAuth",
      "Personalized product recommendations",
      "Admin dashboard with analytics",
      "Order tracking and management system",
      "Product search with Elasticsearch",
      "Mobile-responsive design"
    ],
    technologies: [
      "React", "Redux", "Node.js", 
      "Express", "MongoDB", "Stripe", 
      "AWS S3", "Redis", "Docker",
      "Elasticsearch", "Socket.IO"
    ],
    demoLink: "https://demo-store.com",
    githubLink: "https://github.com/yourusername/ecommerce"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    title: "Real Estate Management System",
    description: "A comprehensive real estate platform featuring property listings, virtual tours, and an advanced booking system.",
    tags: ["Next.js", "Python", "PostgreSQL", "GCP"],
    longDescription: "Built a feature-rich real estate management system that connects property owners with potential buyers/renters. The platform includes virtual property tours, automated scheduling, and advanced search functionality.",
    role: "Lead Full Stack Developer",
    duration: "10 months",
    features: [
      "Advanced property search with filters",
      "Virtual 3D property tours",
      "Automated viewing scheduling system",
      "Real-time chat with agents",
      "Document verification system",
      "Property comparison tool",
      "Mortgage calculator",
      "Analytics dashboard for agents",
      "Email notification system",
      "Review and rating system"
    ],
    technologies: [
      "Next.js", "TypeScript", "Python",
      "FastAPI", "PostgreSQL", "Redis",
      "Google Cloud", "Docker", "Kubernetes",
      "WebRTC", "SendGrid", "Matterport API"
    ],
    demoLink: "https://realestate-demo.com",
    githubLink: "https://github.com/yourusername/realestate"
  },
  // ... other projects
];
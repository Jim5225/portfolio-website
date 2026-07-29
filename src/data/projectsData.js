import projectHospital from '../../assets/images/project-hospital.png';
import projectAgency from '../../assets/images/project-agency.jpg';
import projectTutor from '../../assets/images/project-tutor.jpg';
import projectNawabiana from '../../assets/images/project-nawabiana.jpg';
import projectRestaurant from '../../assets/images/project-restaurant.png';
import projectClothing from '../../assets/images/project-clothing.png';
import projectClinic from '../../assets/images/project-clinic.png';
import projectMetaDashboard from '../../assets/images/project-meta-dashboard.png';

export const projectsData = [
  {
    id: 9,
    title: "BengalDrop Food Delivery",
    category: "Web Development",
    tags: ["Next.js", "Zustand", "Tailwind"],
    target: "Restaurants & Cloud Kitchens",
    problem: "Outdated and slow food ordering interfaces that result in high cart abandonment.",
    solution: "A modern, high-conversion food ordering platform featuring a custom vibrant design system, global cart state management, and real-time checkout flows.",
    result: "Premium Dribbble Design Match",
    features: [
      "Zustand Cart State",
      "Dynamic Menu Layout",
      "Vibrant Brand System",
      "Checkout Flow UI",
      "Responsive Grid",
      "Modern Next.js Architecture"
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Zustand"],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 1,
    title: "MediCare Patient Portal",
    category: "Web Development",
    tags: ["HTML/CSS/JS", "Firebase", "Responsive UI"],
    target: "Hospitals & Clinics",
    problem: "Patients struggling to book appointments or download test reports remotely.",
    solution: "A premium, fully functional patient portal with Firebase backend integration, enabling live appointment booking and a secure 'Link System' architecture for downloading medical reports directly from local servers.",
    result: "Seamless Patient Experience & Cost-Effective Cloud Storage",
    features: [
      "Patient Dashboard",
      "Live Appointment Booking",
      "Firebase Integration",
      "Report Download System",
      "Live Chat Widget",
      "Responsive Glassmorphism UI"
    ],
    tools: ["HTML5", "Vanilla CSS", "JavaScript ES6", "Firebase Firestore"],
    image: projectHospital,
    liveUrl: "https://medicare-hospital-portal.vercel.app/",
    githubUrl: "https://github.com/Jim5225/medicare-hospital-portal",
    featured: true
  },
  {
    id: 2,
    title: "Vanguard Digital Agency",
    category: "Web Development",
    tags: ["Frontend", "Animation", "Modern UI"],
    target: "Creative Agencies & Tech Firms",
    problem: "Outdated agency websites failing to capture leads or showcase portfolios dynamically.",
    solution: "Designed and developed a sleek, modern digital agency landing page with dark mode aesthetics, interactive scroll animations, and a compelling service showcase.",
    result: "High-Converting Premium Brand Presence",
    features: [
      "Dark Mode Aesthetics",
      "Scroll Animations",
      "Service Showcase",
      "Interactive Hover Effects",
      "Client Testimonials",
      "Contact Form"
    ],
    tools: ["HTML5", "CSS3", "JavaScript"],
    image: projectAgency,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "Fluency English Tutor App",
    category: "Web Development",
    tags: ["E-Learning", "Dashboard", "UI/UX"],
    target: "EdTech & Independent Tutors",
    problem: "Scattered tools for video calling, scheduling, and progress tracking for language learners.",
    solution: "Built a centralized online learning platform UI featuring a student dashboard, live tutoring session scheduler, and visual progress charts.",
    result: "Unified Learning Experience",
    features: [
      "Student Dashboard",
      "Session Booking UI",
      "Progress Tracking",
      "Friendly Branding",
      "Video Call Interface",
      "Responsive Layout"
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Chart.js"],
    image: projectTutor,
    liveUrl: "https://english-tutor-app-nu.vercel.app/",
    githubUrl: null,
    featured: true
  },
  {
    id: 4,
    title: "Nawabiana Fine Dining",
    category: "Web Development",
    tags: ["Hospitality", "Luxury UI", "E-Commerce"],
    target: "Luxury Restaurants",
    problem: "Restaurants lacking a premium online presence that matches their physical dining experience.",
    solution: "Created an elegant, dark-themed luxury restaurant website with high-end typography, dynamic menu showcase, and a table reservation system.",
    result: "Premium Digital Dining Experience & Increased Reservations",
    features: [
      "Luxury Dark Theme",
      "Dynamic Menu Showcase",
      "Table Reservation Form",
      "High-end Typography",
      "Image Galleries",
      "Mobile Optimized"
    ],
    tools: ["HTML5", "CSS", "JavaScript"],
    image: projectNawabiana,
    liveUrl: "https://restaurant-nawabiana.vercel.app/",
    githubUrl: null,
    featured: true
  },
  {
    id: 5,
    title: "AI Restaurant Assistant & Reservation Bot",
    category: "AI Automation",
    tags: ["WhatsApp API", "n8n", "OpenAI"],
    target: "Restaurants & Hospitality",
    problem: "Missed phone reservations and manual order tracking during peak dining hours.",
    solution: "Automated AI table booking via WhatsApp, menu recommendation engine, order tracking, and Google review collection.",
    result: "+40% Table Bookings & 4.9★ Google Review Growth",
    features: [
      "AI Table Booking",
      "WhatsApp Integration",
      "Menu Recommendation",
      "Order Tracking",
      "FAQ Bot",
      "Google Review Collection"
    ],
    tools: ["n8n", "OpenAI/Gemini", "WhatsApp API", "Google Sheets", "Gmail"],
    image: projectRestaurant,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  },
  {
    id: 6,
    title: "AI Clothing Brand E-Commerce Automation",
    category: "AI Automation",
    tags: ["Shopify", "Make.com", "OpenAI"],
    target: "Fashion & Apparel Brands",
    problem: "High abandoned cart rate and delayed customer support inquiries.",
    solution: "Built end-to-end order processing, inventory alert automation, Facebook Messenger customer support AI, and abandoned cart email sequences.",
    result: "-35% Cart Abandonment & 3.8x Ad ROAS",
    features: [
      "Order Automation",
      "Inventory Alerts",
      "Customer Support AI",
      "FB Messenger Bot",
      "Email Automation",
      "Abandoned Cart Reminder"
    ],
    tools: ["Make.com", "Shopify", "OpenAI", "Gmail", "Meta Ads API"],
    image: projectClothing,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  },
  {
    id: 7,
    title: "AI Clinic & Doctor Assistant System",
    category: "AI Automation",
    tags: ["Healthcare", "WhatsApp", "Google Calendar"],
    target: "Medical Clinics & Private Practices",
    problem: "High patient no-show rates and cluttered phone lines for appointment booking.",
    solution: "Deployed 24/7 WhatsApp AI receptionist for appointment booking, automated SMS/WhatsApp reminders, prescription follow-ups, and Google Calendar sync.",
    result: "82% Reduction in No-Shows & 15+ Hours Saved/Week",
    features: [
      "Appointment Booking",
      "Patient Reminders",
      "FAQ AI Bot",
      "Prescription Reminders",
      "WhatsApp Chatbot",
      "Google Calendar Sync"
    ],
    tools: ["n8n", "WhatsApp API", "Google Calendar API", "OpenAI"],
    image: projectClinic,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  },
  {
    id: 8,
    title: "Meta Ads & Performance Analytics Dashboard",
    category: "Marketing & SEO",
    tags: ["Meta Ads", "Analytics", "ROAS Tracking"],
    target: "E-Commerce & B2B Brands",
    problem: "Manual spreadsheet reporting and lack of real-time ad performance insights.",
    solution: "Created live campaign performance dashboard tracking ROAS, CPC, lead pipeline, and automated AI optimization suggestions.",
    result: "4.8x ROAS & Instant Campaign Optimization Alerts",
    features: [
      "Campaign Dashboard",
      "ROAS & CPC Tracking",
      "Lead Funnel Analytics",
      "Interactive Charts",
      "AI Insights Engine"
    ],
    tools: ["Meta Ads API", "Google Analytics 4", "React", "Looker Studio"],
    image: projectMetaDashboard,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  }
];

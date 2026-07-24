import projectHospital from '../../assets/images/project-hospital.png';
import projectAgency from '../../assets/images/project-agency.jpg';
import projectTutor from '../../assets/images/project-tutor.jpg';
import projectNawabiana from '../../assets/images/project-nawabiana.jpg';

export const projectsData = [
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
  }
];

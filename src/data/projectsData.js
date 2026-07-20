import projectRestaurant from '../../assets/images/project-restaurant.png';
import projectClothing from '../../assets/images/project-clothing.png';
import projectClinic from '../../assets/images/project-clinic.png';
import projectMetaDashboard from '../../assets/images/project-meta-dashboard.png';
import projectEmail from '../../assets/images/project-email.png';
import projectSocial from '../../assets/images/project-social.png';

export const projectsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  },
  {
    id: 5,
    title: "Email Marketing & AI Lead Nurturing Automation",
    category: "Marketing & SEO",
    tags: ["Email Automation", "AI Copywriting", "Lead Scoring"],
    target: "SaaS & B2B Agencies",
    problem: "Cold leads dropping off without structured follow-ups.",
    solution: "Designed automated welcome sequences, AI-driven lead scoring, dynamic newsletter generator, and automated AI email copy tailored to prospect behavior.",
    result: "+64% Email Open Rate & 3.2x Booking Conversion",
    features: [
      "Welcome Email Flow",
      "Intelligent Follow-ups",
      "AI Lead Scoring",
      "Newsletter Automation",
      "AI Email Copy Generation"
    ],
    tools: ["Make.com", "ActiveCampaign", "Klaviyo", "OpenAI API"],
    image: projectEmail,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  },
  {
    id: 6,
    title: "Multi-Channel Social Media Automation Engine",
    category: "AI Automation",
    tags: ["Social Media", "Content Engine", "Cross-Posting"],
    target: "Creators, Brands & Marketing Agencies",
    problem: "Spending 10+ hours per week manually formatting and posting content across multiple social platforms.",
    solution: "Built single-post automation engine: publish once, automatically format and distribute across Facebook, LinkedIn, Instagram, Threads, and X.",
    result: "1 Post ➔ 5 Platforms Auto-Syndicated in Seconds",
    features: [
      "Single-Input Publish",
      "Auto-Distribution to 5 Platforms",
      "AI Platform Adaptation",
      "Hashtag Optimization",
      "Analytics Tracking"
    ],
    tools: ["n8n", "LinkedIn API", "Meta Graph API", "X API", "OpenAI"],
    image: projectSocial,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  }
];

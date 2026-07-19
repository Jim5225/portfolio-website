import projectMarketing from '../../assets/images/project-marketing.webp';
import projectLandingPage from '../../assets/images/project-landing-page.webp';
import projectSeoDashboard from '../../assets/images/project-seo-dashboard.webp';

export const projectsData = [
  {
    id: 1,
    title: "AI Lead Generation System for B2B SaaS",
    category: "Marketing & SEO",
    tags: ["Meta Ads", "AI Automation", "CRM"],
    problem: "Client spent $2k/month on ads with 0.8% conversion rate.",
    solution: "Built automated lead qualification funnel + Meta Ads retargeting system with AI scoring.",
    result: "Reduced CPL by 47%. Conversion rate grew to 3.2% in 6 weeks.",
    tools: ["Make.com", "Meta Ads Manager", "ActiveCampaign"],
    image: projectMarketing,
    liveUrl: "#",
    githubUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Conversion Funnel Rebuild",
    category: "Web Development",
    tags: ["React", "Tailwind", "Supabase"],
    problem: "Shopify store had 94% cart abandonment rate.",
    solution: "Redesigned checkout UX, added email automation, exit-intent popups, and abandoned cart sequences.",
    result: "Cart abandonment dropped to 71%. Revenue up 28% in 30 days.",
    tools: ["React", "Tailwind CSS", "Klaviyo"],
    image: projectLandingPage,
    liveUrl: "#",
    githubUrl: "https://github.com/Jim5225",
    featured: true
  },
  {
    id: 3,
    title: "Automated Client Reporting Dashboard",
    category: "AI Automation",
    tags: ["n8n", "Google Sheets", "Zapier"],
    problem: "Agency spent 12 hours/week manually compiling client reports.",
    solution: "Built automated multi-source data pipeline connecting Meta Ads, GA4, and Google Sheets with auto-email delivery.",
    result: "Report generation time: 12 hours → 8 minutes. Fully automated.",
    tools: ["n8n", "Google Sheets API", "GA4", "Meta Ads API"],
    image: projectSeoDashboard,
    liveUrl: "#",
    githubUrl: null,
    featured: false
  }
];

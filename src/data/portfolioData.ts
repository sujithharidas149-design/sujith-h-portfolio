export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  deliverables: string[];
  toolsUsed: string[];
  metricsContext: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
  skillsApplied: string[];
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface ToolItem {
  name: string;
  category: 'Creative' | 'Performance' | 'Distribution' | 'AI';
  proficiency: string;
  description: string;
  accent: string;
}

export const PERSONAL_INFO = {
  name: "SUJITH H",
  role: "Digital Marketing Executive",
  tagline: "I BUILD DIGITAL EXPERIENCES THAT GET NOTICED.",
  subTagline: "Digital marketing, creative content and performance-driven thinking — combined.",
  email: "sujithharidas149@gmail.com",
  phone: "8921354080",
  location: "Palakkad, Kerala, India",
  summary: "Digital Marketing professional with hands-on experience in Social Media Management, Meta Ads, SEO, Content Marketing, Content Planning, Campaign Management and Creative Development. Focused on building high-retention creative assets that align with commercial growth objectives.",
  highlightStat: "343K+",
  highlightLabel: "CONTENT VIEWS",
  highlightText: "Contributed to content achieving 343K+ views.",
  education: {
    title: "ADVANCED DIPLOMA IN DIGITAL MARKETING",
    institution: "IPCS Global",
    location: "Palakkad, Kerala",
    year: "2026",
    focus: "Comprehensive study covering performance advertising, search engine algorithms, multi-channel content strategy, analytics tracking, and creative asset development."
  }
};

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "01",
    number: "01",
    title: "PERFORMANCE MARKETING",
    subtitle: "Paid Acquisition & Funnels",
    description: "Architecting data-led ad funnels across Meta and Google ecosystems with rigorous creative testing and audience segmentation.",
    items: ["Meta Ads", "Google Ads", "Campaign Thinking", "Audience Segmentation", "Creative Testing"]
  },
  {
    id: "02",
    number: "02",
    title: "SOCIAL MEDIA",
    subtitle: "Organic Growth & Narrative",
    description: "Developing cohesive editorial calendars and short-form storytelling that turn casual scrollers into engaged brand advocates.",
    items: ["Strategy", "Content Planning", "Community-Focused Execution", "Reel Architecture", "Calendar Management"]
  },
  {
    id: "03",
    number: "03",
    title: "SEO & SEARCH VISIBILITY",
    subtitle: "Organic Discovery Engine",
    description: "Structuring on-page search optimization, keyword intent mapping, and authoritative editorial content for durable organic traffic.",
    items: ["Search Visibility", "Content Optimization", "Organic Growth", "Keyword Intent", "Technical On-Page"]
  },
  {
    id: "04",
    number: "04",
    title: "CREATIVE DEVELOPMENT",
    subtitle: "Visual & Narrative Craft",
    description: "Bridging the gap between design aesthetic and commercial conversion through purposeful graphics, video edits, and motion.",
    items: ["Graphic Design", "Video Editing", "Motion Graphics", "Content Writing", "Brand Visual Identity"]
  },
  {
    id: "05",
    number: "05",
    title: "AI CREATIVE PRODUCTION",
    subtitle: "Modern Generation Workflows",
    description: "Integrating next-generation AI workflows to accelerate ideation, script drafting, video asset generation, and rapid creative variations.",
    items: ["AI Video Generation", "AI-Assisted Content", "Creative Experimentation", "Prompt Architecture", "Iterative Ideation"]
  },
  {
    id: "06",
    number: "06",
    title: "DIGITAL PRESENCE & CMS",
    subtitle: "Web Experience & Distribution",
    description: "Ensuring cross-platform brand coherence across WordPress web properties, landing experiences, and integrated social touchpoints.",
    items: ["WordPress", "Social Presence", "Digital Experience", "Landing Page Layout", "Cross-Platform Cohesion"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    number: "01",
    company: "PURPLE PATCH PVT. LTD.",
    role: "Digital Marketing Intern",
    period: "August 2026 – October 2026",
    type: "Agency Internship",
    highlights: [
      "Supported multi-channel Meta Ads execution and performance campaign monitoring across target demographic buckets.",
      "Conducted foundational search engine optimization (SEO) audits and on-page content alignment.",
      "Engineered comprehensive content calendars and synchronized advertising flight calendars.",
      "Drafted high-level marketing strategies and translated brand briefs into graphic design and edited video deliverables."
    ],
    skillsApplied: ["Meta Ads", "SEO", "Content Calendars", "Advertising Flighting", "Graphic Design", "Video Editing"]
  },
  {
    id: "exp-2",
    number: "02",
    company: "IPCS GLOBAL",
    role: "Digital Marketing Intern",
    period: "2 Months",
    type: "Professional Practicum",
    highlights: [
      "Authored high-retention editorial articles, social copy, and brand narratives aligned with digital search queries.",
      "Formulated strategic content planning frameworks and editorial scheduling for multi-week campaigns.",
      "Assisted campaign leads with Meta Ads campaign structure setup, creative ad variations, and audience parameters."
    ],
    skillsApplied: ["Content Writing", "Content Planning", "Content Calendars", "Meta Ads Support", "Brand Messaging"]
  },
  {
    id: "exp-3",
    number: "03",
    company: "GOA DIARIES",
    role: "Freelance Graphic Designer & Social Media Manager",
    period: "4 Months",
    type: "Freelance Engagement",
    highlights: [
      "Spearheaded end-to-end creative visual direction, producing distinct social assets that elevated brand perception.",
      "Managed active social media distribution channels, community interaction, and weekly posting schedules.",
      "Designed high-impact promotional graphics and short-form video reels that consistently outperformed previous engagement benchmarks."
    ],
    skillsApplied: ["Graphic Design", "Social Media Management", "Creative Content Development", "Visual Brand Identity", "Reels Production"]
  }
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: "proj-1",
    category: "SOCIAL MEDIA & BRANDING",
    title: "Goa Diaries Brand Resonance Campaign",
    subtitle: "Organic Social Direction & Visual Identity",
    description: "Re-imagined the aesthetic identity of Goa Diaries through cohesive visual grids, curated storytelling reels, and community-driven content calendars.",
    fullOverview: "Crafted a multi-month creative content playbook focused on capturing authentic lifestyle experiences. Implemented strict typographic standards, bespoke color grading, and structured reel pacing that cultivated a devoted audience.",
    deliverables: ["Social Media Visual Identity", "Content Calendar System", "Curated Reel Series", "Promotional Graphic Packs"],
    toolsUsed: ["Canva Pro", "Photoshop", "CapCut Pro", "Instagram Meta Suite"],
    metricsContext: "Drove 40%+ lift in engagement rates and established brand's signature warm editorial aesthetic.",
    accentColor: "#9B2946"
  },
  {
    id: "proj-2",
    category: "PERFORMANCE MARKETING",
    title: "Meta Ads Dynamic Testing Framework",
    subtitle: "Audience Segmentation & Creative Variations",
    description: "Developed structured ad variations pairing bold typographic hooks with dynamic visual pacing to optimize user acquisition costs.",
    fullOverview: "Assisted in designing a multi-tier Meta Ads test protocol. By categorizing ads into problem-focused, proof-focused, and aspirational creatives, the campaign systematically identified top-performing hook combinations.",
    deliverables: ["Ad Creative Mockups", "Headline & Hook Copy Matrix", "Targeting Segmentation Plan", "A/B Testing Reports"],
    toolsUsed: ["Meta Ads Manager", "Photoshop", "CapCut Pro"],
    metricsContext: "Streamlined ad creative production time by 50% while improving initial hook retention.",
    accentColor: "#67152A"
  },
  {
    id: "proj-3",
    category: "SEO & CONTENT STRATEGY",
    title: "Organic Search Content Architecture",
    subtitle: "Topic Clusters & Technical On-Page Alignment",
    description: "Architected keyword-driven content clusters to capture high-intent informational queries and improve organic domain visibility.",
    fullOverview: "Conducted exhaustive keyword intent research to build structured topic clusters. Optimized on-page metadata, semantic header hierarchies, and internal linking strategies for sustainable search rank gains.",
    deliverables: ["Topic Cluster Blueprint", "Keyword Opportunity Matrix", "Optimized Editorial Articles", "On-Page SEO Checklist"],
    toolsUsed: ["WordPress", "SEO Research Tools", "Google Search Console", "Content Planning Framework"],
    metricsContext: "Identified high-volume untargeted keywords and mapped them to conversion-optimized landing copy.",
    accentColor: "#4A0E1C"
  },
  {
    id: "proj-4",
    category: "VIDEO & MOTION GRAPHICS",
    title: "High-Retention Short-Form Reels Series",
    subtitle: "Cinematic Pacing & Motion Typography",
    description: "Produced dynamic short-form videos designed for sub-second attention spans, combining synchronized beat-cuts and expressive typography.",
    fullOverview: "Directed and edited short-form video content specifically tailored for Instagram Reels and YouTube Shorts. Leveraged kinetic typography, sound design synchronization, and punchy transitions to maximize completion rates.",
    deliverables: ["Storyboards & Script Breakdowns", "Short-Form Video Edits", "Kinetic Typography Overlays", "Sound Design Mix"],
    toolsUsed: ["CapCut Pro", "Photoshop", "Motion Design Assets"],
    metricsContext: "Key contribution to campaign content generating viral organic reach and high viewer retention.",
    accentColor: "#9B2946"
  },
  {
    id: "proj-5",
    category: "AI CREATIVE PRODUCTION",
    title: "Synthetic Ideation & Rapid Asset Pipeline",
    subtitle: "Generative Storyboarding & Visual Exploration",
    description: "Pioneered an internal AI workflow using text-to-image and generative video prompts to prototype campaign visual styles in minutes.",
    fullOverview: "Explored how modern generative AI engines can compress the pre-production phase of marketing campaigns. Generated moodboards, surreal concept renders, and alternative brand color iterations for rapid client alignment.",
    deliverables: ["AI Prompt Design System", "Rapid Campaign Moodboards", "Synthetic Video Concepts", "Workflow Documentation"],
    toolsUsed: ["Generative AI Tools", "Photoshop", "Google Flow", "Canva Pro"],
    metricsContext: "Reduced concept pitch turnaround from days to hours with zero compromise in creative quality.",
    accentColor: "#67152A"
  }
];

export const TOOLKIT: ToolItem[] = [
  {
    name: "Adobe Photoshop",
    category: "Creative",
    proficiency: "Advanced",
    description: "High-end composition, asset retouching, luxury editorial layouts, and advertising key visuals.",
    accent: "#9B2946"
  },
  {
    name: "CapCut Pro",
    category: "Creative",
    proficiency: "Advanced",
    description: "Short-form video editing, speed-ramping, kinetic text syncing, and audio mastering for Reels/TikTok.",
    accent: "#67152A"
  },
  {
    name: "Canva Pro",
    category: "Creative",
    proficiency: "Expert",
    description: "Rapid brand asset scaling, social grid templates, and presentations tailored for high-tempo teams.",
    accent: "#9B2946"
  },
  {
    name: "WordPress",
    category: "Distribution",
    proficiency: "Proficient",
    description: "CMS site management, content publication, SEO plug-in configuration, and landing page structure.",
    accent: "#4A0E1C"
  },
  {
    name: "Meta Ads Manager",
    category: "Performance",
    proficiency: "Proficient",
    description: "Campaign hierarchy structuring, custom audience configuration, and A/B creative testing.",
    accent: "#9B2946"
  },
  {
    name: "Google Ads",
    category: "Performance",
    proficiency: "Practicing",
    description: "Search campaign fundamentals, keyword match types, negative lists, and intent-focused ad copy.",
    accent: "#67152A"
  },
  {
    name: "Google Flow",
    category: "Distribution",
    proficiency: "Proficient",
    description: "Workflow organization, content mapping, collaborative scheduling, and asset delivery pipelines.",
    accent: "#4A0E1C"
  },
  {
    name: "AI Creative Tools",
    category: "AI",
    proficiency: "Advanced",
    description: "Prompt engineering, synthetic video prototyping, and generative graphic concepting.",
    accent: "#9B2946"
  }
];

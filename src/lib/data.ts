// src/lib/data.ts
// Central data store — edit this file to update all portfolio content

export const profile = {
  name: 'Mai Xuân Duy',
  title: 'Software Engineer',
  subtitle: 'Mobile · Embedded · IoT',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'maixuanduy97@gmail.com',
  phone: '0929 679 222',
  linkedin: 'https://www.linkedin.com/in/xuanduy97',
  summary: `Versatile Software Engineer with 4+ years of experience spanning mobile development,
embedded systems, and ERP solutions. Proficient in cross-platform mobile development
(React Native, Node.js), with hands-on exposure to automotive middleware, IoT hardware
integration, and Fintech trading applications.

Proven ability to work across the full stack — from PCB-level embedded systems to
production mobile apps deployed across multiple markets. Comfortable working in
English-speaking, international, and remote-first environments.`,
  highlights: ['React Native', 'Tauri', 'Svelte', 'TypeScript', 'C++', 'Embedded', 'Fintech', 'IoT']
};

export interface Bullet {
  text: string;
}

export interface Job {
  id: string;
  tabLabel: string;
  title: string;
  company: string;
  location: string;
  period: string;
  domain: string;
  bullets: string[];
  achievement?: string;
  techStack: string[];
}

export const jobs: Job[] = [
  {
    id: 'daoukiwoom',
    tabLabel: 'DAOUKIWOOM',
    title: 'Mobile Trading System Developer',
    company: 'DAOUKIWOOM Innovation Company Limited',
    location: 'Ho Chi Minh City, Vietnam',
    period: 'Aug 2023 – Present',
    domain: 'Fintech · Cross-platform Mobile · Thailand & Indonesia Markets',
    bullets: [
      'Built and shipped mobile trading features for Thailand and Indonesia markets using an in-house cross-platform framework (built on Node.js 12), improving user experience and app stability across both regions.',
      'Diagnosed and resolved platform-specific defects on Android and iOS, reducing production incidents and improving cross-platform consistency.',
      'Managed end-to-end release cycles following CI/CD pipelines and standardized internal procedures, ensuring timely multi-region deployments.',
      'Coordinated feature delivery using WBS planning across multiple concurrent regional releases.',
      'Monitored and optimized app connectivity and runtime performance in high-frequency trading environments, minimizing service interruptions.'
    ],
    techStack: ['Node.js 12', 'JavaScript', 'Android SDK', 'iOS', 'CI/CD', 'WBS']
  },
  {
    id: 'lg',
    tabLabel: 'LG VCS',
    title: 'Research Engineer',
    company: 'LG Vehicle Component Solutions Development Center Vietnam',
    location: 'Da Nang, Vietnam',
    period: 'Apr 2022 – Jun 2023',
    domain: 'Automotive R&D · In-Vehicle Infotainment · Embedded Systems',
    bullets: [
      'Developed and maintained middleware architecture for in-vehicle infotainment audio systems in an international R&D environment.',
      'Optimized system performance through rigorous testing aligned with ASPICE automotive software standards.',
      'Diagnosed and resolved hardware-software integration issues, improving overall system reliability.',
      'Integrated software libraries for major automotive platform releases under Agile/Scrum workflows.',
      'Contributed to Telematics, E-Call, and Voice Recognition modules across automotive platforms.'
    ],
    techStack: ['C++', 'Embedded Linux', 'ASPICE', 'Agile/Scrum', 'Telematics']
  },
  {
    id: 'duy-anh',
    tabLabel: 'Duy Anh',
    title: 'Software Engineer',
    company: 'Duy Anh System Management Solution',
    location: 'Ho Chi Minh City, Vietnam',
    period: 'Aug 2020 – Apr 2022',
    domain: 'ERP Solutions · Mobile & Desktop · IoT Integration',
    bullets: [
      'Developed multi-platform ERP applications for Android, Web, and Desktop environments covering staff, warehouse, factory, and logistics management.',
      'Built embedded boards and IoT modules to support system-specific hardware requirements.',
      'Implemented cross-platform mobile solutions using React Native, increasing development efficiency across platforms.',
      'Led onboarding and technical mentoring for new engineers joining the team.'
    ],
    achievement: 'Delivered 5 production Android applications now actively used across business operations.',
    techStack: ['React Native', 'JavaScript', 'C#', 'Android', 'SQLite', 'MS SQL Server', 'IoT']
  }
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  note?: string;
  inProgress?: boolean;
}

export const education: Education[] = [
  {
    degree: 'Master of Science, Information Technology',
    school: 'University of Information Technology (UIT)',
    location: 'Ho Chi Minh City, Vietnam',
    period: 'Nov 2024 – May 2026',
    inProgress: true
  },
  {
    degree: 'Bachelor of Engineering, Electronics & Telecommunications',
    school: 'Ho Chi Minh City University of Technology (HCMUT)',
    location: 'Ho Chi Minh City, Vietnam',
    period: 'Aug 2015 – Nov 2021',
    note: 'Notable Projects: PCB design for LED cube & digital clock; temperature monitoring board; accelerometer-based vehicle control prototype.'
  }
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'C++', 'Java', 'C#'] },
  { label: 'Mobile', items: ['React Native', 'Android SDK', 'SwiftUI', 'cross-platform dev'] },
  { label: 'Embedded & IoT', items: ['Embedded Linux', 'PCB design', 'hardware-software integration', 'ASPICE'] },
  { label: 'Backend / DB', items: ['Node.js', 'OData', 'MS SQL Server', 'SQLite'] },
  { label: 'Tools & DevOps', items: ['Git', 'CI/CD', 'JIRA', 'Azure DevOps', 'Agile (Scrum, Kanban)'] },
  { label: 'Currently Learning', items: ['Tauri', 'Svelte', 'Rust'] },
  { label: 'English', items: ['Intermediate — reading docs, written comms, international teams'] }
];

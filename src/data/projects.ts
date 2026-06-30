export interface Project {
  title: string;
  overview: string;
  technologies: string[];
  challenges: string;
  impact: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Enterprise Banking Portal',
    overview:
      'A secure, full-featured online banking portal enabling customers to manage accounts, transfers, and statements with enterprise-grade reliability.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI', 'REST APIs'],
    challenges:
      'Engineered a resilient state management layer to handle complex multi-step transaction flows while meeting strict banking security and accessibility standards under tight regulatory timelines.',
    impact:
      'Reduced page load times by 45%, improved transaction completion rate, and passed all WCAG 2.1 AA accessibility audits.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    overview:
      'A high-conversion e-commerce storefront with dynamic catalogue browsing, cart management, and checkout, built for scale during peak traffic events.',
    technologies: ['React', 'TypeScript', 'Redux', 'SCSS', 'Node.js'],
    challenges:
      'Optimized rendering and bundle size to keep the product catalogue fast on low-end devices, and implemented robust caching for high-traffic sale events.',
    impact:
      'Achieved a 95+ Lighthouse performance score and a measurable lift in checkout conversion after UI/performance overhaul.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Admin Dashboard',
    overview:
      'A data-dense internal admin dashboard for operations teams to monitor metrics, manage users, and configure system settings in real time.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Redux Toolkit', 'REST APIs'],
    challenges:
      'Designed a flexible, reusable widget and table system capable of rendering large real-time datasets without sacrificing UI responsiveness.',
    impact:
      'Cut average operational task time by 30% through streamlined workflows and a redesigned information architecture.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Customer Onboarding Platform',
    overview:
      'A multi-step digital onboarding experience for new financial services customers, including KYC document upload and identity verification.',
    technologies: ['React', 'TypeScript', 'Redux', 'Material UI', 'REST APIs'],
    challenges:
      'Built a configurable multi-step form engine supporting branching logic, validation, and resumable sessions across devices.',
    impact:
      'Reduced onboarding drop-off rate and decreased average completion time, directly improving customer acquisition metrics.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Digital Banking Application',
    overview:
      'A mobile-first digital banking web application offering account insights, bill payments, and personalized financial dashboards.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Dojo Framework', 'SCSS'],
    challenges:
      'Bridged legacy Dojo-based modules with new React components during an incremental modernization, ensuring zero regression in production.',
    impact:
      'Delivered a phased modernization with no service disruption, improving customer satisfaction scores in post-launch surveys.',
    githubUrl: '#',
    liveUrl: '#',
  },
];

export interface KeyProject {
  title: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyFull?: string;
  location: string;
  context?: string;
  keyProjects?: KeyProject[];
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: 'Jan 2022 — Present',
    role: 'Senior Consultant (Senior Frontend Engineer)',
    company: 'Emirates NBD',
    companyFull: 'Emirates National Bank of Dubai',
    location: 'Dubai, United Arab Emirates',
    context:
      'Senior Frontend Engineer architecting and delivering modular, accessible React/TypeScript applications for customer onboarding and marketing channels at one of the largest banking groups in the Middle East.',
    keyProjects: [
      {
        title: 'Credit Card Onboarding Platform (CCSTP)',
        description:
          'Led frontend architecture and end-to-end implementation of a customer onboarding flow using ReactJS and TypeScript, building a reusable component library, dynamic form validation, and identity/document verification integrations adopted across multiple product teams.',
      },
      {
        title: 'ENBD Lifestyle & Deals Platform',
        description:
          'Delivered a responsive web experience and native WebView integration in React to power marketing campaigns and promotional partnerships, improving engagement across mobile and web channels.',
      },
    ],
    highlights: [
      'Defined frontend architecture and component standards across multiple ReactJS/TypeScript applications, improving code consistency, reusability, and long-term maintainability.',
      'Optimized application performance through code-splitting, lazy loading, and asset optimization, improving perceived load times and increasing conversion on key onboarding forms.',
      'Led WCAG accessibility initiatives and introduced automated unit and end-to-end testing with Jest and Playwright, reducing production regressions and raising release reliability.',
      'Partnered with backend engineering teams to design efficient REST API contracts and implement client-side caching and incremental data fetching, reducing network payload and latency.',
      'Established CI/CD pipelines and structured code review practices, accelerating release cadence while improving release quality and traceability.',
      'Mentored junior engineers, led design reviews, and onboarded new team members, strengthening team-wide code quality and engineering productivity.',
    ],
    tags: ['ReactJS', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Jest', 'Playwright', 'CI/CD', 'WCAG'],
  },
  {
    period: 'Jan 2020 — Dec 2021',
    role: 'Consultant – Technology (Frontend Developer)',
    company: 'Virtusa Consulting Private Limited',
    location: 'Chennai, India',
    context:
      'Frontend Developer on the FUZE enterprise communications and collaboration platform, delivering UI features within multiple cross-functional Scrum teams.',
    highlights: [
      'Built responsive web pages and reusable UI components using ReactJS, HTML5, and Bootstrap, supporting enterprise communication and collaboration workflows.',
      'Implemented UI features supporting ETL data workflows and integrated frontend interfaces with SQL-based upload/download processes, improving data handling accuracy.',
      'Authored and shared design and development pattern documentation, streamlining cross-team handoffs and reducing engineering rework.',
      'Participated in sprint planning, code reviews, and issue triage within an Agile/Scrum framework to support steady, reliable releases.',
    ],
    tags: ['ReactJS', 'HTML5', 'Bootstrap', 'Agile', 'Scrum'],
  },
  {
    period: 'Aug 2015 — Dec 2019',
    role: 'Software Engineer (Frontend Engineer)',
    company: 'HCL Technologies Limited',
    location: 'Chennai, India',
    context:
      'Frontend Engineer on Cisco Prime Infrastructure and Cisco DNAC, delivering enterprise network management interfaces for converged wired and wireless networks.',
    highlights: [
      'Developed and maintained enterprise web UIs using HTML5, CSS3, JavaScript, ReactJS, and AngularJS, supporting large-scale network management platforms.',
      'Built client-side integrations to consume JSON and XML APIs, improving data-driven UI workflows and reducing manual configuration steps.',
      'Resolved cross-browser compatibility and performance issues, improving platform stability across enterprise deployments.',
      'Collaborated with QA and backend teams to troubleshoot defects and streamline release processes, contributing to on-time, high-quality delivery.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'AngularJS', 'JSON', 'XML'],
  },
];

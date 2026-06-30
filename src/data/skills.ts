export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['ReactJS', 'AngularJS', 'Redux', 'Redux Toolkit', 'Material UI', 'SASS', 'Responsive Design', 'Reusable Component Libraries'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'REST API Integration', 'JSON', 'XML'],
  },
  {
    category: 'State Management',
    skills: ['Redux', 'Redux Toolkit', 'Context API'],
  },
  {
    category: 'UI Frameworks',
    skills: ['Material UI', 'Bootstrap'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'Playwright', 'Unit Testing', 'Integration Testing', 'End-to-End Testing'],
  },
  {
    category: 'Build Tools',
    skills: ['Webpack', 'Code Splitting', 'Lazy Loading', 'Asset Optimization'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'CI/CD',
    skills: ['CI/CD Pipeline Design', 'Automated Build & Release Workflows'],
  },
  {
    category: 'Architecture',
    skills: ['Frontend Architecture', 'Component-Driven Design', 'System Design', 'Micro Frontend Concepts', 'Scalable Applications'],
  },
  {
    category: 'Performance',
    skills: ['Web Performance Tuning', 'Code-Splitting', 'Lazy Loading', 'Client-Side Caching', 'Incremental Data Fetching'],
  },
  {
    category: 'Accessibility & Security',
    skills: ['WCAG Accessibility Compliance', 'Secure Client-Side Identity & Document Verification Integrations'],
  },
  {
    category: 'Methodologies',
    skills: ['Agile', 'Scrum', 'Code Review', 'Technical Leadership', 'Mentoring', 'Cross-Browser Compatibility'],
  },
];

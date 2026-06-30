export interface Service {
  title: string;
  description: string;
  icon: 'react' | 'architecture' | 'typescript' | 'performance' | 'review' | 'consulting' | 'ui' | 'enterprise';
}

export const services: Service[] = [
  {
    title: 'ReactJS Development',
    description: 'Building fast, modular, and maintainable React applications from MVP to enterprise scale.',
    icon: 'react',
  },
  {
    title: 'Frontend Architecture',
    description: 'Designing scalable frontend architecture, folder structures, and engineering standards for growing teams.',
    icon: 'architecture',
  },
  {
    title: 'TypeScript Development',
    description: 'Migrating JavaScript codebases to TypeScript and building type-safe applications from the ground up.',
    icon: 'typescript',
  },
  {
    title: 'Performance Optimization',
    description: 'Improving Core Web Vitals, bundle size, and rendering performance for faster, smoother experiences.',
    icon: 'performance',
  },
  {
    title: 'Code Reviews',
    description: 'In-depth code and architecture reviews to raise quality, catch risks early, and mentor your team.',
    icon: 'review',
  },
  {
    title: 'Technical Consulting',
    description: 'Strategic frontend consulting for startups and enterprises planning new products or platform modernization.',
    icon: 'consulting',
  },
  {
    title: 'UI Modernization',
    description: 'Revamping legacy interfaces into modern, accessible, responsive experiences using React & MUI.',
    icon: 'ui',
  },
  {
    title: 'Enterprise Application Development',
    description: 'End-to-end delivery of enterprise-grade platforms, including banking and financial applications.',
    icon: 'enterprise',
  },
];

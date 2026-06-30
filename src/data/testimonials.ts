export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    company: 'Fintech Startup',
    quote:
      "Pravin doesn't just write code — he thinks in product outcomes. He translated our most ambitious feature requests into a frontend architecture that scaled gracefully as we grew. A true technical partner.",
  },
  {
    name: 'Rajesh Nair',
    role: 'Engineering Manager',
    company: 'Enterprise Banking Program',
    quote:
      'Pravin led our frontend team through a high-stakes banking platform rebuild with calm, methodical leadership. His architecture decisions are still paying dividends two years later.',
  },
  {
    name: 'Daniel Cohen',
    role: 'Client, E-Commerce Platform',
    quote:
      "Working with Pravin felt like having a senior in-house lead, not a contractor. He optimized our storefront performance and our conversion numbers improved within weeks of launch.",
    company: 'Independent Retail Brand',
  },
  {
    name: 'Fatima Al Suwaidi',
    role: 'Team Lead',
    company: 'Digital Onboarding Platform',
    quote:
      'Pravin mentored our junior engineers while delivering complex onboarding flows under tight deadlines. His code reviews raised the bar for our entire team.',
  },
];

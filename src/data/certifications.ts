export type Certification = {
  id: string;
  name: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  issuer: string;
  notes: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    id: 'az-305',
    name: 'Microsoft Azure Solutions Architect Expert (AZ-305)',
    status: 'Completed',
    issuer: 'Microsoft',
    notes: 'Verified completed certification for enterprise Azure architecture.',
    href: '/docs/certifications/azure-architect',
  },
];

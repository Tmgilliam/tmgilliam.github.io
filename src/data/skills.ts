export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
  href: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'enterprise-architecture',
    title: 'Enterprise Architecture',
    items: ['ERP transformation', 'Operational data design', 'Decision-ready systems'],
    href: '/docs/cloud-architecture/architecture-principles',
  },
  {
    id: 'ai-governance',
    title: 'AI Governance',
    items: [
      'Evidence-first readiness',
      'Critical-dimension controls',
      'Claim boundaries',
    ],
    href: '/docs/enterprise-ai/ai-readiness-diagnostic',
  },
  {
    id: 'human-in-the-loop',
    title: 'Human-in-the-Loop Systems',
    items: ['Explicit authority', 'Escalation patterns', 'Execution receipts (planned)'],
    href: '/docs/enterprise-ai/governed-agent-systems',
  },
  {
    id: 'data-evidence',
    title: 'Data and Evidence Architecture',
    items: ['Data quality controls', 'Traceable scoring', 'Public-safe proof'],
    href: '/docs/erp-transformation/erp-data-quality',
  },
  {
    id: 'erp-transformation',
    title: 'ERP Transformation',
    items: ['Warehouse and barcode patterns', 'Inventory costing', 'Adoption decisions'],
    href: '/docs/erp-transformation/',
  },
  {
    id: 'reliability',
    title: 'Reliability and Operational Controls',
    items: ['CI verification', 'Observability patterns', 'Static deployment controls'],
    href: '/docs/cloud-architecture/deployment-and-observability',
  },
];

export type EcosystemNode = {
  id: string;
  name: string;
  summary: string;
  href: string;
  status: 'Released' | 'Active' | 'Planned' | 'Private';
  children?: EcosystemNode[];
};

export const ecosystemRoot: EcosystemNode = {
  id: 'bbi',
  name: 'Brilliant Brainstorm Intelligence',
  summary: 'Governed AI, enterprise architecture, and ERP transformation systems.',
  href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
  status: 'Active',
  children: [
    {
      id: 'ai-readiness',
      name: 'AI Readiness',
      summary: 'Evidence-first diagnostic kit and planned interactive assessment.',
      href: '/docs/enterprise-ai/ai-readiness-diagnostic',
      status: 'Released',
    },
    {
      id: 'erp',
      name: 'ERP Transformation',
      summary: 'Warehouse, costing, data quality, and operational patterns.',
      href: '/docs/erp-transformation/',
      status: 'Active',
    },
    {
      id: 'cloud',
      name: 'Cloud Architecture',
      summary: 'Azure landing zone and ERP-to-cloud integration references.',
      href: '/docs/cloud-architecture/',
      status: 'Active',
    },
    {
      id: 'governed-agents',
      name: 'Governed Agents',
      summary: 'Human authority, evidence, and verification boundaries.',
      href: '/docs/enterprise-ai/governed-agent-systems',
      status: 'Planned',
    },
    {
      id: 'mtp',
      name: 'MTP Portfolio Platform',
      summary: 'This site — recruiter-facing technical proof surface.',
      href: '/',
      status: 'Released',
    },
    {
      id: 'bbios',
      name: 'BBIOS',
      summary: 'Private human-governed AI operating system — architecture summary only.',
      href: '/architecture#bbios-private-architecture',
      status: 'Private',
    },
  ],
};

export type ArchitectureNode = {
  id: string;
  name: string;
  responsibilities: string[];
  technologies: string[];
  tradeoffs: string[];
  adrHref?: string;
  docsHref: string;
  repoHref?: string;
};

export const architectureNodes: ArchitectureNode[] = [
  {
    id: 'erp',
    name: 'ERP & Operations',
    responsibilities: [
      'Inventory and warehouse truth',
      'Costing integrity',
      'Master data quality',
    ],
    technologies: [
      'Sage 100-class patterns',
      'Barcode discipline',
      'Operational reporting',
    ],
    tradeoffs: ['Scan-at-event vs batch entry', 'Strict FIFO vs lot policies'],
    docsHref: '/docs/erp-transformation/',
  },
  {
    id: 'warehouse',
    name: 'Warehouse Execution',
    responsibilities: [
      'Physical movement alignment',
      'Location master integrity',
      'Exception evidence',
    ],
    technologies: ['Barcode systems', 'Pick/pack/ship flows'],
    tradeoffs: ['Automation before master-data stability fails'],
    docsHref: '/docs/erp-transformation/supply-chain-and-warehouse',
  },
  {
    id: 'ai-readiness',
    name: 'AI Readiness',
    responsibilities: [
      'Score decision/data/authority gaps',
      'Surface evidence quality',
      'Block unsupported “AI ready” claims',
    ],
    technologies: ['Python CLI', 'Deterministic scoring', 'CI + docs'],
    tradeoffs: ['CLI rigor before interactive polish'],
    adrHref: '/docs/architecture-decisions/adr-004-evidence-first',
    docsHref: '/docs/enterprise-ai/ai-readiness-diagnostic',
    repoHref:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
  },
  {
    id: 'governed-agents',
    name: 'Governed Agents',
    responsibilities: [
      'Authorization boundaries',
      'Approval gates',
      'Execution receipts',
    ],
    technologies: ['Human-in-the-loop patterns', 'Evidence trails'],
    tradeoffs: ['Autonomy vs enterprise safety'],
    adrHref: '/docs/architecture-decisions/adr-005-human-approval',
    docsHref: '/docs/enterprise-ai/governed-agent-systems',
  },
  {
    id: 'cloud',
    name: 'Cloud Delivery',
    responsibilities: [
      'Landing zone patterns',
      'ERP-to-cloud integration paths',
      'Observability baselines',
    ],
    technologies: ['Azure', 'Bicep', 'Watermark sync patterns'],
    tradeoffs: ['Speed vs governed landing-zone readiness'],
    docsHref: '/docs/cloud-architecture/',
    repoHref: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
  },
  {
    id: 'evidence',
    name: 'Evidence & Proof',
    responsibilities: [
      'Public Proof Gate',
      'Privacy boundary',
      'Shipments and recognition honesty',
    ],
    technologies: ['GitHub Actions', 'Reusable workflows', 'ADRs'],
    tradeoffs: ['Publish slower; leak less'],
    adrHref: '/docs/architecture-decisions/adr-002-public-proof-boundary',
    docsHref: '/docs/engineering-platform/engineering-principles',
  },
];

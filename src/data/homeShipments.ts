export type Shipment = {
  id: string;
  title: string;
  summary: string;
  evidence: {label: string; url: string}[];
};

export type MomentumItem = {
  id: string;
  title: string;
  href?: string;
  privateLabel?: string;
};

/** Released or verified public work only — no vanity metrics. */
export const recentShipments: Shipment[] = [
  {
    id: 'ai-readiness-v010',
    title: 'AI Readiness Diagnostic v0.1.0',
    summary: 'Public evidence-first toolkit with CI, tests, and Apache-2.0 release.',
    evidence: [
      {
        label: 'Release',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
      },
      {
        label: 'Repository',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
      },
      {label: 'Documentation', url: '/docs/enterprise-ai/ai-readiness-diagnostic'},
    ],
  },
  {
    id: 'bbi-org-controls',
    title: 'BBI organization engineering controls',
    summary:
      'Organization profile, community health, teams, rulesets, and Public Proof Gate baseline.',
    evidence: [
      {
        label: 'Organization',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
      },
      {
        label: 'Org profile repo',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/.github',
      },
    ],
  },
  {
    id: 'bbi-roadmap',
    title: 'BBI Public Engineering Roadmap',
    summary: 'Transparent backlog with status and proof-gate fields for public work.',
    evidence: [
      {
        label: 'Project board',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
  },
  {
    id: 'mtp-portfolio',
    title: 'MTP technical portfolio release',
    summary: 'Docusaurus portfolio with Pages deploy, CI, CodeQL, and public-proof boundaries.',
    evidence: [
      {label: 'Live site', url: 'https://tmgilliam.github.io'},
      {
        label: 'Release v0.1.0',
        url: 'https://github.com/Tmgilliam/tmgilliam.github.io/releases/tag/v0.1.0',
      },
      {label: 'Repository', url: 'https://github.com/Tmgilliam/tmgilliam.github.io'},
    ],
  },
  {
    id: 'latest-architecture-article',
    title: 'Latest architecture article',
    summary: 'Evidence before implementation — public writing on governed delivery.',
    evidence: [
      {
        label: 'Article',
        url: '/blog/evidence-before-implementation',
      },
      {label: 'Writing index', url: '/writing'},
    ],
  },
];

export const momentumReleased: MomentumItem[] = [
  {
    id: 'm-kit',
    title: 'AI Readiness Diagnostic v0.1.0',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
  },
  {
    id: 'm-portfolio',
    title: 'MTP technical portfolio',
    href: 'https://tmgilliam.github.io',
  },
  {
    id: 'm-org',
    title: 'BBI organization engineering baseline',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/.github',
  },
];

export const momentumInProgress: MomentumItem[] = [
  {
    id: 'm-interactive',
    title: 'Interactive AI Readiness demonstration',
    href: '/projects',
  },
  {
    id: 'm-controls',
    title: 'Elite engineering controls review',
    href: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
  },
  {
    id: 'm-bbios-ops',
    title: 'BBIOS operational readiness candidate',
    privateLabel: 'Private system — not publicly observable',
  },
];

export const momentumPlanned: MomentumItem[] = [
  {
    id: 'm-agents',
    title: 'Governed Agent Execution Patterns',
    href: '/projects',
  },
  {
    id: 'm-casebook',
    title: 'ERP Transformation Casebook',
    href: '/projects',
  },
  {
    id: 'm-portal',
    title: 'BBI Engineering Portal',
    href: '/projects',
  },
];

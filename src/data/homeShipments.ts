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
    title: 'BBI AI Readiness Diagnostic Kit v0.1.0',
    summary: 'Released with CI, CodeQL, Scorecard, typed checks, testing, and coverage.',
    evidence: [
      {
        label: 'Release',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
      },
      {
        label: 'Repository',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
      },
      {
        label: 'CI',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/actions',
      },
      {label: 'Documentation', url: '/docs/enterprise-ai/ai-readiness-diagnostic'},
    ],
  },
  {
    id: 'bbi-roadmap',
    title: 'BBI Public Engineering Roadmap',
    summary:
      'Public execution roadmap with status, priority, risk, evidence, and proof gates.',
    evidence: [
      {
        label: 'Project board',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
  },
  {
    id: 'mtp-portfolio',
    title: 'MTP Executive Technical Portfolio',
    summary: 'Recruiter-facing architecture and technical-proof platform.',
    evidence: [
      {label: 'Live site', url: 'https://tmgilliam.github.io'},
      {
        label: 'Release',
        url: 'https://github.com/Tmgilliam/tmgilliam.github.io/releases/tag/v0.1.0',
      },
      {label: 'Repository', url: 'https://github.com/Tmgilliam/tmgilliam.github.io'},
    ],
  },
  {
    id: 'bbi-engineering-controls',
    title: 'BBI Engineering Controls v1',
    summary:
      'PR-only delivery, CODEOWNERS, security scanning, dependency controls, and release governance.',
    evidence: [
      {
        label: 'Org profile / governance',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/.github',
      },
      {
        label: 'Organization',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
      },
    ],
  },
];

export const momentumReleased: MomentumItem[] = [
  {
    id: 'm-kit',
    title: 'AI Readiness Diagnostic Kit v0.1.0',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
  },
  {
    id: 'm-portfolio',
    title: 'MTP portfolio platform',
    href: 'https://tmgilliam.github.io',
  },
  {
    id: 'm-org',
    title: 'BBI organization engineering baseline',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/.github',
  },
];

export const momentumInReview: MomentumItem[] = [
  {
    id: 'm-controls-review',
    title: 'Elite Engineering Controls v1',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/.github',
  },
  {
    id: 'm-access-security',
    title: 'Organization access and security baseline',
    href: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
  },
];

export const momentumInProgress: MomentumItem[] = [
  {
    id: 'm-bbios-ops',
    title: 'BBIOS operational-readiness candidate',
    privateLabel: 'Private system — source not public',
  },
];

export const momentumPlanned: MomentumItem[] = [
  {
    id: 'm-interactive',
    title: 'Interactive AI Readiness demonstration',
    href: '/projects',
  },
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

export type MissionControlLink = {
  label: string;
  href: string;
  detail: string;
};

/** Evidence-backed dashboard tiles — no vanity metrics. */
export const missionControlTiles: MissionControlLink[] = [
  {
    label: 'Latest Release',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
    detail: 'BBI AI Readiness Diagnostic Kit v0.1.0',
  },
  {
    label: 'Current Focus',
    href: '/docs/engineering-platform/living-platform-roadmap',
    detail: 'Living engineering platform — Phase 1 recruiter excellence',
  },
  {
    label: 'Recent Shipments',
    href: '/#recent-shipments',
    detail: 'Verified public milestones with evidence links',
  },
  {
    label: 'Roadmap',
    href: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
    detail: 'BBI Public Engineering Roadmap',
  },
  {
    label: 'Architecture Decisions',
    href: '/docs/architecture-decisions/',
    detail: 'ADR-001 through ADR-007',
  },
  {
    label: 'Public Proof',
    href: 'https://github.com/Tmgilliam/tmgilliam.github.io/blob/main/PUBLIC_PROOF_GATE.md',
    detail: 'Public Proof Gate checklist',
  },
  {
    label: 'Quality Gates',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-reusable-workflows',
    detail: 'Reusable CI, privacy, and proof workflows',
  },
  {
    label: 'Discussions',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/discussions',
    detail: 'Public product discussions (when enabled)',
  },
  {
    label: 'Next Milestone',
    href: '/projects',
    detail: 'Interactive AI Readiness Assessment — Planned',
  },
  {
    label: 'Engineering Principles',
    href: '/docs/engineering-platform/engineering-principles',
    detail: 'Evidence first · Human authority · Privacy · Verification',
  },
  {
    label: 'Doctoral Research',
    href: 'https://scholarworks.waldenu.edu/dissertations/12693',
    detail: 'ERP implementation strategies — Walden ScholarWorks',
  },
];

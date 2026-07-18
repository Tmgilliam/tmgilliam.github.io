export type Project = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  role: string;
  technologies: string[];
  recruiterSignals: string[];
  evidence: {label: string; url: string}[];
  repositoryUrl?: string;
  demoUrl?: string;
  releaseUrl?: string;
  status: 'Released' | 'Active' | 'Case Study' | 'Planned';
  publicProofGate: 'Passed' | 'In Review' | 'Not Started';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'bbi-ai-readiness',
    name: 'BBI AI Readiness Diagnostic Kit',
    summary:
      'Evidence-first public toolkit for scoring AI business value, data readiness, human oversight, governance, delivery readiness, and evidence quality.',
    problem:
      'Organizations often start AI work with a model or vendor before clarifying decisions, data, authority, failure modes, and evidence.',
    role: 'Author and maintainer — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['Python', 'GitHub Actions', 'Apache-2.0', 'Deterministic scoring'],
    recruiterSignals: [
      'Public release with CI across Python 3.11–3.14',
      'Explicit governance boundaries',
      'Tested CLI and Markdown reporting',
    ],
    evidence: [
      {
        label: 'Repository',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
      },
      {
        label: 'Release v0.1.0',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
      },
      {label: 'Documentation', url: '/docs/enterprise-ai/ai-readiness-diagnostic'},
    ],
    repositoryUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
    releaseUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
    status: 'Released',
    publicProofGate: 'Passed',
    featured: true,
  },
  {
    id: 'erp-ai-delay-risk',
    name: 'ERP AI Delay Risk',
    summary:
      'End-to-end portfolio machine-learning system for operational delay-risk prediction, including feature engineering, evaluation, API delivery patterns, and executive reporting design.',
    problem:
      'Operational delay risk is often inferred late, without a transparent scoring path from ERP-adjacent signals to decision support.',
    role: 'Architect and implementer — public portfolio system',
    technologies: [
      'Python',
      'ML evaluation',
      'API delivery patterns',
      'Batch and real-time scoring design',
    ],
    recruiterSignals: [
      'Public technical portfolio artifact',
      'End-to-end ML system framing',
      'Related containerized inference and cloud integration repos',
    ],
    evidence: [
      {label: 'Repository', url: 'https://github.com/Tmgilliam/erp-ai-delay-risk'},
      {label: 'Case documentation', url: '/docs/ai-ml-systems/erp-delay-risk'},
      {
        label: 'Related: containerized ML API',
        url: 'https://github.com/Tmgilliam/containerized-ml-api',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/erp-ai-delay-risk',
    status: 'Active',
    publicProofGate: 'In Review',
    featured: true,
  },
  {
    id: 'bbi-roadmap',
    name: 'BBI Public Engineering Roadmap',
    summary:
      'Organization project board tracking public engineering work across diagnostics, templates, workflows, governed-agent patterns, and casebooks.',
    problem:
      'Public technical work needs a transparent backlog with honest status, proof gates, and release sequencing.',
    role: 'Founder — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['GitHub Projects', 'Public engineering governance'],
    recruiterSignals: [
      'Visible public backlog',
      'Status and proof-gate fields',
      'Seeded roadmap items',
    ],
    evidence: [
      {
        label: 'Project board',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
      {
        label: 'BBI organization',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
      },
    ],
    status: 'Active',
    publicProofGate: 'In Review',
    featured: true,
  },
  {
    id: 'erp-cloud-integration',
    name: 'ERP-to-Cloud Integration',
    summary:
      'Watermark-based ERP-to-Azure integration workflow with an enterprise upgrade path, published as a portfolio architecture artifact.',
    problem:
      'ERP operational data often remains trapped in batch exports without controlled cloud integration patterns.',
    role: 'Architect — public portfolio',
    technologies: ['Python', 'Azure', 'Watermark-based sync patterns'],
    recruiterSignals: [
      'ERP-to-cloud integration pattern',
      'Azure-oriented delivery framing',
    ],
    evidence: [
      {label: 'Repository', url: 'https://github.com/Tmgilliam/erp-cloud-integration'},
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/erp-cloud-integration',
    status: 'Case Study',
    publicProofGate: 'In Review',
  },
  {
    id: 'azure-landing-zone',
    name: 'Azure Landing Zone Reference',
    summary:
      'CAF/WAF-aligned enterprise Azure landing zone reference architecture published as a portfolio artifact.',
    problem:
      'Cloud estates need governed landing-zone patterns before application and AI workloads scale.',
    role: 'Architect — public portfolio',
    technologies: ['Azure', 'Bicep', 'CAF/WAF alignment'],
    recruiterSignals: [
      'Enterprise Azure architecture',
      'Infrastructure-as-code evidence',
    ],
    evidence: [
      {
        label: 'Repository',
        url: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
    status: 'Case Study',
    publicProofGate: 'In Review',
  },
  {
    id: 'governed-agent-patterns',
    name: 'Governed Agent Execution Patterns',
    summary:
      'Forthcoming public reference for authorization, tool permissions, evidence boundaries, execution receipts, escalation, and verification.',
    problem:
      'Agent systems need explicit human authority and evidence boundaries before consequential execution.',
    role: 'Author — planned public release',
    technologies: [
      'Human-in-the-loop design',
      'Execution receipts',
      'Governance patterns',
    ],
    recruiterSignals: ['Planned public architecture reference'],
    evidence: [
      {
        label: 'Roadmap item',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    status: 'Planned',
    publicProofGate: 'Not Started',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export type ProjectStatus = 'Released' | 'Active' | 'Case Study' | 'Planned';
export type PublicProofGate = 'Passed' | 'In Review' | 'Not Started';

/** Primary catalog section (each project appears once; featured is an overlay). */
export type ProjectSection =
  | 'engineering-governance'
  | 'enterprise-transformation'
  | 'ai-governed';

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
  status: ProjectStatus;
  publicProofGate: PublicProofGate;
  section: ProjectSection;
  featured?: boolean;
  /** Honest boundary notes for private or non-repo artifacts */
  boundaryNote?: string;
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
      {
        label: 'Related: interactive assessment (planned)',
        url: '/projects',
      },
    ],
    repositoryUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
    releaseUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
    status: 'Released',
    publicProofGate: 'Passed',
    section: 'ai-governed',
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
    section: 'ai-governed',
    featured: true,
  },
  {
    id: 'mtp-portfolio-platform',
    name: 'MTP Executive Technical Portfolio Platform',
    summary:
      'This site: a Docusaurus and TypeScript recruiter portfolio with GitHub Pages deployment, CI/CD, CodeQL, dependency controls, accessibility checks, and explicit public/private publication boundaries.',
    problem:
      'Technical leadership work is hard to evaluate without a durable, recruiter-facing proof surface that separates verified public artifacts from private systems.',
    role: 'Author, designer, and maintainer',
    technologies: [
      'Docusaurus',
      'TypeScript',
      'GitHub Pages',
      'GitHub Actions',
      'CodeQL',
      'Lighthouse / a11y checks',
    ],
    recruiterSignals: [
      'Live public product you are evaluating now',
      'DevOps, security controls, and information architecture in one system',
      'Public Proof Gate and privacy-boundary discipline',
    ],
    evidence: [
      {label: 'Live site', url: 'https://tmgilliam.github.io'},
      {label: 'Repository', url: 'https://github.com/Tmgilliam/tmgilliam.github.io'},
      {label: 'Release v0.1.0', url: 'https://github.com/Tmgilliam/tmgilliam.github.io/releases/tag/v0.1.0'},
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/tmgilliam.github.io',
    demoUrl: 'https://tmgilliam.github.io',
    releaseUrl: 'https://github.com/Tmgilliam/tmgilliam.github.io/releases/tag/v0.1.0',
    status: 'Released',
    publicProofGate: 'In Review',
    section: 'engineering-governance',
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
      {
        label: 'Related: Azure landing zone',
        url: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/erp-cloud-integration',
    status: 'Case Study',
    publicProofGate: 'In Review',
    section: 'enterprise-transformation',
    featured: true,
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
      {
        label: 'Related: ERP-to-cloud integration',
        url: 'https://github.com/Tmgilliam/erp-cloud-integration',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
    status: 'Case Study',
    publicProofGate: 'In Review',
    section: 'enterprise-transformation',
    featured: true,
  },
  {
    id: 'bbi-governance-system',
    name: 'BBI Public Engineering Governance System',
    summary:
      'Organization-level engineering governance: profile architecture, community standards, teams, PR-only delivery, rulesets, CODEOWNERS, CodeQL, secret scanning, Dependabot, Scorecard, Public Proof Gate, and release discipline.',
    problem:
      'Public technical organizations need enforceable delivery controls—not only a backlog or a README.',
    role: 'Founder — Brilliant Brainstorm Intelligence, LLC',
    technologies: [
      'GitHub Organizations',
      'Rulesets',
      'CODEOWNERS',
      'CodeQL',
      'Dependabot',
      'OpenSSF Scorecard',
      'Public Proof Gate',
    ],
    recruiterSignals: [
      'Platform and governance case study',
      'Least-privilege and PR-only delivery patterns',
      'Relevant to Staff/Principal and AI governance roles',
    ],
    evidence: [
      {
        label: 'Organization',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
      },
      {
        label: 'Org profile / community health',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/.github',
      },
      {
        label: 'Roadmap project',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    status: 'Active',
    publicProofGate: 'In Review',
    section: 'engineering-governance',
  },
  {
    id: 'bbi-roadmap',
    name: 'BBI Public Engineering Roadmap',
    summary:
      'Organization project board tracking public engineering work across diagnostics, templates, workflows, governed-agent patterns, and casebooks. Governance artifact—not a product repository.',
    problem:
      'Public technical work needs a transparent backlog with honest status, proof gates, and release sequencing.',
    role: 'Founder — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['GitHub Projects', 'Public engineering governance'],
    recruiterSignals: [
      'Visible public backlog intent',
      'Status and proof-gate fields',
      'Sequenced initiative planning',
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
    section: 'engineering-governance',
    boundaryNote:
      'Engineering systems artifact. Visibility of the project board may require sign-in until org project visibility is confirmed public.',
  },
  {
    id: 'continuous-public-publishing',
    name: 'Continuous Public Proof Publishing System',
    summary:
      'Approved public facts → registry → generated update PR → privacy checks → Public Proof Gate → human merge → deployment → live verification. Content supply-chain for public surfaces.',
    problem:
      'Public proof decays without a governed pipeline that blocks private material and unverified claims.',
    role: 'Architect and implementer — BBI public proof system',
    technologies: [
      'YAML registry',
      'GitHub Actions',
      'Reusable workflows',
      'Privacy-boundary scans',
      'Public Proof Gate',
    ],
    recruiterSignals: [
      'Least-privilege automation with human merge',
      'Claims validation and privacy enforcement',
      'Multi-surface publishing architecture',
    ],
    evidence: [
      {
        label: 'Public proof registry',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-public-proof-registry',
      },
      {
        label: 'Reusable workflows',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-reusable-workflows',
      },
    ],
    repositoryUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-public-proof-registry',
    status: 'Active',
    publicProofGate: 'In Review',
    section: 'engineering-governance',
  },
  {
    id: 'bbi-reusable-workflows',
    name: 'BBI Reusable Engineering Workflows',
    summary:
      'Shared GitHub Actions for public site quality, privacy-boundary scan, Public Proof Gate, Pages deploy, metadata sync, freshness audit, and release automation patterns.',
    problem:
      'Each public repository reinventing CI, privacy checks, and proof gates creates drift and weak evidence.',
    role: 'Platform author — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['GitHub Actions', 'Reusable workflows', 'Quality gates'],
    recruiterSignals: [
      'Platform thinking and reusable delivery controls',
      'Wired into portfolio and public-proof repos',
    ],
    evidence: [
      {
        label: 'Repository',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-reusable-workflows',
      },
      {
        label: 'Related: proof registry',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-public-proof-registry',
      },
    ],
    repositoryUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-reusable-workflows',
    status: 'Active',
    publicProofGate: 'In Review',
    section: 'engineering-governance',
  },
  {
    id: 'interactive-ai-readiness',
    name: 'Interactive AI Readiness Assessment',
    summary:
      'Planned browser-based companion to the CLI diagnostic kit: client-side scoring, downloadable reports, validation, accessibility, and architecture transparency. Distinct product surface from the CLI.',
    problem:
      'CLI diagnostics prove rigor; interactive delivery proves product UX and stakeholder accessibility.',
    role: 'Author — planned public product (target v0.2.0 line)',
    technologies: [
      'Browser delivery',
      'Client-side scoring',
      'Report generation',
      'Accessibility',
    ],
    recruiterSignals: [
      'Planned product companion to released CLI kit',
      'Not the same artifact as the diagnostic kit',
    ],
    evidence: [
      {
        label: 'Related: CLI kit (released)',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
      },
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    status: 'Planned',
    publicProofGate: 'Not Started',
    section: 'ai-governed',
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
    section: 'ai-governed',
  },
  {
    id: 'erp-transformation-casebook',
    name: 'Enterprise ERP Transformation Casebook',
    summary:
      'Planned sanitized casebook covering warehouse/barcode transformation, inventory and costing architecture, ERP data quality, operational reporting, adoption decisions, and architecture tradeoffs.',
    problem:
      'Recruiters and peers rarely see enterprise judgment artifacts—only code repositories.',
    role: 'Author — planned public casebook',
    technologies: [
      'ERP transformation',
      'Warehouse / barcode systems',
      'Inventory costing',
      'Data quality',
      'Stakeholder adoption',
    ],
    recruiterSignals: [
      'Enterprise judgment and operating tradeoffs',
      'Complement to code-first portfolio repos',
    ],
    evidence: [
      {label: 'Related ERP docs', url: '/docs/erp-transformation/'},
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    status: 'Planned',
    publicProofGate: 'Not Started',
    section: 'enterprise-transformation',
  },
  {
    id: 'bbi-engineering-portal',
    name: 'BBI Engineering Knowledge Portal',
    summary:
      'Planned organization-level Pages site for product documentation, governance patterns, releases, architecture standards, public methods, contribution guidance, and engineering roadmap.',
    problem:
      'Organization engineering knowledge needs a durable public home beyond scattered repository READMEs.',
    role: 'Architect — planned BBI public portal',
    technologies: ['GitHub Pages', 'Documentation architecture', 'Governance publishing'],
    recruiterSignals: ['Organization-level knowledge system design'],
    evidence: [
      {
        label: 'BBI organization',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
      },
    ],
    status: 'Planned',
    publicProofGate: 'Not Started',
    section: 'engineering-governance',
  },
  {
    id: 'bbi-public-project-template',
    name: 'BBI Public Project Engineering Template',
    summary:
      'Planned reusable template with CI, CodeQL, Dependabot, Scorecard, CODEOWNERS, issue/PR templates, release structure, Public Proof Gate, and security/governance docs.',
    problem:
      'New public repositories need a governed starting posture, not a blank git init.',
    role: 'Platform author — planned public template',
    technologies: [
      'Repository templates',
      'CI',
      'CodeQL',
      'Dependabot',
      'OpenSSF Scorecard',
      'Public Proof Gate',
    ],
    recruiterSignals: ['Reusable platform engineering asset'],
    evidence: [
      {
        label: 'Related: reusable workflows',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-reusable-workflows',
      },
    ],
    status: 'Planned',
    publicProofGate: 'Not Started',
    section: 'engineering-governance',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function projectsInSection(
  section: ProjectSection,
  options: {includeFeatured?: boolean; includePlanned?: boolean} = {},
): Project[] {
  const {includeFeatured = false, includePlanned = false} = options;
  return projects.filter((project) => {
    if (project.section !== section) return false;
    if (!includePlanned && project.status === 'Planned') return false;
    if (!includeFeatured && project.featured) return false;
    return true;
  });
}

export const plannedProjects = projects.filter((project) => project.status === 'Planned');

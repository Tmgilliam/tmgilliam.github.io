export type ProjectStatus = 'Released' | 'Active' | 'Case Study' | 'Planned';
export type PublicProofGate = 'Passed' | 'In Review' | 'Not Started';

/** Primary catalog section (each project appears once; featured is an overlay). */
export type ProjectSection =
  'engineering-governance' | 'enterprise-transformation' | 'ai-governed';

/** Filter chips for discoverability. */
export type ProjectDomain = 'AI' | 'ERP' | 'Architecture' | 'Governance' | 'Cloud';

export type QualityGateStatus = 'pass' | 'partial' | 'pending' | 'na';

export type QualityGateItem = {
  label: string;
  status: QualityGateStatus;
};

export type EngineeringReview = {
  whyBuilt: string;
  whatSucceeded: string;
  whatIdRedesign: string;
  technicalDebt: string;
  lessons: string;
  nextRelease: string;
};

export type EvolutionStage = {
  stage: 'Idea' | 'Prototype' | 'Release' | 'Current' | 'Next';
  label: string;
  active?: boolean;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  role: string;
  technologies: string[];
  /** Short enterprise proof chips (not vanity stars). */
  proofSignals: string[];
  domains: ProjectDomain[];
  evidence: {label: string; url: string}[];
  repositoryUrl?: string;
  documentationUrl?: string;
  architectureUrl?: string;
  demoUrl?: string;
  releaseUrl?: string;
  roadmapUrl?: string;
  status: ProjectStatus;
  publicProofGate: PublicProofGate;
  section: ProjectSection;
  featured?: boolean;
  boundaryNote?: string;
  whyExists?: string;
  whatMakesDifferent?: string;
  architectureThumb?: string;
  qualityGates?: QualityGateItem[];
  keyDecisions?: string[];
  tradeoffs?: string[];
  evolution?: EvolutionStage[];
  engineeringReview?: EngineeringReview;
};

export const projects: Project[] = [
  {
    id: 'bbi-ai-readiness',
    name: 'BBI AI Readiness Diagnostic Kit',
    summary:
      'Evidence-first public toolkit for scoring AI business value, data readiness, human oversight, governance, delivery readiness, and evidence quality.',
    problem:
      'Organizations often start AI work with a model or vendor before clarifying decisions, data, authority, failure modes, and evidence.',
    whyExists:
      'Built because enterprise AI adoption often fails before implementation begins.',
    whatMakesDifferent:
      'Emphasizes evidence collection, governance, and human authorization rather than model capability alone.',
    role: 'Author and maintainer — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['Python', 'GitHub Actions', 'CI', 'CodeQL', 'OpenSSF', 'Apache-2.0'],
    proofSignals: [
      'Released',
      'CI across Python 3.11–3.14',
      'CodeQL enabled',
      'Apache 2.0',
      'Documentation complete',
      'Public roadmap',
      'Discussion enabled',
    ],
    domains: ['AI', 'Governance'],
    architectureThumb:
      'Inputs → deterministic scoring dimensions → Markdown report → human review',
    qualityGates: [
      {label: 'Documentation', status: 'pass'},
      {label: 'CI', status: 'pass'},
      {label: 'Tests', status: 'pass'},
      {label: 'Security', status: 'pass'},
      {label: 'License', status: 'pass'},
      {label: 'Roadmap', status: 'pass'},
      {label: 'Accessibility', status: 'partial'},
      {label: 'Privacy Review', status: 'pass'},
    ],
    keyDecisions: [
      'CLI-first delivery before interactive UX',
      'Deterministic scoring over opaque model judgments',
      'Public-safe evidence language only',
    ],
    tradeoffs: [
      'CLI rigor before polished stakeholder UX',
      'Governance depth over model-benchmark theater',
    ],
    evolution: [
      {stage: 'Idea', label: 'Readiness before implementation'},
      {stage: 'Prototype', label: 'Scoring dimensions + CLI'},
      {stage: 'Release', label: 'v0.1.0 public kit', active: true},
      {stage: 'Current', label: 'Evidence-first diagnostic'},
      {stage: 'Next', label: 'Interactive assessment companion'},
    ],
    engineeringReview: {
      whyBuilt:
        'Enterprise AI programs burn budget when readiness, authority, and evidence are undefined.',
      whatSucceeded:
        'Public release with CI, deterministic scoring, and clear human-authority boundaries.',
      whatIdRedesign:
        'Earlier packaging of stakeholder-facing report templates alongside the CLI.',
      technicalDebt:
        'Interactive assessment remains planned; browser UX is not this repository.',
      lessons:
        'Evidence and governance dimensions must be first-class—not appendix items.',
      nextRelease: 'Interactive AI Readiness Assessment (planned companion surface)',
    },
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
        label: 'Discussions',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/discussions',
      },
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    repositoryUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
    documentationUrl: '/docs/enterprise-ai/ai-readiness-diagnostic',
    architectureUrl: '/architecture-explorer',
    releaseUrl:
      'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/releases/tag/v0.1.0',
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists:
      'Built to show how delay-risk ML should attach to ERP operations with human override—not autonomous replanning.',
    whatMakesDifferent:
      'Case-study structure (problem → tradeoffs → lessons) with explicit non-deployment honesty.',
    role: 'Architect and implementer — public portfolio system',
    technologies: [
      'Python',
      'ML evaluation',
      'API delivery patterns',
      'Batch and real-time scoring design',
    ],
    proofSignals: [
      'Active portfolio system',
      'Case documentation',
      'Human override required',
      'Synthetic/sanitized data boundary',
    ],
    domains: ['AI', 'ERP'],
    architectureThumb:
      'ERP-adjacent signals → features → model → batch/API scores → human review',
    qualityGates: [
      {label: 'Documentation', status: 'pass'},
      {label: 'CI', status: 'partial'},
      {label: 'Tests', status: 'partial'},
      {label: 'Security', status: 'partial'},
      {label: 'License', status: 'partial'},
      {label: 'Roadmap', status: 'pass'},
      {label: 'Accessibility', status: 'na'},
      {label: 'Privacy Review', status: 'pass'},
    ],
    keyDecisions: [
      'Batch scoring before real-time assist',
      'Human authority retained on interventions',
      'No client ROI claims without public evidence',
    ],
    tradeoffs: [
      'Architecture completeness vs. production deployment claims',
      'Portfolio clarity over vendor black-box scoring',
    ],
    evolution: [
      {stage: 'Idea', label: 'Promise-date risk signals'},
      {stage: 'Prototype', label: 'Feature + eval pipeline'},
      {stage: 'Release', label: 'Public repo + case docs'},
      {stage: 'Current', label: 'Active portfolio ML system', active: true},
      {stage: 'Next', label: 'Stronger evaluation evidence'},
    ],
    engineeringReview: {
      whyBuilt:
        'Operational delay signals need a transparent path from features to planner decisions.',
      whatSucceeded:
        'Clear architecture vocabulary and honest portfolio status labeling.',
      whatIdRedesign: 'Earlier segment-coverage reports as first-class artifacts.',
      technicalDebt:
        'Not a live client deployment; public evidence must stay gated to the repo.',
      lessons: 'Label causality and human override matter more than model novelty.',
      nextRelease: 'Stronger public evaluation and deployment-status clarity',
    },
    evidence: [
      {label: 'Repository', url: 'https://github.com/Tmgilliam/erp-ai-delay-risk'},
      {label: 'Documentation', url: '/docs/ai-ml-systems/erp-delay-risk'},
      {
        label: 'Related: containerized ML API',
        url: 'https://github.com/Tmgilliam/containerized-ml-api',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/erp-ai-delay-risk',
    documentationUrl: '/docs/ai-ml-systems/erp-delay-risk',
    architectureUrl: '/docs/ai-ml-systems/erp-delay-risk',
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
    whyExists:
      'Built so Staff/Principal reviewers can inspect systems thinking in under five minutes.',
    whatMakesDifferent:
      'Evidence-first publishing with Public Proof Gate, ADRs, and private-boundary discipline—not a résumé dump.',
    role: 'Author, designer, and maintainer',
    technologies: [
      'Docusaurus',
      'TypeScript',
      'GitHub Pages',
      'GitHub Actions',
      'CodeQL',
      'Lighthouse / a11y',
    ],
    proofSignals: [
      'Live product',
      'CI quality gate',
      'CodeQL enabled',
      'Public Proof Gate',
      'ADRs published',
      'Privacy boundary enforced',
    ],
    domains: ['Architecture', 'Governance'],
    architectureThumb: 'Docs + pages + CI → privacy scan → Proof Gate → Pages deploy',
    qualityGates: [
      {label: 'Documentation', status: 'pass'},
      {label: 'CI', status: 'pass'},
      {label: 'Tests', status: 'partial'},
      {label: 'Security', status: 'pass'},
      {label: 'License', status: 'pass'},
      {label: 'Roadmap', status: 'pass'},
      {label: 'Accessibility', status: 'pass'},
      {label: 'Privacy Review', status: 'pass'},
    ],
    keyDecisions: [
      'Docusaurus over custom CMS',
      'GitHub Pages static deploy',
      'Evidence-first homepage over vanity counters',
    ],
    tradeoffs: [
      'Static site speed and control vs. dynamic dashboards',
      'Honest maturity labels vs. inflated completeness',
    ],
    evolution: [
      {stage: 'Idea', label: 'Recruiter proof surface'},
      {stage: 'Prototype', label: 'Docusaurus bootstrap'},
      {stage: 'Release', label: 'v0.1.0 live site'},
      {stage: 'Current', label: 'Living platform + research', active: true},
      {stage: 'Next', label: 'Search + executive mode'},
    ],
    engineeringReview: {
      whyBuilt:
        'Leadership systems work needs an inspectable public surface with privacy boundaries.',
      whatSucceeded:
        'Mission Control, ADRs, research foundation, and honest catalog labels.',
      whatIdRedesign:
        'Earlier catalog-card UX instead of documentation-style project pages.',
      technicalDebt: 'Some proof signals remain manual; live CI badges are Phase 2.',
      lessons: 'Recruiters trust evidence links more than follower asks.',
      nextRelease: 'Catalog UX + broader case-study coverage',
    },
    evidence: [
      {label: 'Live site', url: 'https://tmgilliam.github.io'},
      {label: 'Repository', url: 'https://github.com/Tmgilliam/tmgilliam.github.io'},
      {
        label: 'Release v0.1.0',
        url: 'https://github.com/Tmgilliam/tmgilliam.github.io/releases/tag/v0.1.0',
      },
      {label: 'Architecture', url: '/architecture'},
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/tmgilliam.github.io',
    documentationUrl: '/docs/engineering-platform/',
    architectureUrl: '/architecture',
    demoUrl: 'https://tmgilliam.github.io',
    releaseUrl: 'https://github.com/Tmgilliam/tmgilliam.github.io/releases/tag/v0.1.0',
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists:
      'Built to show a governed path from ERP operational truth into cloud analytics platforms.',
    whatMakesDifferent:
      'Watermark sync and upgrade-path thinking—not a one-off export script.',
    role: 'Architect — public portfolio',
    technologies: ['Python', 'Azure', 'Watermark-based sync patterns'],
    proofSignals: [
      'Case study',
      'Azure-oriented pattern',
      'Related landing-zone reference',
    ],
    domains: ['ERP', 'Cloud', 'Architecture'],
    architectureThumb: 'ERP source → watermark sync → Azure landing → consumers',
    qualityGates: [
      {label: 'Documentation', status: 'partial'},
      {label: 'CI', status: 'partial'},
      {label: 'Tests', status: 'partial'},
      {label: 'Security', status: 'partial'},
      {label: 'License', status: 'partial'},
      {label: 'Roadmap', status: 'pass'},
      {label: 'Accessibility', status: 'na'},
      {label: 'Privacy Review', status: 'pass'},
    ],
    evidence: [
      {label: 'Repository', url: 'https://github.com/Tmgilliam/erp-cloud-integration'},
      {
        label: 'Related: Azure landing zone',
        url: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
      },
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/erp-cloud-integration',
    architectureUrl: '/docs/cloud-architecture/',
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
    whyExists:
      'Built to demonstrate CAF/WAF-aligned foundation patterns before workload scale.',
    whatMakesDifferent:
      'Landing-zone governance first—applications and AI come after control planes.',
    role: 'Architect — public portfolio',
    technologies: ['Azure', 'Bicep', 'CAF/WAF alignment'],
    proofSignals: [
      'Case study',
      'Infrastructure-as-code framing',
      'Enterprise Azure architecture',
    ],
    domains: ['Cloud', 'Architecture'],
    architectureThumb: 'Identity → network → management → landing zones → workloads',
    qualityGates: [
      {label: 'Documentation', status: 'partial'},
      {label: 'CI', status: 'partial'},
      {label: 'Tests', status: 'pending'},
      {label: 'Security', status: 'partial'},
      {label: 'License', status: 'partial'},
      {label: 'Roadmap', status: 'pass'},
      {label: 'Accessibility', status: 'na'},
      {label: 'Privacy Review', status: 'pass'},
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
      {label: 'Architecture docs', url: '/docs/cloud-architecture/'},
    ],
    repositoryUrl: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
    documentationUrl: '/docs/cloud-architecture/',
    architectureUrl: '/docs/cloud-architecture/architecture-principles',
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
    whyExists:
      'Built so public engineering can be governed like an enterprise platform, not a hobby org.',
    whatMakesDifferent:
      'Rulesets, proof gates, and least-privilege delivery—not README-only standards.',
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
    proofSignals: [
      'Org governance',
      'PR-only delivery patterns',
      'CodeQL / Dependabot / Scorecard',
      'Public Proof Gate',
    ],
    domains: ['Governance', 'Architecture'],
    architectureThumb:
      'Org standards → rulesets → CI gates → human merge → public surfaces',
    qualityGates: [
      {label: 'Documentation', status: 'pass'},
      {label: 'CI', status: 'pass'},
      {label: 'Tests', status: 'partial'},
      {label: 'Security', status: 'pass'},
      {label: 'License', status: 'pass'},
      {label: 'Roadmap', status: 'pass'},
      {label: 'Accessibility', status: 'partial'},
      {label: 'Privacy Review', status: 'pass'},
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
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists: 'Built to make public engineering sequencing inspectable.',
    whatMakesDifferent: 'Status and proof-gate fields over vanity roadmaps.',
    role: 'Founder — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['GitHub Projects', 'Public engineering governance'],
    proofSignals: ['Public backlog intent', 'Status fields', 'Sequenced initiatives'],
    domains: ['Governance'],
    evidence: [
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
      {
        label: 'BBI organization',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
      },
    ],
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists: 'Built to keep public claims evidence-backed and privacy-safe over time.',
    whatMakesDifferent:
      'Human merge remains mandatory—automation proposes, people publish.',
    role: 'Architect and implementer — BBI public proof system',
    technologies: [
      'YAML registry',
      'GitHub Actions',
      'Reusable workflows',
      'Privacy-boundary scans',
      'Public Proof Gate',
    ],
    proofSignals: [
      'Human-merge control',
      'Privacy scans',
      'Public Proof Gate',
      'Multi-surface publishing',
    ],
    domains: ['Governance', 'Architecture'],
    architectureThumb:
      'Registry → PR → privacy scan → Proof Gate → merge → deploy → verify',
    evidence: [
      {
        label: 'Repository',
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
    whyExists:
      'Built to standardize quality, privacy, and proof controls across public repos.',
    whatMakesDifferent:
      'Reusable gates for privacy and proof—not only build/test boilerplate.',
    role: 'Platform author — Brilliant Brainstorm Intelligence, LLC',
    technologies: ['GitHub Actions', 'Reusable workflows', 'Quality gates'],
    proofSignals: ['Platform engineering', 'Reusable CI', 'Privacy + proof workflows'],
    domains: ['Governance', 'Architecture'],
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
    whyExists:
      'Planned so readiness diagnostics can reach non-CLI stakeholders without losing rigor.',
    whatMakesDifferent:
      'Companion to the released CLI—not a replacement or rebrand of the same artifact.',
    role: 'Author — planned public product (target v0.2.0 line)',
    technologies: [
      'Browser delivery',
      'Client-side scoring',
      'Report generation',
      'Accessibility',
    ],
    proofSignals: ['Planned', 'Companion to released CLI', 'Accessibility required'],
    domains: ['AI', 'Governance'],
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
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists:
      'Planned to publish human-authority patterns before agent hype cycles rewrite them poorly.',
    whatMakesDifferent: 'Authorization and receipts first—capability demos second.',
    role: 'Author — planned public release',
    technologies: [
      'Human-in-the-loop design',
      'Execution receipts',
      'Governance patterns',
    ],
    proofSignals: ['Planned', 'Architecture reference'],
    domains: ['AI', 'Governance'],
    evidence: [
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
      {
        label: 'Related docs',
        url: '/docs/enterprise-ai/governed-agent-systems',
      },
    ],
    documentationUrl: '/docs/enterprise-ai/governed-agent-systems',
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists:
      'Planned to publish sanitized ERP judgment without exposing private employer systems.',
    whatMakesDifferent:
      'Operating tradeoffs and adoption decisions—not screenshots of confidential ERPs.',
    role: 'Author — planned public casebook',
    technologies: [
      'ERP transformation',
      'Warehouse / barcode systems',
      'Inventory costing',
      'Data quality',
      'Stakeholder adoption',
    ],
    proofSignals: ['Planned', 'Research-informed', 'Sanitized casebook'],
    domains: ['ERP', 'Architecture'],
    evidence: [
      {label: 'Related ERP docs', url: '/docs/erp-transformation/'},
      {
        label: 'Research foundation',
        url: '/docs/research/research-overview',
      },
      {
        label: 'Roadmap',
        url: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
      },
    ],
    documentationUrl: '/docs/erp-transformation/',
    roadmapUrl:
      'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
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
    whyExists: 'Planned as the durable public home for BBI engineering methods.',
    whatMakesDifferent: 'Org-level knowledge system—not a personal blog rebrand.',
    role: 'Architect — planned BBI public portal',
    technologies: ['GitHub Pages', 'Documentation architecture', 'Governance publishing'],
    proofSignals: ['Planned', 'Organization knowledge system'],
    domains: ['Governance', 'Architecture'],
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
    whyExists: 'Planned so every new public repo starts with proof and privacy controls.',
    whatMakesDifferent:
      'Proof Gate and privacy defaults baked in—not optional afterthoughts.',
    role: 'Platform author — planned public template',
    technologies: [
      'Repository templates',
      'CI',
      'CodeQL',
      'Dependabot',
      'OpenSSF Scorecard',
      'Public Proof Gate',
    ],
    proofSignals: ['Planned', 'Reusable platform asset'],
    domains: ['Governance'],
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

/** Engineering metrics for recruiter summary — computed, not vanity. */
export function getCatalogSummary() {
  const released = projects.filter((p) => p.status === 'Released').length;
  const active = projects.filter((p) => p.status === 'Active').length;
  const planned = projects.filter((p) => p.status === 'Planned').length;
  const caseStudies = projects.filter((p) => p.status === 'Case Study').length;
  const scored = projects.filter((p) => p.status !== 'Planned');
  const gatesPassed = scored.filter((p) => p.publicProofGate === 'Passed').length;
  const gateCoverage =
    scored.length === 0 ? 0 : Math.round((gatesPassed / scored.length) * 100);
  return {
    released,
    active,
    planned,
    caseStudies,
    architectureDecisions: 7,
    gateCoverage,
    total: projects.length,
  };
}

export type CatalogFilter = 'All' | ProjectDomain | ProjectStatus;

export function filterProjects(items: Project[], filter: CatalogFilter): Project[] {
  if (filter === 'All') return items;
  if (
    filter === 'Released' ||
    filter === 'Active' ||
    filter === 'Case Study' ||
    filter === 'Planned'
  ) {
    return items.filter((p) => p.status === filter);
  }
  return items.filter((p) => p.domains.includes(filter));
}

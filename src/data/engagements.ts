/**
 * Offer-readiness audit (2026-07-18)
 *
 * Executive keynotes ............ PLANNED / NOT PUBLIC as open booking
 * Conference speaking ........... PLANNED / NOT PUBLIC as open booking
 * Executive briefings ........... LIMITED AVAILABILITY
 * Technical workshops ........... LIMITED AVAILABILITY
 * AI readiness sessions ......... LIMITED AVAILABILITY (public kit released)
 * ERP / data-quality workshops .. LIMITED AVAILABILITY (sanitized public docs)
 * Human-in-the-loop workshops ... LIMITED AVAILABILITY
 * Strategic advisory ............ LIMITED AVAILABILITY (bounded; not retained)
 * Architecture reviews .......... LIMITED AVAILABILITY
 *
 * Contact: BBI Edge homepage contact section verified at www.bbiedge.com/#contact
 * Form: ENGAGEMENT_FORM_DEFERRED_PENDING_PRIVACY_AND_DELIVERY_REVIEW
 */

export type EngagementAvailability = 'Available' | 'Limited' | 'Planned';

export type EngagementFormat = {
  id: string;
  title: string;
  summary: string;
  audience: string[];
  outcomes: string[];
  availability: EngagementAvailability;
};

export type EngagementTopic = {
  id: string;
  title: string;
  audience: string[];
  coreQuestion: string;
  takeaways: [string, string, string];
  relatedProof: {label: string; url: string}[];
  formatSuitability: string[];
  availability: EngagementAvailability;
};

export type AudienceTranslation = {
  id: string;
  audience: string;
  focus: string;
};

export const engagementFormats: EngagementFormat[] = [
  {
    id: 'executive-briefings',
    title: 'Executive Briefings',
    summary:
      'Focused sessions for leaders evaluating AI, data, ERP modernization, governance, or operating-model decisions.',
    audience: [
      'Executive sponsors',
      'Transformation leaders',
      'Architecture and governance owners',
    ],
    outcomes: [
      'Clarify the actual decision',
      'Identify readiness and evidence gaps',
      'Separate implementation risk from technology hype',
      'Define human authority and accountability',
      'Establish the next bounded action',
    ],
    availability: 'Limited',
  },
  {
    id: 'technical-workshops',
    title: 'Technical Workshops',
    summary:
      'Working sessions for architecture, data, engineering, ERP, and operations teams designing governed and implementable systems.',
    audience: [
      'Architecture and engineering teams',
      'ERP and operations leaders',
      'Data and AI practitioners',
    ],
    outcomes: [
      'AI readiness and data risk framing',
      'Human-in-the-loop architecture patterns',
      'Evidence and decision controls',
      'ERP data-quality and inventory system reasoning',
      'Architecture decision records that survive scrutiny',
    ],
    availability: 'Limited',
  },
  {
    id: 'strategic-advisory',
    title: 'Strategic Advisory',
    summary:
      'Bounded architecture and strategy engagements for organizations navigating enterprise AI, ERP, data quality, human oversight, and implementation risk.',
    audience: [
      'Technology and transformation sponsors',
      'Enterprise architects',
      'Operating leaders accountable for delivery',
    ],
    outcomes: [
      'Map decisions to system boundaries and evidence',
      'Surface adoption and data-quality constraints early',
      'Define governance and human-authority checkpoints',
      'Produce a bounded next-step architecture or review package',
    ],
    availability: 'Limited',
  },
  {
    id: 'keynotes-conference',
    title: 'Keynotes and Conference Sessions',
    summary:
      'Clear, evidence-driven talks on enterprise AI adoption, ERP transformation, human authority, responsible automation, and the systems required to move from experimentation to operational value.',
    audience: [
      'Conference and community audiences',
      'Technical and executive mixed rooms',
    ],
    outcomes: [
      'Translate architecture into actionable decisions',
      'Show where evidence must precede implementation',
      'Connect governance to operating reality',
    ],
    availability: 'Planned',
  },
];

export const engagementTopics: EngagementTopic[] = [
  {
    id: 'evidence-before-implementation',
    title: 'Evidence Before Implementation: What Organizations Need Before an AI Build',
    audience: ['Executive sponsors', 'Architecture leads', 'Delivery owners'],
    coreQuestion:
      'What must be true — in decisions, data, authority, and evidence — before an AI build is justified?',
    takeaways: [
      'Ambition is not readiness; readiness is inspectable.',
      'Critical gaps in data, authority, or evidence should stop or reshape the build.',
      'Public diagnostic methods can make those gaps visible before spend accelerates.',
    ],
    relatedProof: [
      {
        label: 'Published article',
        url: '/blog/evidence-before-implementation',
      },
      {
        label: 'AI Readiness Diagnostic Kit',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
      },
      {
        label: 'Diagnostic documentation',
        url: '/docs/enterprise-ai/ai-readiness-diagnostic',
      },
    ],
    formatSuitability: ['Executive Briefings', 'Technical Workshops'],
    availability: 'Limited',
  },
  {
    id: 'human-authority-by-design',
    title:
      'Human Authority by Design: Building Human-in-the-Loop Systems That Can Be Trusted',
    audience: ['Architecture and engineering', 'Governance owners', 'Operations leaders'],
    coreQuestion:
      'Where must human authority remain explicit so automation can be trusted under consequence?',
    takeaways: [
      'Human oversight is an interface design problem, not a slogan.',
      'Authorization, escalation, and verification must be defined before agents act.',
      'Trust grows when failure modes and evidence paths are visible.',
    ],
    relatedProof: [
      {
        label: 'Governed agent systems documentation',
        url: '/docs/enterprise-ai/governed-agent-systems',
      },
      {
        label: 'Enterprise AI overview',
        url: '/docs/enterprise-ai/',
      },
    ],
    formatSuitability: ['Technical Workshops', 'Executive Briefings'],
    availability: 'Limited',
  },
  {
    id: 'erp-data-to-ai-readiness',
    title:
      'From ERP Data to AI Readiness: Why Operational Data Quality Determines AI Outcomes',
    audience: ['ERP and operations teams', 'Data owners', 'AI sponsors'],
    coreQuestion:
      'How do warehouse, inventory, costing, and master-data realities constrain AI outcomes?',
    takeaways: [
      'AI quality inherits ERP and operational data quality.',
      'Controls and definitions matter more than model novelty early on.',
      'Sanitized transformation patterns make the readiness conversation concrete.',
    ],
    relatedProof: [
      {
        label: 'ERP data-quality documentation',
        url: '/docs/erp-transformation/erp-data-quality',
      },
      {
        label: 'Warehouse and supply-chain patterns',
        url: '/docs/erp-transformation/supply-chain-and-warehouse',
      },
      {
        label: 'AI Readiness Diagnostic Kit',
        url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
      },
    ],
    formatSuitability: ['Technical Workshops', 'Executive Briefings'],
    availability: 'Limited',
  },
  {
    id: 'governed-agents',
    title: 'Governed Agents: Authorization, Evidence, Execution, and Verification',
    audience: [
      'Platform and architecture teams',
      'Security and governance',
      'AI product owners',
    ],
    coreQuestion:
      'How do you structure agent work so authorization, evidence, execution, and verification remain inspectable?',
    takeaways: [
      'Agents need permission boundaries before capability demos.',
      'Execution without verification is incomplete work.',
      'Public patterns should stay free of private operating details.',
    ],
    relatedProof: [
      {
        label: 'Governed agent systems documentation',
        url: '/docs/enterprise-ai/governed-agent-systems',
      },
      {
        label: 'Architecture decisions',
        url: '/docs/architecture-decisions/',
      },
    ],
    formatSuitability: ['Technical Workshops', 'Strategic Advisory'],
    availability: 'Limited',
  },
  {
    id: 'ai-adoption-operating-model',
    title: 'Why AI Adoption Is an Operating-Model Problem',
    audience: ['Executive leaders', 'Transformation offices', 'Architecture leads'],
    coreQuestion:
      'What operating-model changes are required for AI work to produce durable operational value?',
    takeaways: [
      'Tools do not adopt themselves; roles, controls, and incentives do.',
      'Implementation risk often lives outside the model.',
      'Evidence and accountability decide whether pilots become systems.',
    ],
    relatedProof: [
      {
        label: 'Enterprise AI documentation',
        url: '/docs/enterprise-ai/',
      },
      {
        label: 'Architecture principles',
        url: '/docs/cloud-architecture/architecture-principles',
      },
    ],
    formatSuitability: ['Executive Briefings', 'Strategic Advisory'],
    availability: 'Limited',
  },
  {
    id: 'erp-transformations-responsible-ai',
    title: 'What ERP Transformations Teach Us About Responsible AI',
    audience: ['ERP leaders', 'AI sponsors', 'Change and adoption owners'],
    coreQuestion:
      'Which lessons from ERP transformation — adoption, data quality, controls — transfer to responsible AI?',
    takeaways: [
      'Process reality beats slide-deck ambition.',
      'Adoption and data definitions are first-class architecture concerns.',
      'Responsible AI inherits the discipline of controlled enterprise change.',
    ],
    relatedProof: [
      {
        label: 'ERP transformation overview',
        url: '/docs/erp-transformation/',
      },
      {
        label: 'FIFO and inventory costing patterns',
        url: '/docs/erp-transformation/fifo-and-inventory-costing',
      },
    ],
    formatSuitability: ['Executive Briefings', 'Technical Workshops'],
    availability: 'Limited',
  },
];

export const audienceTranslations: AudienceTranslation[] = [
  {
    id: 'executive',
    audience: 'Executive leaders',
    focus:
      'Business value, operating risk, investment choices, governance, and adoption.',
  },
  {
    id: 'architecture-engineering',
    audience: 'Architecture and engineering teams',
    focus:
      'System boundaries, tradeoffs, failure modes, interfaces, evidence, and delivery.',
  },
  {
    id: 'operations-erp',
    audience: 'Operations and ERP teams',
    focus: 'Process reality, data quality, controls, adoption, and measurable outcomes.',
  },
];

export const bbiEngagementLinks = [
  {label: 'Visit BBI Edge', href: 'https://www.bbiedge.com/#contact'},
  {
    label: 'Explore BBI Engineering',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
  },
  {
    label: 'Review the AI Readiness Diagnostic',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
  },
] as const;

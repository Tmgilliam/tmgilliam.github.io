export type RecognitionStatus =
  | 'Winner'
  | 'Finalist'
  | 'Nominee'
  | 'Honoree'
  | 'Submitted'
  | 'Preparing'
  | 'Evidence Gap'
  | 'Research'
  | 'Certification'
  | 'Speaking'
  | 'Publication';

export type RecognitionItem = {
  id: string;
  awardingBody: string;
  awardOrRecognition: string;
  category?: string;
  year: string;
  status: RecognitionStatus;
  subject: string;
  verificationUrl?: string;
  notes?: string;
};

/** Only list results that are officially published. Preparing/Submitted are tracked in awards/, not claimed as wins. */
export const awardsWon: RecognitionItem[] = [];

export const finalistNomineeHonoree: RecognitionItem[] = [];

export const professionalRecognition: RecognitionItem[] = [
  {
    id: 'az-305',
    awardingBody: 'Microsoft',
    awardOrRecognition: 'Azure Solutions Architect Expert',
    category: 'AZ-305',
    year: 'Active',
    status: 'Certification',
    subject: 'Dr. Tatianna Gilliam',
    verificationUrl: '/docs/certifications/azure-architect',
  },
];

export const communityPrograms: RecognitionItem[] = [
  {
    id: 'github-stars-pathway',
    awardingBody: 'GitHub',
    awardOrRecognition: 'GitHub Stars pathway',
    year: '2026–2028',
    status: 'Research',
    subject: 'Dr. Tatianna Gilliam',
    notes: 'External nomination only. Not an application form. 12–24 month community-impact strategy.',
    verificationUrl: 'https://stars.github.com/',
  },
  {
    id: 'mvp-pathway',
    awardingBody: 'Microsoft',
    awardOrRecognition: 'MVP pathway',
    year: '2026–2028',
    status: 'Research',
    subject: 'Dr. Tatianna Gilliam',
    notes: 'Docs, Q&A, workshops, open-source Azure/AI community impact.',
    verificationUrl: 'https://mvp.microsoft.com/',
  },
];

export const activeAwardCandidates: RecognitionItem[] = [
  {
    id: 'stevie-2026-ai-leader',
    awardingBody: 'Stevie Awards for Women in Business',
    awardOrRecognition: 'AI Leader of the Year',
    year: '2026',
    status: 'Evidence Gap',
    subject: 'Dr. Tatianna Gilliam',
    notes:
      'Matrix 68/100 — do not submit below 85. Prefer Aug 19 final only if readiness clears. See awards/submissions/.',
    verificationUrl: 'https://women.stevieawards.com/',
  },
  {
    id: 'womentech-2026',
    awardingBody: 'Women in Tech Network',
    awardOrRecognition: 'AI & Digital Transformation Leader',
    year: '2026',
    status: 'Evidence Gap',
    subject: 'Dr. Tatianna Gilliam',
    notes: 'Deadline 2026-10-01. Matrix 70/100 — strengthen to ≥85 before nominating.',
    verificationUrl: 'https://www.womentech.net/',
  },
];

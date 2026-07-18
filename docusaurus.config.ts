import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Dr. Tatianna Gilliam',
  tagline: 'Enterprise AI, cloud architecture, ERP transformation, and governed systems.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://tmgilliam.github.io',
  baseUrl: '/',
  organizationName: 'Tmgilliam',
  projectName: 'tmgilliam.github.io',

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Tmgilliam/tmgilliam.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Tmgilliam/tmgilliam.github.io/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {
        name: 'description',
        content:
          'Executive technical portfolio for Dr. Tatianna Gilliam — enterprise AI, cloud architecture, ERP transformation, and governed systems.',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
      {
        property: 'og:description',
        content:
          'Enterprise AI, cloud architecture, ERP transformation, and governed systems with public technical proof.',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Dr. Tatianna Gilliam',
      logo: {
        alt: 'Dr. Tatianna Gilliam',
        src: 'img/profile/dr-gilliam.jpg',
      },
      items: [
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/architecture', label: 'Architecture', position: 'left'},
        {to: '/docs/erp-transformation/', label: 'ERP Transformation', position: 'left'},
        {to: '/docs/enterprise-ai/', label: 'Enterprise AI', position: 'left'},
        {to: '/writing', label: 'Writing', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/bbi', label: 'BBI', position: 'left'},
        {
          href: 'https://github.com/Tmgilliam',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/drtatianna-dba',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Projects', to: '/projects'},
            {label: 'Architecture', to: '/architecture'},
            {label: 'Enterprise AI', to: '/docs/enterprise-ai/'},
            {label: 'ERP Transformation', to: '/docs/erp-transformation/'},
          ],
        },
        {
          title: 'Public Proof',
          items: [
            {
              label: 'BBI Engineering',
              href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
            },
            {
              label: 'AI Readiness Kit',
              href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
            },
            {label: 'Writing', to: '/writing'},
            {label: 'Contact', to: '/contact'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/Tmgilliam'},
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/drtatianna-dba',
            },
            {label: 'BBI Edge', href: 'https://bbiedge.com'},
          ],
        },
      ],
      copyright: `Copyright Â© ${new Date().getFullYear()} Dr. Tatianna Gilliam. Public technical proof only — no private systems or client data.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dr. Tatianna Gilliam',
        url: 'https://tmgilliam.github.io',
        jobTitle: 'Enterprise AI & Cloud Architect',
        description:
          'Enterprise AI, cloud architecture, ERP transformation, and governed systems.',
        sameAs: [
          'https://github.com/Tmgilliam',
          'https://www.linkedin.com/in/drtatianna-dba',
          'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
          'https://bbiedge.com',
        ],
        affiliation: {
          '@type': 'Organization',
          name: 'Brilliant Brainstorm Intelligence, LLC',
          url: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
        },
      }),
    },
  ],
};

export default config;

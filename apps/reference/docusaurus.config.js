// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('@kiwicopple/prism-react-renderer/themes/vsDark')
const darkCodeTheme = require('@kiwicopple/prism-react-renderer/themes/vsDark')
const mainNavbar = require('./nav/_referenceNavbar')

const baseUrl = '/docs/'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Supabase',
  tagline: 'The open source Firebase alternative.',
  url: 'https://supabase.com',
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  themes: ['docusaurus-theme-search-typesense'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'supabase', // Usually your GitHub org/user name.
  projectName: 'supabase.tools', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./nav/_referenceSidebars.js'),
          breadcrumbs: false,
          editUrl:
            'https://github.com/supabase/supabase/edit/master/apps/reference',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        // title: 'Supabase Docs',
        logo: {
          alt: 'Supabase Docs',
          href: 'https://supabase.com',
          target: '_self',
          src: '/img/supabase-logo-wordmark--light.svg',
          srcDark: '/img/supabase-logo-wordmark--dark.svg',
        },
        items: mainNavbar.buildNavbar({ baseUrl }),
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Blog',
                to: 'https://supabase.com/blog',
              },
              {
                label: 'Open source',
                to: '/oss',
              },
              {
                label: 'Terms of Service',
                to: '/docs/company/terms',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/company/privacy',
              },
              {
                label: 'Acceptable Use Policy',
                to: '/docs/company/aup',
              },
              {
                label: 'Service Level Agreement',
                to: '/docs/company/sla',
              },
              {
                label: 'Humans.txt',
                to: 'https://supabase.com/humans.txt',
              },
              {
                label: 'Lawyers.txt',
                to: 'https://supabase.com/lawyers.txt',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Brand Assets',
                to: 'https://supabase.com/brand-assets',
              },
              {
                label: 'Docs',
                to: 'https://supabase.com/docs',
              },
              {
                label: 'Pricing',
                to: 'https://supabase.com/pricing',
              },
              {
                label: 'Support',
                to: '/support',
              },
              {
                label: 'System Status',
                to: 'https://status.supabase.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'SupaSquad',
                href: 'https://supabase.com/docs/handbook/supasquad',
              },
              {
                label: 'Contributing',
                href: 'https://supabase.com/docs/handbook/contributing',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/supabase/supabase',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/supabase',
              },
              {
                label: 'DevTo',
                href: 'https://dev.to/supabase',
              },
              {
                label: 'RSS',
                href: 'https://supabase.com/rss.xml',
              },
              {
                label: 'Discord',
                href: 'https://discord.supabase.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Supabase.`,
      },
      prism: {
        additionalLanguages: ['dart'],
        plugins: ['line-numbers', 'show-language'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      typesense: {
        typesenseCollectionName: 'supabase', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

        typesenseServerConfig: {
          nodes: [
            {
              host: 'doc-search.supabase.com',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 't0HAJQy4KtcMk3aYGnm8ONqab2oAysJz',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
    }),
  scripts: [{ src: '/docs/scripts/telemetry.js' }],
}

module.exports = config
import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Project Spirare',
  tagline: 'POML describes 3D content',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.spirare.hololab.co.jp',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HoloLabInc', // Usually your GitHub org/user name.
  projectName: 'project-spirare-document-site', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['ja', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '日本語',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Project Spirare',
      logo: {
        alt: 'Project Spirare Logo',
        src: 'img/spirare_256x256.png',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        /*
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub (Spirare Browser)',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        */
        {
          title: 'GitHub',
          items: [
            {
              label: 'ProjectSpirare-for-Unity (Spirare Browser)',
              href: 'https://github.com/HoloLabInc/ProjectSpirare-for-Unity',
            },
            {
              label: 'spirare-babylonjs (Spirare Editor)',
              href: 'https://github.com/HoloLabInc/spirare-babylonjs',
            },
            {
              label: 'project-spirare-docs (POML specification)',
              href: 'https://github.com/HoloLabInc/project-spirare-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HoloLab Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PotentiaMod Documentation',
  url: 'https://potentiamod.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'PotentiaMod',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'PotentiaMod Documentation',
      items: [
        {
          href: 'https://types.turbowarp.org/',
          label: 'Type Reference',
          position: 'left'
        },
        {
          href: 'https://potentiamod.github.io/',
          label: 'PotentiaMod',
          position: 'right'
        },
        {
          href: 'https://github.com/PotentiaMod',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
      midnightTheme: require('./code-themes/midnight'),
      additionalLanguages: ['json']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

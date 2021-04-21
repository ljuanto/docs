const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/docs/';

module.exports = {
  title: 'crust{.js}',
  tagline: 'Crust does JavaScript',
  url: 'https://polkadot.js.org',
  baseUrl: BASE_URL,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'crustio',
  onBrokenLinks: 'warn',
  projectName: 'docs',
  stylesheets: [],
  themeConfig: {
    navbar: {
      title: 'crust{.js}',
      logo: {
        alt: 'crust{.js}',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://apps.crust.network/',
          label: 'Apps UI (Wallet)',
          position: 'right',
        },
        {
          href: 'https://github.com/crustio/docs-1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {}
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/crustio/docs-1/edit/master/',
        routeBasePath: '/'
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/crustio/docs-1/edit/master/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      }
    }]
  ]
};

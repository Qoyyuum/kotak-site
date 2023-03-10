const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Kotak - Shopify But Free',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Qoyyuum/kotak-site',
    repoLabel: "Contribute!",
    docsDir: 'src',
    //editLinks: true,
    //editLinkText: 'Help us improve this page!',
    lastUpdated: "Last Updated",
    nextLinks: true,
    prevLinks: true,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "Search...",
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'FAQ',
        link: '/faq/'
      },
      {
        text: 'Follow Us on Instagram',
        link: 'https://instagram.com/kotaknetwork'
      },
      {
        text: 'Like Us on Facebook',
        link: 'https://facebook.com/kotaknetworkofficial'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'add-to-cart',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

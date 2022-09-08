export default {
  base: '/',
  title: "niuiic's Blog",
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.png' }]],
  themeConfig: {
    siteTitle: "niuiic's Blog",
    logo: '/favicon.png',
    nav: [
      // {
      //   text: 'Drop Menu',
      //   items: [
      //     {
      //       items: [
      //         { text: 'Item A1', link: '/item-A1' },
      //         { text: 'Item A2', link: '/item-A2' }
      //       ]
      //     },
      //     {
      //       items: [
      //         { text: 'Item B1', link: '/item-B1' },
      //         { text: 'Item B2', link: '/item-B2' }
      //       ]
      //     }
      //   ]
      // },
      { text: 'Articles', link: '/articles/index' },
      { text: 'Demos', link: 'https://github.com/niuiic/blog/tree/main/demos' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/niuiic' }],
    // sidebar: [
    //   {
    //     text: '组件库源码实现',
    //     collapsible: true,
    //     collapsed: true,
    //     items: [
    //       {
    //         text: '组件库环境搭建',
    //         link: '/articles/组件库环境搭建'
    //       },
    //       { text: 'gulp的使用', link: '/articles/gulp的使用' }
    //     ]
    //   },
    //   {
    //     text: 'vue教程',
    //     items: [
    //       {
    //         text: 'pina和vuex',
    //         link: '/articles/pina和vuex'
    //       }
    //     ]
    //   }
    // ],
    footer: {
      copyright: 'Copyright © 2022-present niuiic. All Rights Reserved.'
    },
    lastUpdatedText: 'Updated Date'
  }
}

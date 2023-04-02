import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  // lang: 'en-US',
  title: 'iiii',
  description: '使用 Vitepress 搭建组件库文档站点。',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    },

    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',

    // algolia: {
    //   appId: 'O610D14WMG',
    //   apiKey: '872c1872e57f9917543881dcc8dd7ba2',
    //   indexName: 'team'
    // },

    algolia: {
      appId: 'HANTQYRENZ',
      apiKey: '55f373ff704c0060da7babe9c0310425',
      indexName: 'team-doc'
    },

    // nav
    nav,

    // sidebar
    sidebar,

    // editLink: {
    //   pattern: 'http://www.google.com',
    //   text: '在 GitHub 上编辑此页'
    // },

    socialLinks: [
      { icon: 'github', link: 'http://www.github.com' },
      { icon: 'discord', link: 'http://www.discord.com' },
      { icon: 'twitter', link: 'http://www.twitter.com' },
      { icon: 'youtube', link: 'http://www.youtube.com' },
      { icon: 'instagram', link: 'http://www.instagram.com' },
      { icon: 'linkedin', link: 'http://www.linkedin.com' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 敲敲撬撬'
    }
  }
})

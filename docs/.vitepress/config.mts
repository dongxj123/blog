import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的博客",
  description: "分享技术、生活与思考",
  base: '/blog/', // GitHub Pages 仓库名
  
  // 移动端优化配置
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/blog/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📝 博客', link: '/diary/' },
      { 
        text: '📅 最新文章',
        items: [
          { text: '软考系统架构师：信息系统基础知识全面解析', link: '/diary/2025-08-25-information-systems-guide' },
          { text: '软考系统架构师：网络协议与端口速记宝典', link: '/diary/2025-08-22-network-protocols' },
          { text: '软考系统架构师：数据库三级模式与设计详解', link: '/diary/2025-08-20-database-architecture' },
          { text: '系统架构设计师考试资料整理', link: '/diary/2025-08-16-architecture-exam-materials' },
          { text: '嵌入式系统设计与开发全面解析', link: '/diary/2025-08-15-embedded-systems' },
          { text: '存储系统深度解析与性能优化', link: '/diary/2025-08-15-storage-systems' }
        ]
      },
      { text: '📚 示例', link: '/markdown-examples' }
    ],

    sidebar: {
      '/diary/': [
        {
          text: '� 博客导航',
          items: [
            { text: '🏠 博客首页', link: '/diary/' }
          ]
        },
        {
          text: '📅 2025年',
          collapsed: false,
          items: [
            {
              text: '📅 8月',
              collapsed: false,
              items: [
                {
                  text: '25日',
                  collapsed: false,
                  items: [
                    { text: '软考系统架构师：信息系统基础知识全面解析', link: '/diary/2025-08-25-information-systems-guide' }
                  ]
                },
                {
                  text: '22日',
                  collapsed: false,
                  items: [
                    { text: '软考系统架构师：网络协议与端口速记宝典', link: '/diary/2025-08-22-network-protocols' }
                  ]
                },
                {
                  text: '20日',
                  collapsed: false,
                  items: [
                    { text: '软考系统架构师：数据库三级模式与设计详解', link: '/diary/2025-08-20-database-architecture' }
                  ]
                },
                {
                  text: '16日',
                  collapsed: false,
                  items: [
                    { text: '系统架构设计师考试资料整理', link: '/diary/2025-08-16-architecture-exam-materials' }
                  ]
                },
                {
                  text: '15日',
                  collapsed: false,
                  items: [
                    { text: '嵌入式系统设计与开发全面解析', link: '/diary/2025-08-15-embedded-systems' },
                    { text: '存储系统深度解析与性能优化', link: '/diary/2025-08-15-storage-systems' }
                  ]
                },
                {
                  text: '14日',
                  collapsed: false,
                  items: [
                    { text: '指令流水线计算详解与实战', link: '/diary/2025-08-14-pipeline-calculation' },
                    { text: '软考系统架构师：寻址方式详解', link: '/diary/2025-08-14-addressing-modes' }
                  ]
                },
                {
                  text: '09日',
                  collapsed: false,
                  items: [
                    { text: 'Vue keep-alive 缓存机制详解', link: '/diary/2025-08-09-vue-keep-alive' }
                  ]
                },
                {
                  text: '07日',
                  collapsed: false,
                  items: [
                    { text: 'React 和 Vue3 路由导航解析', link: '/diary/2025-08-07-react-vue-router' }
                  ]
                },
                {
                  text: '06日',
                  collapsed: false,
                  items: [
                    { text: 'React Render Props vs Vue 插槽', link: '/diary/2025-08-06-react-render-props' },
                    { text: '开始写博客', link: '/diary/2025-08-06' }
                  ]
                },
                {
                  text: '05日',
                  collapsed: false,
                  items: [
                    { text: '周末的思考', link: '/diary/2025-08-05' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/': [
        {
          text: '示例',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongxj123/blog' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索博客',
            buttonAriaLabel: '搜索博客'
          },
          modal: {
            noResultsText: '无法找到相关博客',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    footer: {
      message: '分享知识，记录成长',
      copyright: 'Copyright © 2025 我的博客'
    }
  }
})

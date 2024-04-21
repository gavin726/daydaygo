import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DayDayGo",
  description: "A VitePress Site",
  base: "/go-journey",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      },
      {
        text: 'Go',
        items: [
          {text: 'Channel', link: '/go/channel'}
          // {text: 'go routine', link: '/go/goroutine'},
        ],
      },
      {
        text: 'GRPC',
        items: [
          // { text: '介绍', link: '/grpc/introduction' },
        ],
      },
      {
        text: 'Kafka',
        items: [
          // { text: '介绍', link: '/kafka/introduction' },
        ],
      },
      {
        text: 'MySQL',
        items: [
          // { text: '介绍', link: '/mysql/introduction' },
        ],
      },
      {
        text: '操作系统',
        items: [
          // { text: 'Linux', link: '/os/linux' },
        ],
      },
      {
        text: '计算机网络',
        items: [
          // { text: 'OSI', link: '/network/osi' },
        ],
      },
      {
        text: 'Docker',
        items: [
          // { text: 'Docker', link: '/docker/docker' },
        ],
      },
      {
        text: 'K8S',
        items: [
          // { text: 'K8S', link: '/k8s/k8s' },
        ],
      },
      {
        text: '分布式',
        items: [
          // { text: 'CAP', link: '/distributed/cap' },
        ],
      },
      {
        text: '数据结构与算法',
        items: [
          // { text: '数据结构', link: '/algorithm/data-structure' },
        ],
      },
      {
        text: 'Redis',
        items: [
          // { text: 'Redis', link: '/redis/redis' },
        ],
      },
      {
        text: '设计模式',
        items:[
          // { text: '设计模式', link: '/design-pattern/design-pattern' },
        ]
      },
      {
        text: '系统设计',
        items:[
          // { text: '系统设计', link: '/system-design/system-design' },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

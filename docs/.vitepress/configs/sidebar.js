export default {
  '/nodejs/': getNodejsSidebar(),
  '/vue/': getVueSidebar(),
  '/midjourney/': getMidjourneySidebar(),
  '/contact/':getContactSidebar(),
  '/about/':getAboutSidebar(),
  '/env/':getEnvSidebar(),
  '/monorepo':getMonorepoSidebar(),
  '/chatgpt':getChatGPTSidebar()
}

function getNodejsSidebar() {
  return [
    {
      text: 'nodejs',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/nodejs/'
        },
      ]
    }
  ]
}

function getVueSidebar() {
  return [
    {
      text: 'vue组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/vue/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/vue/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/vue/modal'
        },
        {
          text: 'Tag 标签',
          link: '/vue/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/vue/vue'
        },
        {
          text: 'Vue Script',
          link: '/vue/vue-script'
        },
        {
          text: 'css',
          link: '/vue/css'
        },
      ]
    }
  ]
}

function getMidjourneySidebar() {
  return [
    {
      text: 'Midjourney',
      items: [
        {
          text: '开始',
          link: '/midjourney/'
        },
        {
          text: '画图',
          link: '/midjourney/imagine'
        },
        {
          text: '原始画图',
          link: '/midjourney/originImagine'
        },
        {
          text: '按钮操作',
          link: '/midjourney/button'
        },

        {
          text: '等待任务数',
          link: '/midjourney/waiting'
        },
        {
          text: '绘画任务数',
          link: '/midjourney/pending'
        },
        {
          text: '当前任务',
          link: '/midjourney/job'
        },
        {
          text: '回调',
          link: '/midjourney/webhook'
        }
        // {
        //   text: '刷新',
        //   link: '/midjourney/refresh'
        // }
      ]
    }
  ]
}
function getContactSidebar() {
  return [
    {
      text: '联系我们',
      link: '/contact/'
    }
  ]
}
function getAboutSidebar() {
  return [
    {
      text: '关于我们',
      link: '/about/'
    }
  ]
}
function getEnvSidebar() {
  return [
    {
      text: '环境',
      items: [
        {
          text: '开发运行环境',
          link: '/env/'
        },
        
      ]
    }
  ]
}
function getMonorepoSidebar() {
  return [
    {
      text: 'monorepo',
      items: [
        {
          text: 'monorepo',
          link: '/monorepo/'
        },
        
      ]
    }
  ]
}
function getChatGPTSidebar() {
  return [
    {
      text: 'ChatGPT',
      items: [
        {
          text: '调教指南',
          link: '/chatgpt/'
        },
        
      ]
    }
  ]
}
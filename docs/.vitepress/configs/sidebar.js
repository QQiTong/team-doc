export default {
  '/nodejs/': getNodejsSidebar(),
  '/vue/': getVueSidebar(),
  '/git/': getGitSidebar(),
  '/linux/':getLinuxSidebar(),
  '/docker/':getDockerSidebar(),
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
        }
      ]
    }
  ]
}

function getGitSidebar() {
  return [
    {
      text: 'Git',
      items: [
        {
          text: 'git常用命令',
          link: '/git/'
        },
        {
          text: 'git提交规范',
          link: '/git/commit'
        }
      ]
    }
  ]
}
function getLinuxSidebar() {
  return [
    {
      text: 'Linux',
      items: [
        {
          text: 'linux常用命令',
          link: '/linux/'
        },
        {
          text: 'linux安装三方软件',
          link: '/linux/linux-install-third'
        }
      ]
    }
  ]
}
function getDockerSidebar() {
  return [
    {
      text: 'docker',
      items: [
        {
          text: 'docker常用命令',
          link: '/docker/'
        },
        {
          text: 'docker不使用hub',
          link: '/docker/docker-hub'
        }
      ]
    }
  ]
}

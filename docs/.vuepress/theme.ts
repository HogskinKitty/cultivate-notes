import {hopeTheme} from "vuepress-theme-hope"
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  // 网站部署域名
  hostname: "https://hogskinkitty.line.pm",

  // 导航栏图标
  logo: "/logo.png",

  // 站点图标
  favicon: "/favicon.ico",

  // 设置图标资源
  iconAssets: "iconify",

  // 导航栏标题
  navbarTitle: "cultivate-notes",

  // 是否在导航栏显示仓库链接
  repoDisplay: true,

  // 导航栏仓库按钮的无障碍标签
  repoLabel: "GitHub",

  // 仓库链接
  repo: "https://github.com/HogskinKitty/cultivate-notes",

  // 文档在仓库中的目录
  docsDir: "docs",

  // 文档所在分支
  docsBranch: "master",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 深色模式支持选项
  darkmode: "switch",

  // 热更新
  hotReload: true,

  // 全局作者信息
  author: {
    name: "HogskinKitty",
    url: "https://hogskinkitty.line.pm",
  },

  // 插件配置
  plugins: {
    // Markdown 增强插件
    markdownTab: {
      // 选项卡
      tabs: true,
    },
    markdownHint: {
      // GFM 警告
      alert: true,
      // 提示容器
      hint: true,
    },
    mdEnhance: {
      // 自定义对齐
      align: true,
      // 是否启用属性支持
      attrs: true,
      // Markdown 导入支持
      include: true,
      // 标记
      mark: true,
      // Mermaid 支持
      mermaid: true,
    },
    markdownImage: {
      // 图片标题
      figure: true,
      // 图片懒加载
      lazyload: true,
      // 图片标记
      mark: true,
      // 图片大小
      size: true,
    },

    // 搜索插件
    searchPro: {},
  },
})
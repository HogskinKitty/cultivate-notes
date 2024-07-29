import {viteBundler} from "@vuepress/bundler-vite"
import {defineUserConfig} from "vuepress"
import theme from "./theme";

export default defineUserConfig({
    // 打包方式
    bundler: viteBundler(),

    // 主题
    theme,

    // 语言
    lang: "zh-CN",

    // 标题
    title: "cultivate-notes",

    // 描述
    description: "cultivate-notes is a notes for computer science",

    // 页面头信息
    head: [],
})
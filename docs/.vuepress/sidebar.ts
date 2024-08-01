import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/java/":[
        {
            text: "基础知识",
            prefix: "basic/",
            icon: "icon-park-twotone:book-one",
            children: "structure",
            collapsible: true,
        },
        {
            text: "集合框架(容器)",
            prefix: "collection",
            icon: "ion:beaker",
            children: "structure",
            collapsible: true,
        },
        {
            text: "异常处理",
            prefix: "exception",
            icon: "ant-design:exception-outlined",
            children: "structure",
            collapsible: true,
        },
        {
            text: "Java IO",
            prefix: "IO",
            icon: "vscode-icons:file-type-light-io",
            children: "structure",
            collapsible: true,
        },
        {
            text: "网络编程",
            prefix: "network-programming",
            icon: "tabler:world-code",
            children: "structure",
            collapsible: true,
        },
        {
            text: "多线程",
            prefix: "thread",
            icon: "mingcute:menu-line",
            children: "structure",
            collapsible: true,
        },
        {
            text: "并发编程",
            prefix: "concurrent-programming",
            icon: "raphael:fork",
            children: "structure",
            collapsible: true,
        },
        {
            text: "JVM",
            prefix: "jvm",
            icon: "grommet-icons:virtual-machine",
            children: "structure",
            collapsible: true,
        },
    ],
});
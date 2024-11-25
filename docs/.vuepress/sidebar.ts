import {sidebar} from "vuepress-theme-hope";

export default sidebar({
  "/java/": [
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
    {
      text: "系统架构",
      prefix: "system-architecture",
      icon: "hugeicons:structure-01",
      children: "structure",
      collapsible: true,
    },
  ],
  "/database/": [
    {
      text: "MySQL",
      prefix: "mysql",
      icon: "devicon:mysql",
      children: "structure",
      collapsible: true,
    },
  ],
  "/algorithm/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/design-pattern/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/middleware/": [
    {
      text: "Redis",
      prefix: "redis",
      icon: "devicon:redis",
      children: "structure",
      collapsible: true,
    },
    {
      text: "RabbitMQ",
      prefix: "rabbitmq",
      icon: "devicon:rabbitmq",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Kafka",
      prefix: "kafka",
      icon: "simple-icons:apachekafka",
      children: "structure",
      collapsible: true,
    },
    {
      text: "RocketMQ",
      prefix: "rocketmq",
      icon: "simple-icons:apacherocketmq",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Dubbo",
      prefix: "dubbo",
      icon: "devicon:dubbo",
      children: "structure",
      collapsible: true,
    },
  ],
  "/third-party-technology/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/system-framework/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/tools/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/ai-llm/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/dev-ops/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/computer-basics/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
  "/front/": [
    {
      text: "",
      prefix: "",
      icon: "",
      children: "structure",
      collapsible: true,
    },
  ],
});
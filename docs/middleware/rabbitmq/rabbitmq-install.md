---
title: 安装指南
date: 2024-07-24
category:
  - 中间件
tag:
  - RabbitMQ
order: 2
---

## Linux 安装

**前置条件**

- 操作系统：CentOS 7 或 Ubuntu 20.04 以上
- Erlang 环境：RabbitMQ 需要 Erlang 支持

**安装步骤**

1. **安装 Erlang**

- CentOS:

```bash
yum install epel-release

yum install erlang
```

- Ubuntu:

```bash
apt-get update

apt-get install erlang
```

2. **安装 RabbitMQ**

- CentOS:

```bash
rpm --import https://packagecloud.io/rabbitmq/rabbitmq-server/gpgkey

yum install rabbitmq-server
```

- Ubuntu:

```bash
apt-get install rabbitmq-server
```

3. **启动服务**

```bash
systemctl start rabbitmq-server

systemctl enable rabbitmq-server
```

4. **启用管理插件**

```bash
rabbitmq-plugins enable rabbitmq_management
```

**验证安装**

- 访问管理界面：http://localhost:15672
- 默认用户名/密码：guest/guest

## Docker 安装

**单节点安装**

```bash
docker run -d --name rabbitmq \
    -p 5672:5672 \
    -p 15672:15672 \
    -e RABBITMQ_DEFAULT_USER=admin \
    -e RABBITMQ_DEFAULT_PASS=admin \
    rabbitmq:rabbitmq:3.12.14
```

**Docker Compose 安装**

创建一个 `docker-compose.yml` 文件：

```yaml
version: '3.8'
services:
  rabbitmq:
    image: rabbitmq:3.12.14
    container_name: rabbitmq
    restart: always
    ports:
      - "5672:5672"
      - "15672:15672"
    environment:
      RABBITMQ_DEFAULT_USER: admin
      RABBITMQ_DEFAULT_PASS: admin
    command: rabbitmq-server
    volumes:
      - ./rabbitmq/enabled_plugins:/etc/rabbitmq/enabled_plugins
```

**启动服务**

```bash
docker-compose -f docker-compose.yml up -d
```

**验证安装**

- 访问管理界面：http://localhost:15672
- 默认用户名/密码：admin/admin

## Mac 安装

**使用 Homebrew 安装**

```bash
brew install rabbitmq

brew services start rabbitmq
```

**验证安装**

- 访问管理界面：http://localhost:15672
- 默认用户名/密码：guest/guest

## 常见问题

**端口占用**

```bash
lsof -i:5672

lsof -i:15672
```

**权限问题**

```bash
rabbitmqctl add_user admin password

rabbitmqctl set_user_tags admin administrator

rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
```

**内存不足**

编辑 `/etc/rabbitmq/rabbitmq.conf`：

```bash
vm_memory_high_watermark.relative = 0.4
```

更多信息请参考 [RabbitMQ 官方文档](https://www.rabbitmq.com/documentation.html)。

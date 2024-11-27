---
title: 安装指南
date: 2024-07-24
category:
  - 中间件
tag:
  - RabbitMQ
order: 2
---

## Docker

> [!tip]
> 本教程使用 RabbitMQ 3.12.14 版本，如需安装最新版本，请删除版本号则默认安装最新版本。

1. **安装步骤**

::: tabs

@tab docker

```bash
docker run -d --name rabbitmq \
    -p 5672:5672 \
    -p 15672:15672 \
    -e RABBITMQ_DEFAULT_USER=admin \
    -e RABBITMQ_DEFAULT_PASS=admin \
    rabbitmq:3.12.14
```

@tab docker-compose

- 创建`docker-compose.yml` 文件

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

- 启动容器

```bash
docker-compose -f docker-compose.yml up -d
```

:::

2. **验证安装**

- 访问管理界面：http://localhost:15672

- 默认用户名/密码：admin/admin

- 登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。

> [!info]
> 如果无法访问管理界面,需要先启用管理插件:
> ```bash
> docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_management
> ```

## CentOS

> [!warning]
> - 在安装 RabbitMQ 之前，您必须安装受支持的 Erlang/OTP 版本。
>
> - RabbitMQ 与 Erlang 版本兼容性，请参考 [Erlang 版本要求](https://www.rabbitmq.com/docs/which-erlang)

1. **安装 Erlang**

- 下载 Erlang RPM 包

    - [GitHub 下载 Erlang RPM 包](https://github.com/rabbitmq/erlang-rpm/releases)

    - [Gitee 下载 Erlang RPM 包](https://github.com/rabbitmq/erlang-rpm/releases)

- SFTP 工具上传 Erlang RPM 包至 CentOS

  以 /dev-ops 目录为例，将 Erlang RPM 包至 CentOS 的 /dev-ops 目录下

```bash
mkdir /dev-ops && cd /dev-ops
```

- 命令安装

```bash
rpm -ivh erlang-26.2.5.5-1.el9.x86_64.rpm
```

```bash 
# 输出结果
warning: erlang-26.2.5.5-1.el9.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 6026dfca: NOKEY
Verifying...                          ################################# [100%]
Preparing...                          ################################# [100%]
Updating / installing...
   1:erlang-26.2.5.5-1.el9            ################################# [100%]
```

- 验证安装

```bash
erl -version
```

```bash
# 输出结果
Erlang (SMP,ASYNC_THREADS) (BEAM) emulator version 14.2.5.4
```

2. **安装 RabbitMQ**

- 下载 RabbitMQ

    - [GitHub 下载](https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.12.14/rabbitmq-server-3.12.14-1.el8.noarch.rpm)

- SFTP 工具上传 Erlang RPM 包至 CentOS

  以 /dev-ops 目录为例，将 Erlang RPM 包至 CentOS 的 /dev-ops 目录下

```bash
cd /dev-ops
```

- 命令安装

```bash
sudo rpm -ivh rabbitmq-server-3.12.14-1.el8.noarch.rpm 
```

3. 启动和配置 RabbitMQ

- 启动

```bash
sudo systemctl start rabbitmq-server
```

- 检查服务状态

```bash
sudo systemctl status rabbitmq-server
```

- 设置 RabbitMQ 开机自启

```bash
sudo systemctl enable rabbitmq-server
```

4. 配置管理插件

```bash
sudo rabbitmq-plugins enable rabbitmq_management
```

5. 增加远程访问用户并配置权限

> [!tip]
> 默认用户名/密码 guest/guest 只能本地登录，无法远程登录，所以需要增加用户并配置权限。

```bash
sudo rabbitmqctl add_user admin admin

sudo rabbitmqctl set_permissions -p / admin "." "." ".*"

sudo rabbitmqctl set_user_tags admin administrator
```

6. **验证安装**

- 访问管理界面：http://your_server_ip:15672

- 用户名/密码：admin/admin

- 登录成功后可以看到 RabbitMQ 的管理控制台界面，说明安装成功。

## MacOS

## Windows

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


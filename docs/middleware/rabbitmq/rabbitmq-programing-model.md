---
title: 编程模型
date: 2024-11-28
category:
  - 中间件
tag:
  - RabbitMQ
order: 4
---

## 创建连接

在 RabbitMQ 中，连接（Connection）是客户端和 RabbitMQ 服务器之间的物理网络连接，基于 TCP 协议。创建连接是使用 RabbitMQ 的第一步。

连接参数：

- host：RabbitMQ 服务器地址
- port：端口号（默认 5672）
- username：用户名（默认 guest）
- password：密码（默认 guest）
- virtualHost：虚拟主机（默认 /）

连接示例：

```java
ConnectionFactory factory = new ConnectionFactory();
factory.setHost("localhost");
factory.setPort(5672);
factory.setUsername("guest");
factory.setPassword("guest");
factory.setVirtualHost("/");

Connection connection = factory.newConnection();
```

连接池建议：

- 避免频繁创建和销毁连接的开销
- 限制最大连接数，防止资源耗尽
- 提供连接的自动恢复机制

## 创建信道

信道（Channel）是在连接内部建立的逻辑连接，用于执行消息相关的操作。一个连接可以包含多个信道。

信道创建：

```java
Channel channel = connection.createChannel();
```

信道是轻量级的，可以复用同一个连接创建多个信道，从而实现多线程下的并发操作。

## 声明交换机

交换机（Exchange）负责接收消息并将其路由到一个或多个队列。

交换机类型：

1. Direct Exchange：根据 routing key 进行精确匹配
2. Topic Exchange：根据 routing key 进行模式匹配
3. Fanout Exchange：广播消息到所有绑定的队列
4. Headers Exchange：根据消息的头信息进行路由

声明示例：

```java
// 声明一个 Direct 类型的交换机
channel.exchangeDeclare("exchange_name","direct",true);

// 声明一个 Topic 类型的交换机
channel.exchangeDeclare("topic_exchange","topic",true);

// 声明一个 Fanout 类型的交换机
channel.exchangeDeclare("fanout_exchange","fanout",true);
```

## 声明队列

队列（Queue）用于存储消息，直到被消费者消费。

队列属性：

- name：队列名称
- durable：是否持久化
- exclusive：是否排他（仅限此连接使用）
- autoDelete：是否自动删除（当最后一个消费者断开连接后）
- arguments：其他参数（如 TTL、死信队列等）

声明示例：

```java
// 声明一个持久化的队列
channel.queueDeclare("queue_name",true,false,false,null);

// 声明一个临时队列
String queueName = channel.queueDeclare().getQueue();
```

## 绑定交换机

绑定（Binding）定义了交换机和队列之间的路由关系。

示例：

```java
// 将队列绑定到交换机，指定 routing key
channel.queueBind("queue_name","exchange_name","routing_key");

// Fanout 交换机的绑定不需要 routing key
channel.queueBind("queue_name","fanout_exchange","");
```

## 消息发送

消息属性：

- deliveryMode：消息持久化
- contentType：消息类型
- expiration：过期时间
- headers：自定义头信息

发送示例：

```java
// 创建消息属性
AMQP.BasicProperties properties = new AMQP.BasicProperties.Builder().deliveryMode(2) // 持久化消息
                .contentType("application/json").expiration("60000") // 60秒过期
                .build();

// 发送消息
channel.basicPublish("exchange_name","routing_key",properties,"message content".getBytes());
```

## 消息消费

消息消费模式：

1. 推模式（Push）：服务器主动推送消息给消费者
2. 拉模式（Pull）：消费者主动从服务器拉取消息

推模式示例：

```java
public static void main(String[] args) {
   // 自动确认模式
   channel.basicConsume("queue_name", true, (consumerTag, message) -> {

      String content = new String(message.getBody());
      System.out.println("Received: " + content);
   }, consumerTag -> {
   });

   // 手动确认模式
   channel.basicConsume("queue_name", false, (consumerTag, message) -> {
      try {

         String content = new String(message.getBody());
         System.out.println("Received: " + content);
         channel.basicAck(message.getEnvelope().getDeliveryTag(), false);
      } catch (Exception e) {
         channel.basicNack(message.getEnvelope().getDeliveryTag(), false, true);
      }
   }, consumerTag -> {
   });
}
```

拉模式示例：

```java
public static void main(String[] args) {
   // 拉取单条消息
   GetResponse response = channel.basicGet("queue_name", false);
   if (response != null) {

      String content = new String(response.getBody());
      System.out.println("Received: " + content);
      channel.basicAck(response.getEnvelope().getDeliveryTag(), false);
   }
}
```

## 可靠性保证

生产者可靠性：

1. 事务模式
2. 发布确认模式（Publisher Confirms）

```java
public static void main(String[] args) {
   // 开启发布确认
   channel.confirmSelect();

   // 异步确认
   channel.addConfirmListener((deliveryTag, multiple) -> {
      // 消息确认成功
   }, (deliveryTag, multiple) -> {
      // 消息确认失败
   });
}
```

消费者可靠性：

1. 自动确认（autoAck = true）
2. 手动确认（autoAck = false）
    - basicAck：确认消息
    - basicNack：拒绝消息
    - basicReject：拒绝单条消息

---
title: 基本数据类型缓存池
date: 2024-07-24
category:
  - 基础知识
tag:
  - 数据缓存池
order: 5
---

Java 的基本数据类型缓存池机制是一种优化策略，用于减少内存分配和提高性能。

## 缓存池简介

Java 中的缓存池主要用于以下基本数据类型的包装类：

- `Boolean`
- `Byte`
- `Short`
- `Integer`
- `Long`
- `Character`

这些包装类会缓存一定范围内的常用数值，以减少对象创建的开销，提升性能。

## 整数类型缓存池

**`Byte` 缓存池**

`Byte` 类型的所有值（-128 到 127）都被缓存。

```java
Byte a = Byte.valueOf((byte) 10);
Byte b = Byte.valueOf((byte) 10);
System.out.println(a == b); // 输出 true
```

**`Short` 缓存池**

`Short` 类型的值在 -128 到 127 范围内会被缓存。

```java
Short a = Short.valueOf((short) 100);
Short b = Short.valueOf((short) 100);
System.out.println(a == b); // 输出 true
```

**`Integer` 缓存池**

`Integer` 类型默认缓存值在 -128 到 127 范围内，可以通过启动参数修改缓存范围。

```java
Integer a = Integer.valueOf(100);
Integer b = Integer.valueOf(100);
System.out.println(a == b); // 输出 true

Integer c = Integer.valueOf(200);
Integer d = Integer.valueOf(200);
System.out.println(c == d); // 输出 false
```

可以通过 JVM 参数 `-XX:AutoBoxCacheMax=<size>` 来调整缓存范围，例如：

```sh
java -XX:AutoBoxCacheMax=200
```

**`Long` 缓存池**

`Long` 类型的值在 -128 到 127 范围内会被缓存。

```java
Long a = Long.valueOf(100L);
Long b = Long.valueOf(100L);
System.out.println(a == b); // 输出 true
```

## 字符类型缓存池

**`Character` 缓存池**

`Character` 类型的值在 0 到 127 范围内会被缓存。

```java
Character a = Character.valueOf((char) 65);
Character b = Character.valueOf((char) 65);
System.out.println(a == b); // 输出 true
```

## 布尔类型缓存池

`Boolean` 类型的 `true` 和 `false` 两个值都被缓存。

```java
Boolean a = Boolean.valueOf(true);
Boolean b = Boolean.valueOf(true);
System.out.println(a == b); // 输出 true
```

## 缓存池的使用

**自动装箱和拆箱**

Java的自动装箱（autoboxing）和拆箱（unboxing）机制在缓存池中也发挥作用。例如：

```java
Integer a = 100; // 自动装箱，等价于 Integer.valueOf(100)
Integer b = 100;
System.out.println(a == b); // 输出 true

Integer c = 200;
Integer d = 200;
System.out.println(c == d); // 输出 false
```

在 `Integer` 范围 -128 到 127 内，使用的是缓存对象，所以 `a == b` 为 `true`。而超过此范围时，创建的是新对象，所以 `c == d` 为 `false`。

## 总结

Java 的基本数据类型缓存池是一个性能优化机制，通过缓存常用值来减少对象创建的开销，提高系统性能。合理理解和利用缓存池机制可以有效提升 Java 程序的效率。
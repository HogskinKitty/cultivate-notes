---
title: 数据类型转换
date: 2024-07-24
category:
  - 基础知识
tag:
  - 数据类型转换
order: 4
---

在 Java 中，数据类型转换分为两种：自动类型转换（隐式类型转换）和强制类型转换（显式类型转换）。

## 自动类型转换

- 当把一个取值范围小的数据类型的值赋给一个取值范围大的数据类型的变量时，会自动进行类型转换。例如，将 `byte`
  类型的值赋给 `int` 类型的变量：

```java
byte b = 10;
int i = b;  // 自动转换，不会有问题
```

> [!tip]
> 自动转换的顺序通常为：`byte` -> `short` -> `int` -> `long` -> `float` -> `double`

## 强制类型转换

- 当把一个取值范围大的数据类型的值赋给一个取值范围小的数据类型的变量时，需要进行强制类型转换。 语法：`(目标数据类型) 值`

```java
int num = 128;
// 将 int 类型的值赋给 byte 类型的变量：
byte b = (byte) num;  
```

> [!warning]
> 强制类型转换可能会导致数据精度丢失或溢出。

下面是一个示例，展示了数据类型转换的情况：

```java
public static void main(String[] args) {
    // 自动类型转换
    int intValue = 100;
    double doubleValue = intValue;  // 自动将 int 转换为 double
    System.out.println("自动转换后的 double 值: " + doubleValue);

    // 强制类型转换
    double doubleNum = 3.14;
    int intNum = (int) doubleNum;  // 强制将 double 转换为 int，小数部分会被截断
    System.out.println("强制转换后的 int 值: " + intNum);

    // 可能导致数据溢出的强制类型转换
    int largeValue = 130;
    byte byteValue = (byte) largeValue;  // 可能会导致数据溢出
    System.out.println("可能溢出的强制转换后的 byte 值: " + byteValue);
}

```
---
title: 字符串
date: 2024-07-24
category:
  - 基础知识
tag:
  - 字符串
order: 6
---

在 Java 中，字符串是一种非常重要的数据类型，用于表示和操作文本。字符串在 Java 中被实现为 `String` 类，它是 `java.lang` 包的一部分，因此使用时不需要显式导入。

## 字符串的特性

- **不可变性**: `String` 对象是不可变的，一旦创建，其值就不能更改。每当对字符串进行操作时，都会创建一个新的字符串对象。
- **字符串池**: Java 使用字符串池来提高效率和节省内存。当一个字符串字面量被创建时，它会被放入字符串池中，如果已经存在相同的字符串，则不会创建新的实例。

> [!tip]
> `String` 类是 `final` 修饰的，因此不能被继承和改变。

## 创建字符串

**使用字符串字面量**

```java
String str1 = "Hello";
String str2 = "Hello";
System.out.println(str1 == str2); // 输出 true，指向同一个字符串池中的对象
```

**通过 `new` 关键字**

```java
String str3 = new String("Hello");
String str4 = new String("Hello");
System.out.println(str3 == str4); // 输出 false，创建了不同的对象
System.out.println(str1 == str3); // 输出 false，str3 不在字符串池中
```

## 常用字符串方法

**获取字符串长度**

```java
String str = "Hello";
int length = str.length();
System.out.println(length); // 输出 5
```

**字符串拼接**

```java
String str1 = "Hello";
String str2 = "World";
String str3 = str1 + " " + str2;
System.out.println(str3); // 输出 "Hello World"
```

**字符串比较**

- 使用 `equals`

```java
String str1 = "Hello";
String str2 = "Hello";
boolean result = str1.equals(str2);
System.out.println(result); // 输出 true
```

- 使用 `compareTo`

```java
String str1 = "Hello";
String str2 = "World";
int result = str1.compareTo(str2);
System.out.println(result); // 输出负数，因为 "Hello" 在字典顺序中小于 "World"
```

**截取字符串**

```java
String str = "Hello, World!";
// 从第 7 位开始截取到第 12 位结束
String substr = str.substring(7, 12);
System.out.println(substr); // 输出 "World"
```

**查找字符或字符串**

```java
String str = "Hello, World!";
int index = str.indexOf('W');
System.out.println(index); // 输出 7

index = str.indexOf("World");
System.out.println(index); // 输出 7
```

**替换字符或字符串**

```java
String str = "Hello, World!";
String newStr = str.replace('H', 'h');
System.out.println(newStr); // 输出 "hello, World!"

newStr = str.replace("World", "Java");
System.out.println(newStr); // 输出 "Hello, Java!"
```

**字符串转换大小写**

```java
String str = "Hello, World!";
String lower = str.toLowerCase();
String upper = str.toUpperCase();
System.out.println(lower); // 输出 "hello, world!"
System.out.println(upper); // 输出 "HELLO, WORLD!"
```

## 字符串与字符数组的转换

**字符串转字符数组**

```java
String str = "Hello";
char[] charArray = str.toCharArray();
System.out.println(Arrays.toString(charArray)); // 输出 [H, e, l, l, o]
```

**字符数组转字符串**

```java
char[] charArray = {'H', 'e', 'l', 'l', 'o'};
String str = new String(charArray);
System.out.println(str); // 输出 "Hello"
```

## StringBuilder 和 StringBuffer

**StringBuilder**

`StringBuilder` 是一个可变的字符序列，线程不安全的，适用于在单线程环境下使用。

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(", World!");
System.out.println(sb.toString()); // 输出 "Hello, World!"
```

**StringBuffer**

`StringBuffer` 与 `StringBuilder` 类似，但它是线程安全的，适用于在多线程环境下使用。

```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(", World!");
System.out.println(sb.toString()); // 输出 "Hello, World!"
```

## 总结

Java 中的字符串是不可变的，可以通过字面量或 `new` 关键字创建。常用的方法包括获取长度、拼接、比较、子字符串、查找和替换。
为了提高效率，可以使用 `StringBuilder` 或 `StringBuffer` 来处理可变的字符串，但是需要注意线程安全问题。
理解和正确使用字符串操作是编写高效 Java 代码的关键。
---
title: 基础语法
date: 2024-07-24
category:
  - 基础知识
tag:
  - 基础语法
order: 1
---

## 数据类型

**基本数据类型**

- `byte`：8 位有符号整数，取值范围 -128 到 127。
- `short`：16 位有符号整数，取值范围 -32768 到 32767。
- `int`：32 位有符号整数，是最常用的整数类型。
- `long`：64 位有符号整数。
- `float`：单精度 32 位浮点数。
- `double`：双精度 64 位浮点数，精度更高。
- `char`：单个字符，用单引号括起来。
- `boolean`：只有 `true` 和 `false` 两个值。

**引用数据类型**

- 类、接口、数组等。

## 变量

**声明变量**

先指定数据类型，然后是变量名。例如：`int num`;

**初始化变量**

给变量赋予初始值。例如：`num = 10`;

**成员变量**

成员变量又称为实例变量，是直接声明在类中方法、构造方法或代码块外的变量。

```java
public class TestInstanceVar {
    // 成员变量
    int instanceVar;

    public static void main(String[] args) {
        TestInstanceVar test = new TestInstanceVar();
        test.instanceVar = 5;
        System.out.println(test.instanceVar);
    }
}
```

> [!warning]
> 成员变量如果没有赋予初始值，系统会分配默认初始值，不同数据类型有不同的默认初始值。

**局部变量**

声明在方法内的变量（包括方法声明和代码块中的）。

```java
public class Main {
    public void method() {
        // 局部变量
        int localVar = 10;
        System.out.println(localVar);
    }
}
```

> [!warning]
> 局部变量没有默认初始值，使用之前必须赋值，否则报错。

**静态变量**

类变量也称为静态变量，用 static 关键字声明。它们在类加载时被初始化，所有对象共享同一个静态变量。

```java
public class Main {
    // 静态变量
    static int staticVar;

    public static void main(String[] args) {
        Main.staticVar = 10;
        System.out.println(Main.staticVar);
    }
}
```

## 常量

使用 `final` 关键字定义常量。例如：`final double PI = 3.14;`

## 运算符

**算术运算符**

- `+`（加法）、`-`（减法）、`*`（乘法）、`/`（除法）、`%`（取余）。

**关系运算符**

- `==`（等于）、`!=`（不等于）、`>`（大于）、`<`（小于）、`>=`（大于等于）、`<=`（小于等于）。

**逻辑运算符**

- `&&`（逻辑与）、`||`（逻辑或）、`!`（逻辑非）。

**位运算符**

- `&`（按位与）、`|`（按位或）、`^`（按位异或）、`~`（按位取反）、`<<`（左移）、`>>`（右移）。

> [!tip]
> 位运算是直接对二进制补码进行运算。

**三目运算符**

- 三目运算符（也称为条件运算符）是一种简洁的条件语句，可以用来替代简单的 `if-else` 语句。其语法格式如下：

```bash
result = (condition) ? value1 : value2;
```

- `condition`：是一个布尔表达式。
- 如果 `condition` 为 `true`，则 `result` 的值为 `value1`。
- 如果 `condition` 为 `false`，则 `result` 的值为 `value2`。

## 流程控制

**`if-else` 语句**

- 根据条件执行不同的代码块。

```java
public void test_if_else() {
    if (condition) {
        // 执行的代码
    } else {
        // 执行的代码
    }
}
```

**`switch` 语句**

- 根据表达式的值选择执行不同的代码块。

```java
public void test_switch() {
    switch (expression) {
        case value1:
            // 执行的代码
            break;
        case value2:
            // 执行的代码
            break;
        default:
            // 执行的代码
    }
}
```

**`for` 循环**

- 用于重复执行一段代码。

```java
public void test_for() {
    for (initialization; condition; update) {
        // 执行的代码
    }
}
```

**`while` 循环**

- 当条件为真时，执行循环体。

```java
public void test_while() {
    while (condition) {
        // 执行的代码
    }
}
```

**`do-while` 循环**

- 先执行一次循环体，然后再判断条件。

```java
public void test_do_while() {
    do {
        // 执行的代码
    } while (condition);
}
```

> [!tip]
> 控制跳转语句：
> - `break`：结束单层循环
> - `continue`：结束当前循环，进入下一次循环
> - `return`：结束当前方法

## 数组

**定义数组**

```java
// 数据类型[] 数组名; 推荐使用该方式
int[] arr1;

// 数据类型 数组名[];
int arr2[];
```

**初始化数组**

- 动态初始化：只指定长度，由系统给出初始化值

```bash
// 数据类型[] 数组名 = new 数据类型[数组长度];

// 定义int类型的数组 arr，数组可以存放 3 个 int 类型的值
int[] arr = new int[3]
```

- 静态初始化：给出初始化值，由系统决定长度

**访问数组元素**

- 通过索引访问，索引从 0 开始，最大索引为数组长度减 1。例如：`arr[0]`

> [!warning]
> 这里的数组指的是一维数组，还有二维数组以及三维数组，因为二维数组和三维数组相对一维数组更复杂一些，而且在 Java
> 中使用较少就不做过多介绍，如感兴趣可查阅 [百度百科-多维数组](https://baike.baidu.com/item/%E6%95%B0%E7%BB%84/3794097)

## 方法

方法就是完成特定功能的代码块。

**定义方法**

包括返回值类型、方法名、参数列表和方法体。

- 语法格式：

```bash
访问权限修饰符 返回值类型 方法名(参数类型 参数名1，参数类型 参数名2 ....){
    方法体;
    return 返回值;
}
```

- 示例：

```java
public int add(int a, int b) {
    return a + b;
}
```

**调用方法**

```java
int result = add(1, 2);
```

> [!tip]
> 方法还分构造方法和普通方法，后续 [面向对象]() 章节会详细介绍。



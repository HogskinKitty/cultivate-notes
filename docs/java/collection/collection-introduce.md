---
title: 集合框架介绍
order: 1
---

Java 集合框架是一组用于存储和操作一组对象的接口和类的集合，提供了丰富的数据结构和操作方法，以满足不同的编程需求。

![集合体系图](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection.png)

## 主要接口

1. `Collection` 接口
    - 这是集合框架的根接口，定义了集合的基本操作，如添加、删除、遍历等。
    - 其子接口包括 `List` 、 `Set` 和 `Queue` 。

2. `List` 接口
    - 是一个有序的、可重复的集合。
    - 常见的实现类有 `ArrayList` 、 `LinkedList` 。

3. `Set` 接口
    - 是一个不允许重复元素的集合。
    - 实现类如 `HashSet` 、 `TreeSet` 等。

4. `Queue` 接口
    - 用于实现队列数据结构，遵循先进先出（FIFO）原则。
    - 例如 `PriorityQueue` 。

5. `Map` 接口
    - 用于存储键值对形式的数据。
    - 常见的实现类有 `HashMap` 、 `TreeMap` 等。

## 常见实现类

1. `ArrayList`（常用）
    - 基于动态数组实现，支持随机访问，尾部添加和删除效率高，非尾部插入和删除效率低。
    - 示例：

```java
ArrayList<String> list = new ArrayList<>();
list.add("Apple");
list.add("Banana");
```

2. `LinkedList`
    - 基于双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)实现，在插入和删除操作（特别是在列表头部和中间）时效率较高。
    - 例如：

```java
LinkedList<String> linkedList = new LinkedList<>();
linkedList.addFirst("Orange");
linkedList.addLast("Mango");
```

3. `HashSet`
    - 基于哈希表实现，不允许重复元素，元素的存储顺序是不确定的。
    - 用法：

```java
HashSet<String> set = new HashSet<>();
set.add("Grape");
```

4. `TreeSet`
    - 基于红黑树实现，元素会自动按照自然顺序或指定的比较器进行排序。
    - 示例：

```java
TreeSet<String> treeSet = new TreeSet<>();
treeSet.add("Pear");
```

5. `HashMap`（常用）
    - 基于哈希表实现，允许键值对为 `null` ，存储键值对时不保证顺序。
    - 比如：

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("Key1", 10);
```

6. `TreeMap`
    - 基于红黑树实现，按照键的自然顺序或指定的比较器对键进行排序。
    - 像这样：

```java
TreeMap<String, Double> treeMap = new TreeMap<>();
treeMap.put("Key2", 20.5);
```

## 选择合适的集合类型

1. 如果需要快速随机访问和在尾部进行高效的添加和删除操作，选择 `ArrayList` 。
2. 如果需要在列表的头部和中间频繁进行插入和删除操作，使用 `LinkedList` 。
3. 当不允许重复元素且不关心元素顺序时， `HashSet` 是个好选择。
4. 若需要元素自动排序，可考虑 `TreeSet` 。
5. 对于键值对存储，若不关心键的顺序， `HashMap` 适用；若要对键进行排序，选择 `TreeMap` 。

## 集合的遍历

1. 对于 `List` 集合（如 `ArrayList` 、 `LinkedList` ）：
    - 使用 for 循环通过索引遍历。
    - 使用迭代器遍历。
    - 增强型 for 循环遍历。

2. 对于 `Set` 集合（如 `HashSet` 、 `TreeSet` ）：
    - 通常使用迭代器或增强型 for 循环遍历。

3. 对于 `Map` 集合（如 `HashMap` 、 `TreeMap` ）：
    - 通过 `keySet` 获取键的集合，然后遍历键获取对应的值。
    - 使用 `entrySet` 获取键值对的集合进行遍历。

总之，Java 集合框架提供了丰富的选择，理解它们的特点和适用场景对于编写高效、正确的代码至关重要。


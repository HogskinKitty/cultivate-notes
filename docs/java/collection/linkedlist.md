---
title: LinkedList 源码分析
date: 2024-07-24
category:
  - 集合框架(容器)
tag:
  - LinkedList 源码
order: 3
---

## 数据结构

**LinkedList** 底层基于 **双向链表** 实现。

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-data-structure.drawio.svg)

链表是一种线性数据结构，其中元素按顺序排列，每个元素称为节点（Node）。

每个节点包含三个部分：**数据部分、指向下一个节点的指针（next）和指向前一个节点的指针（prev）**。

- **头节点**：前置指针为 NULL ，后置指针指向第一个节点
- **尾尾点**：后置指针为 NULL ，前置指针指向前一个节点

## 双向链表结构

```java
private static class Node<E> {
    E item;
    Node<E> next;
    Node<E> prev;

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

## 初始化

- **构造方法**

```java
public LinkedList() {

}

public LinkedList(Collection<? extends E> c) {
    this();
    addAll(c);
}
```

- **初始化方式**

```java
import java.util.LinkedList;

// 1. 普通方式
LinkedList<String> linkedList = new LinkedList<>();

// 2. Arrays.asList
LinkedList<String> linkedList = new LinkedList<>(Arrays.asList("a", "b"));

// 3. 内部类
LinkedList<String> linkedList = new LinkedList<>() {
    {
        add("a");
        add("b");
        add("c");
    }
};

// 4. Collections.nCopies
LinkedList<String> linkedList = new LinkedList<>(Collections.nCopies(3, "a"));
```

## 插入元素

插入操作分为三种：头插、尾插和中间插。

```java
// 默认使用尾插进行插入 
public boolean add(E e) {
    linkLast(e);
    return true;
}

// 指定位置插入
public void add(int index, E element) {
    checkPositionIndex(index);

    if (index == size)
        linkLast(element);
    else
        linkBefore(element, node(index));
}
```

**头插**

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-insert-head.drawio.svg)

```java
private void linkFirst(E e) {
    final Node<E> f = first;
    final Node<E> newNode = new Node<>(null, e, f);
    first = newNode;
    if (f == null)
        last = newNode;
    else
        f.prev = newNode;
    size++;
    modCount++;
}
```

1. 获取当前链表的第一个节点，赋值给 f
2. 创建新的节点对象`new Node<>(null, e, f)`，其中`null`表示前一个节点引用，`e`表示当前节点数据，`f`表示后一个节点引用（即当前链表的第一个节点）
3. first = newNode;: 将新创建的节点设置为链表的头节点
4. ` if (f == null)` 说明链表为空，新添加的节点 newNode 也是链表的尾节点，则更新尾节点
5. 否则，将原来的第一个节点 f 的 prev 设置为 newNode

**尾插**

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-insert-tail.drawio.svg)

```java
 void linkLast(E e) {
    final Node<E> l = last;
    final Node<E> newNode = new Node<>(l, e, null);
    last = newNode;
    if (l == null) {
        first = newNode;
    } else
        l.next = newNode;
    size++;
    modCount++;
}
```

1. 获取当前链表的最后一个节点，赋值给 l
2. 创建新的节点对象`new Node<>(l, e, null)`，其中`l`表示前一个节点引用（即最后一个节点），`e`表示当前节点数据，`null`表示后一个节点
3. last = newNode;: 将新创建的节点设置为链表的尾节点
4. if (l == null) 说明链表为空，新添加的节点 newNode 也是链表的头节点，则更新头节点
5. 否则，将原来的最后一个节点 l 的 next 设置为 newNode
   <br>

**中间插**

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-insert-middle.drawio.svg)

- 位置定位

```java
/**
 * 获取指定索引位置的节点
 */
Node<E> node(int index) {
    // assert isElementIndex(index);

    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}
```

1. `if (index < (size >> 1))` ：判断给定的 index 是否小于链表大小的一半
2. 如果`index`小于链表大小的一半，则从链表的头开始遍历，直到找到索引为`index`的节点
3. 否则，从链表的尾部开始遍历，直到找到索引为`index`的节点

- 执行插入

```java
void linkBefore(E e, Node<E> succ) {
    // assert succ != null;
    final Node<E> pred = succ.prev;
    final Node<E> newNode = new Node<>(pred, e, succ);
    succ.prev = newNode;
    if (pred == null)
        first = newNode;
    else
        pred.next = newNode;
    size++;
    modCount++;
}
```

1. 获取当前节点 succ 的前一个节点，赋值给 pred
2. 创建新的节点对象`new Node<>(pred, e, succ)`，其中`pred`表示前一个节点引用（即当前节点 succ 的前一个节点），`e`
   表示当前节点数据，`succ`表示后一个节点引用（即当前节点 succ）
3. succ.prev = newNode;: 将 succ 节点的前一个节点引用设置为新节点 newNode
4. 判断 pred 是否为空，如果为空，则新添加的节点 newNode 是链表的头节点，将新节点 newNode 设置为链表的第一个节点
5. 否则，将 pred 的 next 设置为新节点 newNode

## 删除元素

```java
// 和删除头节点一致
public E remove() {
    return removeFirst();
}

// 根据索引删除
public E remove(int index) {
    checkElementIndex(index);
    return unlink(node(index));
}

// 根据指定对象删除
public boolean remove(Object o) {
    if (o == null) {
        for (Node<E> x = first; x != null; x = x.next) {
            if (x.item == null) {
                unlink(x);
                return true;
            }
        }
    } else {
        for (Node<E> x = first; x != null; x = x.next) {
            if (o.equals(x.item)) {
                unlink(x);
                return true;
            }
        }
    }
    return false;
}

// 删除头节点
public E removeFirst() {
    final Node<E> f = first;
    if (f == null)
        throw new NoSuchElementException();
    return unlinkFirst(f);
}

// 删除尾节点
public E removeLast() {
    final Node<E> l = last;
    if (l == null)
        throw new NoSuchElementException();
    return unlinkLast(l);
}

// 按照集合批量删除，底层是 Iterator 删除
public boolean removeAll(Collection<?> c) {
    Objects.requireNonNull(c);
    boolean modified = false;
    Iterator<?> it = iterator();
    while (it.hasNext()) {
        if (c.contains(it.next())) {
            it.remove();
            modified = true;
        }
    }
    return modified;
}
```

> [!tip]
> 删除操作的源码都差不多，分为删除首尾节点与其他节点时候，对节点的 **解链** 操作。

**解链(删除节点)**

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-unlink.drawio.svg)

```java
 E unlink(Node<E> x) {
    // assert x != null;

    // 保存要删除节点的信息
    final E element = x.item;
    final Node<E> next = x.next;
    final Node<E> prev = x.prev;

    // 处理头节点
    if (prev == null) {
        first = next;
    } else {
        prev.next = next;
        x.prev = null;
    }

    // 处理尾节点
    if (next == null) {
        last = prev;
    } else {
        next.prev = prev;
        x.next = null;
    }

    // 清理被删除节点
    x.item = null;

    // 更新链表大小和修改计数器
    size--;
    modCount++;
    return element;
}
```

> [!tip]
> - **x**：待删除的节点
> - **x.next**：待删除节点的下一个节点
> - **x.prev**：待删除节点的上一个节点

1. 保存要删除节点的信息
2. 判断删除节点是否为头节点，如果是则将头节点（first）指向下一个节点，否则将删除节点（x） 的上一个节点的引用（next）指向 删除节点（x）
   的下一个节点，并断开删除节点（x） 与 上一个节点的连接（将 x.prev 设置为 null））
3. 判断删除节点是否为尾节点，如果是则将尾节点（last）指向上一个节点，否则将删除节点（x） 的下一个节点的引用（prev）指向
   删除节点（x）的上一个节点，并断开删除节点（x） 与 下一个节点的连接（将 x.next 设置为 null）
4. 清理被删除节点
5. 更新链表大小和修改计数器
6. 返回被删除节点的元素值

**解链头节点（删除头节点）**

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-unlinkFirst.drawio.svg)

```java
private E unlinkFirst(Node<E> f) {
    // assert f == first && f != null;
    final E element = f.item;
    final Node<E> next = f.next;
    f.item = null;
    f.next = null; // help GC
    first = next;
    if (next == null)
        last = null;
    else
        next.prev = null;
    size--;
    modCount++;
    return element;
}
```

1. 保存被删除节点的元素
2. 获取被删除节点的下一个节点
3. 清理被删除节点的元素和引用
4. 更新链表头节点
5. 处理链表尾节点：如果被删除节点 f 是链表的最后一个节点，则将链表的尾节点（last）设置为 null。否则将下一个节点的引用（next.prev）设置
   null，即删除节点的下一个节点变为链表的头节点或中间的某个节点，不在需要指向前一个节点
6. 更新链表大小和修改计数器
7. 返回被删除节点的元素值

**解链尾节点（删除尾节点）**

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-LinkedList-unlinkLast.drawio.svg)

```java
private E unlinkLast(Node<E> l) {
    // assert l == last && l != null;
    final E element = l.item;
    final Node<E> prev = l.prev;
    l.item = null;
    l.prev = null; // help GC
    last = prev;
    if (prev == null)
        first = null;
    else
        prev.next = null;
    size--;
    modCount++;
    return element;
}
```

1. 保存被删除节点的元素
2. 获取被删除节点的上一个节点
3. 清理被删除节点的元素和引用
4. 处理链表头节点：如果被删除节点 l 是链表的唯一节点（即它没有上一个节点），则将链表的头节点 first 也设置为
   null。否则，将被删除节点的上一个节点 prev 的 next 引用设置为 null，即删除节点的上一个节点变为链表的尾节点或中间的某个节点，不在需要指向下一个节点
5. 更新链表大小和修改计数器
6. 返回被删除节点的元素值

## 获取元素

```java
// 获取链表的第一个元素
public E getFirst() {
    final Node<E> f = first;
    if (f == null)
        throw new NoSuchElementException();
    return f.item;
}

// 获取链表的最后一个元素
public E getLast() {
    final Node<E> l = last;
    if (l == null)
        throw new NoSuchElementException();
    return l.item;
}

// 获取链表指定索引位置的元素值
public E get(int index) {
    checkElementIndex(index);
    return node(index).item;
}

// 获取指定索引位置的节点
Node<E> node(int index) {
    // assert isElementIndex(index);

    if (index < (size >> 1)) {
        Node<E> x = first;
        for (int i = 0; i < index; i++)
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)
            x = x.prev;
        return x;
    }
}
```

## 遍历元素

LinkedList 的遍历的核心就是它的迭代器的实现。

**迭代器**

```java
// 双向迭代器
private class ListItr implements ListIterator<E> {
    // 表示上一次调用 next() 或 previous() 方法时经过的节点；
    private Node<E> lastReturned;
    // 表示下一个要遍历的节点；
    private Node<E> next;
    // 表示下一个要遍历的节点的下标，也就是当前节点的后继节点的下标；
    private int nextIndex;
    // 表示当前遍历期望的修改计数值，用于和 LinkedList 的 modCount 比较，判断链表是否被其他线程修改过。
    private int expectedModCount = modCount;
}
```

**迭代器核心方法**

```java
// ****** 从头到尾迭代 *********

// 判断还有没有下一个节点
public boolean hasNext() {
    // 判断下一个节点的下标是否小于链表的大小，如果是则表示还有下一个元素可以遍历
    return nextIndex < size;
}

// 获取下一个节点
public E next() {
    // 检查在迭代过程中链表是否被修改过
    checkForComodification();
    // 判断是否还有下一个节点可以遍历，如果没有则抛出 NoSuchElementException 异常
    if (!hasNext())
        throw new NoSuchElementException();
    // 将 lastReturned 指向当前节点
    lastReturned = next;
    // 将 next 指向下一个节点
    next = next.next;
    nextIndex++;
    return lastReturned.item;
}

// ****** 从尾到头迭代 *********

// 判断是否还有前一个节点
public boolean hasPrevious() {
    return nextIndex > 0;
}

// 获取前一个节点
public E previous() {
    // 检查是否在迭代过程中链表被修改
    checkForComodification();
    // 如果没有前一个节点，则抛出异常
    if (!hasPrevious())
        throw new NoSuchElementException();
    // 将 lastReturned 和 next 指针指向上一个节点
    lastReturned = next = (next == null) ? last : next.prev;
    nextIndex--;
    return lastReturned.item;
}
```

LinkedList 与 ArrayList 的遍历都是通用的，基本包括 5 种方式。

- 初始化数据

首先，初始化一个包含 1 千万数据的集合。假设使用了一个LinkedList。

```java
// 假设 list 是 LinkedList<Integer> 类型，并且已经初始化
List<Integer> list = new LinkedList<>();

@Before
public void init() {
    for (int i = 0; i < 10000000; i++) {
        list.add(i);
    }
}
```

- 遍历方式

LinkedList 与 ArrayList 的遍历都是通用的，基本包括 5 种方式。

1. 普通 for 循环

```java

@Test
public void test_LinkedList_for0() {
    long startTime = System.currentTimeMillis();
    for (int i = 0; i < list.size(); i++) {
        xx += list.get(i);
    }
    System.out.println("耗时：" + (System.currentTimeMillis() - startTime));
}
```

2. 增强 for 循环

```java

@Test
public void test_LinkedList_for1() {
    long startTime = System.currentTimeMillis();
    for (Integer itr : list) {
        xx += itr;
    }
    System.out.println("耗时：" + (System.currentTimeMillis() - startTime));
}
```

3. Iterator (迭代器)

```java

@Test
public void test_LinkedList_Iterator() {
    long startTime = System.currentTimeMillis();
    Iterator<Integer> iterator = list.iterator();
    while (iterator.hasNext()) {
        Integer next = iterator.next();
        xx += next;
    }
    System.out.println("耗时：" + (System.currentTimeMillis() - startTime));
}
```

4. forEach

```java

@Test
public void test_LinkedList_forEach() {
    long startTime = System.currentTimeMillis();
    list.forEach(integer -> {
        xx += integer;
    });
    System.out.println("耗时：" + (System.currentTimeMillis() - startTime));
}
```

5. stream (流)

```java

@Test
public void test_LinkedList_stream() {
    long startTime = System.currentTimeMillis();
    list.stream().forEach(integer -> {
        xx += integer;
    });
    System.out.println("耗时：" + (System.currentTimeMillis() - startTime));
}
```

**性能对比与分析**

以上五种遍历方式在性能上会有所不同，主要取决于它们如何与 LinkedList 的内部结构进行交互。

- 普通 for 循环：在 LinkedList 上表现较差，因为 LinkedList 的 get(int index) 操作是 O(n) 的复杂度，所以整个遍历的复杂度是
  O(n^2)。

- 增强 for 循环：实际上是使用迭代器（Iterator）的语法糖，对于 LinkedList 来说，性能通常比普通 for 循环要好，因为它避免了 O(n)
  的 get(int index) 操作。

- Iterator 遍历：直接使用迭代器遍历 LinkedList 是高效的，因为迭代器直接利用了 LinkedList 的节点结构。

- forEach 循环：在 Java 8 及以后，forEach 是 Iterable 接口的一部分，对于 LinkedList，其实现方式与增强 for 循环类似，因此性能也相当。

- Stream (流)：使用流（Stream）进行遍历在语法上更加简洁，但可能会引入额外的开销，特别是当流操作被并行化时。对于简单的遍历和累加操作，流可能不是最优选择，尤其是在不支持并行处理或并行处理不带来性能提升的情况下。

## 总结

1. 双向链表

- `LinkedList` 是一个双向链表实现，每个节点包含指向前一个节点和后一个节点的引用。

2. 动态大小

- `LinkedList` 的大小可以动态变化，可以随时增加或删除元素，不需要预先分配固定的内存空间。

3. 有序集合

- `LinkedList` 保留元素的插入顺序。

4. 可重复元素

- `LinkedList` 允许存储重复的元素。

5. 线程不安全

- `LinkedList` 不是线程安全的。如果需要线程安全的集合，可以使用 `Collections.synchronizedList` 方法进行包装。

6. 基本操作时间复杂度

- 访问元素：O(n)
- 添加元素（在头部或尾部）：O(1)
- 插入元素（在中间）：O(n)
- 删除元素：O(n)
- 搜索元素：O(n)

7. 适用场景

- 适用于频繁插入和删除操作的场景，尤其是在列表的头部和尾部进行操作时。

8. Null 元素

- `LinkedList` 允许存储 `null` 元素。

9. 实现接口

- `LinkedList` 实现了 `List`、`Deque`、`Queue` 和 `Cloneable` 接口，可以用作栈、队列和双端队列。

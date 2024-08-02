---
title: ArrayList 源码分析
date: 2024-07-24
category:
  - 集合框架(容器)
tag:
  - ArrayList 源码
order: 2
---

## 数据存储结构

`ArrayList` 内部使用一个 **动态数组** `Object[] elementData` 来存储元素。初始容量为 10，当元素数量超过当前容量时，会进行扩容操作。

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-data-structure.drawio.svg)

> [!tip]
> 动态数组：数组原本是 **定长** 的，如果超过定长长度，扩容则需要申请新的数组长度，并把原数组元素拷贝到新数组中，从而实现动态数组。

## 类声明

`ArrayList` 继承自 `AbstractList` 类，并实现了 `List`, `RandomAccess`, `Cloneable` 和 `Serializable` 接口。

```java
public class ArrayList<E> extends AbstractList<E>
    implements List<E>, RandomAccess, Cloneable, java.io.Serializable {
    // 内部字段和方法定义
}
```

- `AbstractList`：提供了 `List` 接口的骨架实现。
- `List`：定义了列表数据结构的一般行为。
- `RandomAccess`：标识实现支持快速随机访问。
- `Cloneable`：支持对象的浅拷贝。
- `Serializable`：支持对象的序列化。

## 核心字段

```java
// 序列化版本 UID
private static final long serialVersionUID = 8683452581122892189L;

// 默认容量
private static final int DEFAULT_CAPACITY = 10;

// 空数组实例，避免默认大小的空数组占用内存
private static final Object[] EMPTY_ELEMENTDATA = {};

// 默认容量空数组
private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};

// 存储元素的数组
transient Object[] elementData;

// 实际元素个数
private int size;
```

## 构造方法

提供了多种构造方法，包括默认构造方法（初始容量为 10）、指定初始容量的构造方法、传入集合进行初始化的构造方法。

```java
// 默认构造方法
public ArrayList() {
    this.elementData = new Object[DEFAULT_CAPACITY];
}

// 指定初始容量的构造方法
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {
        this.elementData = new Object[initialCapacity];
    } else if (initialCapacity == 0) {
        this.elementData = EMPTY_ELEMENTDATA;
    } else {
        throw new IllegalArgumentException("Illegal Capacity: " + initialCapacity);
    }
}

// 传入集合进行初始化的构造方法
public ArrayList(Collection<? extends E> c) {
    elementData = c.toArray();
    if ((size = elementData.length) != 0) {
        // c.toArray 可能返回的不是 Object 类型的数组，需要进行类型转换
        if (elementData.getClass() != Object[].class)
            elementData = Arrays.copyOf(elementData, size, Object[].class);
    } else {
        // 初始化一个空数组
        this.elementData = EMPTY_ELEMENTDATA;
    }
}
```

> [!warning]
> 观察传入集合进行初始化的构造方法看出，只要实现 `Collection` 类的都可以作为入参。在通过转为数组以及拷贝 `Arrays.copyOf`
> 到 `Object[]`集合中再赋值给属性 `elementData` 。

- 测试示例：

```java

@Test
public void test() {
    List<Integer> list1 = Arrays.asList(1, 2, 3);
    System.out.println("通过数组转换：" + (list1.toArray().getClass() == Object[].class));

    ArrayList<Integer> list2 = new ArrayList<Integer>(Arrays.asList(1, 2, 3));
    System.out.println("通过集合转换：" + (list2.toArray().getClass() == Object[].class));
}
```

- 结果：

```bash
通过数组转换：false
通过集合转换：true
```

- 小结：

`public Object[] toArray()`返回的类型不一定就是`Object[]`，其类型取决于其返回的实际类型，毕竟 Object
是父类，它可以是其他任意类型。子类实现和父类同名的方法，仅仅返回值不一致时，默认调用的是子类的实现方法

- 造成原因：

Arrays.asList 使用的是：`Arrays.copyOf(this.a, size,(Class<? extends T[]>) a.getClass());`；
ArrayList 构造函数使用的是：`Arrays.copyOf(elementData, size, Object[].class);`

`Arrays.asList` 构建的集合特点：

- 不能赋值给 `java.util.ArrayList`
- 不能再添加元素
- 不能删除元素

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-extend.drawio.svg)
从以上的类继承体系图可以看出：

`Arrays.asList` 构建出来的 List 与 `new ArrayList` 得到的 List，最终根据多态找到的具体实现，不是同一个 ArrayList。Arrasys
下的 ArrayList 是一个私有类，只能通过 asList 使用，不能单独创建。

另外这个 ArrayList 不能添加和删除，主要是因为它的实现方式，可以参考 Arrays 类中，这是部分源码

```java
private static class ArrayList<E> extends AbstractList<E> implements RandomAccess, java.io.Serializable {
}
```

> [!TIP]
>
> *Arrays是一个工具包，里面还有一些非常好用的方法，例如；二分查找`Arrays.binarySearch`、排序`Arrays.sort`等*

## 初始容量

当 `ArrayList` 初始化时，如果未指定初始容量，则默认为 10。

```java
public ArrayList() {
    this.elementData = new Object[DEFAULT_CAPACITY];
}
```

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-init.drawio.svg)

## 扩容机制

当添加元素导致数组容量不足时，会进行扩容操作。新的容量为原容量的 1.5 倍。

```java
// 添加元素
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // 检查容量是否足够
    elementData[size++] = e;
    return true;
}

// 检查容量是否足够
private void ensureExplicitCapacity(int minCapacity) {
    modCount++;

    // overflow-conscious code
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);
}

// 扩容方法
private void grow(int minCapacity) {
    int oldCapacity = elementData.length;
    // 核心扩容逻辑：新容量 = 旧容量 + 旧容量右移 1 位，等价于扩容为原容量的 1.5 倍
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-grow.drawio.svg)

> [!tip]
> 当已知要填充多少个元素到 `ArrayList` 中时，为了提高性能，减少 `ArrayList`
> 中的拷贝操作，此时可以直接初始化一个预先设定好的长度。
>
> 例如：`List<String> list = new ArrayList<>(15)`;

## 元素添加

- `add(E e)` 方法直接在数组末尾添加元素。

```java
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // 检查容量是否足够
    elementData[size++] = e;
    return true;
}
```

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-add.drawio.svg)

- `add(int index, E element)` 方法在指定位置插入元素，需要将指定位置及之后的元素向后移动。

```java
public void add(int index, E element) {
    rangeCheckForAdd(index);

    ensureCapacityInternal(size + 1);
    System.arraycopy(elementData, index, elementData, index + 1,
        size - index);
    elementData[index] = element;
    size++;
}
```

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-add-position.drawio.svg)

## 元素删除

- `remove(int index)` 方法删除指定位置的元素，并将其后的元素向前移动。

```java
public E remove(int index) {
    rangeCheck(index);
    modCount++;
    E oldValue = elementData(index);
    int numMoved = size - index - 1;
    if (numMoved > 0)
        System.arraycopy(elementData, index + 1, elementData, index,
            numMoved);
    elementData[--size] = null; // clear to let GC do its work
    return oldValue;
}
```

![](https://raw.githubusercontent.com/HogskinKitty/assets-repository/master/cultivate-notes/collection-ArrayList-remove.drawio.svg)

- `remove(Object o)` 方法通过遍历数组找到匹配元素并删除。

```java
public boolean remove(Object o) {
    if (o == null) {
        for (int index = 0; index < size; index++)
            if (elementData[index] == null) {
                fastRemove(index);
                return true;
            }
    } else {
        for (int index = 0; index < size; index++)
            if (o.equals(elementData[index])) {
                fastRemove(index);
                return true;
            }
    }
    return false;
}

private void fastRemove(int index) {
    int numMoved = size - index - 1;
    if (numMoved > 0)
        System.arraycopy(elementData, index + 1, elementData, index,
            numMoved);
    elementData[--size] = null;
}
```

## 遍历方式

可以通过索引遍历、迭代器遍历等方式。例如：

```java
public void test() {
    List<String> list = new ArrayList<>();
    list.add("a");
    list.add("b");
    list.add("c");

    // for 循环索引遍历
    for (int i = 0; i < list.size(); i++) {
        // 操作元素
    }

    // 迭代器遍历
    Iterator<E> iterator = list.iterator();
    while (iterator.hasNext()) {
        // 操作元素
    }
}
```

## 总结

1. **动态调整大小**：

- ArrayList 会根据需要自动调整其容量。初始容量可以指定，如果不指定，则使用默认容量，并且在第一次添加元素时进行第一次扩容为默认容量
  10。当元素数量超过当前容量时，ArrayList 会继续进行扩容。

2. **基于数组实现**：

- ArrayList 内部是通过数组实现的，因此可以通过索引（index）快速访问元素，时间复杂度为 O(1)。

3. **有序性**：

- ArrayList 保持元素的插入顺序，元素可以通过索引进行访问和操作。

4. **随机访问**：

- 由于 ArrayList 基于数组实现，可以通过索引进行快速的随机访问。

5. **允许重复元素**：

- ArrayList 允许包含重复的元素。

6. **线程不安全**：

- ArrayList 不是线程安全的，如果在多线程环境中使用，必须手动同步或者使用线程安全的集合类，如 `Vector`
  或 `Collections.synchronizedList()`。

7. **扩容策略**：

- 当需要扩容时，ArrayList 会将当前容量增加 50% 即扩容为当前容量的 1.5 倍，具体计算逻辑为：newCapacity = oldCapacity + (
  oldCapacity >> 1)。

8. **元素类型**：

- ArrayList 是一个泛型类，可以存储任意类型的对象（包括基本类型的包装类）。

9. **快速插入和删除**：

- 对于在末尾添加和删除元素，ArrayList 的性能较好（时间复杂度为 O(1)）。但是，在中间位置插入或删除元素需要移动后续的元素，时间复杂度为
  O(n)。

10. **内存占用**：

- 由于需要保留一定的空余容量以便动态扩展，ArrayList 可能会比实际存储的数据占用更多的内存。

> [!tip]
> `ArrayList` 是 Java 中常用的动态数组实现，具有高效的随机访问性能，但在插入和删除元素时可能需要移动大量元素，性能相对较差。在实际应用中，需要根据具体场景选择合适的数据结构。
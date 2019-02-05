public class Array<E> {

  private E[] data;
  private int size;

  public Array(int capactiy) {
    data = (E[]) new Object[capactiy];
    size = 0;
  }

  public Array() {
    this(10);
  }

  public int getSize() {
    return size;
  }

  public int getCapacity() {
    return data.length;
  }

  public boolean isEmpty() {
    return size == 0;
  }

  // public void addLast(int e){
  // if(size == data.length)
  // throw new IllegalArgumentException("Add failed, Array is full.")
  // data[size] = e;
  // size ++;
  // }

  public void addLast(E e) {
    add(size, e);
  }

  public void addFirst(E e) {
    add(0, e);
  }

  public void add(int index, E e) {
    if (size == data.length)
      throw new IllegalArgumentException("Add failed, Array is full.");

    if (index < 0 || index > size)
      throw new IllegalArgumentException("Add failed, Require index >= 0.");

    for (int i = size - 1; i >= index; i--)
      data[i + 1] = data[i];
    data[index] = e;
    size++;
  }

  public E get(int index) {
    if (index < 0 || index >= size)
      throw new IllegalArgumentException("Get failed, Index is illegal");
    return data[index];
  }

  void set(int index, E e) {
    if (index < 0 || index >= size)
      throw new IllegalArgumentException("Get failed, Index is illegal");
    data[index] = e;
  }

  public boolean contains(E e) {
    for (int i = 0; i < size; i++) {
      if (data[i].equals(e))
        return true;
    }
    return false;
  }

  public int find(E e) {
    for (int i = 0; i < size; i++) {
      if (data[i].equals(e))
        return i;
    }
    return -1;
  }

  public E remove(int index) {
    if (index < 0 || index >= size)
      throw new IllegalArgumentException("Get failed, Index is illegal");
    E ret = data[index];
    for (int i = index; i < size - 1; i++)
      data[i] = data[i + 1];
    size--;
    data[size] = null;
    return ret;
  }

  public E removeFirst() {
    return remove(0);
  }

  public E removeLast() {
    return remove(size - 1);
  }

  public void removeElement(E e) {
    int index = find(e);
    if (index != -1)
      remove(index);
  }

  @Override
  public String toString() {
    StringBuilder res = new StringBuilder();
    res.append(String.format("Array: size = %d , capactiy = %d\n", size, data.length));
    res.append('[');
    for (int i = 0; i < size; i++) {
      res.append(data[i]);
      if (i != size - 1)
        res.append(", ");
    }
    res.append(']');
    return res.toString();
  }
}
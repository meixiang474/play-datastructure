class Stack<T> {
  array: T[]
  constructor(){
    this.array = []
  }
  getSize(): number{
    return this.array.length
  }
  push(e: T): void {
    this.array.push(e)
  }
  pop(): T {
    return this.array.pop()
  }
  peek(): T {
    return this.array[this.array.length - 1]
  }
  toString(): string {
    return this.array.toString()
  }
}

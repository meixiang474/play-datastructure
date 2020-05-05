class MyArray<T> {
  private data: T[]
  private size: number
  // 构造函数，传入数组的容量capacity构造Array, 默认为10
  constructor(capacity: number = 10){
    this.data = new Array(capacity).fill(null)
    this.size = 0
  }
  public getSize(): number{
    return this.size
  }
  public getCapacity(): number{
    return this.data.length
  }
  public isEmpty(): boolean {
    return this.data.length === 0
  }
  public addLast(e: T): void {
    this.add(this.size, e)
  }
  public addFirst(e: T): void {
    this.add(0, e)
  }
  public add(index: number, e: T): void{
    if(index < 0 || index > this.size) throw new Error('添加失败')
    if(this.size === this.data.length) this.resize(2 * this.data.length)
    for(let i = this.size - 1; i >= index; i--){
      this.data[i+1] = this.data[i]
    }
    this.data[index] = e
    this.size++
  }
  // 获取index索引位置的元素
  public get(index: number): T {
    if(index < 0 || index >= this.size) throw new Error('查询失败')
    return this.data[index]
  }
  // 修改index索引位置的元素e
  public set(index: number, e: T): void {
    if(index < 0 || index >= this.size) throw new Error('修改失败')
    this.data[index] = e
  }
  public contains(e: T): boolean {
    for(let i = 0; i < this.size; i++){
      if(this.data[i] === e) return true
    }
    return false
  }
  // 查找数组中元素e所在的索引，如果不存在元素e，则返回-1
  public find(e: T): number {
    for(let i = 0; i < this.size; i++){
      if(this.data[i] === e) return i
    }
    return -1
  }
  // 从数组中删除index位置的元素，返回删除的元素
  public remove(index: number): T {
    if(index < 0 || index >= this.size) throw new Error('删除失败')
    const res: T = this.data[index]
    for(let i = index; i < this.size-1; i++){
      this.data[i] = this.data[i+1]
    }
    this.size--
    this.data[this.size] = null
    if(this.size == Math.floor(this.data.length / 4) && Math.floor(this.data.length / 2) !== 0) this.resize(Math.floor(this.data.length / 2))
    return res
  }
  public removeFirst(): T {
    return this.remove(0)
  }
  public removeLast(): T {
    return this.remove(this.size - 1)
  }
  public removeElement(e: T): boolean {
    const index: number = this.find(e)
    if(index !== -1) {
      this.remove(index)
      return true
    }
    return false
  }
  public toString(): string{
    let res = `Array: size = ${this.size}, capacity: ${this.data.length} \n`
    res += '['
    for(let i = 0; i < this.size; i++){
      if(i === this.size - 1) {
        res+=`${this.data[i]}]` 
        break
      }
      res+= `${this.data[i]}, `
    }
    return res
  }
  private resize(newCapacity: number): void {
    const newData: T[] = new Array(newCapacity).fill(null)
    for(let i = 0; i < this.size; i++){
      newData[i] = this.data[i]
    }
    this.data = newData
  }
}

const ma = new MyArray<number>()

for(let i = 0; i < 20; i++){
  ma.addLast(i)
}
for(let i = 0; i < 19; i++){
  ma.removeLast()
}
console.log(ma.getCapacity())

console.log(ma.toString())

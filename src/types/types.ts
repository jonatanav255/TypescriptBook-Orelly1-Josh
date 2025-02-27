function add (a: number, b: number) : number {
  return a + b
}
console.log(add(2, 3))

interface IPerson {
  name: string
  age: number
}

const names: string[] = ['Alice', 'Bob', 'Charlie']

const person: IPerson = {
  name: 'Alice',
  age: 30
}

console.log(names)
console.log(person)

class Animal {
  constructor (private name: string) {
    this.name = name
  }
  speak (): void {
    console.log(this.name + ' makes a noise.')
  }
}

const dog = new Animal('Dog')
dog.speak()

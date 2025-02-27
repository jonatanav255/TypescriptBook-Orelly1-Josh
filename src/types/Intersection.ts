interface HasName {
  name: string
}

interface HasId {
  id: number
}

function describeEntity (entity: HasName & HasId): string {
  return `${entity.name} (#${entity.id})`
}

const entity = { name: 'EntityOne', id: 101 }

console.log(describeEntity(entity))

function formatValue (value: number | string) : string {
  if (typeof value === 'number') {
    return value.toFixed(2)
  } else {
    return value.toUpperCase()
  }
}
console.log(formatValue(3.14159))
console.log(formatValue('hello'))

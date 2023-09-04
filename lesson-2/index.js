const bookList = require('./array');

function mergeSort(array, nestingLevel = 0) {

  console.log(`Nesting Level: ${nestingLevel}`)
  console.log(array)

  if(array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, middle), nestingLevel + 1);
    const part2 = mergeSort(array.slice(middle, array.length), nestingLevel + 1);
    array = ordena(part1, part2);
  }

  return array;
}

function ordena(part1, part2) {
  let currentPositionPart1 = 0 
  let currentPositionPart2 = 0
  const result = []

  while (currentPositionPart1 < part1.length && currentPositionPart2 < part2.length) {
    let currentProductPart1 = part1[currentPositionPart1]
    let currentProductPart2 = part2[currentPositionPart2]

    if (currentProductPart1.preco < currentProductPart2.preco) {
      result.push(currentProductPart1)
      currentPositionPart1++
    } else {
      result.push(currentProductPart2)
      currentPositionPart2++
    }
  }

  return result.concat(currentPositionPart1 < part1.length
    ? part1.slice(currentPositionPart1)
    : part2.slice(currentPositionPart2))
}

console.log(mergeSort(bookList));
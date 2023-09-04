const bookList = require('./array')

function findMinor(pivot, array) {
  let minors = 0;

  for(let current = 0; current < array.length; current++) {
    let currentProduct = array[current]
    if (currentProduct.price < pivot.price) {
      minors++
    }
  }

  changePlace(array, array.indexOf(pivot), minors)
  return array
}

function changePlace(array, from, to) {
  const elem1 = array[from]
  const elem2 = array[to]

  array[to] = elem1
  array[from] = elem2
}

function splitOnPivot(array) {
  let pivot = array[Math.floor(array.length / 2)];
  findMinor(pivot, array);
  let minorsValue = 0;

  for(let analisando = 0; analisando < array.length; analisando++) {
    let current = array[analisando];
    if(current.price <= pivot.price && current !== pivot) {
      changePlace(array, analisando, minorsValue)
      minorsValue++
    }
  }

  return array;
}

console.log(splitOnPivot(bookList));
console.log(findMinor(bookList[2], bookList));

module.exports = changePlace;
const bookList = require('./array');
const changePlace = require('./findMinor');

function quickSort(array, left, right) {
  if (array.length > 1) {
    let currentIndex = partitions(array, left, right);
    if (left < currentIndex - 1) {
      quickSort(array, left, currentIndex - 1);
    }
    if (currentIndex < right) {
      quickSort(array, currentIndex, right)
    }
  }
  return array;
}

function partitions(array, left, right) {
  console.log('array', array)
  console.log('left, right', left, right)
  let pivo = array[Math.floor((left + right) / 2)]
  let currentLeft = left; //0
  let currentRight = right; //10

  while (currentLeft <= currentRight) {
    while (array[currentLeft].preco < pivo.preco) {
      currentLeft++
    }

    while (array[currentRight].preco > pivo.preco) {
      currentRight--
    }

    if (currentLeft <= currentRight) {
      changePlace(array, currentLeft, currentRight);
      currentLeft++;
      currentRight--;
    }
  }
  return currentLeft;
}

console.log(quickSort(bookList, 0, bookList.length - 1))




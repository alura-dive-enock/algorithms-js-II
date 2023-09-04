const bookList = require('./arrayOrderly');

function search(array, from, to, fetchedValue) {
  const middle = Math.floor((from + to) / 2);
  const current = array[middle];

  if (from > to) {
    return -1;
  }

  if (fetchedValue === current.price) {
    return middle;
  }

  if (fetchedValue < current.price) {
    return search(array, from, middle - 1, fetchedValue);
  }

  if (fetchedValue > current.price) {
    return search(array, middle + 1, to, fetchedValue);
  }
}

console.log(search(bookList, 0, bookList.length - 1, 60));





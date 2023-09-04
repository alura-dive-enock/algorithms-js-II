const { array1, array2 } = require('./arrays');

function joinLists(list1, list2) {
  let finalist = [];
  let currentListPosition1 = 0;
  let currentListPosition2 = 0;
  let current = 0;

  while (currentListPosition1 < list1.length && currentListPosition2 < list2.length) {
    let currentListProduct1 = list1[currentListPosition1];
    let currentListProduct2 = list2[currentListPosition2];

    if (currentListProduct1.preco < currentListProduct2.preco) {
      finalist[current] = currentListProduct1;
      currentListPosition1++;
    } else {
      finalist[current] = currentListProduct2;
      currentListPosition2++;
    }

    current++;
  }

  while (currentListPosition1 < list1.length) {
    finalist[current] = list1[currentListPosition1];
    currentListPosition1++;
    current++;
  }

  while (currentListPosition2 < list2.length) {
    finalist[current] = list2[currentListPosition2];
    currentListPosition2++;
    current++;
  }

  return finalist;
}

console.log(joinLists(array1, array2))
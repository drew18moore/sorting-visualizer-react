const selectionSort = (stateValues) => {
  let arr = [...stateValues];
  let moves = [];
  let temp;
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        moves.push([minIndex, j, "NEW MIN"]);
        minIndex = j;
      } else {
        moves.push([minIndex, j, "NO NEW MIN"]);
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    moves.push([i, minIndex, "SWAP"]);
  }
  return moves;
};

export default selectionSort;

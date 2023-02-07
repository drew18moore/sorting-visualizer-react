const bubbleSort = (stateValues) => {
  let arr = [...stateValues];
  let moves = []
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        moves.push([j, j+1, "SWAP"]);
      } else {
        moves.push([j, j+1, "NO SWAP"]);
      }
    }
  }
  return moves;
};

export default bubbleSort;

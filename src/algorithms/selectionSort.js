import sleep from "../utils/sleep";
import swap from "../utils/swap";

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

export const visualizeSelectionSort = async (moves, timeDelay, bars, setBars) => {
  let arr = [...bars];
  const barElements = document.getElementsByClassName("bar");
  for (let i = 0; i < moves.length; i++) {
    barElements[moves[i][0]].classList.add("current");
    barElements[moves[i][1]].classList.add("current");
    await sleep(timeDelay);
    if (moves[i][2] === "SWAP") {
      barElements[moves[i][0]].classList.remove("current");
      barElements[moves[i][1]].classList.remove("current");
      swap(arr, moves[i][0], moves[i][1]);
      setBars([...arr]);
      await sleep(timeDelay);
    } else {
      barElements[moves[i][0]].classList.remove("current");
      barElements[moves[i][1]].classList.remove("current");
      await sleep(timeDelay);
    }
  }
};

export default selectionSort;

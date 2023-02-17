import sleep from "../utils/sleep";
import swap from "../utils/swap";

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

export const visualizeBubbleSort = async (moves, timeDelay, bars, setBars) => {
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

export default bubbleSort;

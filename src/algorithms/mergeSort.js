import sleep from "../utils/sleep";

const mergeSort = (stateValues) => {
  if (stateValues.length <= 1) return stateValues;
  const moves = [];
  let arr = [...stateValues];
  const arrCopy = [...stateValues];
  split(arr, 0, arr.length - 1, arrCopy, moves);
  return moves;
};

const split = (arr, start, end, arrCopy, moves) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  split(arrCopy, start, mid, arr, moves);
  split(arrCopy, mid + 1, end, arr, moves);
  merge(arr, start, mid, end, arrCopy, moves);
};

const merge = (arr, start, mid, end, arrCopy, moves) => {
  let i = start;
  let j = mid + 1;
  let k = start;
  while (i <= mid && j <= end) {
    moves.push([i, j, "CURRENT"]);
    if (arrCopy[i] <= arrCopy[j]) {
      moves.push([k, arrCopy[i], "SET_VALUE"]);
      arr[k++] = arrCopy[i++];
    } else {
      moves.push([k, arrCopy[j], "SET_VALUE"]);
      arr[k++] = arrCopy[j++];
    }
  }
  while (i <= mid) {
    moves.push([i, i, "CURRENT"]);
    moves.push([k, arrCopy[i], "SET_VALUE"]);
    arr[k++] = arrCopy[i++];
  }
  while (j <= end) {
    moves.push([j, j, "CURRENT"]);
    moves.push([k, arrCopy[j], "SET_VALUE"]);
    arr[k++] = arrCopy[j++];
  }
};

export const visualizeMergeSort = async (moves, timeDelay, bars, setBars) => {
  let arr = [...bars];
  for (let i = 0; i < moves.length; i++) {
    const barElements = document.getElementsByClassName("bar");
    if (moves[i][2] === "CURRENT") {
      barElements[moves[i][0]].classList.add("current");
      barElements[moves[i][1]].classList.add("current");
      await sleep(timeDelay);
      barElements[moves[i][0]].classList.remove("current");
      barElements[moves[i][1]].classList.remove("current");
      await sleep(timeDelay);
    } else if (moves[i][2] === "SET_VALUE") {
      arr[moves[i][0]] = moves[i][1];
      setBars([...arr]);
      await sleep(timeDelay);
    }
  }
};

export default mergeSort;

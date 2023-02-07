import sleep from "../utils/sleep";
import arraysAreEqual from "../utils/arraysAreEqual";

const selectionSort = async (stateValues, setStateValues) => {
  let arr = [...stateValues];
  let test = [...arr].sort((a, b) => a - b);
  let temp;
  let minIndex;

  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    setStateValues([...arr]);
    await sleep(10);
  }
  // Test
  await console.log(arraysAreEqual(arr, test));
};

export default selectionSort;

import sleep from "../utils/sleep";
import arraysAreEqual from "../utils/arraysAreEqual";

const bubbleSort = async (stateValues, setStateValues) => {
  let arr = [...stateValues];
  let test = [...arr].sort((a, b) => a - b);
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setStateValues([...arr]);
        await sleep(2);
      }
    }
  }
  await console.log(arraysAreEqual(arr, test));
};

export default bubbleSort;

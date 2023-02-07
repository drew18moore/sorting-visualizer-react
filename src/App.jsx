import { useEffect, useState } from 'react';
import Header from './components/Header'
import Bars from './components/Bars'
import bubbleSort from './algorithms/bubbleSort';

const App = () => {
  const [chosenAlgo, setChosenAlgo] = useState("")
  const [numberOfValues, setNumberOfValues] = useState(100);
  const [values, setValues] = useState([]);

  const canSort = chosenAlgo !== "";

  useEffect(() => {
    randomize();
  }, [])

  const randomize = () => {
    setValues([...new Array(numberOfValues)].map(() => Math.floor(Math.random() * 100) + 1));
  }

  const sort = () => {
      switch(chosenAlgo) {
          case "Bubble Sort":
              console.log("Performing Bubble Sort");
              bubbleSort(values, setValues);
              break;
          case "Selection Sort":
              console.log("Performing Selection Sort");
              selectionSort();
              break;
          case "Quick Sort":
              console.log("Performing Quick Sort");
              break;
          case "Merge Sort":
              console.log("Performing Merge Sort");
              // Test
              let test = [...values].sort((a, b) => a - b);
              let result = mergeSort(values);
              console.log(arraysAreEqual(test, result));

              // TODO: properly animate merge sort
              setValues(result)
              break;
                      
      }
  }

  const selectionSort = async () => {
      let arr = [...values];
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
          setValues([...arr])
          await sleep(10);
      }
      // Test
      await console.log(arraysAreEqual(arr, test));
  }

  const mergeSort = (arr) => {
      if (arr.length <= 1)
          return arr;

      let mid = Math.floor(arr.length / 2)
      let leftArr = arr.slice(0, mid);
      let rightArr = arr.slice(mid, arr.length);

      return merge(mergeSort(leftArr), mergeSort(rightArr));
  }

  const merge = (leftArr, rightArr) => {
      let result = [];

      while (leftArr.length && rightArr.length) {
          if (leftArr[0] < rightArr[0]) {
              result.push(leftArr.shift());
          } else {
              result.push(rightArr.shift());
          }
      }

      return [...result, ...leftArr, ...rightArr]
  }

  const handleChange = event => {
    setChosenAlgo(event.value);
  }

  return (
    <div className="App">
      <Header onChange={handleChange} randomize={randomize} sort={sort} canSort={canSort} />
      <Bars values={values} randomize={randomize} sort={sort}/>
    </div>
  );
}

export default App;

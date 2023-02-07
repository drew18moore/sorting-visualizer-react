import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [chosenAlgo, setChosenAlgo] = useState("");
  const [data, setData] = useState({
    num: 100,
    values: []
  })

  useEffect(() => {
    randomize();
  }, [])

  const randomize = () => {
    setData(prevData => {
        return {
            ...prevData,
            values: [...new Array(data.num)].map(() => Math.floor(Math.random() * 100) + 1)
        }
    });
  }

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const sort = () => {
      switch(chosenAlgo) {
          case "Bubble Sort":
              console.log("Performing Bubble Sort");
              bubbleSort();
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
              let test = [...data.values].sort((a, b) => a - b);
              let result = mergeSort(data.values);
              console.log(arraysAreEqual(test, result));

              // TODO: properly animate merge sort
              setData((prevData) => {
                  return {
                      ...prevData,
                      values: result
                  }
              })
              
              break;
                      
      }
  }

  const bubbleSort = async() => {
      let arr = [...data.values];
      let test = [...arr].sort((a, b) => a - b);
      let temp;
      
      for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length - i - 1; j++) {
              if (arr[j] > arr[j+1]) {
                  temp = arr[j]
                  arr[j] = arr[j+1]
                  arr[j+1] = temp
                  setData((prevData) => {
                      return {
                          ...prevData,
                          values: arr
                      }
                  })
                  await sleep(10);
              } 
          }
      }
      await console.log(arraysAreEqual(arr, test));
  }

  const selectionSort = async() => {
      let arr = [...data.values];
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
          setData((prevData) => {
              return {
                  ...prevData,
                  values: arr
              }
          })
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

  const arraysAreEqual = (a, b) => {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
      }
      return true;
  }

  const handleChange = event => {
    setChosenAlgo(event.value);
  }

  return (
    <div className="App">
      <Header onChange={handleChange} randomize={randomize} sort={sort} />
      <Main vals={data.values} randomize={randomize} sort={sort}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Bars from "./components/Bars";
import arraysAreEqual from "./utils/arraysAreEqual";
import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import mergeSort from "./algorithms/mergeSort";

const App = () => {
  const [chosenAlgo, setChosenAlgo] = useState("");
  const [numberOfValues, setNumberOfValues] = useState(100);
  const [values, setValues] = useState([]);

  const canSort = chosenAlgo !== "";

  useEffect(() => {
    randomize();
  }, []);

  const randomize = () => {
    setValues(
      [...new Array(numberOfValues)].map(
        () => Math.floor(Math.random() * 100) + 1
      )
    );
  };

  const sort = () => {
    switch (chosenAlgo) {
      case "Bubble Sort":
        console.log("Performing Bubble Sort");
        bubbleSort(values, setValues);
        break;
      case "Selection Sort":
        console.log("Performing Selection Sort");
        selectionSort(values, setValues);
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
        setValues(result);
        break;
    }
  };

  const handleChange = (event) => {
    setChosenAlgo(event.value);
  };

  return (
    <div className="App">
      <Header
        onChange={handleChange}
        randomize={randomize}
        sort={sort}
        canSort={canSort}
      />
      <Bars values={values} randomize={randomize} sort={sort} />
    </div>
  );
};

export default App;

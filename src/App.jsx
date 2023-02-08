import { useEffect, useState } from "react";
import Header from "./components/Header";
import Bars from "./components/Bars";
import sleep from "./utils/sleep";
import swap from "./utils/swap";
import arraysAreEqual from "./utils/arraysAreEqual";
import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
import mergeSort from "./algorithms/mergeSort";

const App = () => {
  const [chosenAlgo, setChosenAlgo] = useState("");
  const [numberOfValues, setNumberOfValues] = useState(10);
  const [bars, setBars] = useState([]);

  const canSort = chosenAlgo !== "";

  useEffect(() => {
    randomize();
  }, []);

  const randomize = () => {
    setBars(
      [...new Array(numberOfValues)].map(
        (bar) => ({
            value: Math.floor(Math.random() * 100) + 1,
            class: ""
        })
      )
    );
  };

  const visualize = async (moves) => {
    let arr = [...bars]
    console.log(arr)
    for (let i = 0; i < moves.length; i++) {
        if (moves[i][2] === "SWAP") {
            swap(arr, moves[i][0], moves[i][1])
            setBars([...arr])
            await sleep(1000)
        } else {
          await sleep(1000)
        }
    }
    console.log(arr);
  }

  const sort = () => {
    let values;
    let moves;
    switch (chosenAlgo) {
      case "Bubble Sort":
        console.log("Performing Bubble Sort");
        values = bars.map(bar => bar.value)
        moves = bubbleSort(values);
        console.log(moves);
        visualize(moves)
        break;
      case "Selection Sort":
        console.log("Performing Selection Sort");
        values = bars.map(bar => bar.value)
        moves = selectionSort(values);
        console.log(moves)
        visualize(moves)
        break;
      case "Quick Sort":
        console.log("Performing Quick Sort");
        break;
      case "Merge Sort":
        console.log("Performing Merge Sort");
        // Test
        let test = [...bars].sort((a, b) => a - b);
        let result = mergeSort(bars);
        console.log(arraysAreEqual(test, result));

        // TODO: properly animate merge sort
        setBars(result);
        break;
    }
  };

  return (
    <div className="App">
      <Header
        setChosenAlgo={setChosenAlgo}
        randomize={randomize}
        sort={sort}
        canSort={canSort}
      />
      <Bars values={bars} randomize={randomize} sort={sort} />
    </div>
  );
};

export default App;

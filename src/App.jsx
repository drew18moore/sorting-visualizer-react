import { useEffect, useState, useMemo } from "react";
import Header from "./components/Header";
import Bars from "./components/Bars";
import bubbleSort, { visualizeBubbleSort } from "./algorithms/bubbleSort";
import selectionSort, { visualizeSelectionSort } from "./algorithms/selectionSort";
import mergeSort, { visualizeMergeSort } from "./algorithms/mergeSort";

const App = () => {
  const [chosenAlgo, setChosenAlgo] = useState("");
  const [numberOfBars, setNumberOfBars] = useState(50);
  const [bars, setBars] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const [speed, setSpeed] = useState(50);
  const delay = useMemo(() => (-999 / 99) * speed + 1010, [speed]);

  const canSort = chosenAlgo !== "";

  useEffect(() => {
    randomize();
  }, [numberOfBars]);

  const randomize = () => {
    setBars(
      [...new Array(numberOfBars)].map(
        () => Math.floor(Math.random() * 100) + 1
      )
    );
  };

  const sort = async () => {
    setIsRunning(true);
    let moves;
    switch (chosenAlgo) {
      case "Bubble Sort":
        console.log("Performing Bubble Sort");
        moves = bubbleSort(bars);
        await visualizeBubbleSort(moves, delay, bars, setBars);
        break;
      case "Selection Sort":
        console.log("Performing Selection Sort");
        moves = selectionSort(bars);
        await visualizeSelectionSort(moves, delay, bars, setBars);
        break;
      case "Merge Sort":
        console.log("Performing Merge Sort");
        moves = mergeSort(bars);
        await visualizeMergeSort(moves, delay, bars, setBars);
        break;
    }
    setIsRunning(false);
  };

  return (
    <div className="App">
      <Header
        setChosenAlgo={setChosenAlgo}
        randomize={randomize}
        sort={sort}
        canSort={canSort}
        setSpeed={setSpeed}
        setNumberOfBars={setNumberOfBars}
        isRunning={isRunning}
      />
      <Bars values={bars} randomize={randomize} sort={sort} />
    </div>
  );
};

export default App;

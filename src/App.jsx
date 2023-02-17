import { useEffect, useState, useMemo } from "react";
import Header from "./components/Header";
import Bars from "./components/Bars";
import sleep from "./utils/sleep";
import swap from "./utils/swap";
import bubbleSort from "./algorithms/bubbleSort";
import selectionSort from "./algorithms/selectionSort";
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

  const visualize = async (moves, timeDelay) => {
    let arr = [...bars];
    const barElements = document.getElementsByClassName("bar");
    console.log(barElements);
    console.log(arr);
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
    console.log(arr);
  };

  const sort = async () => {
    setIsRunning(true);
    let moves;
    switch (chosenAlgo) {
      case "Bubble Sort":
        console.log("Performing Bubble Sort");
        moves = bubbleSort(bars);
        await visualize(moves, delay);
        break;
      case "Selection Sort":
        console.log("Performing Selection Sort");
        moves = selectionSort(bars);
        await visualize(moves, delay);
        break;
      case "Quick Sort":
        console.log("Performing Quick Sort");
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

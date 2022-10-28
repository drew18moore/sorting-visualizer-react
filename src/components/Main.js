import { useEffect, useState } from 'react';
import '../Main.css'
import Bar from './Bar';

function Main(props) {
    const [data, setData] = useState({
        num: 100,
        values: [12, 4, 59, 47, 94, 17]
    });

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
        switch(props.algo) {
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

    const arraysAreEqual = (a, b) => {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    const barElements = data.values.map((val, i) => {
        return (
            <Bar value={val} key={i}/>
        )
    })

    return (
        <main>
            <div id="bars">
                {barElements}
            </div>
            <form id="buttons-form">
                <button type="button" onClick={randomize}>Randomize</button>
                <button type="button" onClick={sort}>Sort</button>
            </form>
        </main>
    );
}

export default Main;

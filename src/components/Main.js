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
            case "Quick Sort":
                console.log("Performing Quick Sort");
                break;
            case "Merge Sort":
                console.log("Performing Merge Sort");
                break;
            case "Bubble Sort":
                console.log("Performing Bubble Sort");
                bubbleSort();
                break;
                        
        }
    }

    const bubbleSort = async() => {
        console.log(data.values);
        console.log("Bubble Sort");
        let arr = [...data.values];
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
                    await sleep(1);
                } 
            }
        }
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

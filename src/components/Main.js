import { useEffect, useState } from 'react';
import '../Main.css'
import Bar from './Bar';
import {bubbleSort} from '../SortingAlgorithms';

function Main() {
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
                <button type="button" onClick={() => bubbleSort(data.values)}>Sort</button>
            </form>
        </main>
    );
}

export default Main;
